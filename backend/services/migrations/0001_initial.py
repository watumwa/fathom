from django.db import migrations, models
class Migration(migrations.Migration):
 initial=True; dependencies=[]
 operations=[migrations.CreateModel(name='Service',fields=[('id',models.BigAutoField(auto_created=True,primary_key=True,serialize=False,verbose_name='ID')),('title',models.CharField(max_length=180)),('slug',models.SlugField(unique=True)),('short_description',models.TextField()),('description',models.TextField()),('featured_image',models.ImageField(blank=True,null=True,upload_to='services/')),('display_order',models.PositiveIntegerField(default=0)),('is_active',models.BooleanField(default=True)),('created_at',models.DateTimeField(auto_now_add=True)),('updated_at',models.DateTimeField(auto_now=True))],options={'ordering':['display_order','title']})]
