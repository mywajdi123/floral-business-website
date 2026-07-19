import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

const studies = [
  ["Afterglow", "Gerbera · Craspedia · Sea holly", "https://images.unsplash.com/photo-1594663653925-365bcbf7ef6f?auto=format&fit=crop&w=1400&q=92"],
  ["Soft Orbit", "Dahlia · Astilbe · Dancing stems", "https://images.unsplash.com/photo-1596438459194-f275f413d6ff?auto=format&fit=crop&w=1400&q=92"],
  ["Blue Hour", "Anemone · Cosmos · Larkspur", "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=92"],
  ["Field Note", "Chamomile · Scabiosa · Wild greens", "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1400&q=92"],
];

export default function WorkPage() {
  return <main><SiteHeader /><section className="page-mast work-mast"><p className="kicker">Selected work / 2025—26</p><h1>A study in<br /><em>living color.</em></h1><p>Compositions shaped by season, place, and the particular energy of the room.</p></section><section className="study-list">{studies.map((study,index)=><article className={`study study-${index+1}`} key={study[0]}><div className="study-number">0{index+1}</div><img src={study[2]} alt={`${study[0]} floral study`} /><div className="study-copy"><h2>{study[0]}</h2><p>{study[1]}</p></div></article>)}</section><section className="page-cta"><p>Have a feeling in mind?</p><Link href="/enquire">Let&apos;s make it bloom <span>↗</span></Link></section><SiteFooter /></main>;
}
