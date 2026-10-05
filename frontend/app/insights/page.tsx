import Image from 'next/image';
import PageHero from '@/components/PageHero';

export const metadata = {title: 'Insights'};

export default function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Fathom insights"
        title="Ideas for stronger agribusiness decisions."
        description="Practical perspectives on coffee, markets, enterprise development and business growth."
        image="/images/coffee-cherries.webp"
        imageAlt="Roasted coffee moving through processing equipment"
        imagePosition="center top"
        imageScale={1.7}
      />
      <section className="section insight-section">
        <div className="container">
          <article className="featured-insight">
            <div className="image-frame insight-image">
              <Image src="/images/fathom-field-advisory.png" alt="Coffee value-chain advisory in the field" fill sizes="(max-width: 900px) 92vw, 46vw" />
              <span className="image-caption">On the ground · Uganda</span>
            </div>
            <div>
              <span className="eyebrow">Business growth</span>
              <h2>Building a Market-Ready Coffee Business</h2>
              <p className="lead">Strong coffee businesses connect product quality with market understanding, consistent presentation, sound financial planning and disciplined execution.</p>
              <div className="insight-meta"><span>Market readiness</span><span>Enterprise planning</span><span>Coffee value chain</span></div>
              <span className="text-link">More insights can be published from Django Admin.</span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
