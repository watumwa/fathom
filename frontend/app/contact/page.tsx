import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import {Phone, MessageCircle} from 'lucide-react';

export const metadata = {title: 'Contact'};

const intentServices: Record<string, string> = {
  investment: 'Bankable Business Plan Development for SMEs',
  farm: 'Coffee Farm Planning & Establishment',
};

export default async function Contact({searchParams}: {searchParams: Promise<{intent?: string}>}) {
  const {intent} = await searchParams;
  const initialService = intent ? intentServices[intent] ?? '' : '';

  return (
    <>
      <PageHero
        eyebrow="Contact Fathom"
        title="Let’s talk about your coffee business."
        description="Share what you are planning or working through. We’ll start with your priorities and the decision ahead."
        image="/images/photography/business-advisory.webp"
        imageAlt="A coffee advisor and grower discussing a crop in the field"
        imagePosition="center 46%"
      />
      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-intro">
            <span className="eyebrow">Start a conversation</span>
            <h2>Talk through <span>your next step.</span></h2>
            <p className="lead">Farm planning, product development, SME capability, business plans or commodity trade—we’re ready to hear what you’re working on.</p>
            <div className="contact-details">
              <a className="contact-line" href="tel:+256783769114"><Phone /> <span><small>Call us</small>+256 783 769 114</span></a>
              <a className="contact-line" href="https://wa.me/256783769114" target="_blank" rel="noreferrer"><MessageCircle /> <span><small>WhatsApp</small>+256 783 769 114</span></a>
              <a className="contact-line" href="tel:+256700389412"><Phone /> <span><small>Alternative</small>+256 700 389 412</span></a>
            </div>
          </div>
          <ContactForm initialService={initialService} />
        </div>
      </section>
    </>
  );
}
