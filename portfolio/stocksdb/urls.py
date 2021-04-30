from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('aboutme.html', views.aboutme, name='aboutme'),
    path('addstock.html', views.addstock, name='addstock'),
]