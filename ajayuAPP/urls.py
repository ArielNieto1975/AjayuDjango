from django.urls import path , include
from rest_framework import routers 
from ajayuAPP import views
from rest_framework.documentation import include_docs_urls

# api versioning
router = routers.DefaultRouter()
router.register(r'Articulos', views.ArticulosView, 'Articulos')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="ajayuAPP API"))
]


#todo este codigo esta creando por defecto las rutas GET, POST, PUT, DELETE  