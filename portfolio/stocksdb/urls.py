from django.urls import path
from . import views

urlpatterns = [
    path('<str:tid>', views.ticker, name='ticker'),
    path('', views.home, name="home"),
]