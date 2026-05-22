from django.urls import path
from . import views

urlpatterns = [

    path(
        "trainers/",
        views.trainerdetails
    ),

    path(
        "addtrainer/",
        views.addtrainer
    ),

]