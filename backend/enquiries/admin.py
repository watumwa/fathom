from django.contrib import admin
from .models import Enquiry
@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin): list_display=('full_name','company','service','status','created_at'); list_filter=('status','service','created_at'); search_fields=('full_name','company','phone','email','message'); readonly_fields=('created_at','updated_at')
