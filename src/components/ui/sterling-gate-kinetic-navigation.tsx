import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export function KineticNavigation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection to darken navbar when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu Open/Close Animation Effect
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const navWrap = containerRef.current!.querySelector(".nav-overlay-wrapper");
      const menu = containerRef.current!.querySelector(".menu-content");
      const overlay = containerRef.current!.querySelector(".overlay");
      const bgPanel = containerRef.current!.querySelector(".backdrop-layer");
      const menuLinks = containerRef.current!.querySelectorAll(".nav-link");

      const menuButton = containerRef.current!.querySelector(".nav-close-btn");
      const menuButtonTexts = menuButton?.querySelectorAll("p");

      const tl = gsap.timeline();

      if (isMenuOpen) {
        // OPEN
        if (navWrap) navWrap.setAttribute("data-nav", "open");

        tl.set(navWrap, { display: "block" })
          .set(menu, { xPercent: 0 }, "<")
          .fromTo(menuButtonTexts, { yPercent: 0 }, { yPercent: -100, duration: 0.35, ease: "power2.out" })
          .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35 }, "<")
          .fromTo(bgPanel, { xPercent: 100 }, { xPercent: 0, duration: 0.45, ease: "power3.out" }, "<")
          .fromTo(menuLinks, { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.06, duration: 0.35, ease: "power2.out" }, "-=0.2");
      } else {
        // CLOSE
        if (navWrap) navWrap.setAttribute("data-nav", "closed");

        tl.to(menuButtonTexts, { yPercent: 0, duration: 0.3, ease: "power2.in" })
          .to(overlay, { autoAlpha: 0, duration: 0.3 }, "<")
          .to(bgPanel, { xPercent: 100, duration: 0.35, ease: "power3.in" }, "<")
          .set(navWrap, { display: "none" });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isMenuOpen]);

  // keydown Escape handling
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div ref={containerRef}>
      <div className="site-header-wrapper">
        <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
          <div className="container is--full">
            <nav className="nav-row">
              {/* Brand Logo */}
              <Link to="/" aria-label="home" className="nav-logo-row w-inline-block">
                <img
                  src="/jfy.png"
                  alt="Just For Yarns logo"
                  className="nav-logo-img"
                />
              </Link>

              {/* SINGLE CLEAN MENU BUTTON — icon only, no text */}
              <div className="nav-row__right">
                <button
                  type="button"
                  className="nav-close-btn"
                  onClick={toggleMenu}
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMenuOpen}
                >
                  <span className="menu-icon">
                    {isMenuOpen ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                </button>
              </div>
            </nav>
          </div>
        </header>
      </div>

      <section className="fullscreen-menu-container">
        <div
          data-nav={isMenuOpen ? "open" : "closed"}
          className="nav-overlay-wrapper"
          style={{ display: isMenuOpen ? "block" : "none" }}
        >
          <div className="overlay" onClick={closeMenu}></div>
          <nav className="menu-content">
            <div className="menu-bg">
              <div className="backdrop-layer"></div>
            </div>

            <div className="menu-content-wrapper">
              <ul className="menu-list">
                <li className="menu-list-item">
                  <Link to="/" onClick={closeMenu} className="nav-link w-inline-block">
                    <p className="nav-link-text">Home</p>
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link to="/shop" onClick={closeMenu} className="nav-link w-inline-block">
                    <p className="nav-link-text">Shop & Works</p>
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link to="/about" onClick={closeMenu} className="nav-link w-inline-block">
                    <p className="nav-link-text">About Her</p>
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link to="/contact" onClick={closeMenu} className="nav-link w-inline-block">
                    <p className="nav-link-text">Contact</p>
                  </Link>
                </li>
              </ul>

              <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid #EEEEEE' }}>
                <a
                  href="https://wa.me/254714036800?text=Hi!%20I'd%20like%20to%20make%20a%20custom%20crochet%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: '#D11F5E',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: 700,
                    padding: '14px',
                    borderRadius: '24px',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                  }}
                >
                  Request Custom Order on WhatsApp
                </a>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default KineticNavigation;
