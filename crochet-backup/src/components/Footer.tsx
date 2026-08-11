import './Footer.css'

const links = {
  collections: ['Clothing', 'Bags & Accessories', 'Home Decor', 'Baby & Kids'],
  connect: ['Instagram', 'Pinterest', 'TikTok', 'WhatsApp'],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__cta-strip">
        <div className="container footer__cta-inner">
          <div>
            <p className="t-label" style={{ color: 'var(--color-red)', marginBottom: '0.75rem' }}>
              Ready to start?
            </p>
            <h2 className="t-headline footer__cta-headline">
              Let us make something<br /><em>beautiful together.</em>
            </h2>
          </div>
          <a className="btn-primary footer__cta-btn" href="#custom" id="footer-cta-btn">
            Request a piece
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div className="footer__main">
        <div className="container footer__main-inner">
          <div className="footer__brand">
            <div className="footer__wordmark">
              <span className="footer__wordmark-name">Knot & Craft</span>
            </div>
            <p className="t-body footer__tagline">
              Handcrafted crochet made with intention. Each piece a work of art.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <div>
              <h3 className="footer__nav-heading t-label">Collections</h3>
              <ul role="list">
                {links.collections.map((l) => (
                  <li key={l}>
                    <a className="footer__nav-link" href="#products">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="footer__nav-heading t-label">Connect</h3>
              <ul role="list">
                {links.connect.map((l) => (
                  <li key={l}>
                    <a className="footer__nav-link" href="#" aria-label={`Visit us on ${l}`}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="container footer__bottom">
          <p className="footer__copy t-label">
            © {year} Knot & Craft. All rights reserved.
          </p>
          <p className="footer__copy t-label" style={{ color: 'var(--color-ink-muted)' }}>
            Made with ♡ : one stitch at a time
          </p>
        </div>
      </div>
    </footer>
  )
}
