from django.db import models
class SiteSettings(models.Model):
    company_name=models.CharField(max_length=160,default='Fathom Agribusinesses Limited')
    tagline=models.CharField(max_length=220,default='Growing Businesses. Building Value. Creating Markets.')
    primary_phone=models.CharField(max_length=30,default='0783769114')
    secondary_phone=models.CharField(max_length=30,default='0700389412')
    whatsapp_number=models.CharField(max_length=30,default='256783769114')
    email=models.EmailField(blank=True)
    address=models.CharField(max_length=255,blank=True)
    facebook_url=models.URLField(blank=True); instagram_url=models.URLField(blank=True); linkedin_url=models.URLField(blank=True); youtube_url=models.URLField(blank=True)
    footer_description=models.CharField(max_length=255,default='Practical advisory solutions for coffee enterprises, agribusinesses and SMEs.')
    updated_at=models.DateTimeField(auto_now=True)
    def __str__(self): return self.company_name
    class Meta: verbose_name_plural='Site settings'
