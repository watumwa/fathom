import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata = {title: 'About Fathom'};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Fathom"
        title="Advice for the people growing coffee businesses in Uganda."
        description="Farm knowledge and business thinking, applied to the decisions that shape an enterprise."
        image="/images/photography/coffee-landscape.webp"
        imageAlt="Roasted coffee beans after processing"
        imagePosition="right top"
        imageScale={1.08}
      />
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>Know the crop. <span>Understand the business.</span></h2>
            <p className="lead">
              Fathom Agribusinesses Limited advises coffee farms, SMEs and investors working across Uganda’s agricultural value chain.
            </p>
            <p>
              We help clients assess an opportunity, set priorities and turn a plan into useful next steps—from establishing a farm to preparing a business for finance or trade.
            </p>
          </div>
          <div className="image-frame">
            <Image
              src="/images/photography/field-advisory.webp"
              alt="A coffee grower and advisor discussing coffee cherries in the field"
              fill
              sizes="(max-width: 900px) 92vw, 46vw"
            />
          </div>
        </div>
      </section>

      <section className="section visual-story-section">
        <div className="container visual-story-grid">
          <div className="visual-story-copy">
            <span className="eyebrow">From field to enterprise</span>
            <h2>Advice that connects <span>production, product and market.</span></h2>
            <p className="lead">Coffee enterprises work as systems. Farm choices affect quality, quality affects positioning, and positioning affects the commercial plan.</p>
            <p>Our role is to help clients see those connections early and make decisions that remain practical as the enterprise grows.</p>
          </div>
          <div className="visual-story-collage">
            <div className="visual-story-main"><Image src="/images/photography/coffee-harvest.webp" alt="Healthy coffee cherries on a productive farm" fill sizes="(max-width: 900px) 92vw, 38vw" /></div>
            <div className="visual-story-small"><Image src="/images/photography/product-branding.webp" alt="Prepared coffee product" fill sizes="(max-width: 900px) 44vw, 18vw" /></div>
            <div className="visual-story-small"><Image src="/images/photography/coffee-sorting.webp" alt="Coffee processing and handling" fill sizes="(max-width: 900px) 44vw, 18vw" /></div>
          </div>
        </div>
      </section>
      <section className="section cream">
        <div className="container">
          <div className="section-head compact-head">
            <div>
              <span className="eyebrow">How we think</span>
              <h2>One enterprise. <span>Four connected perspectives.</span></h2>
            </div>
            <p>We connect what happens on the farm to the people, numbers and markets around it.</p>
          </div>
          <div className="value-grid">
            <article className="value-card"><h3>Start with the farm</h3><p>Ground plans in the production goals and conditions of each coffee enterprise.</p></article>
            <article className="value-card"><h3>Make the numbers useful</h3><p>Bring operating needs, investment and business planning into the same conversation.</p></article>
            <article className="value-card"><h3>Know the market</h3><p>Consider the product, customer and commercial requirements before committing resources.</p></article>
            <article className="value-card"><h3>Leave with next steps</h3><p>Turn advice into clear priorities that clients and their teams can act on.</p></article>
          </div>
          <div className="center-action"><Link className="btn" href="/contact">Discuss your plans</Link></div>
        </div>
      </section>
    </>
  );
}
