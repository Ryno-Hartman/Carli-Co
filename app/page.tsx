import Link from "next/link";

const services = [
  { number: "01", title: "Cut & finish", copy: "Shape, movement and a finish that still feels like you.", price: "From R680" },
  { number: "02", title: "Considered colour", copy: "Dimensional colour, hand-painted to grow out beautifully.", price: "From R1 250" },
  { number: "03", title: "Hair rituals", copy: "Scalp-led care and deep repair for strength, softness and shine.", price: "From R450" },
];

export default function Home() {
  return (
    <>
      <section className="home-hero section-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow">Independent salon · Cape Town</p>
          <h1>Hair that feels<br /><em>like you.</em></h1>
          <p className="hero-intro">Thoughtful cuts, luminous colour and unrushed rituals—created around the way you actually live.</p>
          <div className="hero-actions">
            <Link className="button button-rust" href="/book">Book a visit <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/services">Explore our services <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="hero-visual reveal reveal-late">
          <div className="hero-image-frame">
            <img src="/images/hair-texture.webp" alt="Softly layered, dimensional blonde hair" width="1200" height="1500" fetchPriority="high" />
          </div>
          <p className="image-note">Cut · Colour · Care</p>
          <div className="hero-orbit" aria-hidden="true">C&amp;Co.</div>
        </div>
      </section>

      <div className="brand-strip" aria-label="Our approach">
        <span>Slow beauty</span><i>—</i><span>Skilled hands</span><i>—</i><span>Beautifully individual</span><i>—</i><span>Always considered</span>
      </div>

      <section className="manifesto section-shell section-space">
        <p className="eyebrow">Our philosophy</p>
        <div>
          <h2>We believe great hair starts with <em>being heard.</em></h2>
          <p>Every visit begins with a real conversation. We notice the details—your natural texture, your routine, how you want to feel—and create something beautifully individual from there.</p>
          <Link className="text-link" href="/team">Meet the people behind the chairs <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="services-preview section-space">
        <div className="section-shell section-heading row-heading">
          <div>
            <p className="eyebrow">The menu</p>
            <h2>Made for your<br /><em>every day.</em></h2>
          </div>
          <p>Modern technique, honest guidance and time to get it right.</p>
        </div>
        <div className="service-cards section-shell">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <div><span>{service.price}</span><Link href="/services" aria-label={`View ${service.title} services`}>View menu <span aria-hidden="true">→</span></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="ritual section-shell section-space">
        <div className="ritual-images">
          <img className="ritual-main" src="/images/hero-cut.webp" alt="A relaxing hair wash ritual at the basin" width="1400" height="900" loading="lazy" />
          <img className="ritual-detail" src="/images/product-shelf.webp" alt="Curated hair treatment products on a warm stone shelf" width="800" height="1200" loading="lazy" />
        </div>
        <div className="ritual-copy">
          <p className="eyebrow">A softer kind of salon</p>
          <h2>Space to pause.<br />Time to <em>exhale.</em></h2>
          <p>There is no rush here. Settle in with something warm, let us take care of the details, and leave feeling more yourself than when you arrived.</p>
          <div className="ritual-points">
            <span>01</span><p>Long-form consultations, always</p>
            <span>02</span><p>Lower-tox colour and considered care</p>
            <span>03</span><p>A calm, intimate studio atmosphere</p>
          </div>
          <Link className="button button-outline" href="/book">Plan your visit</Link>
        </div>
      </section>

      <section className="testimonial section-space">
        <p className="quote-mark" aria-hidden="true">“</p>
        <blockquote>Carli understands that the best hair doesn’t announce itself. It just sits beautifully, grows out softly, and makes you feel entirely at home in yourself.</blockquote>
        <p>— A long-time guest</p>
      </section>

      <section className="journal-preview section-shell section-space">
        <div className="journal-feature-image">
          <img src="/images/product-pedestal.webp" alt="A curated collection of salon hair care" width="1200" height="1500" loading="lazy" />
        </div>
        <div className="journal-feature-copy">
          <p className="eyebrow">From the journal</p>
          <p className="article-meta">Care notes · 5 min read</p>
          <h2>The quiet luxury of healthy, well-understood hair.</h2>
          <p>Why a smaller routine, chosen for your actual texture, can do more than a shelf full of promises.</p>
          <Link className="text-link" href="/journal">Read the story <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="closing-cta">
        <div>
          <p className="eyebrow">Your chair is ready</p>
          <h2>Come as you are.<br /><em>Leave as yourself.</em></h2>
          <Link className="button button-bone" href="/book">Book your visit <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}
