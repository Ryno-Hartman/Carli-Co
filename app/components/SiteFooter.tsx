import Link from "next/link";
import { business, navigation } from "../content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="wordmark footer-mark" aria-label="Carli and Co home">
            <span>Carli</span><i>&amp;</i><span>Co</span>
          </Link>
          <p>Organic hair and beauty in Claremont, Western Australia.</p>
        </div>
        <div className="footer-links">
          <div>
            <p className="footer-label">Explore</p>
            {navigation.slice(1).map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
          <div>
            <p className="footer-label">Visit</p>
            <a href={business.mapsUrl}>{business.address}</a>
            <p>Tuesday to Saturday</p>
          </div>
          <div>
            <p className="footer-label">Contact</p>
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            <a href={business.bookingUrl}>Book online <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Carli &amp; Co Organic Hair &amp; Beauty.</p>
        <p>Claremont · WA</p>
      </div>
    </footer>
  );
}
