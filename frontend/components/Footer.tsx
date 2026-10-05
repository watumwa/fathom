import Link from 'next/link';
import Image from 'next/image';
import {ArrowUpRight, Phone} from 'lucide-react';
export default function Footer(){return <footer>
  <div className="footer-accent"/>
  <div className="footer-grid container">
    <div className="footer-brand"><div className="footer-brand-lockup"><Image className="footer-logo" src="/images/fathom-logo-official.png" alt="Fathom Agribusinesses Limited logo" width={76} height={76}/><div><strong>FATHOM</strong><small>AGRIBUSINESSES LIMITED</small></div></div><p>Coffee and agribusiness advisory for farms, SMEs and investors in Uganda.</p><span className="footer-tagline">From farm plan to market decision.</span></div>
    <div><h4>Company</h4><Link href="/about">About Fathom</Link><Link href="/who-we-serve">Who We Serve</Link><Link href="/insights">Insights</Link><Link href="/contact">Contact</Link></div>
    <div><h4>Expertise</h4><Link href="/services/coffee-farm-planning">Farm Planning</Link><Link href="/services/product-development-branding">Product & Brand</Link><Link href="/services/capacity-building">Capacity Building</Link><Link href="/services/business-plan-development">Business Planning</Link><Link href="/services/commodity-trade-advisory">Commodity Trade</Link></div>
    <div><h4>Talk to us</h4><a className="phone-link" href="tel:+256783769114"><Phone size={15}/> +256 783 769 114</a><a className="phone-link" href="tel:+256700389412"><Phone size={15}/> +256 700 389 412</a><Link className="footer-cta" href="/contact">Send an enquiry <ArrowUpRight size={15}/></Link></div>
  </div>
  <div className="copyright container"><span>© {new Date().getFullYear()} Fathom Agribusinesses Limited.</span><span>Ugandan coffee & agribusiness advisory.</span></div>
</footer>}
