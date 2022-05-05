from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "password", "first_name", "last_name", "favorite_listings"]
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
        fields = ["id", "title", "is_boondock", "owner", "price", "location_lng", "location_lat", "address", "amenities", "rating"]

    rating = serializers.SerializerMethodField(read_only=True)

    def get_rating(self, instance):
        return instance.get_listing_rating(instance)

class AmenitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Amenity
        fields = ["id", "name"]

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["id", "traveler", "listing", "review_text"]

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = ["id", "traveler", "listing", "date_start", "date_end", "total"]

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ["id", "line_1", "line_2", "city", "state", "zip", "country"]
