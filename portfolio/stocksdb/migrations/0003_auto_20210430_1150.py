# Generated by Django 3.2 on 2021-04-30 11:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stocksdb', '0002_rename_members_portfolio'),
    ]

    operations = [
        migrations.RenameField(
            model_name='portfolio',
            old_name='dvalue',
            new_name='price',
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='stock',
            field=models.CharField(max_length=10),
        ),
    ]