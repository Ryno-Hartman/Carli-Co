import type { Metadata } from "next";
import Image from "next/image";
import { business, openingHours } from "../content";

export const metadata: Metadata = { title: "Contact", description: "Visit or contact Carli & Co Organic Hair & Beauty in Claremont, WA." };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero section-shell">
        <div>
          <p className="eyebrow">Contact &amp; opening hours</p>
          <h1>Come and<br /><em>say hello.</em></h1>
        </div>
        <p>Find the salon on Davies Road in Claremont. Book online, call or email if you would like help choosing the right service.</p>
      </section>

      <section className="contact-layout section-shell section-space">
        <div className="contact-image">
          <Image src="/images/salon-stations.webp" alt="A warm, relaxed salon interior" width="1200" height="1400" fetchPriority="high" />
        </div>
        <div className="contact-details">
          <div className="contact-block">
            <p className="eyebrow">Visit</p>
            <h2>{business.address}</h2>
            <a className="text-link" href={business.mapsUrl}>Open in maps <span aria-hidden="true">↗</span></a>
          </div>
          <div className="contact-pairs">
            <div><p className="eyebrow">Phone</p><a href={business.phoneHref}>{business.phoneDisplay}</a></div>
            <div><p className="eyebrow">Email</p><a href={`mailto:${business.email}`}>{business.email}</a></div>
          </div>
          <div className="hours-list">
            <p className="eyebrow">Opening hours</p>
            {openingHours.map(([day, hours]) => <div key={day}><span>{day}</span><span>{hours}</span></div>)}
          </div>
          <a className="button button-rust contact-book" href={business.bookingUrl}>Book an appointment <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="contact-note section-space">
        <div className="section-shell">
          <p className="eyebrow">New clients</p>
          <h2>Begin with a complimentary treatment and a <em>warm welcome.</em></h2>
        </div>
      </section>
    </>
  );
}
