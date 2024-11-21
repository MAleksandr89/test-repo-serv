from rest_framework.serializers import ModelSerializer
from .models import MainSkills, HardAndSoftSkills
from django.contrib.auth.models import User


class MainSkillsSerializer(ModelSerializer):
    class Meta:
        model = MainSkills
        fields = '__all__'

class HardAndSoftSkillsSerializer(ModelSerializer):
    class Meta:
        model = HardAndSoftSkills
        fields = '__all__'

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'username', 'last_login', 'is_superuser', 'is_active']