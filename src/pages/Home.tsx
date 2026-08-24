import React from 'react';
import { Link } from 'react-router-dom';

const WHATSAPP = 'https://wa.me/254757900294?text=' + encodeURIComponent("Hi! I'd like to initiate a bespoke commission with Just For Yarns.");

const HERO        = '/logo&images/heroyarn.jpg';
const CRAFT_IMG   = '/logo&images/yarninasack.jfif';
const ME_FOR_HOME = '/logo&images/meforhome.jpeg';

/* INSPOIMAGES for product showcases */
const AMIGURUMI   = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet cat beanie.jfif';
const WEARABLES   = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet granny square cropped sweater.jfif';
const HOME_ACCENT = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet Bubu gown.jfif';
const BESPOKE     = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet hexagon cardigan.jfif';
const GIFT_SETS   = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/crochet set handmade with love.jfif';

const Home: React.FC = () => {
  return (
    <div className="lv-home">

      {/* ── SECTION 1: SPLIT HERO (Desktop) / Full-bleed (Mobile) ── */}
      <section className="lv-hero lv-hero--split">
        <img src={HERO} alt="Just For Yarns Collection" className="lv-hero__img" />
        <div className="lv-hero__body">
          <h1 className="lv-hero__headline">
            Handcrafted<br />
            <em>with Love</em>
          </h1>
          <p className="lv-hero__sub">
            Every piece is a singular object — stitched loop by loop, carrying the warmth of the hands that made it.
          </p>
          <Link to="/shop" className="lv-cta-ghost" style={{ marginTop: '32px', alignSelf: 'flex-start' }}>
            Discover the Collection
          </Link>
        </div>
        <div className="lv-hero__scroll">
          <span>Scroll</span>
          <div className="lv-hero__scroll-line" />
        </div>
      </section>

      {/* ── SECTION 2: PHILOSOPHY STRIP ─────────────────────────── */}
      <section className="lv-philosophy-strip">
        <div className="lv-philosophy-inner">
          <p className="lv-philosophy-text">
            "In a world obsessed with speed, there is a quiet rebellion in taking the slow path."
          </p>
        </div>
      </section>

      {/* ── SECTION 3: EDITORIAL TWIN TILES ─────────────────────── */}
      <section className="lv-twin-tiles">
        <div className="lv-tile">
          <div className="lv-tile__media">
            <img src={AMIGURUMI} alt="Amigurumi" />
            <div className="lv-tile__num">01</div>
          </div>
          <div className="lv-tile__copy">
            <p className="lv-tile__label">New In</p>
            <h2 className="lv-tile__heading">Amigurumi<br />& Plush Figures</h2>
            <p className="lv-body-text">
              Sculptural plush figures stitched loop by loop — each one a singular object of gentle art.
            </p>
            <Link to="/shop" className="lv-text-link">Shop Now</Link>
          </div>
        </div>

        <div className="lv-tile">
          <div className="lv-tile__media">
            <img src={WEARABLES} alt="Wearables" />
            <div className="lv-tile__num">02</div>
          </div>
          <div className="lv-tile__copy">
            <p className="lv-tile__label">Savoir-Faire</p>
            <h2 className="lv-tile__heading">Wearables<br />& Knitwear</h2>
            <p className="lv-body-text">
              Scarves, beanies, cardigans, and tops — tactile pieces made for the body and for the eye.
            </p>
            <Link to="/shop" className="lv-text-link">Explore</Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SAVOIR-FAIRE CRAFT SECTION ───────────────── */}
      <section className="lv-craft-section">
        <div className="lv-craft-full-bleed">
          <img src={ME_FOR_HOME} alt="The Artisan" className="lv-craft-full-img" />
          <div className="lv-craft-full-overlay">
            <div className="lv-craft-full-content">
              <p className="lv-kicker light">Savoir-Faire</p>
              <h2 className="lv-heading-lg light">
                The Art of<br /><em>Slow Fiber</em>
              </h2>
              <p className="lv-body-text light">
                In a world obsessed with speed, there is a quiet rebellion in taking the slow path. Each loop requires a human hand, a steady breath, and a mind fully present in the act of creation. When you hold a piece from Just For Yarns, you are holding hundreds of individual decisions — each one made with care.
              </p>
              <div className="lv-craft-stats">
                <div className="lv-craft-stat">
                  <span className="lv-craft-stat__num light">100%</span>
                  <span className="lv-craft-stat__label light">Handmade</span>
                </div>
                <div className="lv-craft-stat">
                  <span className="lv-craft-stat__num light">1</span>
                  <span className="lv-craft-stat__label light">Piece at a Time</span>
                </div>
                <div className="lv-craft-stat">
                  <span className="lv-craft-stat__num light">∞</span>
                  <span className="lv-craft-stat__label light">Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: 3-TILE CATEGORY GRID ─────────────────────── */}
      <section className="lv-trio-section">
        <div className="lv-trio-header">
          <p className="lv-kicker">The Atelier</p>
          <h2 className="lv-heading-md">Explore the Collections</h2>
        </div>
        <div className="lv-trio-grid">
          <div className="lv-trio-item">
            <div className="lv-trio-item__media">
              <img src={HOME_ACCENT} alt="Living Space" />
            </div>
            <div className="lv-trio-item__copy">
              <h3 className="lv-trio-item__name">Living Space</h3>
              <p className="lv-body-text" style={{ marginBottom: '12px' }}>
                Decorative pieces that bring warmth and texture to any interior.
              </p>
              <Link to="/shop" className="lv-text-link sm">Shop Accents</Link>
            </div>
          </div>

          <div className="lv-trio-item">
            <div className="lv-trio-item__media">
              <img src={BESPOKE} alt="Bespoke" />
            </div>
            <div className="lv-trio-item__copy">
              <h3 className="lv-trio-item__name">Bespoke Commissions</h3>
              <p className="lv-body-text" style={{ marginBottom: '12px' }}>
                One-of-a-kind pieces tailored to your exact vision and measurements.
              </p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lv-text-link sm">Inquire Now</a>
            </div>
          </div>

          <div className="lv-trio-item">
            <div className="lv-trio-item__media">
              <img src={GIFT_SETS} alt="Gift Sets" />
            </div>
            <div className="lv-trio-item__copy">
              <h3 className="lv-trio-item__name">Gift Sets</h3>
              <p className="lv-body-text" style={{ marginBottom: '12px' }}>
                Curated sets, beautifully packaged for someone special.
              </p>
              <Link to="/shop" className="lv-text-link sm">Discover</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: REACH OUT FEATURE PANEL ──────────────────── */}
      <section className="lv-feature-panel reverse">
        <div className="lv-feature-panel__copy">
          <p className="lv-kicker">Reach Out</p>
          <h2 className="lv-heading-lg">
            Your Vision,<br />Stitched by Hand
          </h2>
          <p className="lv-body-text">
            Share a Pinterest pin, a sketch, or a simple description. We translate your ideas into a one-of-a-kind handmade piece — tailored to your exact colors, sizing, and fiber preferences.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lv-text-link">
            Start a Conversation
          </a>
        </div>
        <div className="lv-feature-panel__media">
          <img src={CRAFT_IMG} alt="Reach Out" />
        </div>
      </section>

      {/* ── SECTION 7: CLOSING MANIFESTO ────────────────────────── */}
      <section className="lv-manifesto">
        <div className="lv-manifesto__inner">
          <p className="lv-kicker light">Just For Yarns · Nairobi</p>
          <h2 className="lv-manifesto__headline">
            Made by hand.<br /><em>Made with love.</em>
          </h2>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lv-cta-ghost light">
            Commission a Piece
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
