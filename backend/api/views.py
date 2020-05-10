from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from rest_framework import viewsets

# Serve Vue Application
index_view = never_cache(TemplateView.as_view(template_name='api/index.html'))
