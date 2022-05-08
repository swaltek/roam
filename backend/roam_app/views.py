from itertools import count
from urllib import request
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .models import *
from rest_framework.permissions import AllowAny, IsAuthenticated
from .views_auth import *
import operator
from django.db.models import Q
from functools import reduce

from geopy.distance import geodesic

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.action in ['create']:
            permission_classes = [AllowAny]
        else: 
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

class ListingViewSet(ModelViewSet):
    serializer_class = ListingSerializer

    def get_queryset(self):
        if self.request.query_params:
            query_params = self.request.query_params;
            filtr = query_params.get('filter')
            if filtr == 'search':
                return Listing.objects.filter(reduce(operator.or_, (Q(title__icontains=query_params.get(x)) for x in list(query_params))))
            elif filtr == 'popular':
                return Listing.objects.filter(rating__gte=4)[0:10]
            elif filtr == 'park':
                park = query_params.get('park')
                return Listing.objects.filter(near_park__icontains=park)
            elif filtr == 'distance':
                # TODO
                search_point = (query_params.get('point_lng'), query_params.get('point_lat'))
                distance = query_params.get('distance')
                listings =  Listing.objects.all()

                listings_matching_query = []
                for listing in listings:
                    # TODO below line throwing ERROR, not sure how to get listing out of queryset
                    listing_point = (listing.location_lng, listings.location_lat)

                    print( geodesic(search_point, listing_point).miles )
                    if geodesic(search_point, listing_point).miles <= distance:
                        listings_matching_query.append(listing)
            else: 
                return Listing.objects.all()
        else: 
            return Listing.objects.all()

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [AllowAny]
        else: 
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

    def create(self, request, *args, **kwargs):
        request.data['owner'] = request.user.id
        return super().create(request, *args, **kwargs)

class AmenityViewSet(ModelViewSet):
    queryset = Amenity.objects.all()
    serializer_class = AmenitySerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [AllowAny]
        else: 
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

class ReviewViewSet(ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [AllowAny]
        else: 
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

class ReservationViewSet(ModelViewSet):
    serializer_class = ReservationSerializer

    def get_queryset(self):
        return Reservation.objects.filter(traveler = self.request.user.id)

    def get_permissions(self):
        permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]
    
    def create(self, request, *args, **kwargs):
        if 'traveler' not in request.data:
            request.data['traveler'] = request.user.id
        return super().create(request, *args, **kwargs)

class AddressViewSet(ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [AllowAny]
        else: 
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]
