import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const products = [
  { name: 'Amigurumi Dolls', desc: 'Handmade crochet dolls with intricate details and soft textures.', price: 'From KSh 1,500', color: '#ff6b9d' },
  { name: 'Blankets & Throws', desc: 'Cozy, warm blankets perfect for any home. Custom sizes available.', price: 'From KSh 3,000', color: '#c44569' },
  { name: 'Wearables', desc: 'Scarves, hats, and gloves crafted with premium yarn.', price: 'From KSh 800', color: '#8b2635' },
  { name: 'Home Decor', desc: 'Decorative pieces including coasters, doilies, and wall hangings.', price: 'From KSh 500', color: '#d4a574' },
  { name: 'Custom Orders', desc: 'Personalized pieces made to your specifications.', price: 'Contact for pricing', color: '#b8956a' },
  { name: 'Gift Sets', desc: 'Beautifully packaged crochet gift sets for any occasion.', price: 'From KSh 2,000', color: '#9a7b5b' },
];

const Shop: React.FC = () => {
  useReveal();

  return (
    <div style={{ background: '#fff', padding: '80px 0 120px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '72px', textAlign: 'center' }} data-reveal>
          <span className="eyebrow">Our Collection</span>
          <h1 style={{ color: '#000', marginBottom: '24px', lineHeight: 1.1 }}>
            Handcrafted<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Crochet Pieces</em>
          </h1>
          <p style={{ fontSize: '17px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75, color: '#555' }}>
            Each piece is meticulously crafted by hand using premium yarn and time-honored techniques. Browse our collection or contact us for custom orders.
          </p>
        </div>

        {/* Products Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {products.map((product, i) => (
            <div key={i} data-reveal data-delay={String(i + 1)} style={{
              background: '#fff',
              border: '1px solid #E8E8E8',
              borderRadius: '4px',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)';
              e.currentTarget.style.transform = 'translateY(-6px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{
                height: '280px',
                background: `linear-gradient(135deg, ${product.color}44, ${product.color}88)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>
                  <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                  <path d="M2 2l7.586 7.586"/>
                  <circle cx="11" cy="11" r="2"/>
                </svg>
              </div>
              <div style={{ padding: '28px' }}>
                <h3 style={{ fontFamily: 'var(--font-sub)', fontSize: '19px', fontWeight: 600, marginBottom: '10px', color: '#000' }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7, marginBottom: '20px' }}>
                  {product.desc}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, color: '#D11F5E' }}>
                    {product.price}
                  </span>
                  <Link to="/contact" className="btn btn-red btn-sm">Order</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '80px', textAlign: 'center' }} data-reveal>
          <div style={{
            background: '#F6F6F6',
            padding: '64px 40px',
            borderRadius: '4px',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <h2 style={{ fontFamily: 'var(--font-sub)', fontSize: '28px', fontWeight: 600, marginBottom: '16px', color: '#000' }}>
              Want something custom?
            </h2>
            <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.7, marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px' }}>
              I love creating personalized pieces. Tell me your vision and I will bring it to life with care and precision.
            </p>
            <Link to="/contact" className="btn btn-dark">Get In Touch</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Shop;
