"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our people" },
  { href: "/journal", label: "Journal" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Carli and Co home">
        <span>Carli</span><i>&amp;</i><span>Co.</span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav id="site-navigation" className={open ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
        {navigation.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href} className={active ? "active" : undefined}>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link href="/book" className="header-book">Book a visit</Link>
    </header>
  );
}
