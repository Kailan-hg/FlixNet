from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def test(request):
    response = HttpResponse("Hello, world")
    response["Test"] = "Valor test"
    return response