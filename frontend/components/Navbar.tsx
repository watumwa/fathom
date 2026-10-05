'use client';
import Link from 'next/link';
import Image from 'next/image';
import {ArrowUpRight, Menu, X} from 'lucide-react';
import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';

const links=[['/','Home'],['/about','About'],['/services','Services'],['/who-we-serve','Who We Serve'],['/insights','Insights'],['/contact','Contact']];

export default function Navbar(){
  const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false); const pathname=usePathname();
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>18); onScroll(); window.addEventListener('scroll',onScroll,{passive:true}); return()=>window.removeEventListener('scroll',onScroll)},[]);
  useEffect(()=>setOpen(false),[pathname]);
  return <header className={`nav ${scrolled?'nav-scrolled':''}`}>
    <div className="nav-inner">
      <Link href="/" className="brand" aria-label="Fathom Agribusinesses Limited home">
        <span className="brand-mark"><Image src="/images/fathom-logo-official.png" alt="" width={52} height={52}/></span>
        <span className="brand-copy"><b>FATHOM</b><small>AGRIBUSINESSES LIMITED</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([h,l])=><Link className={pathname===h?'active':''} key={h} href={h}>{l}</Link>)}<Link className="btn btn-small nav-cta" href="/contact">Talk to an Advisor <ArrowUpRight size={15}/></Link></nav>
      <button className="menu" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </div>
    {open&&<nav className="mobile-nav" aria-label="Mobile navigation"><div className="mobile-nav-label">Navigate</div>{links.map(([h,l])=><Link className={pathname===h?'active':''} key={h} href={h}>{l}</Link>)}<Link className="btn" href="/contact">Talk to an Advisor <ArrowUpRight size={16}/></Link><div className="mobile-contact"><small>CALL / WHATSAPP</small><a href="tel:+256783769114">+256 783 769 114</a></div></nav>}
  </header>
}
