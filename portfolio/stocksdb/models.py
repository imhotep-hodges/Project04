from django.db import models

class Portfolio(models.Model):
    stock = models.CharField(max_length=5)
    quantity = models.IntegerField()
    dvalue = models.DecimalField(decimal_places=5, max_digits=10)
    buy_sell = models.BooleanField()
    

