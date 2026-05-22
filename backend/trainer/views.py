from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

from .models import Trainer
from .serializers import TrainerSerializer


@api_view(['GET'])
def trainerdetails(request):

    trainers = Trainer.objects.all()

    serializer = TrainerSerializer(
        trainers,
        many=True
    )

    return Response(serializer.data)


@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def addtrainer(request):

    serializer = TrainerSerializer(
        data=request.data
    )

    if serializer.is_valid():

        serializer.save()

        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED
        )

    print(serializer.errors)

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )