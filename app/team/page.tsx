import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Our People", description: "Meet the thoughtful stylists behind Carli & Co." };

const team = [
  { name: "Carli Meyer", role: "Founder · Creative director", image: "/images/salon-portrait.webp", focus: "Precision cuts · Lived-in colour", quote: "The best result is the one that makes sense for the person wearing it." },
  { name: "Mia Jacobs", role: "Senior stylist", image: "/images/precision-cut.webp", focus: "Short hair · Modern shape", quote: "I love finding the one detail that makes a cut feel completely individual." },
  { name: "Zara Daniels", role: "Colourist", image: "/images/blowdry.webp", focus: "Dimensional blondes · Gloss", quote: "Beautiful colour should catch the light, then grow out with grace." },
];

export default function TeamPage() {
  return (
    <>
      <section className="team-hero section-shell page-hero">
        <div>
          <p className="eyebrow">The people behind the chairs</p>
          <h1>Warm hands.<br /><em>Sharp eyes.</em></h1>
        </div>
        <div className="team-hero-image"><img src="/images/hero-cut.webp" alt="A caring salon wash experience" width="1600" height="1000" fetchPriority="high" /></div>
      </section>

      <section className="team-intro section-shell section-space">
        <p className="eyebrow">Our approach</p>
        <h2>We are listeners first,<br /><em>stylists second.</em></h2>
        <p>Good hair is technical. Great hair is personal. Our close-knit team combines exacting craft with the softer skill of understanding what you mean—even when you are not quite sure how to say it.</p>
      </section>

      <section className="team-grid section-shell">
        {team.map((person, index) => (
          <article className={`team-card team-card-${index + 1}`} key={person.name}>
            <div className="team-photo"><img src={person.image} alt={`${person.name}, ${person.role}`} width="1200" height="1500" loading="lazy" /></div>
            <p className="team-role">{person.role}</p>
            <h2>{person.name}</h2>
            <p className="team-focus">{person.focus}</p>
            <blockquote>“{person.quote}”</blockquote>
          </article>
        ))}
      </section>

      <section className="values section-space">
        <div className="section-shell">
          <p className="eyebrow">What matters here</p>
          <div className="value-grid">
            <div><span>01</span><h3>Honesty over hype</h3><p>We recommend what your hair needs, not what fills a menu.</p></div>
            <div><span>02</span><h3>Technique with feeling</h3><p>Exacting craft, adapted to the person in front of us.</p></div>
            <div><span>03</span><h3>Care without theatre</h3><p>Thoughtful service that feels warm, calm and easy.</p></div>
            <div><span>04</span><h3>Better, not more</h3><p>Lower-tox choices and routines you can actually sustain.</p></div>
          </div>
        </div>
      </section>

      <section className="team-cta section-shell section-space">
        <p className="eyebrow">Find your person</p>
        <h2>Not sure who to see?</h2>
        <p>Tell us a little about your hair and what you are hoping for. We will pair you with the right stylist.</p>
        <Link className="button button-rust" href="/book">Let us match you</Link>
      </section>
    </>
  );
}
