from rest_framework import parsers, renderers
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.viewsets import ViewSet, ModelViewSet

from .serializers import (
    AuthTokenSerializer,
    RegisterSerializer
)


class Login(APIView):
    """
        user authentication endpoint 
        with token auth method
    """

    authentication_classes = ()
    permission_classes = (AllowAny,)
    parser_classes = (
        parsers.FormParser, 
        parsers.MultiPartParser,
        parsers.JSONParser
    )
    render_classes = (renderers.JSONRenderer,)
    serializer_class = AuthTokenSerializer

    def post(self, request):
        serializer = self.serializer_class(
            data=request.data, request=request
        )
        serializer.is_valid(raise_exception=True)

        return Response({
            'token': serializer.get_token().key
        })