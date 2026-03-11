from django.urls import path
from .views import HelloApiView # 引入剛剛寫好的 View

urlpatterns = [
    # 將 /myhello/ 路徑對應到 HelloApiView
    path('myhello/', HelloApiView.as_view(), name='myhello'),
]