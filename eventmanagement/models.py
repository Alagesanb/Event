from __future__ import unicode_literals

from django.db import models
# Create your models here.
class BaseModel(models.Model):
    created_date = models.DateTimeField(auto_now_add=True,blank=True, null=True)
    created_by = models.IntegerField(blank=True, null=True)
    updated_date = models.DateTimeField(auto_now=True,blank=True, null=True)
    updated_by = models.IntegerField(blank=True, null=True)
    class Meta:
        abstract = True

class EventManagement(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default='')
    location = models.CharField(max_length=100)
    startdate = models.DateTimeField(blank=True,null=True)
    enddate = models.DateTimeField(blank=True,null=True)
    images = models.FileField(upload_to='files/%Y/%m/%d',blank=True, null=True)
    category = models.CharField(max_length=100)
    published = models.BooleanField()
    class Meta:
        db_table = 'event_management_details'
