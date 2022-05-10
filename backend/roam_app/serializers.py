from venv import create
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import *
from statistics import mean

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "password", "first_name", "last_name", "favorite_listings", "owned_listings"]
        extra_kwargs = {
            'password': {'write_only': True},
        }

    # Additional functionality added: when creating users, hash the plaintext password before saving object
    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)
    
    # Additional functionality added: when updating users, hash the plaintext password before saving object
    def update(self, instance, validated_data):
        if "password" in validated_data:
            validated_data["password"] = make_password(validated_data["password"])
        return super().update(instance, validated_data)

class ListingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Listing
        fields = ["id", "title", "is_boondock", "owner", "price", "location_lng", "location_lat", "address", "amenities", "rating", "dates_booked", "description","image"]

    dates_booked = serializers.SerializerMethodField(read_only=True)

    def get_dates_booked(self, instance):
        return instance.get_listing_dates_booked(instance)

class AmenitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Amenity
        fields = ["id", "name"]

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["id", "traveler", "listing", "review_text", "review"]

    def create(self, validated_data):
        listing = validated_data['listing']
        listing_reviews = list(Review.objects.filter(listing=listing.id).values_list('review', flat=True))
        rate = validated_data['review']
        listing_reviews.append(rate)
        listing.rating = mean(listing_reviews)
        listing.save()
        return super().create(validated_data)

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = ["id", "traveler", "listing", "date_start", "date_end", "total", "listing_name"]
    listing_name = serializers.SerializerMethodField(read_only=True)

    def get_listing_name(self, instance):
        return instance.get_listing_name(instance)

    def create(self, validated_data):
        # validates that the dates booked do not conflict with current bookings
        dates_booked = list(Reservation.objects.filter(listing=validated_data['listing'].id).values('date_start', 'date_end'))
        start = validated_data['date_start']
        end = validated_data['date_end']
        for dates in dates_booked:
            if start > dates['date_start'] and start < dates['date_end']:
                raise Exception('dates not available')
            elif end >= dates['date_start'] and end <= dates['date_end']:
                raise Exception('dates not available')
        return super().create(validated_data)

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ["id", "line_1", "line_2", "city", "state", "zip", "country"]
