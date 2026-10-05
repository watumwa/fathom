import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Globe2,
  Landmark,
  Leaf,
  Rocket,
  Sprout,
  Target,
  TrendingUp,
  UsersRound,
  Wheat,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import IntentCTA from '@/components/IntentCTA';
import JourneyExplorer from '@/components/JourneyExplorer';
import ServiceExplorer from '@/components/ServiceExplorer';
import {audiences, getServices} from '@/lib/data';

const audienceIcons = [Sprout, Building2, BriefcaseBusiness, TrendingUp, Wheat, Rocket, UsersRound, Globe2, Landmark];
const audienceSummaries = [
  'Farm establishment, improvement and production planning.',
  'Stronger management, business planning and routes to market.',
  'From opportunity assessment to a workable enterprise plan.',
  'Market conditions, quality requirements and trade decisions.',
  'Product development, positioning and business planning.',
  'Operating priorities for the next stage of growth.',
  'Practical support for members, operations and markets.',
  'Value-chain insight for stronger enterprise programmes.',
  'Financing-ready plans and credible operating assumptions.',
];

export default async function Home() {
  const services = await getServices();

  return (
    <>
      <section className="hero hero-cinematic">
        <Image
          src="/images/fathom-field-advisory.png"
          alt="A coffee grower and advisor inspecting ripe coffee cherries on a Ugandan farm"
          fill
          priority
          sizes="100vw"
          className="hero-cinematic-image hero-field-image"
        />
        <div className="hero-cinematic-shade" />
        <div className="hero-grid hero-cinematic-grid container">
          <Reveal className="hero-copy hero-cinematic-copy">
            <span className="eyebrow light">Coffee & agribusiness advisory · Uganda</span>
            <h1>
              Build a coffee business <em>from the ground up.</em>
            </h1>
            <p>
              From planning a Robusta or Arabica estate to preparing an SME for finance or trade, we help turn sound decisions into stronger coffee enterprises.
            </p>
            <div className="actions">
              <Link className="btn btn-gold" href="/services">
                Explore our advisory <ArrowRight size={17} />
              </Link>
              <Link className="btn btn-ghost" href="/contact">
                Talk to an advisor <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="hero-floating-stats" aria-label="Fathom service coverage">
          <div className="hero-stat-card hero-stat-services">
            <span><BriefcaseBusiness size={17} /></span>
            <small>01—05</small>
            <strong>Advisory services</strong>
          </div>
          <div className="hero-stat-card hero-stat-route">
            <span><TrendingUp size={17} /></span>
            <small>Connected thinking</small>
            <strong>Farm → Market</strong>
            <i className="hero-route-line" />
          </div>
          <div className="hero-stat-card hero-stat-region">
            <span><Globe2 size={17} /></span>
            <small>Regional context</small>
            <strong>Uganda / East Africa</strong>
          </div>
        </div>
        <div className="trust-strip">
          <div className="container trust-inner">
            <span>Robusta & Arabica</span>
            <span>Farm planning to market</span>
            <span>Ugandan business context</span>
            <span>Clear, practical advice</span>
          </div>
        </div>
      </section>

      <section className="section story-section" id="journey">
        <div className="container story-grid">
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2>Good coffee starts with <span>sound decisions.</span></h2>
            <p className="lead">
              We advise the people building coffee farms and enterprises across Uganda and East Africa.
            </p>
            <p>
              From farm establishment and SME management to finance and trade, we connect practical choices on the ground with the business they need to support.
            </p>
            <Link className="text-link" href="/about">
              Discover Fathom <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <JourneyExplorer />
          </Reveal>
        </div>
      </section>

      <section className="section services-section" id="advisory">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <span className="eyebrow">Our advisory expertise</span>
              <h2>Practical advice for the <span>decisions that matter.</span></h2>
            </div>
            <p>Choose the challenge in front of you. See the work, the expected outputs and where to begin.</p>
          </Reveal>

          <ServiceExplorer services={services} />
        </div>
      </section>

      <section className="section audience-section" id="clients">
        <div className="audience-orbit" />
        <div className="container audience-layout">
          <Reveal className="audience-intro">
            <span className="eyebrow light">Who we serve</span>
            <h2>For the people building <span>coffee businesses.</span></h2>
            <p>From growers and processors to investors, SMEs and organisations working across the value chain.</p>
            <Link className="btn btn-light" href="/who-we-serve">
              Explore our clients <ArrowRight size={17} />
            </Link>
          </Reveal>
          <div className="audience-bento">
            {audiences.map((audience, index) => {
              const Icon = audienceIcons[index % audienceIcons.length];
              return (
                <Reveal className={`audience-tile-wrap audience-tile-${index + 1}`} delay={(index % 4) * 55} key={audience}>
                  <Link className="audience-tile" href="/who-we-serve">
                    <span className="audience-tile-icon"><Icon size={21} /></span>
                    <small>0{index + 1}</small>
                    <strong>{audience}</strong>
                    <p>{audienceSummaries[index]}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section why-section" id="why-fathom">
        <div className="container">
          <Reveal className="section-head why-head">
            <div>
              <span className="eyebrow">Why Fathom</span>
              <h2>Good advice should hold up <span>outside the meeting room.</span></h2>
            </div>
            <p>Recommendations should make sense for the farm, the team, the numbers and the market—not only on paper.</p>
          </Reveal>
          <div className="value-grid">
            {[
              [Leaf, 'Coffee-grounded', 'Advice shaped around the distinct realities of Robusta and Arabica enterprises.'],
              [BriefcaseBusiness, 'Business-minded', 'Plans that account for operating needs, investment and the route to market.'],
              [TrendingUp, 'Market-aware', 'Clearer thinking about customers, quality expectations and commercial choices.'],
              [Target, 'Practical to use', 'Defined outputs and next steps your team can act on.'],
            ].map(([Icon, title, copy], index) => {
              const ValueIcon = Icon as typeof Leaf;
              return (
                <Reveal delay={index * 70} key={title as string}>
                  <article className="value-card">
                    <div className="value-card-number">0{index + 1}</div>
                    <ValueIcon size={26} />
                    <h3>{title as string}</h3>
                    <p>{copy as string}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <IntentCTA />
    </>
  );
}
