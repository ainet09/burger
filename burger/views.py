
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views import generic
from .models import Product, Drinks
from .serializer import ProductSerializer, DrinksSerializer
# Create your views here.



class ProductView(APIView):
    def get(self, request):
        movies = Product.objects.filter(draft=False)
        serializer = ProductSerializer(movies, many=True)
        return Response(serializer.data)


class DrinksView(APIView):
    def get(self, request):
        movies = Drinks.objects.filter(draft=False)
        serializer = DrinksSerializer(movies, many=True)
        return Response(serializer.data)

class Homeview(generic.TemplateView):
    template_name = 'templates/home.html'


