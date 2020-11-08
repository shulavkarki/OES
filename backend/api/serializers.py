from rest_framework import serializers
from .models import Exams, Qna
from django.contrib.auth.models import User
from rest_framework_jwt.settings import api_settings
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username',)
        # extra_kwargs = {'password': {'write_only': True, 'required': True}}

#handling signups
class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password')

class ExamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exams
        fields = ['id','user','exam_name', 'exam_marks', 'exam_time', 'no_question', 'exam_date',]



class QnaSerializer(serializers.ModelSerializer):
    #id = serializers.IntegerField(required=False)
    class Meta:
        model = Qna
        fields = ['id', 'question','mark','exam']


