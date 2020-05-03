from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('auth/', include('authorization.urls')),
    path('rec/', include('recommend.urls'))
]
