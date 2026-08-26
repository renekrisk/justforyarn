import React from 'react';
import './About.css';

const WHATSAPP_LINK = 'https://wa.me/254757900294?text=' + encodeURIComponent("Hi Fiona! I'd like to discuss a custom piece.");

const FIONA_PORTRAIT = '/logo&images/meforabout.jpeg';

const About: React.FC = () => {
  return (
    <div className="pg-about">
      <div className="about-container">
        <div className="about-grid">

          {/* LEFT — Sticky portrait */}
          <div className="about-media-col">
            <div className="about-image-card">
              <img
                src={FIONA_PORTRAIT}
                alt="Fiona"
                className="about-image"
              />
            </div>
            <p className="about-caption">Fiona · Founder & Master Artisan</p>
          </div>

          {/* RIGHT — Text column with stacked visual interest */}
          <div className="about-text-col">

            <span className="about-eyebrow">Just For Yarns · Nairobi</span>

            <h1 className="about-heading">
              Stitched in Nairobi<br />
              with Heart.
            </h1>

            <div className="about-rule" />

            <p className="about-paragraph">
              Hi, I'm Fiona — the hands and heart behind Just For Yarns.
              Every piece you see here was made in my small studio in Kenya, 
              loop by loop, with intention.
            </p>

            <p className="about-paragraph">
              I don't mass-produce. Each garment, plush, or accessory is crocheted 
              from hand-selected organic cottons and local yarns — built to last and made just for you.
            </p>

            <blockquote className="about-quote">
              "Craft is memory. Craft is love made visible."
            </blockquote>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="about-action-btn"
            >
              START A BESPOKE ORDER →
            </a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
