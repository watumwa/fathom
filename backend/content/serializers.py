from rest_framework import serializers
from .models import Article
class ArticleSerializer(serializers.ModelSerializer):
    class Meta: model=Article; fields=('id','title','slug','excerpt','content','featured_image','category','author','published_at','seo_title','seo_description')
