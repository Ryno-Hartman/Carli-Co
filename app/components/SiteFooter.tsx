import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="wordmark footer-mark" aria-label="Carli and Co home">
            <span>Carli</span><i>&amp;</i><span>Co.</span>
          </Link>
          <p>Considered hair, made personal.</p>
        </div>
        <div className="footer-links">
          <div>
            <p className="footer-label">Explore</p>
            <Link href="/services">Services</Link>
            <Link href="/team">Our people</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/book">Book a visit</Link>
          </div>
          <div>
            <p className="footer-label">Visit</p>
            <p>Cape Town, South Africa</p>
            <p>Tuesday — Saturday</p>
            <a href="mailto:hello@carliandco.co.za">hello@carliandco.co.za</a>
          </div>
          <div>
            <p className="footer-label">Follow</p>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">Pinterest <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Carli &amp; Co.</p>
        <p>Quiet luxury. Exceptional craft.</p>
      </div>
    </footer>
  );
}
