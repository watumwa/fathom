import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="This page has moved beyond the farm."
      description="The page you requested could not be found."
      image="/images/coffee-farm.webp"
      imageAlt="Coffee cherries on a coffee farm"
      imageScale={1.7}
    >
      <Link className="btn btn-light" href="/">Return home</Link>
    </PageHero>
  );
}
