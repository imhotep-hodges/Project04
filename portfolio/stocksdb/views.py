from django.shortcuts import render


def home(request):   
   import requests
   import json

      #pk_9f5df27dfc7140ebbaa3c11daac6a073
   api_request = requests.get('https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_9f5df27dfc7140ebbaa3c11daac6a073')

   try:
      api = json.loads(api_request.content)
   except Exception as e:
      api = 'Error...'

   return render(request, 'home.html', {'api': api})

def aboutme(request):
   return render(request, 'aboutme.html', {})