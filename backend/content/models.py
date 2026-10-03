from django.db import models
class Article(models.Model):
    class Status(models.TextChoices): DRAFT='draft','Draft'; PUBLISHED='published','Published'
    title=models.CharField(max_length=220); slug=models.SlugField(unique=True); excerpt=models.TextField(); content=models.TextField(); featured_image=models.ImageField(upload_to='articles/',blank=True,null=True); category=models.CharField(max_length=100,default='Insights'); author=models.CharField(max_length=120,default='Fathom Agribusinesses'); published_at=models.DateTimeField(blank=True,null=True); status=models.CharField(max_length=20,choices=Status.choices,default=Status.DRAFT); seo_title=models.CharField(max_length=70,blank=True); seo_description=models.CharField(max_length=170,blank=True); created_at=models.DateTimeField(auto_now_add=True); updated_at=models.DateTimeField(auto_now=True)
    class Meta: ordering=['-published_at','-created_at']
    def __str__(self): return self.title
