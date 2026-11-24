"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const nav = [{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { href: "/about", label: "About" }, { href: "/work", label: "Our work" }, { href: "/contact", label: "Contact" }];
  return <>
    <div className="topline"><span>Global AI & software engineering partner</span><span>China · United States · Brazil · Australia</span></div>
    <header className="header">
      <Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brandmark"><span>✦</span></span><span className="brandname">LodestarGlobal<small>TECHNOLOGY</small></span></Link>
      <nav className={open ? "nav nav-open" : "nav"}>{nav.map(n => <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>)}</nav>
      <Link className="nav-cta" href="/contact">Start a project <ArrowUpRight size={16}/></Link>
      <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </header>
    <main>{children}</main>
    <footer className="footer">
      <div className="footer-main"><div><Link href="/" className="brand footer-brand"><span>✦</span><span className="brandname">LodestarGlobal<small>TECHNOLOGY</small></span></Link><p>Global AI & software engineering partner. We connect international technology talent to build systems that hold up in production.</p></div>
      <div><b>Explore</b><Link href="/services">Services</Link><Link href="/about">About us</Link><Link href="/work">Selected work</Link><Link href="/contact">Contact</Link></div>
      <div><b>Get in touch</b><Link href="/contact">Start a conversation <ArrowUpRight size={14}/></Link><span>US & EU business hours covered</span><span>English-speaking delivery team</span></div></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} LodestarGlobal</span><span>Built for ambitious teams.</span></div>
    </footer>
  </>;
}