import requests

headers = {
    'Content-Type': 'application/json',
    'Authorization' : 'Token 3eff381fbe410e3698c217257028b33d3c35b008'
}

def get_meta_data(ticker):
    url = 'https://api.tiingo.com/tiingo/daily/{}'.format(ticker)
    response = requests.get(url, headers=headers)
    return response.json()

def get_price_data(ticker):
    url = 'https://api.tiingo.com/tiingo/daily/{}/prices'.format(ticker)
    response = requests.get(url, headers=headers)
    return response.json()[0]