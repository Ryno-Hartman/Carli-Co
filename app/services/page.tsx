import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Services", description: "Explore Carli & Co. cuts, colour and restorative hair rituals." };

const serviceGroups = [
  {
    index: "01", title: "Cut & finish", note: "Shape with intention", image: "/images/precision-cut.webp",
    items: [
      ["Signature cut & finish", "A considered consultation, tailored cut and effortless finish.", "R980"],
      ["Short cut & finish", "Precision shape for cropped and above-the-ear styles.", "R760"],
      ["Restyle", "For a meaningful change in shape, length or feeling.", "R1 150"],
      ["Fringe edit", "A neat reset between full appointments.", "R260"],
      ["Wash & finish", "A restorative wash and polished, lasting finish.", "R680"],
    ],
  },
  {
    index: "02", title: "Considered colour", note: "Dimension, not disguise", image: "/images/hair-texture.webp",
    items: [
      ["Gloss & tone", "Refresh tone, condition and shine between colour visits.", "R850"],
      ["Root colour", "Seamless root maintenance with a soft, natural result.", "R1 150"],
      ["Face frame", "Small, strategic lightness around the face.", "R1 250"],
      ["Half head dimension", "Hand-placed brightness through the crown and sides.", "R1 850"],
      ["Full dimensional colour", "A complete, multi-tonal colour transformation.", "R2 650"],
    ],
  },
  {
    index: "03", title: "Hair rituals", note: "Care from the root", image: "/images/hero-cut.webp",
    items: [
      ["Scalp reset", "Clarify, rebalance and soothe with a guided scalp ritual.", "R450"],
      ["Deep repair", "Bond-building care for compromised or colour-treated hair.", "R590"],
      ["Silk & shine", "Deep hydration and gloss for softness without weight.", "R520"],
      ["Ritual with finish", "Your chosen treatment followed by a signature finish.", "R980"],
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero services-hero section-shell">
        <div>
          <p className="eyebrow">Service menu</p>
          <h1>Care in every<br /><em>detail.</em></h1>
        </div>
        <p>Our pricing reflects the time, expertise and care each service requires. Your stylist will always confirm the plan before we begin.</p>
      </section>

      <section className="service-menu section-shell">
        {serviceGroups.map((group, groupIndex) => (
          <article className="service-group" key={group.title}>
            <div className="service-group-heading">
              <span>{group.index}</span>
              <p>{group.note}</p>
              <h2>{group.title}</h2>
              <img src={group.image} alt="" width="1000" height="1200" loading={groupIndex === 0 ? "eager" : "lazy"} />
            </div>
            <div className="service-list">
              {group.items.map(([name, description, price]) => (
                <div className="service-row" key={name}>
                  <div><h3>{name}</h3><p>{description}</p></div>
                  <span>{price}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="consultation-callout section-shell section-space">
        <p className="eyebrow">Not sure what to book?</p>
        <h2>Start with a conversation.</h2>
        <p>Choose “consultation” and tell us what is on your mind. We will help shape the right appointment from there.</p>
        <Link className="button button-rust" href="/book">Book a consultation</Link>
      </section>

      <section className="fine-print section-shell">
        <div><span>01</span><h3>Colour notes</h3><p>All new colour guests begin with a consultation. A patch test may be required at least 48 hours before your appointment.</p></div>
        <div><span>02</span><h3>Timing</h3><p>Please allow generous time for colour appointments. Beautiful work is unhurried work, and we will confirm timing when you book.</p></div>
        <div><span>03</span><h3>Cancellations</h3><p>We kindly ask for 24 hours’ notice when plans change, so we can offer your chair to someone waiting.</p></div>
      </section>
    </>
  );
}
