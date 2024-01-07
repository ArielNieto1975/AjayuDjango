from rest_framework import serializers
from .models import Articulos

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articulos
        # fields = ('id', 'title', 'description', 'done')
        fields = '__all__'