from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register("products-set", ProductView, basename='products')
router.register("drinks-set", DrinksView, basename='drinks')

urlpatterns = []
urlpatterns += router.urls

router.register('actor-modelset', api.ActorModelViewSet, basename='actor')