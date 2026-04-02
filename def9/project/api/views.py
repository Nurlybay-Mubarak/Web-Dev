from django.shortcuts import render
from .serializers import MovieSerializer
from .models import Movie
# Create your views here.

from rest_framework import viewsets

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer


