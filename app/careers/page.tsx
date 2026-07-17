import type { Metadata } from "next";
import Image from "next/image";
import { business } from "../content";

export const metadata: Metadata = { title: "Careers", description: "Career opportunities at Carli & Co Organic Hair & Beauty." };

const reasons = [
  {
    number: "01",
    title: "Elevated Learning & Professional Growth",
    copy: "At our salon, excellence is a journey. We invest in world-class education, advanced training and curated experiences that allow you to refine your artistry and evolve with confidence.",
  },
  {
    number: "02",
    title: "Recognition That Reflects Your Craft",
    copy: "We believe true talent should be rewarded. Our performance-based bonuses and tailored incentives recognise both passion and precision—because your work deserves distinction.",
  },
  {
    number: "03",
    title: "A Culture of Elegance & Collaboration",
    copy: "Step into a space where luxury meets authenticity. Our team is warm, welcoming and deeply committed to creating beauty with integrity. Together, we uphold a standard of sophistication, care and creativity you’ll be proud to be part of.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="page-hero careers-hero section-shell">
        <div>
          <p className="eyebrow">Careers at Carli &amp; Co</p>
          <h1>Grow your craft<br /><em>with us.</em></h1>
        </div>
        <p>Join a welcoming, collaborative salon culture that values thoughtful education, beautiful work and genuine care.</p>
      </section>

      <section className="career-intro section-shell section-space">
        <Image src="/images/precision-cut.webp" alt="A stylist refining a haircut" width="1000" height="1250" fetchPriority="high" />
        <div>
          <p className="eyebrow">Why join the salon</p>
          <h2>A place to refine<br /><em>your artistry.</em></h2>
          <p>Carli &amp; Co’s careers page is centred on professional development, meaningful recognition and a team culture where sophistication and authenticity can coexist.</p>
        </div>
      </section>

      <section className="career-reasons section-shell">
        {reasons.map((reason) => (
          <article key={reason.number}>
            <span>{reason.number}</span>
            <h2>{reason.title}</h2>
            <p>{reason.copy}</p>
          </article>
        ))}
      </section>

      <section className="career-apply section-space">
        <div className="section-shell">
          <p className="eyebrow">Start a conversation</p>
          <h2>Send us your <em>résumé.</em></h2>
          <p>Introduce yourself, share the kind of work you love and attach your current résumé.</p>
          <a className="button button-bone" href={`mailto:${business.email}?subject=Career%20enquiry%20at%20Carli%20%26%20Co`}>Email {business.email}</a>
        </div>
      </section>
    </>
  );
}
