"""Project Name URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .api.views import index_view

router = routers.DefaultRouter()

urlpatterns = [
    path('', index_view, name='index'),
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
