import { useEffect, useRef } from 'react'
import heroImage from '../assets/hero.png'
import './Hero.css'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!parallaxRef.current) return
      const y = window.scrollY * 0.12
      parallaxRef.current.style.transform = `translateY(${y}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero" id="hero" aria-label="Welcome to Knot & Craft">
      <div className="hero__inner container">
        <div className="hero__visual reveal">
          <div className="hero__image-wrap" ref={parallaxRef}>
            <img
              src={heroImage}
              alt="Handcrafted crochet piece"
              className="hero__image"
              loading="eager"
            />
            <div className="hero__image-glow" aria-hidden="true" />
          </div>
        </div>

        <div className="hero__content reveal reveal-delay-1">
          <div className="hero__eyebrow t-label">
            Handcrafted with intention
          </div>

          <h1 className="hero__title t-display">
            Every stitch
            <br />
            <em>tells a story.</em>
          </h1>

          <p className="hero__subtitle t-body">
            Artisan crochet clothing, bags, home decor and baby keepsakes — 
            each piece made to order, one stitch at a time.
          </p>

          <div className="hero__actions">
            <a className="btn-primary" href="#products" id="hero-explore-btn">
              Explore Collections
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="btn-ghost" href="#custom" id="hero-custom-btn">
              Request Custom Piece
            </a>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span className="t-label">scroll</span>
      </div>
    </section>
  )
}
