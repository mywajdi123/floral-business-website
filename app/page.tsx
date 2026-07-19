import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="home-stage">
        <p className="kicker home-kicker">Floral design · Northern Virginia</p>
        <div className="home-title" aria-label="Flowers, composed">
          <span>FLO</span><span>WERS</span><i>composed</i>
        </div>
        <figure className="home-image">
          <img src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1500&q=92" alt="Sculptural seasonal floral arrangement" />
          <figcaption>Season-led / Gesture-filled / One of one</figcaption>
        </figure>
        <p className="home-intro">Expressive flowers for celebrations, gatherings, and the beautifully ordinary.</p>
        <Link className="orbit-link" href="/work"><span>Enter the studio</span><b>↗</b></Link>
        <span className="edition">Setare Studies · No. 01</span>
      </section>
      <SiteFooter />
    </main>
  );
}
