import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Plumbing <em>as it was meant to be.</em></h3>
            <p>
              MSJ Plumbing &amp; Drainage Ltd — a Dorset-born practice serving Poole, Bournemouth, Christchurch and
              the surrounding coast with 24/7 emergency response and timeless craft.
            </p>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/areas">Areas</Link>
            <Link href="/testimonials">Work</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Reach us</h4>
            <a href="tel:01202080151">01202 080 151</a>
            <a href="mailto:info@msjplumbing.co.uk">info@msjplumbing.co.uk</a>
            <p>8–10 Yarmouth Road<br />Poole, BH12 1AG</p>
          </div>
          <div className="footer-col">
            <h4>Hours</h4>
            <p>24 hours, every day</p>
            <p>Including weekends &amp; bank holidays</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MSJ Plumbing &amp; Drainage Ltd</span>
          <span>Dorset · Poole · Bournemouth</span>
          <span>Crafted with copper &amp; care</span>
        </div>
      </div>
    </footer>
  );
}
