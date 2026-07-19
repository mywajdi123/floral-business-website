"use client";

import Link from "next/link";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" onClick={() => setOpen(false)}>Setare <em>Studios</em></Link>
      <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
        <Link href="/work" onClick={() => setOpen(false)}>Work <sup>01</sup></Link>
        <Link href="/about" onClick={() => setOpen(false)}>About <sup>02</sup></Link>
        <Link href="/enquire" onClick={() => setOpen(false)}>Enquire <sup>03</sup></Link>
      </nav>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"><span /><span /></button>
    </header>
  );
}

export function SiteFooter() {
  return <footer className="site-footer"><span>© 2026 Setare Studios</span><span>Flowers as a form of feeling</span><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a></footer>;
}
