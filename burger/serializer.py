from .models import Product, Drinks
from rest_framework import serializers


class ProductSerializer(serializers.Serializer):
    class Meta:
        model = Product
        fields = "__all__"


class DrinksSerializer(serializers.Serializer):
    class Meta:
        model = Drinks
        fields = "__all__"
