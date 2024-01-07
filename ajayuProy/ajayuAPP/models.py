from django.db import models

# Create your models here.
class Articulos (models.Model):
    #aqui creamos los campor para nuestra tabla
    Categoria = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    imagen = models.ImageField(upload_to="articulos")
    Color = models.CharField(max_length=20, blank=True)
    Largo = models.CharField(max_length=20, blank=True)
    Circunsferencia = models.CharField(max_length=20, blank=True)    
    def __str__(self):
	    return self.name 
