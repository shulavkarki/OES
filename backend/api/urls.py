from rest_framework import routers
from django.urls import path, include
from . import views
from .views import current_user

router = routers.DefaultRouter()
router.register(r'exams', views.ExamsViewset)
router.register(r'qna', views.QnaViewset)
router.register(r'user', views.UserViewSet, ) 

urlpatterns = [
    path('', include(router.urls)),
    path('current_user/', current_user),
]
