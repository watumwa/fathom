'use client';

import Image from 'next/image';
import {useState, type CSSProperties} from 'react';
import {ArrowUpRight} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Plan',
    copy: 'Production goals, investment priorities and a practical route forward.',
    image: '/images/coffee-farm.webp',
    alt: 'Coffee cherries ripening on a coffee farm',
    position: 'center top',
    scale: 1.55,
  },
  {
    number: '02',
    title: 'Build',
    copy: 'The operating systems, team capability and tools the enterprise needs.',
    image: '/images/fathom-field-advisory.png',
    alt: 'An advisor and grower reviewing coffee in the field',
    position: 'center 42%',
    scale: 1.03,
  },
  {
    number: '03',
    title: 'Position',
    copy: 'A clearer product, brand direction and path to the right customers.',
    image: '/images/coffee-cup.webp',
    alt: 'Fresh coffee being prepared',
    position: 'center top',
    scale: 1.55,
  },
  {
    number: '04',
    title: 'Trade',
    copy: 'Commercial requirements, finance plans and better-informed market decisions.',
    image: '/images/coffee-processing.webp',
    alt: 'Processed coffee beans ready for market',
    position: 'right top',
    scale: 1.55,
  },
];

export default function JourneyExplorer() {
  const [active, setActive] = useState(0);
  const selected = steps[active];

  return (
    <div className="journey-explorer">
      <div className="journey-preview" aria-live="polite">
        {steps.map((step, index) => (
          <Image
            className={index === active ? 'is-active' : ''}
            key={step.title}
            src={step.image}
            alt={index === active ? step.alt : ''}
            fill
            sizes="(max-width: 900px) 92vw, 48vw"
            style={{objectPosition: step.position, '--journey-scale': step.scale} as CSSProperties}
          />
        ))}
        <span className="journey-preview-shade" />
        <div className="journey-preview-copy">
          <span>{selected.number} · From farm to market</span>
          <p>{selected.copy}</p>
        </div>
      </div>
      <div className="journey-grid" aria-label="From farm to market stages">
        {steps.map((step, index) => (
          <button
            aria-pressed={active === index}
            className={active === index ? 'is-active' : ''}
            key={step.title}
            onClick={() => setActive(index)}
            onFocus={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
            type="button"
          >
            <span>{step.number}</span>
            <strong>{step.title}</strong>
            <ArrowUpRight aria-hidden="true" size={16} />
          </button>
        ))}
      </div>
    </div>
  );
}
