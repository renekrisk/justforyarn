import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const Home: React.FC = () => {
  useReveal();

  // Image from user's Pinterest link: https://pin.it/45LU8sPDB
  const HERO_IMAGE = 'https://i.pinimg.com/736x/92/65/62/926562f53efe433d21672dbb95b24149.jpg';
  // Artist portrait photo from logo/me2.jpeg & crochet detail
  const WORK_IMAGE_1 = '/me2.jpeg';
  const WORK_IMAGE_2 = 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop';

  const WHATSAPP_LINK = 'https://wa.me/254714036800?text=' + encodeURIComponent("Hi! I saw your crochet website and I'd like to make a custom order request.");

  return (
    <div style={{ background: '#FFFFFF', color: '#111111' }}>
      {/* ── 1. FULL-BLEED HERO SECTION ─────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          minHeight: '600px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Full-bleed Background Image */}
        <img
          src={HERO_IMAGE}
          alt="Handcrafted Crochet Atelier"
          className="hero-img"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* Soft Dark Vignette Overlay for readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 100%)',
          }}
        />

        {/* Hero Content — Focused strictly on welcoming visitors and custom orders */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            padding: '0 24px',
            maxWidth: '820px',
            marginTop: '40px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-head)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.35em',
              color: 'rgba(255,255,255,0.7)',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Handcrafted Crochet Atelier
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-sub)',
              fontSize: 'clamp(36px, 6vw, 76px)',
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              marginBottom: '20px',
            }}
          >
            Made by hand.<br />
            <em style={{ fontStyle: 'italic', fontWeight: 600 }}>Made with love.</em>
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '520px',
              margin: '0 auto 36px',
            }}
          >
            Bespoke wearables, plushies, and cozy accents crafted stitch by stitch with sustainable fibers.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Link to="/shop" className="btn btn-red">
              Explore Collection
            </Link>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.4)',
                paddingBottom: '2px',
                transition: 'color 0.2s ease, border-color 0.2s ease',
              }}
            >
              <span>Request Custom Piece</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. THE MAKER SPOTLIGHT (PRESERVED CONTENT) ───────────────── */}
      <section style={{ padding: '120px 0', background: '#FAFAFA', borderTop: '1px solid #EEEEEE' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '80px',
              alignItems: 'center',
            }}
            className="editorial-grid"
            data-reveal
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#D11F5E',
                  marginBottom: '16px',
                  display: 'block',
                }}
              >
                The Maker
              </span>

              <h2
                style={{
                  fontFamily: 'var(--font-sub)',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: '#111111',
                  marginBottom: '24px',
                }}
              >
                Intention in every loop,<br />
                <em style={{ fontStyle: 'italic', fontWeight: 600 }}>crafted by hand</em>.
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-sub)',
                  fontSize: '17px',
                  lineHeight: 1.8,
                  color: '#444444',
                  marginBottom: '32px',
                }}
              >
                Crochet is a meditation of hands and fiber. Every piece carries hours of dedicated focus, carefully chosen yarn, and individual character that mass production can never replicate.
              </p>

              <Link
                to="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#D11F5E',
                  textDecoration: 'none',
                }}
              >
                <span>Read Her Story & Journey</span>
                <span>→</span>
              </Link>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
              }}
            >
              <div
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  height: '320px',
                  border: '1px solid #E8E8E8',
                }}
              >
                <img
                  src={WORK_IMAGE_1}
                  alt="Crochet detail"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  height: '320px',
                  marginTop: '40px',
                  border: '1px solid #E8E8E8',
                }}
              >
                <img
                  src={WORK_IMAGE_2}
                  alt="Yarn and craft"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. BESPOKE CUSTOM ORDERS (NEW ADDITION) ─────────────────── */}
      <section style={{ padding: '100px 0', background: '#FFFFFF', borderTop: '1px solid #EEEEEE' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }} data-reveal>
            <span
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#D11F5E',
                marginBottom: '14px',
                display: 'block',
              }}
            >
              Custom Creation Process
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-sub)',
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 400,
                color: '#111111',
                marginBottom: '16px',
              }}
            >
              How custom orders work
            </h2>
            <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.7 }}>
              Turn your inspiration photos or personal ideas into one-of-a-kind handmade creations.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '40px',
            }}
            data-reveal
          >
            <div style={{ textTransform: 'none' }}>
              <span
                style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '28px',
                  fontWeight: 800,
                  color: '#D11F5E',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                01.
              </span>
              <h3 style={{ fontFamily: 'var(--font-sub)', fontSize: '20px', fontWeight: 600, color: '#111111', marginBottom: '10px' }}>
                Share Your Idea
              </h3>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: 1.7 }}>
                Send us your reference picture, inspiration pin, or description directly on WhatsApp.
              </p>
            </div>

            <div>
              <span
                style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '28px',
                  fontWeight: 800,
                  color: '#D11F5E',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                02.
              </span>
              <h3 style={{ fontFamily: 'var(--font-sub)', fontSize: '20px', fontWeight: 600, color: '#111111', marginBottom: '10px' }}>
                Select Colors & Fit
              </h3>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: 1.7 }}>
                Choose yarn palette, soft cotton fibers, and exact custom sizing for a perfect finish.
              </p>
            </div>

            <div>
              <span
                style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '28px',
                  fontWeight: 800,
                  color: '#D11F5E',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                03.
              </span>
              <h3 style={{ fontFamily: 'var(--font-sub)', fontSize: '20px', fontWeight: 600, color: '#111111', marginBottom: '10px' }}>
                Handcrafted & Delivered
              </h3>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: 1.7 }}>
                Hand-stitched with love and delivered directly to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. STATEMENT QUOTE BANNER ──────────────────────────────── */}
      <section style={{ padding: '120px 0', background: '#FAFAFA', borderTop: '1px solid #EEEEEE', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }} data-reveal>
            <blockquote
              style={{
                fontFamily: 'var(--font-sub)',
                fontSize: 'clamp(24px, 3.5vw, 36px)',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.4,
                color: '#111111',
                marginBottom: '28px',
              }}
            >
              "No factory lines, no rush. Just pure human connection woven fiber by fiber."
            </blockquote>

            <p
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#888888',
              }}
            >
              Handcrafted Atelier
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. CALL TO ACTION BANNER ───────────────────────────────── */}
      <section style={{ padding: '100px 0', background: '#111111', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" data-reveal>
          <h2
            style={{
              fontFamily: 'var(--font-sub)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 400,
              color: '#FFFFFF',
              marginBottom: '20px',
            }}
          >
            Ready to bring warmth home?
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: '#999999',
              maxWidth: '480px',
              margin: '0 auto 40px',
            }}
          >
            Explore our curated works or get in touch for custom orders.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/shop" className="btn btn-red">
              Browse Collection
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white"
            >
              Request Custom Order
            </a>
          </div>
        </div>
      </section>

      <style>{`
        /* Web (Desktop) perfect hero image framing */
        @media (min-width: 960px) {
          .hero-img {
            object-fit: cover !important;
            object-position: center 35% !important;
          }
        }

        @media (max-width: 960px) {
          .editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        /* Reveal animation */
        [data-reveal] {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Home;
