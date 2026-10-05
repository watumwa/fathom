import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Globe2,
  Landmark,
  Rocket,
  Sprout,
  TrendingUp,
  UsersRound,
  Wheat,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import {audiences} from '@/lib/data';

export const metadata = {title: 'Who We Serve'};

const audienceIcons = [Sprout, Building2, BriefcaseBusiness, TrendingUp, Wheat, Rocket, UsersRound, Globe2, Landmark];

const audienceDescriptions: Record<string, string> = {
  'Coffee farmers & farm investors': 'Farm establishment, improvement priorities and production planning.',
  'Coffee SMEs': 'Business planning, stronger management and clearer routes to market.',
  'Agribusiness entrepreneurs': 'A practical path from opportunity assessment to a workable business plan.',
  'Commodity traders': 'Market conditions, commercial requirements and trade decisions.',
  'Food & agricultural enterprises': 'Product development, positioning and business planning.',
  'Start-ups & growing SMEs': 'A workable operating plan and priorities for the next stage of the business.',
  'Cooperatives & producer groups': 'Practical support for members, operations and market readiness.',
  'Development programmes & organisations': 'Value-chain insight to shape useful enterprise support.',
  'Businesses seeking financing or investment': 'Business plans and financial assumptions prepared for funding discussions.',
};

export default function WhoWeServe() {
  return (
    <>
      <PageHero
        eyebrow="Who we serve"
        title="For the people building coffee and agribusiness enterprises."
        description="We work with farms, SMEs, investors and organisations across Uganda’s coffee value chain."
        image="/images/photography/farmer-training.webp"
        imageAlt="Coffee cherries ripening on a coffee farm"
        imagePosition="center top"
        imageScale={1.08}
      />
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <span className="eyebrow">Our clients</span>
              <h2>Different businesses. <span>Decisions that matter.</span></h2>
            </div>
            <p>Support shaped around the work each client needs to do next.</p>
          </Reveal>
          <div className="audience-page-grid">
            {audiences.map((audience, index) => {
              const Icon = audienceIcons[index % audienceIcons.length];
              return (
                <Reveal className="audience-page-card" delay={(index % 3) * 60} key={audience}>
                  <span className="audience-page-icon"><Icon size={22} /></span>
                  <small>0{index + 1}</small>
                  <h3>{audience}</h3>
                  <p>{audienceDescriptions[audience]}</p>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="client-visual-band">
            <div className="client-visual-copy">
              <span className="eyebrow light">Across the value chain</span>
              <h2>One sector. Different ambitions.</h2>
              <p>Whether the immediate question is production, management, financing or trade, the work starts with the realities of the enterprise.</p>
            </div>
            <div className="client-visual-images">
              <div><Image src="/images/photography/coffee-harvest.webp" alt="Coffee harvesting in Uganda" fill sizes="(max-width: 900px) 46vw, 24vw" /></div>
              <div><Image src="/images/photography/business-advisory.webp" alt="Field advisory with a coffee grower" fill sizes="(max-width: 900px) 46vw, 24vw" /></div>
            </div>
          </Reveal>
          <Reveal className="audience-page-cta">
            <div><span className="eyebrow">Not sure where to begin?</span><h2>Start with the decision in front of you.</h2></div>
            <Link className="btn btn-gold" href="/contact">Talk to an advisor <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
