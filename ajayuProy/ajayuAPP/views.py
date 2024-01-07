from django.shortcuts import render
from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Articulos

# Create your views here.

class ArticulosView(viewsets.ModelViewSet):

		serializer_class = TaskSerializer
		queryset = Articulos.objects.all()
