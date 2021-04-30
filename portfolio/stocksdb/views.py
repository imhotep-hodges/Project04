from django.shortcuts import render


def home(request):   
   import requests
   import json

   if request.method == 'POST':
      ticker = request.POST['ticker']
      
      api_request = requests.get('https://cloud.iexapis.com/stable/stock/' + ticker + '/quote?token=pk_9f5df27dfc7140ebbaa3c11daac6a073')

      try:
         api = json.loads(api_request.content)
      except Exception as e:
         api = 'Error...'
      return render(request, 'home.html', {'api': api})
   else: 
      return render(request, 'home.html', {'ticker': "Enter a Ticker Symbol Above..."})

   

def aboutme(request):
   return render(request, 'aboutme.html', {})