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
import ServiceExplorer from '@/components/ServiceExplorer';
import {audiences, getServices} from '@/lib/data';

const audienceIcons = [Sprout, Building2, BriefcaseBusiness, TrendingUp, Wheat, Rocket, UsersRound, Globe2, Landmark];

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
            <div className="hero-proof" aria-label="Fathom service coverage">
              <div><strong>01—05</strong><span>Practical advisory services</span></div>
              <div><strong>Farm → market</strong><span>A connected value chain</span></div>
              <div><strong>UG / EA</strong><span>Grounded in the region</span></div>
            </div>
          </Reveal>
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

      <section className="section story-section">
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
          <Reveal className="approach-panel" delay={120}>
            <div className="approach-image">
              <Image
                src="/images/coffee-cup.webp"
                alt="Fresh espresso being prepared"
                fill
                sizes="(max-width: 900px) 92vw, 46vw"
              />
              <span>Product · Brand · Market</span>
            </div>
            <div className="approach-panel-head">
              <span>From farm to market</span>
              <small>01—04</small>
            </div>
            <div className="approach-route">
              {[
                ['01', 'Plan', 'Production, investment and farm priorities'],
                ['02', 'Build', 'Products, teams and business systems'],
                ['03', 'Position', 'Brand, customer and market direction'],
                ['04', 'Trade', 'Finance plans and informed market decisions'],
              ].map(([number, title, copy]) => (
                <div className="approach-step" key={number}>
                  <span>{number}</span>
                  <div><strong>{title}</strong><p>{copy}</p></div>
                  <ArrowUpRight size={17} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section services-section">
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

      <section className="section audience-section">
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
          <div className="audience-chips">
            {audiences.map((audience, index) => {
              const Icon = audienceIcons[index % audienceIcons.length];
              return (
                <Reveal className="audience-chip" delay={(index % 3) * 60} key={audience}>
                  <span><Icon size={20} /></span>
                  <strong>{audience}</strong>
                  <ArrowUpRight className="audience-arrow" size={15} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section why-section">
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

      <section className="cta">
        <div className="cta-pattern" />
        <div className="container cta-grid">
          <Reveal>
            <span className="eyebrow light">Start a conversation</span>
            <h2>Planning a coffee investment or strengthening an existing business?</h2>
          </Reveal>
          <Reveal className="cta-side" delay={100}>
            <p>Tell us where you are in the journey. We’ll start with the farm or business, the decision ahead and the support that would be useful.</p>
            <Link className="btn btn-gold" href="/contact">
              Talk to an advisor <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
