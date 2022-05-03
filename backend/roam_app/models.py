from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator

class User(AbstractUser):
    #username needs to be here for django admin page functionality
    username = models.CharField(default='username', max_length=50, null=True, blank=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(verbose_name='email address',max_length=255,unique=True)
    favorite_listings = models.ManyToManyField('Listing', related_name="favorite_users", blank=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name'] 

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

class Listing(models.Model):
    title = models.CharField(max_length=255)
    is_boondock = models.BooleanField(default=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='listings', null=True, blank=True)
    price = models.IntegerField(default=0, validators=[MinValueValidator(0)])
    location = models.CharField(max_length=255) #TODO: need to refine this
    address = models.ForeignKey("Address", on_delete=models.CASCADE, related_name='listings', null=True, blank=True)
    amenities = models.ManyToManyField("Amenity", related_name='listings', blank=True)
    rating = models.DecimalField(max_digits=2, decimal_places=1, blank=True, null=True)
    #nearby destinations
    #availability
    #nearby parks

    def __str__(self):
        return f"{self.owner.first_name}'s {self.title}"
    
class Amenity(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.name}"

class Review(models.Model):
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE, related_name='reviews')
    traveler = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews') #would like to set this ondelete to Null or some other value
    review_text = models.TextField()

    def __str__(self):
        return f"{self.id} {self.traveler.first_name} {self.listing.title} review"

#TODO:  date valation on reservations (cant be in past, end date after start date)
class Reservation(models.Model):
    traveler = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reservations')
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE, related_name='reservations')
    date_start = models.DateField(auto_now=False, auto_now_add=False)
    date_end = models.DateField(auto_now=False, auto_now_add=False)
    total = models.DecimalField(max_digits=7, decimal_places=2)

    def __str__(self):
        return f"{self.id} {self.traveler.first_name} {self.listing.title} reservation"

class Address(models.Model):
    line_1 = models.CharField(max_length=255)
    line_2=  models.CharField(max_length=255, blank=True, null=True)
    city =  models.CharField(max_length=255)
    state =  models.CharField(max_length=2)
    zip = models.CharField(max_length=5)
    country = models.CharField(max_length=255)

    def __str__(self):
        return f"Address {self.line_1}"







