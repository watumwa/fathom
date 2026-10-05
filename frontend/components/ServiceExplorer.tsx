'use client';

import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowUpRight, Check} from 'lucide-react';
import {serviceVisuals, type Service} from '@/lib/data';

type ServiceDetail = {
  title: string;
  summary: string;
  deliverables: string[];
};

const serviceDetails: Record<string, ServiceDetail> = {
  'coffee-farm-planning': {
    title: 'A stronger estate starts with a sound plan.',
    summary: 'Plan a Robusta or Arabica enterprise around its site, production goals, investment capacity and route to market.',
    deliverables: ['Farm establishment priorities', 'Production and investment plan', 'Improvement roadmap for existing farms'],
  },
  'product-development-branding': {
    title: 'Make the product clear. Make the market fit.',
    summary: 'Build a coffee proposition with a clear position, a coherent brand and a practical plan for reaching customers.',
    deliverables: ['Product and market positioning', 'Brand and packaging direction', 'Marketing and go-to-market plan'],
  },
  'capacity-building': {
    title: 'Give the business the tools to run well.',
    summary: 'Strengthen the management, financial and market capabilities coffee SMEs need to operate consistently.',
    deliverables: ['Training shaped around business needs', 'Practical management tools', 'Action plan for the team'],
  },
  'business-plan-development': {
    title: 'Put the opportunity on paper—and test the numbers.',
    summary: 'Develop a decision-ready business plan that makes the operating model, financial assumptions and funding need clear.',
    deliverables: ['Business and operating plan', 'Financial projections and assumptions', 'Financing-ready business case'],
  },
  'commodity-trade-advisory': {
    title: 'Make trade decisions with a clearer view of risk.',
    summary: 'Assess commodity opportunities against market conditions, quality requirements and your capacity to deliver.',
    deliverables: ['Opportunity and market assessment', 'Quality and commercial requirements', 'Trade decision support'],
  },
};

const serviceLabels: Record<string, string> = {
  'coffee-farm-planning': 'Farm planning',
  'product-development-branding': 'Product & brand',
  'capacity-building': 'SME capability',
  'business-plan-development': 'Business planning',
  'commodity-trade-advisory': 'Commodity trade',
};

export default function ServiceExplorer({services}: {services: Service[]}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = services[selectedIndex];

  if (!selected) return null;

  const detail = serviceDetails[selected.slug] ?? {
    title: selected.title,
    summary: selected.short_description,
    deliverables: ['A clear assessment of your priorities', 'Practical recommendations', 'Defined next steps'],
  };
  const visual = serviceVisuals[selected.slug] ?? serviceVisuals['coffee-farm-planning'];

  return (
    <div className="service-explorer">
      <div className="service-selector" aria-label="Advisory services">
        {services.map((service, index) => (
          <button
            aria-pressed={selectedIndex === index}
            className={`service-selector-button ${selectedIndex === index ? 'is-active' : ''}`}
            key={service.slug}
            onClick={() => setSelectedIndex(index)}
            type="button"
          >
            <span>0{index + 1}</span>
            {serviceLabels[service.slug] ?? service.title}
            <ArrowUpRight aria-hidden="true" size={16} />
          </button>
        ))}
      </div>
      <article className="service-feature" aria-live="polite">
        <div className="service-feature-copy">
          <span className="service-feature-kicker">0{selectedIndex + 1} / 0{services.length} &nbsp;·&nbsp; {selected.title}</span>
          <h3>{detail.title}</h3>
          <p>{detail.summary}</p>
          <ul>
            {detail.deliverables.map((deliverable) => (
              <li key={deliverable}><Check aria-hidden="true" size={16} />{deliverable}</li>
            ))}
          </ul>
          <Link className="text-link" href={`/services/${selected.slug}`}>
            Explore this service <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="service-feature-note">
          <Image
            key={visual.src}
            src={visual.src}
            alt={visual.alt}
            fill
            sizes="(max-width: 640px) 100vw, 28vw"
            style={{objectPosition: visual.position}}
          />
          <span className="service-feature-image-shade" />
          <span className="service-feature-mark">F.</span>
          <p>Clear advice for decisions that shape the farm, the business and its market.</p>
          <span className="service-feature-region">UGANDA&nbsp; / &nbsp;EAST AFRICA</span>
        </div>
      </article>
    </div>
  );
}
