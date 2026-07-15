import type { Metadata } from "next";
import Link from "next/link";
import { BookingForm } from "./BookingForm";

export const metadata: Metadata = { title: "Book a Visit", description: "Request your next appointment at Carli & Co." };

export default function BookPage() {
  return (
    <>
      <section className="book-hero page-hero section-shell">
        <div><p className="eyebrow">Book a visit</p><h1>Your next good<br /><em>hair day starts here.</em></h1></div>
        <p>Tell us what you have in mind and when you would like to visit. We will confirm the best service, stylist and timing with you personally.</p>
      </section>

      <section className="booking-layout section-shell">
        <div className="booking-aside">
          <div className="booking-image"><img src="/images/salon-portrait.webp" alt="A warm welcome from a Carli and Co stylist" width="1200" height="1400" fetchPriority="high" /></div>
          <div className="visit-details">
            <div><p className="footer-label">Studio</p><p>Cape Town, South Africa<br />Visits by appointment</p></div>
            <div><p className="footer-label">Hours</p><p>Tue — Fri &nbsp; 09:00 — 18:00<br />Saturday &nbsp; 08:30 — 16:00</p></div>
            <div><p className="footer-label">Contact</p><a href="mailto:hello@carliandco.co.za">hello@carliandco.co.za</a></div>
          </div>
        </div>
        <div className="booking-form-wrap">
          <p className="booking-step">Appointment request</p>
          <h2>Let’s plan your visit.</h2>
          <BookingForm />
        </div>
      </section>

      <section className="booking-help section-shell section-space">
        <h2>Before you book</h2>
        <div className="faq-list">
          <details><summary>Do I need a colour consultation?<span>+</span></summary><p>All new colour guests begin with a consultation so we can understand your history, assess condition and create an accurate plan.</p></details>
          <details><summary>What if I am unsure which service to choose?<span>+</span></summary><p>Select “I am not sure yet” and share a few details. We will guide you to the right appointment before confirming.</p></details>
          <details><summary>Can I move or cancel my booking?<span>+</span></summary><p>Of course. Please give us at least 24 hours’ notice so we can offer your appointment to someone waiting.</p></details>
        </div>
        <Link className="text-link" href="/services">Read the full service menu <span aria-hidden="true">→</span></Link>
      </section>
    </>
  );
}
