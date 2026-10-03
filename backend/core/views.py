from rest_framework import generics
from rest_framework.permissions import AllowAny
from services.models import Service
from services.serializers import ServiceSerializer
from content.models import Article
from content.serializers import ArticleSerializer
from enquiries.models import Enquiry
from enquiries.serializers import EnquirySerializer
from .models import SiteSettings
from .serializers import SiteSettingsSerializer

class ServiceList(generics.ListAPIView):
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer
    permission_classes = [AllowAny]

class ServiceDetail(generics.RetrieveAPIView):
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer
    lookup_field = 'slug'
    permission_classes = [AllowAny]

class ArticleList(generics.ListAPIView):
    serializer_class = ArticleSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        qs = Article.objects.filter(status='published')
        category = self.request.query_params.get('category')
        q = self.request.query_params.get('q')
        if category: qs = qs.filter(category__iexact=category)
        if q: qs = qs.filter(title__icontains=q)
        return qs

class ArticleDetail(generics.RetrieveAPIView):
    queryset = Article.objects.filter(status='published')
    serializer_class = ArticleSerializer
    lookup_field = 'slug'
    permission_classes = [AllowAny]

class EnquiryCreate(generics.CreateAPIView):
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer
    permission_classes = [AllowAny]

class SiteSettingsView(generics.RetrieveAPIView):
    serializer_class = SiteSettingsSerializer
    permission_classes = [AllowAny]
    def get_object(self):
        return SiteSettings.objects.first() or SiteSettings.objects.create()
