# hw1/urls.py
from django.contrib import admin
from django.urls import path
from course import views  # 引入我們剛剛寫的 views

urlpatterns = [
    path('admin/', admin.site.urls),
    # 對應作業要求的網址 (不加斜線)
    path('courselist', views.courselist),
    path('addcourse', views.addcourse),
]