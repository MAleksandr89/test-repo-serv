from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import SkillsViewSet
from .views import MainView

router = SimpleRouter()
router.register('api/skills', SkillsViewSet)


urlpatterns = [
    path('', MainView.as_view(), name='home'),
]

urlpatterns += router.urls