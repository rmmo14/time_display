from django.shortcuts import render
from time import gmtime, strftime

# Create your views here.
def index(request):
    context = {
        "date": strftime("%B %d, %Y"),
        "time": strftime("%H:%M %p", gmtime())
    }
    return render(request, 'index.html', context)