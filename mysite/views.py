from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class HelloApiView(APIView):
    def get(self, request):
        # 1. 透過 request.query_params 取得網址列的參數
        # 如果網址是 /myhello/?name=cj，這裡就會抓到 'cj'
        # 如果網址只有 /myhello/，抓不到東西會回傳 None
        name = request.query_params.get('name')

        # 2. 判斷是否有成功取得 name 參數
        if name is not None:
            # 情況 A：有參數，回傳 200 OK 與打招呼字串
            return Response(
                {"data": f"Hello{name}"}, 
                status=status.HTTP_200_OK
            )
        else:
            # 情況 B：沒有參數，回傳 400 Bad Request 與錯誤訊息
            return Response(
                {"res": "parameter: name is None"}, 
                status=status.HTTP_400_BAD_REQUEST
            )