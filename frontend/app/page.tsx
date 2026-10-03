import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  FileChartColumn,
  Globe2,
  Handshake,
  Landmark,
  Leaf,
  Palette,
  Rocket,
  Sprout,
  Target,
  TrendingUp,
  UsersRound,
  Wheat,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import {audiences, getServices} from '@/lib/data';

const serviceIcons = [Sprout, Palette, UsersRound, FileChartColumn, Handshake];
const audienceIcons = [Sprout, Building2, BriefcaseBusiness, TrendingUp, Wheat, Rocket, UsersRound, Globe2, Landmark];

export default async function Home() {
  const services = await getServices();

  return (
    <>
      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-grid container">
          <Reveal className="hero-copy">
            <span className="eyebrow light">Fathom Agribusinesses Limited</span>
            <h1>
              Build an agribusiness that is ready to <em>grow.</em>
            </h1>
            <p>
              Practical coffee value-chain advisory for SMEs, investors and programmes ready to turn opportunity into a structured, market-ready enterprise.
            </p>
            <div className="actions">
              <Link className="btn btn-gold" href="/services">
                Explore our expertise <ArrowRight size={17} />
              </Link>
              <Link className="btn btn-ghost" href="/contact">
                Talk to an advisor <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="hero-proof" aria-label="Fathom service coverage">
              <div><strong>05</strong><span>Specialist advisory areas</span></div>
              <div><strong>360°</strong><span>Value-chain perspective</span></div>
              <div><strong>UG</strong><span>Rooted in East Africa</span></div>
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={140}>
            <div className="hero-image-shell">
              <Image
                src="/images/fathom-field-advisory.png"
                alt="Agribusiness advisor and coffee entrepreneur reviewing coffee cherries on a Ugandan farm"
                fill
                priority
                sizes="(max-width: 900px) 92vw, 46vw"
                className="hero-photo"
              />
              <div className="hero-image-wash" />
            </div>
            <div className="hero-float-card hero-float-top">
              <span><BarChart3 size={17} /></span>
              <div><small>Commercial focus</small><strong>Plan with clarity</strong></div>
            </div>
            <div className="hero-float-card hero-float-bottom">
              <span><Leaf size={17} /></span>
              <div><small>End-to-end advisory</small><strong>From farm to market</strong></div>
            </div>
            <div className="hero-image-index">01 / FIELD ADVISORY</div>
          </Reveal>
        </div>
        <div className="trust-strip">
          <div className="container trust-inner">
            <span>Technical knowledge</span>
            <span>Value-chain expertise</span>
            <span>Commercial discipline</span>
            <span>Practical execution</span>
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="container story-grid">
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2>We turn sector knowledge into <span>business momentum.</span></h2>
            <p className="lead">
              Fathom supports coffee enterprises and SMEs in building sustainable, market-oriented and investment-ready businesses.
            </p>
            <p>
              Our work connects technical decisions to commercial outcomes—bringing structure, market insight and clear next steps to every engagement.
            </p>
            <Link className="text-link" href="/about">
              Discover Fathom <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal className="approach-panel" delay={120}>
            <div className="approach-panel-head">
              <span>Our value-chain lens</span>
              <small>01—04</small>
            </div>
            <div className="approach-route">
              {[
                ['01', 'Establish', 'Sound farm and enterprise foundations'],
                ['02', 'Strengthen', 'Better products, operations and teams'],
                ['03', 'Position', 'Clear brands and market direction'],
                ['04', 'Scale', 'Finance-ready plans and trade decisions'],
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
              <h2>Focused support for every <span>critical growth decision.</span></h2>
            </div>
            <p>Five connected areas of expertise, shaped around commercial reality and built to move your enterprise forward.</p>
          </Reveal>

          <div className="service-bento">
            {services.map((service: any, index: number) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <Reveal className={`service-bento-item service-bento-item-${index + 1}`} delay={index * 70} key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="service-bento-card">
                    <div className="service-card-top">
                      <span className="service-icon"><Icon size={23} /></span>
                      <small>0{index + 1}</small>
                    </div>
                    <div className="service-card-copy">
                      {index === 3 && <span className="featured-label">Financing & investment readiness</span>}
                      <h3>{service.title}</h3>
                      <p>{service.short_description}</p>
                    </div>
                    <span className="service-link">Explore service <ArrowUpRight size={17} /></span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section audience-section">
        <div className="audience-orbit" />
        <div className="container audience-layout">
          <Reveal className="audience-intro">
            <span className="eyebrow light">Who we serve</span>
            <h2>Built for the people <span>moving agriculture forward.</span></h2>
            <p>We meet businesses where they are—from first investment decisions to market expansion and finance readiness.</p>
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
              <h2>Advice designed to perform <span>beyond the presentation.</span></h2>
            </div>
            <p>Clear thinking, grounded analysis and practical support that stays connected to your operating reality.</p>
          </Reveal>
          <div className="value-grid">
            {[
              [Leaf, 'Technical knowledge', 'Grounded advice for the realities of coffee production and agribusiness.'],
              [BriefcaseBusiness, 'Business strategy', 'Commercial models that connect ambition to practical execution.'],
              [TrendingUp, 'Market insight', 'Sharper positioning and better-informed growth decisions.'],
              [Target, 'Practical delivery', 'Structured next steps focused on real business outcomes.'],
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
            <h2>Bring structure to your next agribusiness opportunity.</h2>
          </Reveal>
          <Reveal className="cta-side" delay={100}>
            <p>Tell us what you are building, improving or preparing for. We’ll begin with your context and the commercial decision in front of you.</p>
            <Link className="btn btn-gold" href="/contact">
              Talk to an advisor <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
