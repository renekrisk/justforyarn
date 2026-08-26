import React from 'react';
import { Link } from 'react-router-dom';
import EditorialImage from '../components/EditorialImage';

const WHATSAPP = 'https://wa.me/254757900294?text=' + encodeURIComponent("Hi! I loved reading your story on Just For Yarns and I'd like to request a custom crochet order.");

const PORTRAIT    = '/logo&images/meforabout.jpeg';
const YARN_DETAIL = '/logo&images/colorfulyarn.jfif';

/* INSPOIMAGES for portfolio */
const PORTFOLIO_1 = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet granny square cropped sweater.jfif';
const PORTFOLIO_2 = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet hexagon cardigan.jfif';
const PORTFOLIO_3 = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet Bubu gown.jfif';
const PORTFOLIO_4 = '/logo&images/INSPOIMAGES/peoplewearingtheminspos/crochet set handmade with love.jfif';

const portfolio = [
  {
    category: 'Handcrafted Wearable',
    title: 'The Statement Bell-Sleeve Sweater',
    desc: 'Hand-crocheted in soft sky blue and neutral tones with flared bell sleeves and delicate fringe detailing.',
    img: PORTFOLIO_1,
  },
  {
    category: 'Amigurumi',
    title: 'Plush Companions',
    desc: 'Custom stuffed plush dolls hand-stitched loop by loop with hypoallergenic cotton yarn.',
    img: PORTFOLIO_2,
  },
  {
    category: 'Accessory',
    title: 'Bohemian Open-Mesh Tote',
    desc: 'Spacious cotton market tote woven for everyday trips, coffee runs, and weekend getaways.',
    img: PORTFOLIO_3,
  },
  {
    category: 'Home Accent',
    title: 'Heritage Waffle Blanket',
    desc: 'Soft textured throw stitched in warm earth tones, bringing warmth to any living space.',
    img: PORTFOLIO_4,
  },
];

const pillars = [
  {
    num: '01',
    label: 'Hand-Selected Yarns',
    text: 'Soft Kenyan cottons, plush wools, and sustainable blends — each fiber chosen not just for how it feels against your skin, but for the story it carries from our local markets to your hands.',
  },
  {
    num: '02',
    label: 'Custom Made for You',
    text: 'No two people are alike, and no two pieces should be either. You bring the vision, I bring the hook — together we create something that belongs only to you.',
  },
  {
    num: '03',
    label: 'Made in Kenya with Heart',
    text: 'Every order is stitched in my Nairobi studio, where the rhythm of the hook matches the rhythm of my heartbeat. Each piece takes hours of patient focus, poured straight from my heart into your hands.',
  },
];

