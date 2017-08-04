from rest_framework import serializers
from task.models import Task

class TaskSerializer(serializers.ModelSerializer):
    deadline = serializers.DateField()
    class Meta:
        model = Task
        fields = '__all__'
