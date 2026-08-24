import React from 'react';

const WHATSAPP_BASE = 'https://wa.me/254757900294?text=' + encodeURIComponent("Hi Fiona! I saw this inspo on your site and I'd love a similar piece. Can we make it happen?");

interface InspoItem {
  id: string;
  title: string;
  category: string;
  img: string;
  description: string;
}

const inspoItems: InspoItem[] = [
  {
    id: '1',
    title: 'Oversized Cardigan',
    category: 'Wearables',
    img: '/logo&images/INSPOIMAGES/16 Oversized Cardigan Free Crochet Patterns.jfif',
    description: 'Chunky oversized cardigan in neutral tones. Perfect for layering through the seasons.',
  },
  {
    id: '2',
    title: 'Ruffle Crochet Hat',
    category: 'Accessories',
    img: '/logo&images/INSPOIMAGES/Wrap up in style with our delightful ruffle crochet hat! 🌟 Just R220 to add charm to your winter wardrobe_.jfif',
    description: 'Playful ruffle beanie with a feminine touch. Available in custom colors.',
  },
  {
    id: '3',
    title: 'Crochet Scarf',
    category: 'Accessories',
    img: '/logo&images/INSPOIMAGES/scarf.jfif',
    description: 'Lightweight crochet scarf with delicate stitchwork. Elegant and versatile.',
  },
  {
    id: '4',
    title: 'Crochet Bubu Gown',
    category: 'Wearables',
    img: '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet Bubu gown.jfif',
    description: 'Flowing bubu gown with intricate crochet panels. Statement piece for special occasions.',
  },
  {
    id: '5',
    title: 'Granny Square Cropped Sweater',
    category: 'Wearables',
    img: '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet granny square cropped sweater.jfif',
    description: 'Vintage-inspired granny square sweater with a modern cropped silhouette.',
  },
  {
    id: '6',
    title: 'Hexagon Cardigan',
    category: 'Wearables',
    img: '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet hexagon cardigan.jfif',
    description: 'Geometric hexagon cardigan with bold color blocking. A true conversation starter.',
  },
  {
    id: '7',
    title: 'Crochet Set',
    category: 'Gift Sets',
    img: '/logo&images/INSPOIMAGES/peoplewearingtheminspos/crochet set handmade with love.jfif',
    description: 'Coordinated crochet set — beanie, scarf, and mittens. The perfect gift.',
  },
  {
    id: '8',
    title: 'Wine Red Ruffle Hat',
    category: 'Accessories',
    img: '/logo&images/INSPOIMAGES/peoplewearingtheminspos/crochet wine red ruffle hat.jfif',
    description: 'Bold wine-red ruffle beanie. Hand-dyed yarn for a unique, one-of-a-kind finish.',
  },
  {
    id: '9',
    title: 'Crochet Cat Beanie',
    category: 'Accessories',
    img: '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet cat beanie.jfif',
    description: 'Whimsical cat-ear beanie with embroidered details. For the playful soul.',
  },
  {
    id: '10',
    title: 'Crochet Footies & Socks',
    category: 'Accessories',
    img: '/logo&images/INSPOIMAGES/peoplewearingtheminspos/Crochet footies_socks.jfif',
    description: 'Cozy crochet socks and footies. Soft, breathable, and beautifully textured.',
  },
];

const Inspo: React.FC = () => {
  return (
    <div className="pg-inspo">

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="pg-section">
        <div className="pg-container">
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <p className="lv-kicker" style={{ marginBottom: '16px' }}>How It Works</p>
            <h2 className="lv-heading-md" style={{ marginBottom: '24px' }}>
              See something you love?<br />
              <em>Let's make it yours.</em>
            </h2>
            <p className="lv-body-text">
              Browse the inspiration board below. Each piece is a starting point — a mood, a silhouette, a stitch pattern that resonates. When you find yours, hit the request button and I'll bring your vision to life, handcrafted just for you.
            </p>
          </div>
        </div>
      </section>

      {/* ── INSPO GRID ───────────────────────────────────────── */}
      <section className="pg-section" style={{ paddingTop: 0 }}>
        <div className="pg-container">
          <div className="inspo-grid">
            {inspoItems.map((item) => (
              <div key={item.id} className="inspo-card">
                <div className="inspo-card__media">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="inspo-card__copy">
                  <p className="inspo-card__category">{item.category}</p>
                  <h3 className="inspo-card__title">{item.title}</h3>
                  <p className="lv-body-text" style={{ marginBottom: '20px', fontSize: '14px' }}>
                    {item.description}
                  </p>
                  <a
                    href={`${WHATSAPP_BASE} ${encodeURIComponent(`Inspo: ${item.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lv-cta-ghost"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    Request This Piece
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────────── */}
      <section className="lv-manifesto">
        <div className="lv-manifesto__inner">
          <p className="lv-kicker light">Just For Yarns · Nairobi</p>
          <h2 className="lv-manifesto__headline">
            Your vision,<br />
            <em>my hands.</em>
          </h2>
          <p className="lv-body-text" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '480px', margin: '0 auto 32px' }}>
            Don't see exactly what you're looking for? Share a reference image, a Pinterest board, or just describe the feeling. Every piece begins with a conversation.
          </p>
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="lv-cta-ghost light"
          >
            Start a Conversation
          </a>
        </div>
      </section>

    </div>
  );
};

export default Inspo;
