import Link from 'next/link';
import {ArrowUpRight, FileChartColumn, Handshake, Palette, Sprout, UsersRound} from 'lucide-react';
import Reveal from '@/components/Reveal';
import {getServices} from '@/lib/data';

export const metadata = {title: 'Services'};

const serviceIcons = [Sprout, Palette, UsersRound, FileChartColumn, Handshake];

export default async function Services() {
  const services = await getServices();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Our services</span>
          <h1>Agribusiness expertise that moves businesses forward.</h1>
          <p>Focused advisory support across farm planning, product development, SME capacity, business planning and commodity trade.</p>
        </div>
      </section>
      <section className="section services-section">
        <div className="container">
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
                    <span className="service-link">View service <ArrowUpRight size={17} /></span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
