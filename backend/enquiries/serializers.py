from rest_framework import serializers
from .models import Enquiry
class EnquirySerializer(serializers.ModelSerializer):
    class Meta: model=Enquiry; fields=('id','full_name','company','phone','email','service','message','created_at'); read_only_fields=('id','created_at')
    def validate_message(self,v):
        if len(v.strip())<10: raise serializers.ValidationError('Please provide a little more detail.')
        return v.strip()
