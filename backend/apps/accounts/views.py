from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import authenticate, get_user_model

from .serializers import UserSerializer, SchoolSerializer
from .permissions import IsManager

User = get_user_model()
class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)

        if user is None:
            return Response(
                {"detail": "بيانات الدخول غير صحيحة"},
                status=status.HTTP_401_UNAUTHORIZED
            )

        refresh = RefreshToken.for_user(user)
        return Response({
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "user": UserSerializer(user).data,
        })

class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response(UserSerializer(request.user).data)

class SchoolView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        school = request.user.school
        if not school:
            return Response(
                {"detail": "لا توجد مدرسة مرتبطة"},
                status=status.HTTP_404_NOT_FOUND
            )
        return Response(SchoolSerializer(school).data)

    def patch(self, request):
        school = request.user.school
        if not school:
            return Response(
                {"detail": "لا توجد مدرسة مرتبطة"},
                status=status.HTTP_404_NOT_FOUND
            )
        serializer = SchoolSerializer(school, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        