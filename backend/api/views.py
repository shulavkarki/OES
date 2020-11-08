from .models import Exams, Qna
from .serializers import ExamSerializer, QnaSerializer, UserSerializer, UserSerializerWithToken
from rest_framework.decorators import action
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication
# Create your views here.


@action(detail=True, methods= ['GET'])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializerWithToken
    permission_classes = (AllowAny,)

    @action(detail=True, methods=['POST'])
    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    



class ExamsViewset(viewsets.ModelViewSet):
    queryset = Exams.objects.all()
    serializer_class = ExamSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)

    @action(detail=True, methods= ['GET'])
    def qnadetail(self, request, pk=None ):
        exam = Exams.objects.get(id=pk)
        qnass = Qna.objects.filter(exam=exam.id)
        serializer = QnaSerializer(qnass, many=True)
        response = {'message': 'Question Detail', 'result': serializer.data}
        return Response(response, status = status.HTTP_200_OK)


    @action(detail=True, methods = ['POST'])
    def add_quest(self, request, pk=None):
        if 'question' and 'mark' in request.data:

            exam = Exams.objects.get(id=pk)
            question = request.data['question']
            mark = request.data['mark']
            try:
                quest = Qna.objects.get(exam=exam.id)
                quest.question = question
                quest.mark = mark
                quest.save()
                serializer = QnaSerializer(quest, many=True)               
                response = {'message': 'Question updated', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)
                             
            except:
                quest = Qna.objects.create(exam=exam, question=question, mark=mark)
                serializer = QnaSerializer(quest)
                response = {'message': 'Question created', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)

        else:
            response = {'message': 'You need to provide question and its associat marks'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


class QnaViewset(viewsets.ModelViewSet):
    queryset = Qna.objects.all()
    serializer_class = QnaSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)