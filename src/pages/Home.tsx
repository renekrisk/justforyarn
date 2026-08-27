import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const WHATSAPP_LINK = 'https://wa.me/254757900294?text=' + encodeURIComponent("Hi! I'd like to initiate a bespoke commission with Just For Yarns.");

/* ── LOCAL MEDIA PATHS ──────────────── */
const HERO_VIDEO           = '/logo&images/video/herosection.mp4';
const CAMPAIGN_VIDEO_1     = '/logo&images/video/dudefromherosection.mp4';
const PROCESS_FILM         = '/logo&images/video/yarnonshelf.mp4';
const MODELLING_VIDEO      = '/logo&images/video/twinsmodellingsweaters.mp4';
const MENSWEAR_VIDEO       = '/logo&images/video/blackguysinyarn (1).mp4';
const CAMPAIGN_VIDEO_2     = '/logo&images/video/14882728_3840_2160_30fps.mp4';
const BESPOKE_FILM         = '/logo&images/video/whitegirlsmodellling.mp4';

const FIONA_PORTRAIT       = '/logo&images/meforhome.jpeg';
const PANORAMA_PHOTO       = '/logo&images/heroyarn.jPG';
const GALLERY_IMG_1        = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet granny square cropped sweater.jfif';
const GALLERY_IMG_4        = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet Bubu gown.jfif';

const EXHIBIT_ITEM_1       = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet cat beanie.jfif';
const EXHIBIT_ITEM_2       = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/crochet wine red ruffle hat.jfif';
const EXHIBIT_ITEM_3       = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet hexagon cardigan.jfif';

