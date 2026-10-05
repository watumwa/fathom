import Image from 'next/image';
import Link from 'next/link';
import {ArrowUpRight, FileChartColumn, Handshake, Palette, Sprout, UsersRound} from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import {getServices, serviceVisuals} from '@/lib/data';

export const metadata = {title: 'Services'};

const serviceIcons = [Sprout, Palette, UsersRound, FileChartColumn, Handshake];

export default async function Services() {
  const services = await getServices();

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Practical support for coffee enterprises, from farm plan to market."
        description="Five advisory services for farm establishment, coffee SMEs, business planning and commodity trade."
        image="/images/coffee-cup.webp"
        imageAlt="Coffee product being prepared"
        imagePosition="center top"
        imageScale={1.7}
      />
      <section className="section services-section">
        <div className="container">
          <div className="service-bento">
            {services.map((service: any, index: number) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              const visual = serviceVisuals[service.slug] ?? serviceVisuals['coffee-farm-planning'];
              return (
                <Reveal className={`service-bento-item service-bento-item-${index + 1}`} delay={index * 70} key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="service-bento-card">
                    <div className="service-card-image">
                      <Image
                        src={visual.src}
                        alt={visual.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 42vw"
                        style={{objectPosition: visual.position}}
                      />
                      <span className="service-card-image-shade" />
                    </div>
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
