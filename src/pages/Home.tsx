import React from 'react';

const WHATSAPP = 'https://wa.me/254757900294?text=' + encodeURIComponent("Hi! I'd like to discuss a bespoke commission with Just For Yarns.");

/* ── IMAGES ─────────────────────────────────────────────────── */
const HERO         = '/logo&images/H.jpg';
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
          1 · HERO — Full-bleed video-style background
         ══════════════════════════════════════════════════════════ */}
      <section className="home-hero">
        <div className="home-hero__media">
          <img src={HERO} alt="Just For Yarns — SS 2025" />
        </div>
        <div className="home-hero__content">
          <h2>Just For Yarns</h2>
          <button className="home-hero__btn">Discover the Collection</button>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2 · IMAGE BREAK — Full-bleed with overlay text
         ══════════════════════════════════════════════════════════ */}
      <section className="home-image-break">
        <div className="home-image-break__media">
          <img src={YARN_PALETTE} alt="The Craft" />
        </div>
        <div className="home-image-break__content">
          <h2>The Art of Slow Fiber</h2>
          <button className="home-image-break__btn">Discover the Collections</button>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3 · SERVICES — 3-column grid
         ══════════════════════════════════════════════════════════ */}
      <section className="home-services">
        <div className="home-services__header">
          <h2>Services</h2>
        </div>
        <div className="home-services__grid">
          <div className="home-service-card">
            <div className="home-service-card__media">
              <img src={AMIGURUMI} alt="Amigurumi" />
            </div>
            <div className="home-service-card__content">
              <h3>Amigurumi & Plush</h3>
              <p>Sculptural plush figures stitched loop by loop — each one a singular object of gentle art.</p>
              <button className="home-service-card__btn">Inquire Now</button>
            </div>
          </div>

          <div className="home-service-card">
            <div className="home-service-card__media">
              <img src={WEARABLES} alt="Wearables" />
            </div>
            <div className="home-service-card__content">
              <h3>Wearables & Knitwear</h3>
              <p>Scarves, beanies, cardigans, and tops — tactile pieces made for the body and for the eye.</p>
              <button className="home-service-card__btn">Inquire Now</button>
            </div>
          </div>

          <div className="home-service-card">
            <div className="home-service-card__media">
              <img src={HOME_ACCENT} alt="Home Accents" />
            </div>
            <div className="home-service-card__content">
              <h3>Home Accents</h3>
              <p>Decorative pieces that bring warmth and texture to any interior.</p>
              <button className="home-service-card__btn">Inquire Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4 · BESPOKE — Commission CTA
         ══════════════════════════════════════════════════════════ */}
      <section className="home-bespoke">
        <div className="home-bespoke__media">
          <img src={CRAFT_IMG} alt="Bespoke Commission" />
        </div>
        <div className="home-bespoke__content">
          <h2>Bespoke Commissions</h2>
          <p>Share a Pinterest pin, a sketch, or a simple description. We translate your ideas into a one-of-a-kind handmade piece.</p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="home-bespoke__btn">
            Start a Conversation
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5 · LINKS — 4-column footer links
         ══════════════════════════════════════════════════════════ */}
      <section className="home-links">
        <hr className="home-links__hr" />
        <div className="home-links__container">
          <div className="home-links__column">
            <div className="home-links__head">HELP</div>
            <div className="home-links__cell"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">You can <span>call</span> or <span>email us</span>.</a></div>
            <div className="home-links__cell"><a href="#">FAQ's</a></div>
            <div className="home-links__cell"><a href="#">Product Care</a></div>
            <div className="home-links__cell"><a href="#">Stores</a></div>
          </div>
          <div className="home-links__column">
            <div className="home-links__head">SERVICES</div>
            <div className="home-links__cell"><a href="#">Repairs</a></div>
            <div className="home-links__cell"><a href="#">Personalization</a></div>
            <div className="home-links__cell"><a href="#">Art of Gifting</a></div>
            <div className="home-links__cell"><a href="#">Download our Apps</a></div>
          </div>
          <div className="home-links__column">
            <div className="home-links__head">ABOUT JUST FOR YARNS</div>
            <div className="home-links__cell"><a href="#">Fashion Shows</a></div>
            <div className="home-links__cell"><a href="#">Art & Culture</a></div>
            <div className="home-links__cell"><a href="#">The Atelier</a></div>
            <div className="home-links__cell"><a href="#">Sustainability</a></div>
            <div className="home-links__cell"><a href="#">Latest News</a></div>
            <div className="home-links__cell"><a href="#">Careers</a></div>
          </div>
          <div className="home-links__column">
            <div className="home-links__head">CONNECT</div>
            <div className="home-links__cell"><a href="#"><span>Sign up</span> for first access to latest collections, campaigns and videos.</a></div>
            <div className="home-links__cell"><a href="#">Follow Us</a></div>
          </div>
        </div>
      </section>

      <hr className="home-links__hr" />

      {/* ══════════════════════════════════════════════════════════
          6 · FOOTER
         ══════════════════════════════════════════════════════════ */}
      <footer className="home-footer">
        <a href="#" className="home-footer__lang"><i className="fa-solid fa-globe"></i><span>ENGLISH (INTL)</span></a>
        <ul>
          <li><a href="#">Sitemap</a></li>
          <li><a href="#">Legal & privacy</a></li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </footer>

      <div className="home-footer__logo">Just For Yarns</div>

    </main>
  );
};

export default Home;
