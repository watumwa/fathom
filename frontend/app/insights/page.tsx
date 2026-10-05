import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

export const metadata = {title: 'Insights'};

export default function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Fathom insights"
        title="Ideas for stronger agribusiness decisions."
        description="Practical perspectives on coffee, markets, enterprise development and business growth."
        image="/images/photography/coffee-sorting.webp"
        imageAlt="Roasted coffee moving through processing equipment"
        imagePosition="center top"
        imageScale={1.08}
      />
      <section className="section insight-section">
        <div className="container">
          <article className="featured-insight">
            <div className="image-frame insight-image">
              <Image src="/images/photography/field-advisory.webp" alt="Coffee value-chain advisory in the field" fill sizes="(max-width: 900px) 92vw, 46vw" />
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
          <div className="insight-grid">
            {[
              {image:'/images/photography/coffee-harvest.webp', tag:'Farm planning', title:'Planning a Coffee Farm Beyond the First Harvest', copy:'A useful farm plan considers establishment, operating discipline, investment needs and the market the farm ultimately intends to serve.'},
              {image:'/images/photography/product-branding.webp', tag:'Product & brand', title:'From Good Coffee to a Clear Market Proposition', copy:'Quality matters, but customers also need a product they can understand, trust and choose consistently.'},
              {image:'/images/photography/commodity-warehouse.webp', tag:'Commodity trade', title:'What SMEs Should Clarify Before a Trade Decision', copy:'Quality specifications, volumes, working capital, counterparties and delivery terms all shape whether an opportunity is truly workable.'},
            ].map((item) => (
              <article className="insight-card" key={item.title}>
                <div className="insight-card-image"><Image src={item.image} alt="" fill sizes="(max-width: 700px) 92vw, 30vw" /></div>
                <div className="insight-card-body"><span>{item.tag}</span><h3>{item.title}</h3><p>{item.copy}</p></div>
              </article>
            ))}
          </div>
          <div className="insight-cta"><p>Need advice for a decision you are making now?</p><Link className="btn" href="/contact">Talk to an advisor</Link></div>
        </div>
      </section>
    </>
  );
}
