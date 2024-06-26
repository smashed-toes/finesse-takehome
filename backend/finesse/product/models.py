from django.db import models

# Create your models here.
class Product(models.Model):
    title = models.CharField(max_length=100)
    price = models.FloatField()
    product_details = models.TextField(null=True, default=None)
    model_info = models.TextField(null=True, default=None)
    material_info = models.TextField(default='There is no info on the materials')


    def __str__(self):
        return self.title
    
class Image(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='product_images/')

    def __str__(self):
        return f"Image of {self.product.title}"
    