const About: React.FC = () => {
  return (
    <div className="pg-about">

      {/* ── 1. EDITORIAL HERO — Image side, text side ─────────── */}
      <section className="about-hero--editorial">
        <div className="about-hero__media">
          <EditorialImage
            src={PORTRAIT}
            alt="The Artisan"
            aspectRatio="3/4"
            fit="cover"
            focalPoint={{ x: 50, y: 20 }}
          />
        </div>
        <div className="about-hero__content">
          <h1 className="lv-hero__headline">
            Stitched in Kenya,<br />
            <em>woven with heart.</em>
          </h1>
          <p className="lv-hero__sub">
            I'm the hands and heart behind Just For Yarns. Every piece you see here was born in my small studio in Kenya — loop by loop, stitch by stitch, with love.
          </p>
        </div>
      </section>

      {/* ── 2. THE STORY — Magazine pull-quote layout ─────────── */}
      <section className="about-story-section">
        <div className="about-story-inner">
          <div>
            <span className="about-story-label">The Story</span>
            <h2 className="about-story-headline">
              How My Journey<br /><em>Began</em>
            </h2>
          </div>
          <div>
            <p className="about-story-body">
              My grandmother used to say that the hands that create are never idle, and the heart that gives is never empty. Under the mango tree in our compound, the women of our family would gather — my grandmother with her kiondo baskets, my aunties threading beads and folding kangas — and I learned early that craft is memory, craft is love made visible.
            </p>
            <p className="about-story-body">
              I picked up my first crochet hook when I was twelve — a simple aluminum hook my grandmother pressed into my palm one rainy afternoon. The first thing I made was a wonky little coaster, full of gaps and uneven stitches, but she insisted it was beautiful because it was made with intention.
            </p>
            <div className="about-story-pullquote">
              "The colors of Kenya began to find their way into my work: the rust-red earth of the Rift Valley, the deep green of the tea fields in the highlands, the golden ochre of the savanna at sunset."
            </div>
            <p className="about-story-body">
              I taught myself from library books and YouTube tutorials, my fingers learning the rhythm of yarn over, pull through, repeat. Today, every piece that leaves my studio carries that same intention — a quiet conversation between my hands and the fibers I choose.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. THE PILLARS — Editorial 3-column grid ───────────── */}
      <section className="about-pillars-section">
        <div className="about-pillars-header">
          <p className="lv-kicker" style={{ marginBottom: '16px' }}>The Atelier</p>
          <h2 className="lv-heading-md">What Drives Every Stitch</h2>
        </div>
        <div className="about-pillars-grid">
          {pillars.map((pillar, i) => (
            <div key={i} className="about-pillar-item">
              <div className="about-pillar-num">{pillar.num}</div>
              <h3 className="about-pillar-title">{pillar.label}</h3>
              <p className="about-pillar-text">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. FULL-BLEED QUOTE ─────────────────────────────────── */}
      <section className="lv-manifesto about-manifesto">
        <div className="lv-manifesto__inner">
          <p className="lv-kicker light">The Artisan</p>
          <h2 className="lv-manifesto__headline">
            "Crochet is my love letter<br />to patience — to the quiet magic<br />of turning a single thread<br />into something that wraps<br />around you like a hug."
          </h2>
        </div>
      </section>

      {/* ── 5. 2-TILE PORTFOLIO ─────────────────────────────────── */}
      <section className="lv-twin-tiles about-portfolio">
        {portfolio.slice(0, 2).map((item, i) => (
          <div key={i} className="lv-tile">
            <div className="lv-tile__media">
              <EditorialImage
                src={item.img}
                alt={item.title}
                aspectRatio="4/5"
                fit="cover"
                focalPoint={{ x: 50, y: 30 }}
              />
            </div>
            <div className="lv-tile__copy">
              <p className="lv-tile__label">{item.category}</p>
              <h2 className="lv-tile__heading">{item.title}</h2>
              <p className="lv-body-text" style={{ marginBottom: '24px' }}>{item.desc}</p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lv-text-link">
                Request This Piece
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* ── 6. FULL-BLEED CLOSING MANIFESTO ─────────────────────── */}
      <section className="lv-feature-panel reverse">
        <div className="lv-feature-panel__copy">
          <p className="lv-kicker">Reach Out</p>
          <h2 className="lv-heading-lg">
            Have a vision?<br /><em>Let's create it together.</em>
          </h2>
          <p className="lv-body-text">
            Share a Pinterest pin, a sketch, or a simple description. We translate your ideas into a one-of-a-kind handmade piece — tailored to your exact colors, sizing, and fiber preferences.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lv-cta-ghost">
              WhatsApp Commission
            </a>
            <Link to="/shop" className="lv-text-link">
              Explore the Collection
            </Link>
          </div>
        </div>
        <div className="lv-feature-panel__media">
          <EditorialImage
            src={YARN_DETAIL}
            alt="Bespoke Commission"
            aspectRatio="3/4"
            fit="cover"
            focalPoint={{ x: 50, y: 30 }}
          />
        </div>
      </section>

    </div>
  );
};

export default About;
