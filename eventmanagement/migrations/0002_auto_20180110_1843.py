# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2018-01-10 18:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eventmanagement', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventmanagement',
            name='published',
            field=models.BooleanField(),
        ),
    ]
