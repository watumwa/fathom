import {notFound} from 'next/navigation';
import Link from 'next/link';
import {Check} from 'lucide-react';
import {services} from '@/lib/data';

export async function generateStaticParams() {
  return services.map(({slug}) => ({slug}));
}

const details: Record<string, string[]> = {
  'coffee-farm-planning': [
    'Farm establishment priorities',
    'Production and investment planning',
    'Improvement roadmap for existing farms',
  ],
  'product-development-branding': [
    'Product and market positioning',
    'Brand and packaging direction',
    'Marketing and go-to-market plan',
  ],
  'capacity-building': [
    'Training shaped around business needs',
    'Practical management tools',
    'Team action plan',
  ],
  'business-plan-development': [
    'Business and operating plan',
    'Financial assumptions and projections',
    'Financing-ready business case',
  ],
  'commodity-trade-advisory': [
    'Opportunity and market assessment',
    'Quality and commercial requirements',
    'Trade decision support',
  ],
};

export default async function Detail({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Fathom advisory</span>
          <h1>{service.title}</h1>
          <p>{service.short_description}</p>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <span className="eyebrow">What we can work on</span>
          <h2>Practical support for <span>the decisions ahead.</span></h2>
          <p className="lead">{service.short_description}</p>
          <div className="detail-list">
            {details[slug].map((item) => (
              <div key={item}><Check aria-hidden="true" />{item}</div>
            ))}
          </div>
          <Link className="btn" href="/contact">Discuss this service</Link>
        </div>
      </section>
    </>
  );
}
