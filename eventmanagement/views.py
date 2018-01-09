from django.shortcuts import render
from __future__ import unicode_literals
from django.shortcuts import render
from django.views.generic.base import View
from django.http.response import HttpResponse
import json

# Create your views here.
def eventmanagement(request):
    return render(request,'eventmanagement.html')
