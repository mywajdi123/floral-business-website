"use client";
import { FormEvent, useState } from "react";
import { SiteFooter, SiteHeader } from "../site-chrome";

export default function EnquirePage() {
  const [sent,setSent]=useState(false);
  function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setSent(true)}
  return <main><SiteHeader /><section className="enquire-page"><div className="enquire-intro"><p className="kicker">Enquire / 03</p><h1>Tell us what<br />you&apos;re <em>dreaming.</em></h1><p>Share the shape of your occasion—whether it&apos;s a wedding, an intimate table, a brand moment, or flowers simply because.</p><div className="enquire-mark">✳</div></div><form className="enquiry-form" onSubmit={submit}><div className="field-count">01</div><label>Your name<input required name="name" placeholder="Full name" /></label><div className="field-count">02</div><label>Email address<input required type="email" name="email" placeholder="you@email.com" /></label><div className="field-count">03</div><div className="form-row"><label>Occasion<input name="occasion" placeholder="Wedding, dinner, gift..." /></label><label>Date<input type="date" name="date" /></label></div><div className="field-count">04</div><label>Tell us more<textarea required name="details" rows={5} placeholder="The feeling, scale, colors, setting, and anything else on your mind..." /></label><button type="submit">{sent?"Your note has been received":"Send your enquiry"}<span>↗</span></button>{sent&&<p className="success" role="status">Thank you. We&apos;ll be in touch within two business days.</p>}</form></section><SiteFooter /></main>;
}
