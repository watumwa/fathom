'use client';

import Link from 'next/link';
import {useState} from 'react';
import {ArrowRight} from 'lucide-react';
import Reveal from '@/components/Reveal';

const intents = {
  invest: {
    label: 'I want to invest',
    copy: 'Assess the opportunity, pressure-test the numbers and build a clearer investment case for a coffee or agribusiness enterprise.',
    action: 'Discuss an investment',
    href: '/contact?intent=investment',
  },
  farm: {
    label: 'I want to build a farm',
    copy: 'Shape a Robusta or Arabica farm around the site, production ambition, available investment and long-term market direction.',
    action: 'Plan a coffee farm',
    href: '/contact?intent=farm',
  },
};

type Intent = keyof typeof intents;

export default function IntentCTA() {
  const [intent, setIntent] = useState<Intent>('invest');
  const selected = intents[intent];

  return (
    <section className="intent-cta" id="start">
      <div className="intent-contours" />
      <div className="container intent-cta-inner">
        <Reveal>
          <span className="eyebrow light">Ready for the next decision?</span>
          <h2>Ready to shape your coffee enterprise?</h2>
          <div className="intent-toggle" aria-label="Choose your goal" role="group">
            {(Object.keys(intents) as Intent[]).map((key) => (
              <button
                aria-pressed={intent === key}
                className={intent === key ? 'is-active' : ''}
                key={key}
                onClick={() => setIntent(key)}
                type="button"
              >
                {intents[key].label}
              </button>
            ))}
          </div>
          <div className="intent-response" key={intent}>
            <p>{selected.copy}</p>
            <Link className="btn btn-gold" href={selected.href}>
              {selected.action} <ArrowRight size={17} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
