# Generated by Django 4.2.6 on 2023-10-18 20:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_product_material_info_product_model_info'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='model_info',
            field=models.TextField(default=None, null=True),
        ),
    ]
