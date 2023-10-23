from graphene import Argument, Field, ID, ObjectType, Schema, List
from graphene_django import DjangoConnectionField
from product.models import Product, Image
from graphene_django import DjangoObjectType, DjangoListField

class ImageType(DjangoObjectType):
    class Meta:
        model = Image
        field = ('id', 'image')
        use_connection = True

class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        field = ('id', 'title', 'price', 'product_details', 'model_info', 'material_info')
        use_connection = True
    images = DjangoListField(ImageType)

class Query(ObjectType):
    products = DjangoConnectionField(ProductType)
    product = Field(ProductType, id=Argument(ID, required=True))

    def resolve_products(root, info, **kwargs):
        return Product.objects.all()
    
    def resolve_product(root, info, **kwargs):
        return Product.objects.get(id=kwargs.get('id'))
    

schema = Schema(query=Query)