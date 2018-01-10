from django.conf.urls import url
from django.contrib import admin
from eventmanagement import views

urlpatterns = [url(r'^event/$',views.eventmanagement,name="eventmanagement" ),
              url(r'^create_eventmanagement/$',views.create_eventmanagement,name="create_eventmanagement" ),
              url(r'^eventmanagement_table_view/$',views.eventmanagement_table_view,name="eventmanagement_table_view" ),
               ]
