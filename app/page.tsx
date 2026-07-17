import Link from "next/link";
import Image from "next/image";
import { business } from "./content";

const serviceCards = [
  { number: "01", title: "Colour", copy: "Blondes, balayage, brunette tones and colour made to grow out beautifully.", price: "From $50" },
  { number: "02", title: "Cuts & styling", copy: "Flattering contemporary cuts and versatile styling for everyday life.", price: "From $10" },
  { number: "03", title: "Quiet Chair", copy: "Private appointments created around comfort, dignity and individual needs.", price: "$100" },
];

export default function Home() {
  return (
    <>
      <section className="home-hero section-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow">Organic hair &amp; beauty · Claremont WA</p>
          <h1>Look &amp; feel<br /><em>beautiful.</em></h1>
          <p className="hero-intro">Premium organic products, personalised service and a relaxed salon experience—without compromising your health or the planet.</p>
          <div className="hero-actions">
            <a className="button button-rust" href={business.bookingUrl}>Book an appointment <span aria-hidden="true">↗</span></a>
            <Link className="text-link" href="/services">View services <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="hero-visual reveal reveal-late">
          <div className="hero-image-frame">
            <Image src="/images/hair-texture.webp" alt="Dimensional blonde hair" width="1200" height="1500" fetchPriority="high" />
          </div>
          <p className="image-note">Organic · Personal · Beautiful</p>
          <div className="hero-orbit" aria-hidden="true">C&amp;Co</div>
        </div>
      </section>

      <div className="brand-strip" aria-label="Salon specialties">
        <span>Blondes</span><i>·</i><span>Balayage</span><i>·</i><span>Brunette tones</span><i>·</i><span>Stylish cuts</span><i>·</i><span>Organic care</span>
      </div>

      <section className="manifesto section-shell section-space">
        <p className="eyebrow">The art of natural hair care</p>
        <div>
          <h2>Beautiful hair, with <em>integrity.</em></h2>
          <p>At Carli &amp; Co, beautiful hair should not come at the expense of your health or the planet. Every visit combines expert hairdressing with premium organic products and thoughtful, personalised care.</p>
          <Link className="text-link" href="/about">Discover our approach <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="services-preview section-space">
        <div className="section-shell row-heading">
          <div>
            <p className="eyebrow">Hair menu</p>
            <h2>Made for your<br /><em>every day.</em></h2>
          </div>
          <p>Contemporary colour, cuts and private services, shaped around you.</p>
        </div>
        <div className="service-cards section-shell">
          {serviceCards.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <div><span>{service.price}</span><Link href="/services">View menu <span aria-hidden="true">→</span></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="ritual section-shell section-space">
        <div className="ritual-images">
          <Image className="ritual-main" src="/images/salon-stations.webp" alt="Warm and welcoming hair salon interior" width="1400" height="1400" loading="lazy" />
          <Image className="ritual-detail" src="/images/product-shelf.webp" alt="Hair care products on a shelf" width="800" height="1200" loading="lazy" />
        </div>
        <div className="ritual-copy">
          <p className="eyebrow">A holistic salon experience</p>
          <h2>Beauty that feels<br /><em>good, too.</em></h2>
          <p>A warm, relaxed atmosphere where mindful rituals, organic products and honest advice support both outer beauty and inner well-being.</p>
          <div className="ritual-points">
            <span>01</span><p>Premium organic products</p>
            <span>02</span><p>Personalised service and free consultations</p>
            <span>03</span><p>Private Quiet Chair appointments</p>
          </div>
          <Link className="button button-outline" href="/about">About Carli &amp; Co</Link>
        </div>
      </section>

      <section className="new-client-callout section-space">
        <div className="section-shell callout-inner">
          <p className="eyebrow">New to Carli &amp; Co?</p>
          <h2>Your first visit includes a <em>complimentary treatment.</em></h2>
          <a className="button button-bone" href={business.bookingUrl}>Book online <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="gallery-preview section-shell section-space">
        <div className="gallery-preview-copy">
          <p className="eyebrow">Gallery &amp; reviews</p>
          <h2>Natural colour.<br /><em>Beautifully lived in.</em></h2>
          <p>Explore the visual direction for client transformations, salon details and approved reviews.</p>
          <Link className="text-link" href="/gallery">View the gallery <span aria-hidden="true">→</span></Link>
        </div>
        <div className="gallery-preview-images">
          <Image src="/images/salon-portrait.webp" alt="Salon hair styling" width="900" height="1100" loading="lazy" />
          <Image src="/images/blowdry.webp" alt="Hair being styled in salon" width="900" height="1100" loading="lazy" />
        </div>
      </section>

      <section className="closing-cta">
        <div>
          <p className="eyebrow">Free consultation available</p>
          <h2>Let’s create hair<br /><em>that feels like you.</em></h2>
          <a className="button button-bone" href={business.bookingUrl}>Book an appointment <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}
