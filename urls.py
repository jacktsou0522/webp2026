from django.contrib import admin
from django.urls import path
from django.http import HttpResponse

# 這裡是處理 API 邏輯的地方
def my_hello(request):
    # 取得網址中 ?name= 後面的值，如果沒有提供，預設是 "CGU"
    name = request.GET.get('name', 'CGU')
    return HttpResponse(f"Hello {name}")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('myhello/', my_hello),  # 加上這一行，Django 就能找到 /myhello/ 了
]