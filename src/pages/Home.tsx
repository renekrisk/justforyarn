import React from 'react';
import { Link } from 'react-router-dom';

const WHATSAPP = 'https://wa.me/254757900294?text=' + encodeURIComponent("Hi! I'd like to discuss a bespoke commission with Just For Yarns.");

/* ── IMAGES ─────────────────────────────────────────────────── */
const HERO         = '/logo&images/H.jpg';
const ME_FOR_HOME  = '/logo&images/meforhome.jpeg';
const YARN_PALETTE = '/logo&images/colorfulyarn.jfif';
const CRAFT_IMG    = '/logo&images/yarninasack.jfif';

const AMIGURUMI   = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet cat beanie.jfif';
const WEARABLES   = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet granny square cropped sweater.jfif';
const HOME_ACCENT = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet Bubu gown.jfif';

/* ── COMPONENT ──────────────────────────────────────────────── */
const Home: React.FC = () => {
  return (
    <main className="home">

      {/* ══════════════════════════════════════════════════════════
          1 · OPENING STATEMENT — Minimal, powerful
         ══════════════════════════════════════════════════════════ */}
      <section className="home-opening">
        <div className="home-opening__inner">
          <p className="home-opening__text">
            "In a world obsessed with speed,<br />
            there is a quiet rebellion in taking the slow path."
          </p>
          <span className="home-opening__attr">— The Atelier</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2 · HERO — Full-bleed cinematic image
         ══════════════════════════════════════════════════════════ */}
      <section className="home-hero">
        <div className="home-hero__media">
          <img src={HERO} alt="Just For Yarns — SS 2025" />
        </div>
        <div className="home-hero__caption">
          <span>SS 2025 · EDITORIAL</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3 · THE COLLECTION — 3 featured pieces
         ══════════════════════════════════════════════════════════ */}
      <section className="home-collection">
        <div className="home-collection__header">
          <span className="home-kicker">The Collection</span>
          <h2 className="home-heading-lg">Featured Pieces</h2>
        </div>
        <div className="home-collection__grid">
          <div className="home-collection__item">
            <div className="home-collection__media">
              <img src={AMIGURUMI} alt="Amigurumi" />
            </div>
            <div className="home-collection__info">
              <span className="home-collection__num">01</span>
              <h3 className="home-collection__title">Amigurumi & Plush</h3>
              <p className="home-body-text">
                Sculptural plush figures stitched loop by loop — each one a singular object of gentle art.
              </p>
              <Link to="/shop" className="home-text-link">Discover</Link>
            </div>
          </div>

          <div className="home-collection__item">
            <div className="home-collection__media">
              <img src={WEARABLES} alt="Wearables" />
            </div>
            <div className="home-collection__info">
              <span className="home-collection__num">02</span>
              <h3 className="home-collection__title">Wearables & Knitwear</h3>
              <p className="home-body-text">
                Scarves, beanies, cardigans, and tops — tactile pieces made for the body and for the eye.
              </p>
              <Link to="/shop" className="home-text-link">Explore</Link>
            </div>
          </div>

          <div className="home-collection__item">
            <div className="home-collection__media">
              <img src={HOME_ACCENT} alt="Living Space" />
            </div>
            <div className="home-collection__info">
              <span className="home-collection__num">03</span>
              <h3 className="home-collection__title">Home Accents</h3>
              <p className="home-body-text">
                Decorative pieces that bring warmth and texture to any interior.
              </p>
              <Link to="/shop" className="home-text-link">Shop Accents</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4 · THE PROCESS — Visual timeline
         ══════════════════════════════════════════════════════════ */}
      <section className="home-process">
        <div className="home-process__header">
          <span className="home-kicker">The Process</span>
          <h2 className="home-heading-lg">From Fiber to Form</h2>
        </div>
        <div className="home-process__steps">
          <div className="home-process__step">
            <span className="home-process__num">01</span>
            <h3 className="home-process__title">Select</h3>
            <p className="home-body-text">
              Premium Kenyan cottons, plush wools, and sustainable blends — each fiber chosen for its story.
            </p>
          </div>
          <div className="home-process__step">
            <span className="home-process__num">02</span>
            <h3 className="home-process__title">Design</h3>
            <p className="home-body-text">
              Every piece begins as a vision — yours, or ours. Sketches, swatches, and conversations.
            </p>
          </div>
          <div className="home-process__step">
            <span className="home-process__num">03</span>
            <h3 className="home-process__title">Create</h3>
            <p className="home-body-text">
              Loop by loop, stitch by stitch. Hundreds of individual decisions, each made with care.
            </p>
          </div>
          <div className="home-process__step">
            <span className="home-process__num">04</span>
            <h3 className="home-process__title">Deliver</h3>
            <p className="home-body-text">
              A one-of-a-kind piece, packaged with intention, ready to become part of your story.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5 · THE ARTISAN — Personal story
         ══════════════════════════════════════════════════════════ */}
      <section className="home-artisan">
        <div className="home-artisan__grid">
          <div className="home-artisan__media">
            <img src={ME_FOR_HOME} alt="The Artisan" />
          </div>
          <div className="home-artisan__content">
            <span className="home-kicker">The Artisan</span>
            <h2 className="home-heading-lg">
              Hands that create<br />
              are never <em>idle.</em>
            </h2>
            <p className="home-body-text home-body-text--lg">
              My grandmother used to say that the hands that create are never idle, and the heart that gives is never empty.
              Under the mango tree in our compound, the women of our family would gather — my grandmother with her kiondo baskets,
              my aunties threading beads and folding kangas — and I learned early that craft is memory, craft is love made visible.
            </p>
            <p className="home-body-text home-body-text--lg">
              I picked up my first crochet hook when I was twelve. Today, every piece that leaves my studio carries
              that same intention — a quiet conversation between my hands and the fibers I choose.
            </p>
            <Link to="/about" className="home-btn-ghost">Read My Story</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6 · MATERIALS — Yarn showcase
         ══════════════════════════════════════════════════════════ */}
      <section className="home-materials">
        <div className="home-materials__header">
          <span className="home-kicker">Materials</span>
          <h2 className="home-heading-lg">The Fiber</h2>
        </div>
        <div className="home-materials__grid">
          <div className="home-materials__item">
            <div className="home-materials__media">
              <img src={YARN_PALETTE} alt="Yarn Palette" />
            </div>
            <h3 className="home-materials__title">Color</h3>
            <p className="home-body-text">
              Soft Kenyan cottons, plush wools, and sustainable blends — each fiber chosen for how it feels against your skin.
            </p>
          </div>
          <div className="home-materials__item">
            <div className="home-materials__media">
              <img src={CRAFT_IMG} alt="Yarn in Sack" />
            </div>
            <h3 className="home-materials__title">Texture</h3>
            <p className="home-body-text">
              From delicate lace-weight threads to chunky, squishy roving — every texture tells a different story.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7 · BESPOKE — Commission CTA
         ══════════════════════════════════════════════════════════ */}
      <section className="home-bespoke">
        <div className="home-bespoke__inner">
          <span className="home-kicker">Bespoke</span>
          <h2 className="home-heading-xl">
            Your Vision,<br />
            <em>Stitched by Hand</em>
          </h2>
          <p className="home-body-text home-body-text--lg">
            Share a Pinterest pin, a sketch, or a simple description. We translate your ideas
            into a one-of-a-kind handmade piece — tailored to your exact colors, sizing, and fiber preferences.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="home-btn-primary">
            Start a Conversation
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          8 · CLOSING MANIFESTO
         ══════════════════════════════════════════════════════════ */}
      <section className="home-manifesto">
        <div className="home-manifesto__inner">
          <p className="home-kicker light">Just For Yarns · Nairobi</p>
          <h2 className="home-manifesto__headline">
            Made by hand.<br />
            <em>Made with love.</em>
          </h2>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="home-cta-ghost light">
            Commission a Piece
          </a>
        </div>
      </section>

    </main>
  );
};

export default Home;