/* Lazy Video Component that only streams when scrolled into view */
const LazyVideo: React.FC<{ src: string; className?: string }> = ({ src, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      preload="metadata"
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

const Home: React.FC = () => {
  return (
    <div className="home-editorial">

      {/* ══════════════════════════════════════════════════════════
          1 · HERO SECTION (100vw x 100vh FULLSCREEN VIDEO)
          High-priority instant load for Hero
          ══════════════════════════════════════════════════════════ */}
      <section className="hero-fullscreen">
        <div className="hero-fullscreen__media">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="hero-fullscreen__video"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        </div>

        <div className="hero-fullscreen__action">
          <Link to="/inspo" className="hero-sleek-link">
            <span className="hero-sleek-link__text">EXPLORE INSPOS →</span>
            <div className="hero-double-underline">
              <span className="line-1"></span>
              <span className="line-2"></span>
            </div>
          </Link>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          2 · CREATOR DIPTYCH (FIONA)
          ══════════════════════════════════════════════════════════ */}
      <section className="atelier-diptych-section">
        <div className="atelier-diptych__grid">
          
          <div className="diptych-col diptych-col--portrait">
            <div className="museum-frame frame-2-3">
              <img
                src={FIONA_PORTRAIT}
                alt="Fiona"
                className="museum-media"
                loading="lazy"
              />
            </div>
            <div className="frame-meta">
              <span className="meta-label">Fiona · Founder & Master Artisan</span>
            </div>
          </div>

          <div className="diptych-col diptych-col--manifesto">
            <div className="signature-card">
              <span className="signature-eyebrow">FIONA</span>
              
              <blockquote className="signature-quote">
                “Every loop is a deliberate act of design. We do not mass-produce garments; 
                we sculpt tactile art that honors the human form.”
              </blockquote>

              <Link to="/about" className="editorial-action-link">
                <span>ABOUT FIONA →</span>
              </Link>
            </div>
          </div>

          <div className="diptych-col diptych-col--process">
            <div className="museum-frame frame-2-3">
              <LazyVideo src={PROCESS_FILM} className="museum-media" />
            </div>
            <div className="frame-meta">
              <span className="meta-label">Craft in Motion</span>
            </div>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          3 · CAMPAIGN FILM 01 (LAZY STREAMED FULL-BLEED VIDEO)
          ══════════════════════════════════════════════════════════ */}
      <section className="cinematic-break" style={{ marginBottom: '100px' }}>
        <div className="cinematic-break__frame">
          <LazyVideo src={CAMPAIGN_VIDEO_1} className="cinematic-break__video" />
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          4 · EDITORIAL GALLERY GRID (4-ITEM UNIFORM 3/4 ASPECT RATIO)
          ══════════════════════════════════════════════════════════ */}
      <section className="editorial-media-grid" style={{ marginTop: '100px', marginBottom: '100px' }}>
        <div className="editorial-media-grid__header">
          <h2 className="editorial-heading">Collections</h2>
        </div>

        <div className="editorial-media-grid__container">
          
          <div className="media-grid-card">
            <div className="museum-frame frame-3-4">
              <img src={GALLERY_IMG_1} alt="Knitwear" className="museum-media" loading="lazy" />
            </div>
            <div className="frame-meta">
              <span className="meta-label">Granny Square Knitwear</span>
            </div>
          </div>

          <div className="media-grid-card">
            <div className="museum-frame frame-3-4">
              <LazyVideo src={MODELLING_VIDEO} className="museum-media" />
            </div>
            <div className="frame-meta">
              <span className="meta-label">Sweaters</span>
            </div>
          </div>

          <div className="media-grid-card">
            <div className="museum-frame frame-3-4">
              <LazyVideo src={MENSWEAR_VIDEO} className="museum-media" />
            </div>
            <div className="frame-meta">
              <span className="meta-label">Menswear</span>
            </div>
          </div>

          <div className="media-grid-card">
            <div className="museum-frame frame-3-4">
              <img src={GALLERY_IMG_4} alt="Bubu Gown" className="museum-media" loading="lazy" />
            </div>
            <div className="frame-meta">
              <span className="meta-label">Bubu Gown</span>
            </div>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          5 · ASYMMETRIC DUAL-FOCUS EXHIBIT (PHOTO & VIDEO PAIR)
          ══════════════════════════════════════════════════════════ */}
      <section className="dual-focus-diptych-section">
        <div className="dual-focus-diptych">
          
          <div className="dual-focus-col dual-focus-col--photo">
            <div className="museum-frame frame-16-9">
              <img
                src={PANORAMA_PHOTO}
                alt="Raw Cotton"
                className="museum-media"
                loading="lazy"
              />
            </div>
            <div className="frame-meta">
              <span className="meta-label">Raw Cotton & Yarn</span>
            </div>
          </div>

          <div className="dual-focus-col dual-focus-col--video">
            <div className="museum-frame frame-3-4">
              <LazyVideo src={CAMPAIGN_VIDEO_2} className="museum-media" />
            </div>
            <div className="frame-meta">
              <span className="meta-label">Hand Spools</span>
            </div>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          6 · ARCHIVE GRID
          ══════════════════════════════════════════════════════════ */}
      <section className="exhibit-grid-section" style={{ marginTop: '140px' }}>
        <div className="exhibit-grid-section__header">
          <h2 className="editorial-heading">Archive</h2>
        </div>

        <div className="exhibit-grid">

          <div className="exhibit-item">
            <div className="museum-frame frame-3-4">
              <img
                src={EXHIBIT_ITEM_1}
                alt="Cat Beanie"
                className="museum-media"
                loading="lazy"
              />
            </div>
            <div className="frame-meta">
              <span className="meta-label">Cat Beanie</span>
            </div>
          </div>

          <div className="exhibit-item">
            <div className="museum-frame frame-1-1">
              <img
                src={EXHIBIT_ITEM_2}
                alt="Ruffle Beanie"
                className="museum-media"
                loading="lazy"
              />
            </div>
            <div className="frame-meta">
              <span className="meta-label">Ruffle Beanie</span>
            </div>
          </div>

          <div className="exhibit-item">
            <div className="museum-frame frame-3-4">
              <img
                src={EXHIBIT_ITEM_3}
                alt="Hexagon Cardigan"
                className="museum-media"
                loading="lazy"
              />
            </div>
            <div className="frame-meta">
              <span className="meta-label">Hexagon Cardigan</span>
            </div>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          7 · BESPOKE COMMISSIONS
          ══════════════════════════════════════════════════════════ */}
      <section className="bespoke-wide-showcase">
        <div className="bespoke-wide-showcase__video-frame">
          <LazyVideo src={BESPOKE_FILM} className="bespoke-wide-showcase__video" />
        </div>
        
        <div className="bespoke-wide-showcase__text-block">
          <h2 className="editorial-heading">
            BESPOKE
          </h2>
          <p className="editorial-manifesto">
            Custom hand-crafted pieces tailored to your silhouette. 
            Bring your vision, Pinterest board, or measurements.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-action-link editorial-action-link--large"
          >
            <span>WHATSAPP COMMISSIONS →</span>
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
