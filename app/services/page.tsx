import type { Metadata } from "next";
import Image from "next/image";
import { business, serviceGroups } from "../content";

export const metadata: Metadata = { title: "Services", description: "Carli & Co hair, colour, styling and private salon services in Claremont, WA." };

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero services-hero section-shell">
        <div>
          <p className="eyebrow">Services &amp; pricing · AUD</p>
          <h1>Hair care,<br /><em>made personal.</em></h1>
        </div>
        <p>Browse the existing Carli &amp; Co menu below. For colour corrections, extensions, perms and smoothing services, begin with a complimentary consultation.</p>
      </section>

      <nav className="service-jump section-shell" aria-label="Service categories">
        {serviceGroups.map((group) => <a href={`#${group.id}`} key={group.id}>{group.title}</a>)}
      </nav>

      <section className="service-menu section-shell">
        {serviceGroups.map((group, groupIndex) => (
          <article className="service-group" id={group.id} key={group.id}>
            <div className="service-group-heading">
              <span>{String(groupIndex + 1).padStart(2, "0")}</span>
              <p>{group.kicker}</p>
              <h2>{group.title}</h2>
              {group.image && <Image src={group.image} alt="" width="1000" height="1200" loading={groupIndex === 0 ? "eager" : "lazy"} />}
            </div>
            <div className="service-list">
              {group.items.map((item) => (
                <div className="service-row" key={item.name}>
                  <div><h3>{item.name}</h3>{item.description && <p>{item.description}</p>}</div>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="consultation-callout section-shell section-space">
        <p className="eyebrow">Not sure what to choose?</p>
        <h2>Start with a free consultation.</h2>
        <p>Talk through your hair goals and we will help you choose the right service and appointment length.</p>
        <a className="button button-rust" href={business.bookingUrl}>Book online <span aria-hidden="true">↗</span></a>
      </section>
    </>
  );
}
