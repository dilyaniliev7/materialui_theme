from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import *
from rest_framework.response import Response
from .models import *

class ThemesViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Themes.objects.all()
    serializer_class = ThemesSerializer

    def list(self, request):
        queryset = Themes.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)


class ActiveThemeViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = ActiveTheme.objects.all()
    serializer_class = ActiveThemeSerializer

    def list(self, request):
        queryset = ActiveTheme.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)