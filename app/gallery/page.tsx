import type { Metadata } from "next";
import Image from "next/image";
import { business } from "../content";

export const metadata: Metadata = { title: "Gallery & Reviews", description: "A visual mockup for Carli & Co salon work and approved client reviews." };

const gallery = [
  ["/images/hair-texture.webp", "Dimensional blonde hair"],
  ["/images/salon-stations.webp", "Warm salon interior"],
  ["/images/precision-cut.webp", "Precision haircut in progress"],
  ["/images/blowdry.webp", "Hair being styled"],
  ["/images/product-shelf.webp", "Salon product shelf"],
  ["/images/salon-portrait.webp", "Finished salon hairstyle"],
  ["/images/hero-cut.webp", "Relaxing basin treatment"],
  ["/images/product-pedestal.webp", "Organic hair care products"],
];

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero gallery-hero section-shell">
        <div>
          <p className="eyebrow">Gallery &amp; client reviews</p>
          <h1>Hair, health<br /><em>&amp; happiness.</em></h1>
        </div>
        <p>A flexible visual layout ready for Carli &amp; Co’s approved client transformations, salon photographs and testimonials.</p>
      </section>

      <section className="gallery-grid section-shell section-space" aria-label="Salon gallery mockup">
        {gallery.map(([src, alt], index) => (
          <figure className={`gallery-item gallery-item-${index + 1}`} key={src}>
            <Image src={src} alt={alt} width="1000" height="1200" loading={index < 2 ? "eager" : "lazy"} />
          </figure>
        ))}
      </section>

      <section className="reviews-mockup section-space">
        <div className="section-shell reviews-layout">
          <div>
            <p className="eyebrow">Client reviews</p>
            <h2>Real words,<br /><em>when you’re ready.</em></h2>
          </div>
          <div className="review-editor-note">
            <p className="eyebrow">Mockup note</p>
            <p>The original website includes a client-review section, but no review text has been invented or copied without approval. Replace this note in <strong>app/gallery/page.tsx</strong> with selected, approved reviews.</p>
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div>
          <p className="eyebrow">Ready for your own transformation?</p>
          <h2>Look good.<br /><em>Feel beautiful.</em></h2>
          <a className="button button-bone" href={business.bookingUrl}>Book an appointment <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}
