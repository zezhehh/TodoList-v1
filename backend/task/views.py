from django.shortcuts import render
from django.http import HttpResponse
from .models import Task
from rest_framework import viewsets
from rest_framework.views import APIView
# from rest_framework import status, generics
from .serializers import TaskSerializer
from rest_framework.response import Response
# from rest_framework.decorators import permission_classes
# from rest_framework.permissions import IsAdminUser
# Create your views here.
# class TaskList(APIView):
#     def get(self, request, format=None):
#         task = Task.objects.all().order_by('-created_at')
#         serializer = TaskSerializer(task, many=True)
#         return Response(serializer.data)
#     # @permission_classes((IsAdminUser,))
#     def post(self, request, format=None):
#         # user = request.user
#         serializer = TaskSerializer(data=request.data,context={})
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_REQUEST)
#     serializer_class = TaskSerializer
class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    search_fields = ('title', 'text', 'priority', 'deadline', 'done')
    filter_fields = ('priority', 'deadline', 'done')
    def myview(_request):
        response = HttpResponse(json.dumps({"key": "value", "key2": "value"}))
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "*"
        return response
