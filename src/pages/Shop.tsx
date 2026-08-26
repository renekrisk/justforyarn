import React from 'react';
import './Home.css';

const WHATSAPP = 'https://wa.me/254757900294?text=' + encodeURIComponent("Hi Fiona! I'd like to place a custom order with Just For Yarns.");

const AMIGURUMI   = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet cat beanie.jfif';
const WEARABLES   = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet granny square cropped sweater.jfif';
const BLANKETS    = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet Bubu gown.jfif';
const TOTES       = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet footies_socks.jfif';
const HOME_ACCENTS = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/crochet set handmade with love.jfif';
const GIFT_SETS   = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/crochet wine red ruffle hat.jfif';

const categories = [
  {
    num: '01',
    name: 'Amigurumi & Plush',
    desc: 'Sculptural plush figures stitched loop by loop — each one a singular object of gentle art.',
    img: AMIGURUMI,
  },
  {
    num: '02',
    name: 'Wearables & Knitwear',
    desc: 'Scarves, beanies, cardigans, and gowns — tactile pieces tailored for the body.',
    img: WEARABLES,
  },
  {
    num: '03',
    name: 'Blankets & Throws',
    desc: 'Heirloom-quality throws in warm, breathable organic cotton fibers.',
    img: BLANKETS,
  },
  {
    num: '04',
    name: 'Accessories & Totes',
    desc: 'Market totes, coin purses, and shoulder bags — form married to daily function.',
    img: TOTES,
  },
  {
    num: '05',
    name: 'Home Accents',
    desc: 'Decorative coasters, wall tapestries, and cushion covers for warm interior accents.',
    img: HOME_ACCENTS,
  },
  {
    num: '06',
    name: 'Gift Sets',
    desc: 'Curated handmade sets beautifully packaged for thoughtful gifting.',
    img: GIFT_SETS,
  },
];

const Shop: React.FC = () => {
  return (
    <div className="home-editorial">

      {/* ── 1. COLLECTIONS SHOWCASE ───────────────────────────── */}
      <section className="exhibit-grid-section" style={{ marginTop: '60px', marginBottom: '140px' }}>
        <div className="exhibit-grid-section__header">
          <span className="meta-eyebrow">[ COLLECTIONS ARCHIVE ]</span>
          <h1 className="editorial-heading">Shop Handcrafted Works</h1>
        </div>

        <div className="exhibit-grid">
          {categories.map((cat) => (
            <div key={cat.num} className="exhibit-item">
              <div className="museum-frame frame-3-4">
                <img src={cat.img} alt={cat.name} className="museum-media" />
              </div>
              <div className="service-card__content">
                <span className="meta-label">{cat.name}</span>
                <p className="service-card__desc" style={{ fontSize: '13px', marginTop: '6px', marginBottom: '14px' }}>
                  {cat.desc}
                </p>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="editorial-action-link">
                  <span>INQUIRE NOW</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. BESPOKE CALLOUT BANNER ─────────────────────────── */}
      <section className="bespoke-wide-showcase" style={{ marginTop: '100px', marginBottom: '140px' }}>
        <div className="bespoke-wide-showcase__text-block">
          <h2 className="editorial-heading">
            Need Something Entirely Unique?
          </h2>
          <p className="editorial-manifesto">
            Fiona translates your Pinterest moodboards, color choices, and measurements into a singular hand-crafted garment.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-action-link editorial-action-link--large"
          >
            <span>COMMISSION VIA WHATSAPP →</span>
          </a>
        </div>
      </section>

    </div>
  );
};

export default Shop;
