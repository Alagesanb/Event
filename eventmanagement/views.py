from __future__ import unicode_literals
from django.shortcuts import render
from django.views.generic.base import View
from django.http.response import HttpResponse
from eventmanagement.models import EventManagement
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime 
import datetime as dt
import dateutil.parser as dparser
from dateutil.parser import parse
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
    date1=dparser.parse(datetimepicker1)
    datetimepicker2 = request.POST.get('datetimepicker2',False)
    date2=dparser.parse(datetimepicker2)
    imgInp = request.POST.get('imgInp',False)
    category = request.POST.get('category',False)
    published = request.POST.get('published',False)
    published_res = published.isupper()
    EventManagement.objects.create(name=title,description=description,location=location,startdate=date1,enddate=date2,images=imgInp,category=category,published=published_res)
    return HttpResponse(json.dumps({'success':1}), content_type="application/json")
    
