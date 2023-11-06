from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=255)
    img = models.ImageField()
    price = models.CharField(max_length=255)
    descriptions = models.CharField(max_length=255)
    calories = models.CharField(max_length=222)


    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = ""
        verbose_name_plural = ""


class Drinks(models.Model):
    name = models.CharField(max_length=255)
    img = models.ImageField()
    price = models.CharField(max_length=255)
    descriptions = models.CharField(max_length=255)
    calories = models.CharField(max_length=222)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = ""
        verbose_name_plural = ""
        
