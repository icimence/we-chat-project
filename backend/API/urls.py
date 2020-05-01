from django.conf.urls import url
from . import views

urlpatterns = [
    url('backend', views.backend)
]
