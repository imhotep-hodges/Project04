from django.shortcuts import render
from .models import Portfolio
from .forms import TickerForm

def home(request):   
   form = TickerForm()
   return render(request, 'home.html', {'form': form})
    
