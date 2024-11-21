from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import ListView
from django.contrib.auth.models import User
from django.contrib.auth.mixins import LoginRequiredMixin
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .models import MainSkills, HardAndSoftSkills
from .serializers import MainSkillsSerializer, HardAndSoftSkillsSerializer, UserSerializer



class MainView(LoginRequiredMixin, ListView):
    model = MainSkills
    context_object_name = 'skills'
    template_name = 'main/main.html'
    login_url = reverse_lazy('login')


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Основная страница'
        return context
    

class SkillsViewSet(ModelViewSet):
    queryset = MainSkills.objects.all()
    serializer_class = MainSkillsSerializer

    def list(self, request, *args, **kwargs):
        main_skills_data = MainSkillsSerializer(MainSkills.objects.all(), many=True).data
        hard_and_soft_skills_data = HardAndSoftSkillsSerializer(HardAndSoftSkills.objects.all(), many=True).data
        user = UserSerializer(User.objects.all(), many=True).data

        response_data = {
            "skills": main_skills_data,
            "hard_and_soft_skills": hard_and_soft_skills_data,
            "users": user
        }
        
        return Response(response_data)