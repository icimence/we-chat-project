from django.urls import path

from recommend import views

urlpatterns = [
    # 使用说明：使用GET方法访问http://localhost:8000/api/v1.0/rec/recommend?Tag=计算机.4
    # 可以得到计算机分类的4本书可以使用中文也可以使用编码，已经做了兼容
    path('recommend', views.getRecommend, name='Tag')

]