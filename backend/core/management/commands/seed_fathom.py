from django.core.management.base import BaseCommand
from django.utils import timezone
from core.models import SiteSettings
from services.models import Service
from content.models import Article
SERVICES=[
('Coffee Farm Planning & Establishment','coffee-farm-planning','Plan the establishment or improvement of a Robusta or Arabica farm around production goals, investment and long-term viability.'),
('Coffee Product Development, Branding & Marketing Advisory','product-development-branding','Shape coffee products for market with clear positioning, brand direction and a practical route to customers.'),
('Value Chain-Based Capacity Building for Coffee SMEs','capacity-building','Build the management, financial and market capabilities coffee SMEs need to operate consistently and grow.'),
('Bankable Business Plan Development for SMEs','business-plan-development','Turn an agribusiness idea into a decision-ready plan with clear operating assumptions and a credible funding case.'),
('Commodity Trade Advisory for SMEs','commodity-trade-advisory','Assess commodity opportunities with a clearer view of market conditions, quality requirements and trade risk.'),]
class Command(BaseCommand):
 def handle(self,*args,**kwargs):
  SiteSettings.objects.get_or_create(id=1)
  for i,(title,slug,short) in enumerate(SERVICES,1): Service.objects.update_or_create(slug=slug,defaults={'title':title,'short_description':short,'description':short,'display_order':i,'is_active':True})
  Article.objects.get_or_create(slug='building-market-ready-coffee-business',defaults={'title':'Building a Market-Ready Coffee Business','excerpt':'A practical look at the foundations that help coffee enterprises move from a good product to a stronger commercial proposition.','content':'Strong coffee businesses connect product quality with market understanding, consistent presentation, sound financial planning and disciplined execution. Fathom works with enterprises to structure these building blocks around their real operating context.','category':'Business Growth','author':'Fathom Agribusinesses','published_at':timezone.now(),'status':'published'})
  self.stdout.write(self.style.SUCCESS('Fathom starter content is ready.'))
