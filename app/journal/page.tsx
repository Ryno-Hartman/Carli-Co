import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Journal", description: "Quiet notes on hair, care, colour and living beautifully." };

const stories = [
  { category: "Colour notes", read: "4 min", title: "Lived-in colour is not a trend. It is a philosophy.", excerpt: "A softer way to think about brightness, dimension and the months between appointments.", image: "/images/hair-texture.webp" },
  { category: "Ritual", read: "6 min", title: "Your scalp is skin. Here is how to care for it.", excerpt: "A simple, sensible guide to cleansing well and knowing when your scalp needs more support.", image: "/images/hero-cut.webp" },
  { category: "The cut", read: "3 min", title: "What makes a haircut grow out beautifully?", excerpt: "The quiet design decisions that keep shape and movement working long after your salon visit.", image: "/images/precision-cut.webp" },
];

export default function JournalPage() {
  return (
    <>
      <section className="journal-hero page-hero section-shell">
        <div><p className="eyebrow">The journal</p><h1>Notes on hair,<br /><em>care & living well.</em></h1></div>
        <p>Useful thoughts from behind the chair. No hard sells, no impossible routines—just honest guidance for understanding your hair a little better.</p>
      </section>

      <article className="featured-story section-shell">
        <div className="featured-story-image"><img src="/images/product-shelf.webp" alt="A minimal shelf of carefully chosen hair and beauty treatments" width="1100" height="1500" fetchPriority="high" /></div>
        <div className="featured-story-copy">
          <p className="eyebrow">Care notes · 5 min read</p>
          <h2>The quiet luxury of healthy, well-understood hair.</h2>
          <p>We are taught to chase transformation. But often, the most luxurious thing is understanding what your hair already does well—and building from there.</p>
          <Link className="text-link" href="/book">Ask us about your care ritual <span aria-hidden="true">→</span></Link>
        </div>
      </article>

      <section className="story-grid section-shell section-space">
        {stories.map((story) => (
          <article className="story-card" key={story.title}>
            <div className="story-image"><img src={story.image} alt="" width="1000" height="1200" loading="lazy" /></div>
            <p className="article-meta">{story.category} · {story.read} read</p>
            <h2>{story.title}</h2>
            <p>{story.excerpt}</p>
            <Link className="text-link" href="/book">Bring this to your consultation <span aria-hidden="true">→</span></Link>
          </article>
        ))}
      </section>

      <section className="newsletter">
        <div className="section-shell">
          <p className="eyebrow">A note, now and then</p>
          <h2>Good hair thoughts,<br /><em>sent quietly.</em></h2>
          <p>Seasonal care notes, salon news and the occasional beautiful thing.</p>
          <form action="mailto:hello@carliandco.co.za" method="post" encType="text/plain" className="newsletter-form">
            <label htmlFor="newsletter-email">Email address</label>
            <div><input id="newsletter-email" name="email" type="email" placeholder="you@example.com" required /><button type="submit" aria-label="Join the Carli and Co journal newsletter">Join the journal <span aria-hidden="true">→</span></button></div>
          </form>
        </div>
      </section>
    </>
  );
}
