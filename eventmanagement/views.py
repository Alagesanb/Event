from __future__ import unicode_literals
from django.shortcuts import render
from django.views.generic.base import View
from django.http.response import HttpResponse
from eventmanagement.models import EventManagement
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime 
import json

# Create your views here.
def eventmanagement(request):
    return render(request,'eventmanagement.html')
    
def create_eventmanagement(request):
    """
        Function to create event management in a table 
        @param request:post request
        @return: json data contains details of the event management
        @rtype: json
        @raise e:unable to create a database connection
    """
    title = request.POST.get('title',False)
    description = request.POST.get('description',False)
    location = request.POST.get('location',False)
    datetimepicker1 = request.POST.get('datetimepicker1',False)
    datetimepicker2 = request.POST.get('datetimepicker2',False)
    imgInp = request.POST.get('imgInp',False)
    category = request.POST.get('category',False)
    published = request.POST.get('published',False)
    EventManagement.objects.create(name=title,description=description,location=location,startdate=datetimepicker1,enddate=datetimepicker2,images=imgInp,category=category,published=published)
    return HttpResponse(json.dumps({'success':1}), content_type="application/json")
    
