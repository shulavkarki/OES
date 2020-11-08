from django.db import models
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class Exams(models.Model):
    exam_name = models.TextField(max_length= 30, )
    exam_marks = models.IntegerField(blank = False,)
    #in minutes
    exam_time = models.IntegerField(blank = False)
    no_question = models.IntegerField(blank = False)
    exam_date = models.DateField(auto_now=False, auto_now_add=False, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.exam_name

    

class Qna(models.Model):
    question = models.CharField(max_length=100, blank=False,)
    mark = models.IntegerField(blank=False, default=0)
    exam = models.ForeignKey(Exams, on_delete=models.CASCADE,)

    def __str__(self):
        return self.question


