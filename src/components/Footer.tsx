import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="lv-footer">
      <div className="lv-footer__top">
        <div className="lv-footer__brand">
          <Link to="/" className="lv-footer__wordmark">Just For Yarns</Link>
          <p className="lv-footer__tagline">
            Handcrafted crochet atelier.<br />Nairobi, Kenya · Est. 2026
          </p>
        </div>

        <div className="lv-footer__cols">
          <div className="lv-footer__col">
            <h4 className="lv-footer__col-head">Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop & Works</Link></li>
              <li><Link to="/inspo">Inspo Board</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Bespoke Orders</Link></li>
            </ul>
          </div>
          <div className="lv-footer__col">
            <h4 className="lv-footer__col-head">Connect</h4>
            <ul>
              <li><a href="https://wa.me/254714036800" target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a></li>
            </ul>
          </div>
          <div className="lv-footer__col">
            <h4 className="lv-footer__col-head">Atelier</h4>
            <ul>
              <li>Nairobi, Kenya</li>
              <li>Mon – Sat · 9am – 6pm EAT</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="lv-footer__bottom">
        <p>© 2026 Just For Yarns · All rights reserved</p>
        <p>Handcrafted with sustainable fibers</p>
        <p style={{ marginTop: '8px', fontSize: '11px', color: '#AAAAAA' }}>
          Developed by Kris · +905391338912 · <a href="https://iamkris.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: '#AAAAAA', textDecoration: 'underline' }}>iamkris.vercel.app</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
