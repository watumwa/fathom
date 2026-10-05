import Image from 'next/image';
import type {CSSProperties} from 'react';
import Reveal from '@/components/Reveal';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  imageScale?: number;
  children?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition = 'center top',
  imageScale = 1.015,
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero page-hero-visual">
      <div className="page-hero-media">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 58vw"
          style={{objectPosition: imagePosition, '--page-hero-scale': imageScale} as CSSProperties}
        />
      </div>
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <Reveal>
          <span className="eyebrow light">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {children && <div className="page-hero-actions">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
