import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { business } from "../content";

export const metadata: Metadata = { title: "About", description: "The organic, holistic approach behind Carli & Co in Claremont." };

const values = [
  ["01", "Organic by choice", "Products are selected with health, hair and the planet in mind."],
  ["02", "Personal by nature", "Every appointment starts with the person, not a one-size-fits-all trend."],
  ["03", "Beautifully practical", "Modern, flattering styles are created to work in everyday life."],
  ["04", "Calm and welcoming", "A relaxed salon atmosphere makes room for care, comfort and connection."],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero section-shell">
        <div>
          <p className="eyebrow">About Carli &amp; Co</p>
          <h1>The art of<br /><em>natural care.</em></h1>
        </div>
        <p>A holistic hair and beauty sanctuary dedicated to organic products, personalised service and the confidence that comes from feeling like yourself.</p>
      </section>

      <section className="about-story section-shell section-space">
        <div className="about-story-image">
          <Image src="/images/salon-portrait.webp" alt="Hair being styled in the salon" width="1100" height="1400" fetchPriority="high" />
        </div>
        <div className="about-story-copy">
          <p className="eyebrow">Experience behind every appointment</p>
          <h2>Crafted with care,<br /><em>built on experience.</em></h2>
          <p>Carli &amp; Co is led by a South African salon owner with 17 years of hairdressing experience. The salon brings skilled technique and a thoughtful, wellness-led approach together in one warm Claremont space.</p>
          <p>From blondes and balayage to brunette tones and stylish cuts, the focus is always on flattering, contemporary looks and versatile styles that feel easy to live in.</p>
          <a className="button button-rust" href={business.bookingUrl}>Book a free consultation</a>
        </div>
      </section>

      <section className="values section-space">
        <div className="section-shell">
          <p className="eyebrow">What guides us</p>
          <h2>Beauty, considered<br /><em>from every angle.</em></h2>
          <div className="value-grid">
            {values.map(([number, title, copy]) => (
              <div key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-story section-shell section-space">
        <div>
          <p className="eyebrow">The product shelf</p>
          <h2>Premium organic care,<br /><em>chosen with purpose.</em></h2>
          <p>The salon’s product direction centres on raw organic ingredients, natural and vegan Australian care, curl-friendly formulas and hair-transforming performance with an ethical point of view.</p>
          <Link className="text-link" href="/services">Explore the service menu <span aria-hidden="true">→</span></Link>
        </div>
        <Image src="/images/product-pedestal.webp" alt="A curated selection of hair care products" width="1000" height="1200" loading="lazy" />
      </section>
    </>
  );
}
