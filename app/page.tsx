"use client";

import { FormEvent, useState } from "react";

const works = [
  { title: "Afterglow", note: "Gerbera, craspedia & sea holly", image: "https://images.unsplash.com/photo-1572454591674-2739f30d3095?auto=format&fit=crop&w=1400&q=90", className: "work work--tall" },
  { title: "Soft Orbit", note: "Dahlia, astilbe & dancing stems", image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=1400&q=90", className: "work" },
  { title: "Wild Romance", note: "Garden rose, chamomile & waxflower", image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1400&q=90", className: "work work--wide" },
  { title: "Blue Hour", note: "Anemone, cosmos & larkspur", image: "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?auto=format&fit=crop&w=1400&q=90", className: "work" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function submitEnquiry(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Setare Studios home">Setare <span>Studios</span></a>
        <nav className={menuOpen ? "navLinks navLinks--open" : "navLinks"} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our approach</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Enquire</a>
        </nav>
        <button className="menuButton" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </header>

      <section className="hero" id="top">
        <div className="heroImage" role="img" aria-label="Sculptural floral arrangement in a studio"><div className="heroShade" /></div>
        <div className="heroCopy">
          <p className="eyebrow">Floral design studio · Northern Virginia</p>
          <h1>Flowers,<br /><em>composed.</em></h1>
          <div className="heroBottom"><p>Season-led florals for celebrations, gatherings, and beautiful everyday gestures.</p><a className="roundLink" href="#contact" aria-label="Start an enquiry">↘</a></div>
        </div>
        <span className="scrollNote">Scroll to wander</span>
      </section>

      <section className="manifesto" id="story">
        <p className="sectionIndex">01 / The studio</p>
        <h2>Nature never repeats itself.<br />Neither do we.</h2>
        <div className="manifestoText"><p>Setare Studios creates expressive, garden-inspired floral work with a painter&apos;s attention to color and a sculptor&apos;s sense of movement.</p><p>Every piece begins with the season, the setting, and the person receiving it. The result is loose, intentional, and entirely yours.</p></div>
      </section>

      <section className="gallery" id="work">
        <div className="galleryHeading"><p className="sectionIndex">02 / Selected work</p><h2>Recent<br /><em>studies</em></h2><p>A living portfolio of color, form, and flowers chosen at their most expressive.</p></div>
        <div className="workGrid">
          {works.map((work, index) => <article className={work.className} key={work.title}><div className="workImage"><img src={work.image} alt={`${work.title} floral arrangement`} /><span>0{index + 1}</span></div><div className="workCaption"><h3>{work.title}</h3><p>{work.note}</p></div></article>)}
        </div>
      </section>

      <section className="services">
        <p className="sectionIndex">03 / What we make</p>
        <div className="serviceList"><a href="#contact"><span>01</span><h3>Weddings & celebrations</h3><b>↗</b></a><a href="#contact"><span>02</span><h3>Brand & editorial</h3><b>↗</b></a><a href="#contact"><span>03</span><h3>Flowers, just because</h3><b>↗</b></a></div>
      </section>

      <section className="contact" id="contact">
        <div className="contactIntro"><p className="sectionIndex">04 / Enquire</p><h2>Tell us what<br />you&apos;re <em>dreaming.</em></h2><p>Share a few details and we&apos;ll be in touch within two business days.</p></div>
        <form onSubmit={submitEnquiry} className="enquiryForm">
          <label>Name<input name="name" required placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" required placeholder="you@email.com" /></label>
          <div className="formRow"><label>Occasion<input name="occasion" placeholder="Wedding, dinner, gift..." /></label><label>Date<input name="date" type="date" /></label></div>
          <label>Tell us more<textarea name="details" required placeholder="A little about the feeling, scale, colors, or setting..." rows={4} /></label>
          <button type="submit">{sent ? "Thank you — we’ll be in touch" : "Send your enquiry"}<span>↗</span></button>
          {sent && <p className="success" role="status">Your note has been received. We can&apos;t wait to hear more.</p>}
        </form>
      </section>

      <footer><a className="brand brand--footer" href="#top">Setare <span>Studios</span></a><p>Flowers as a form of feeling.</p><div><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a><span>© 2026 Setare Studios</span></div></footer>
    </main>
  );
}
