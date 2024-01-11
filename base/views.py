from django.shortcuts import render
from .models import Project

# Create your views here.
def home(request):
    projects = Project.objects.all()
    return render(request, 'base/home.html', {'projects': projects})
