import Link from 'next/link';
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
import {audiences} from '@/lib/data';

export const metadata = {title: 'Who We Serve'};

const audienceIcons = [Sprout, Building2, BriefcaseBusiness, TrendingUp, Wheat, Rocket, UsersRound, Globe2, Landmark];

export default function WhoWeServe() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Who we serve</span>
          <h1>Advisory built around real agribusiness challenges.</h1>
          <p>We work across the coffee and agricultural value chain with enterprises at different stages of growth.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <span className="eyebrow">Our clients</span>
              <h2>Different ambitions. One need for <span>clear direction.</span></h2>
            </div>
            <p>Our advice is tailored to your operating context, priorities and next commercial decision.</p>
          </Reveal>
          <div className="audience-page-grid">
            {audiences.map((audience, index) => {
              const Icon = audienceIcons[index % audienceIcons.length];
              return (
                <Reveal className="audience-page-card" delay={(index % 3) * 60} key={audience}>
                  <span className="audience-page-icon"><Icon size={22} /></span>
                  <small>0{index + 1}</small>
                  <h3>{audience}</h3>
                  <p>Practical, commercially focused support shaped around your priorities and stage of growth.</p>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="audience-page-cta">
            <div><span className="eyebrow">Not sure where to begin?</span><h2>Start with the decision in front of you.</h2></div>
            <Link className="btn btn-gold" href="/contact">Talk to an advisor <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
