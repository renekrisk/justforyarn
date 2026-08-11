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
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const WHATSAPP = 'https://wa.me/254714036800?text=' + encodeURIComponent("Hi! I loved reading your story on Just For Yarns and I'd like to request a custom crochet order.");

// Artisan photo from logo/me.jpeg
const ARTIST_IMAGE = '/me.jpeg';

// Portfolio Showcase Items
const PORTFOLIO_ITEMS = [
  {
    title: 'The Statement Bell-Sleeve Sweater',
    category: 'Handcrafted Wearable',
    desc: 'Hand-crocheted in soft sky blue and neutral tones with flared bell sleeves and delicate fringe detailing.',
    image: 'https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Amigurumi Plush Companions',
    category: 'Handmade Plushies',
    desc: 'Custom stuffed plush dolls hand-stitched loop by loop with hypoallergenic cotton yarn.',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Bohemian Open-Mesh Tote',
    category: 'Handmade Accessory',
    desc: 'Spacious cotton market tote woven for everyday trips, coffee runs, and weekend getaways.',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Heritage Waffle Blanket',
    category: 'Home Accents',
    desc: 'Soft textured throw blanket stitched in warm earth tones, bringing warmth to any living space.',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=800&auto=format&fit=crop',
  },
];

const About: React.FC = () => {
  useReveal();

  return (
    <div style={{ background: '#FFFFFF', color: '#111111', overflowX: 'hidden' }}>
      {/* ── 1. AUTHENTIC HERO BLOCK ─────────────────────────────── */}
      <section className="about-hero">
        <div className="container">
          <div data-reveal style={{ maxWidth: '820px' }}>
            <h1
              style={{
                fontFamily: 'var(--font-sub)',
                fontSize: 'clamp(32px, 5.5vw, 72px)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#111111',
                marginBottom: '20px',
              }}
            >
              Stitched in Kenya,<br />
              <em style={{ fontStyle: 'italic', fontWeight: 600, color: 'var(--red)' }}>woven with heart.</em>
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(16px, 1.9vw, 20px)',
                lineHeight: 1.75,
                color: '#444444',
                maxWidth: '680px',
                margin: 0,
              }}
            >
              Hi, I’m the face and hands behind Just For Yarns. Every cardigan, plushie, and tote you see here was made right here in Kenya — loop by loop, stitch by stitch, with love.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. VERTICAL ARTIST PORTRAIT CARD ────────────────────── */}
      <section style={{ padding: '0 0 48px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            data-reveal
            className="artist-card-wrapper"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              height: 'clamp(440px, 68vh, 660px)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={ARTIST_IMAGE}
              alt="The Artisan wearing her handmade crochet piece outdoors in Kenya"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 20%',
              }}
            />

            {/* Gradient Overlay & Caption */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '24px 28px',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-sub)',
                  fontSize: 'clamp(20px, 3vw, 28px)',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                "Crochet isn't just yarn to me — it's how I express joy, warmth, and individuality."
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HER STORY & JOURNEY ───────────────────────────────── */}
      <section style={{ padding: '48px 0', borderTop: '1px solid #EEEEEE', borderBottom: '1px solid #EEEEEE' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: '40px',
              alignItems: 'start',
            }}
            className="editorial-grid"
            data-reveal
          >
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-sub)',
                  fontSize: 'clamp(26px, 3.5vw, 40px)',
                  fontWeight: 400,
                  lineHeight: 1.16,
                  color: '#111111',
                  marginBottom: '16px',
                }}
              >
                How My Journey Began
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: '#444444',
                  marginBottom: '16px',
                }}
              >
                Growing up in Kenya, I was always drawn to texture and color. My journey into crochet started simply — with a single hook, a ball of yarn, and an eagerness to create something with my own hands.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: '#444444',
                  margin: 0,
                }}
              >
                What began as making cozy pieces for myself and family turned into requests from friends and strangers alike. People loved that each garment felt personal, soft, and unique. That is how <strong>Just For Yarns</strong> was born.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {[
                {
                  title: 'Hand-Selected Yarns',
                  text: 'I carefully pick soft cottons, plush wools, and durable yarn blends so every sweater, top, and plushie feels gentle and comfortable.',
                },
                {
                  title: 'Custom Made for You',
                  text: 'No mass production. You choose your favorite colors, custom fit, and design ideas, and I stitch it specifically for you.',
                },
                {
                  title: 'Crafted with Passion in Kenya',
                  text: 'Every order supports local artisan craft. Each piece takes hours of patient focus, poured straight from my heart into your hands.',
                },
              ].map((pillar, i) => (
                <div
                  key={i}
                  style={{
                    padding: '16px 0',
                    borderBottom: '1px solid #EEEEEE',
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '17px', fontWeight: 700, color: '#111111', marginBottom: '4px' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.65, color: '#666666', margin: 0 }}>
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PORTFOLIO & SELECTED WORKS ───────────────────────── */}
      <section style={{ padding: '48px 0', borderBottom: '1px solid #EEEEEE' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', marginBottom: '32px' }} data-reveal>
            <h2
              style={{
                fontFamily: 'var(--font-sub)',
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                fontWeight: 400,
                color: '#111111',
                lineHeight: 1.15,
                marginBottom: '10px',
              }}
            >
              Selected Craft Portfolio
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: '#666666', lineHeight: 1.65, margin: 0 }}>
              Here is a glimpse of bespoke wearables, plushies, and custom creations handmade in our studio.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
            }}
            data-reveal
          >
            {PORTFOLIO_ITEMS.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ height: '240px', overflow: 'hidden', borderRadius: '14px', marginBottom: '14px' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span
                    style={{
                      color: 'var(--red)',
                      fontFamily: 'var(--font-head)',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                      display: 'block',
                    }}
                  >
                    {item.category}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-head)',
                      fontSize: '17px',
                      fontWeight: 700,
                      color: '#111111',
                      marginBottom: '6px',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: '#666666',
                      marginBottom: '14px',
                      flex: 1,
                    }}
                  >
                    {item.desc}
                  </p>

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--red)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span>Request Piece on WhatsApp</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. BOTTOM CALL TO ACTION ────────────────────────────── */}
      <section style={{ padding: '60px 0', background: '#111111', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" data-reveal style={{ maxWidth: '640px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-sub)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 400,
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: '14px',
            }}
          >
            Want a custom piece crafted for you?<br />
            <em style={{ fontStyle: 'italic', fontWeight: 600 }}>Let's bring your idea to life.</em>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.65,
              marginBottom: '28px',
            }}
          >
            Send your design inspiration or color preferences directly on WhatsApp. I look forward to creating for you!
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-red">
              WhatsApp Custom Order
            </a>
            <Link to="/shop" className="btn btn-outline-white">
              Explore All Works
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .about-hero {
          padding-top: 80px;
          padding-bottom: 24px;
        }

        @media (max-width: 960px) {
          .about-hero {
            padding-top: 70px;
            padding-bottom: 20px;
          }
          .editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .artist-card-wrapper {
            max-width: 100% !important;
            height: clamp(360px, 58vh, 520px) !important;
          }
        }

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

export default About;
