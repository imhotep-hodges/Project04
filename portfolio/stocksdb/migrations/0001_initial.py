# Generated by Django 3.2 on 2021-04-28 00:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Members',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stock', models.CharField(max_length=5)),
                ('quantity', models.IntegerField()),
                ('dvalue', models.DecimalField(decimal_places=5, max_digits=10)),
                ('buy_sell', models.BooleanField()),
            ],
        ),
    ]
