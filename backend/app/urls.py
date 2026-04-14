from django.contrib import admin
from django.urls import path
from .views import *
from frest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('themes', ThemesViewSet, basename='themes')
router.register('activetheme', ActiveThemeViewSet, basename='activetheme')

urlpatterns = router.urls