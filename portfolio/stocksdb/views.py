from django.shortcuts import render
from django.shortcuts import redirect
from .models import Portfolio
from .forms import StockForm
from django.contrib import messages
from django.views.generic import TemplateView


class CompanyChartView(TemplateView):
   template_name='home.html'

   def get_context_data(self,**kwargs):
      context=super().get_context_data(**kwargs)
      context["qs"] = Portfolio.objects.all()

      return context
   
def chart(request):
   return render(request, 'chart.html', {})


def home(request):
   import requests
   import json  
  
   if request.method == 'POST':
      
      tickerSy = request.POST['ticker']
      
      api_request = requests.get('https://cloud.iexapis.com/stable/stock/' + tickerSy + '/quote?token=pk_9f5df27dfc7140ebbaa3c11daac6a073')

      try:
         api = json.loads(api_request.content)
      except Exception as e:
         api = 'Error...'
      return render(request, 'home.html', {'api': api})
      
   else: 
      return render(request, 'home.html', {'tickerSy': "Enter a Ticker Symbol Above..."})

def addstock(request):
   if request.method == 'POST':
      form = StockForm(request.POST or None)
         
      if form.is_valid():
         form.save() 
         messages.success(request, ("Stock has been added!"))
         return redirect(addstock)
   else: 
      stocks = Portfolio.objects.all()
      return render(request, 'addstock.html', {'stocks': stocks})


def delete(request, stock_id):
      item = Portfolio.objects.get(pk=stock_id)
      item.delete()
      messages.success(request, ("Stock has been sold!"))
      return redirect(addstock)

