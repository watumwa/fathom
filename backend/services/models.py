from django.db import models
class Service(models.Model):
    title=models.CharField(max_length=180); slug=models.SlugField(unique=True); short_description=models.TextField(); description=models.TextField(); featured_image=models.ImageField(upload_to='services/',blank=True,null=True); display_order=models.PositiveIntegerField(default=0); is_active=models.BooleanField(default=True); created_at=models.DateTimeField(auto_now_add=True); updated_at=models.DateTimeField(auto_now=True)
    class Meta: ordering=['display_order','title']
    def __str__(self): return self.title
