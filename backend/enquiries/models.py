from django.db import models
class Enquiry(models.Model):
    class Status(models.TextChoices): NEW='new','New'; CONTACTED='contacted','Contacted'; PROGRESS='progress','In Progress'; CLOSED='closed','Closed'
    full_name=models.CharField(max_length=150); company=models.CharField(max_length=180,blank=True); phone=models.CharField(max_length=40); email=models.EmailField(blank=True); service=models.CharField(max_length=180); message=models.TextField(); status=models.CharField(max_length=20,choices=Status.choices,default=Status.NEW); created_at=models.DateTimeField(auto_now_add=True); updated_at=models.DateTimeField(auto_now=True)
    class Meta: ordering=['-created_at']
    def __str__(self): return f'{self.full_name} — {self.service}'
