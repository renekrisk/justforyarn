import React from 'react';
import { Link } from 'react-router-dom';

const WHATSAPP = 'https://wa.me/254757900294?text=' + encodeURIComponent("Hi! I'd like to place a custom order with Just For Yarns.");

const SHOP_HERO = '/logo&images/heroyarn.jpg';

/* INSPOIMAGES for shop categories */
const AMIGURUMI   = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet cat beanie.jfif';
const WEARABLES   = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet granny square cropped sweater.jfif';
const BLANKETS    = '/logo&images/INSPOIMAGES/download (2).jfif';
const TOTES       = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet footies_socks.jfif';
const HOME_ACCENTS = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/crochet set handmade with love.jfif';
const GIFT_SETS   = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/crochet wine red ruffle hat.jfif';

const categories = [
  {
    num: '01',
    name: 'Amigurumi & Plush',
    desc: 'Sculptural plush figures stitched loop by loop — each one a singular object of gentle art.',
    price: 'From KSh 1,500',
    img: AMIGURUMI,
  },
  {
    num: '02',
    name: 'Wearables & Knitwear',
    desc: 'Scarves, beanies, cardigans, and tops — tactile pieces made for the body and for the eye.',
    price: 'From KSh 800',
    img: WEARABLES,
  },
  {
    num: '03',
    name: 'Blankets & Throws',
    desc: 'Heirloom-quality throws in warm, breathable cotton. Custom dimensions available.',
    price: 'From KSh 3,000',
    img: BLANKETS,
  },
  {
    num: '04',
    name: 'Totes & Accessories',
    desc: 'Open-mesh market totes, coin purses, and shoulder bags — form married to function.',
    price: 'From KSh 600',
    img: TOTES,
  },
  {
    num: '05',
    name: 'Home Accents',
    desc: 'Decorative coasters, wall hangings, and cushion covers that bring warmth to any interior.',
    price: 'From KSh 500',
    img: HOME_ACCENTS,
  },
  {
    num: '06',
    name: 'Gift Sets',
    desc: 'Curated sets, beautifully packaged — the perfect gift for someone who appreciates the handmade.',
    price: 'From KSh 2,000',
    img: GIFT_SETS,
  },
];

const Shop: React.FC = () => {
  return (
    <div className="pg-shop">

      {/* ── 1. LV-STYLE EDITORIAL TWIN TILES ────────────────────── */}
      <section className="lv-twin-tiles">
        <div className="lv-tile">
          <div className="lv-tile__media">
            <img src={AMIGURUMI} alt="Amigurumi" />
          </div>
          <div className="lv-tile__copy">
            <p className="lv-tile__label">New In</p>
            <h2 className="lv-tile__heading">Amigurumi<br />& Plush Figures</h2>
            <p className="lv-body-text" style={{ marginBottom: '24px' }}>
              Sculptural plush figures stitched loop by loop — each one a singular object of gentle art. Perfect for gifts, collectors, or anyone who appreciates the handmade.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lv-text-link">
              Inquire Now
            </a>
          </div>
        </div>

        <div className="lv-tile">
          <div className="lv-tile__media">
            <img src={WEARABLES} alt="Wearables" />
          </div>
          <div className="lv-tile__copy">
            <p className="lv-tile__label">Savoir-Faire</p>
            <h2 className="lv-tile__heading">Wearables<br />& Knitwear</h2>
            <p className="lv-body-text" style={{ marginBottom: '24px' }}>
              Scarves, beanies, cardigans, and tops — tactile pieces made for the body and for the eye. Each garment is tailored to your exact measurements.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lv-text-link">
              Inquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. LV-STYLE 3-TILE CATEGORY GRID ────────────────────── */}
      <section className="lv-trio-section">
        <div className="lv-trio-header">
          <p className="lv-kicker">All Collections</p>
          <h2 className="lv-heading-md">Explore the Full Range</h2>
        </div>
        <div className="lv-trio-grid">
          {categories.slice(0, 3).map((cat) => (
            <div key={cat.num} className="lv-trio-item">
              <div className="lv-trio-item__media">
                <img src={cat.img} alt={cat.name} />
              </div>
              <div className="lv-trio-item__copy">
                <h3 className="lv-trio-item__name">{cat.name}</h3>
                <p className="lv-body-text" style={{ marginBottom: '12px' }}>{cat.desc}</p>
                <span className="shop-price">{cat.price}</span>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lv-text-link sm">
                  Inquire
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. LV-STYLE FEATURE PANEL — REACH OUT ─────────────────── */}
      <section className="lv-feature-panel reverse">
        <div className="lv-feature-panel__copy">
          <p className="lv-kicker">Reach Out</p>
          <h2 className="lv-heading-lg">
            Something entirely<br /><em>your own.</em>
          </h2>
          <p className="lv-body-text">
            Share a reference image, a color palette, or simply describe what you're imagining. Every bespoke piece is a collaboration — your vision, my hands.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lv-cta-ghost">
              Reach Out
            </a>
            <Link to="/about" className="lv-text-link">
              About the Atelier
            </Link>
          </div>
        </div>
        <div className="lv-feature-panel__media">
          <img src={SHOP_HERO} alt="Bespoke Commission" />
        </div>
      </section>

      {/* ── 4. LV-STYLE 3-TILE CATEGORY GRID — SECOND ROW ───────── */}
      <section className="lv-trio-section" style={{ borderTop: '1px solid #EBEBEB' }}>
        <div className="lv-trio-header">
          <p className="lv-kicker">More Collections</p>
          <h2 className="lv-heading-md">Continue Exploring</h2>
        </div>
        <div className="lv-trio-grid">
          {categories.slice(3, 6).map((cat) => (
            <div key={cat.num} className="lv-trio-item">
              <div className="lv-trio-item__media">
                <img src={cat.img} alt={cat.name} />
              </div>
              <div className="lv-trio-item__copy">
                <h3 className="lv-trio-item__name">{cat.name}</h3>
                <p className="lv-body-text" style={{ marginBottom: '12px' }}>{cat.desc}</p>
                <span className="shop-price">{cat.price}</span>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lv-text-link sm">
                  Inquire
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. LV-STYLE CLOSING MANIFESTO ───────────────────────── */}
      <section className="lv-manifesto">
        <div className="lv-manifesto__inner">
          <p className="lv-kicker light">Just For Yarns · Nairobi</p>
          <h2 className="lv-manifesto__headline">
            Made by hand.<br /><em>Made with love.</em>
          </h2>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lv-cta-ghost light">
            Reach Out
          </a>
        </div>
      </section>

    </div>
  );
};

export default Shop;
