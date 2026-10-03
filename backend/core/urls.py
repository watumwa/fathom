from django.urls import path
from .views import ServiceList,ServiceDetail,ArticleList,ArticleDetail,EnquiryCreate,SiteSettingsView
urlpatterns=[path('services/',ServiceList.as_view()),path('services/<slug:slug>/',ServiceDetail.as_view()),path('articles/',ArticleList.as_view()),path('articles/<slug:slug>/',ArticleDetail.as_view()),path('enquiries/',EnquiryCreate.as_view()),path('site-settings/',SiteSettingsView.as_view())]
