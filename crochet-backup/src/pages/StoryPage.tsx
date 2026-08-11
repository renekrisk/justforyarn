import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './StoryPage.css'

function StoryHeroIllustration() {
  return (
    <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="story__hero-svg">
      <path d="M50 150 Q100 50 180 150 Q230 220 300 100 Q350 30 420 150 Q450 200 470 150"
            fill="none" stroke="#FF3B30" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      <path d="M50 180 Q120 90 200 180 Q260 250 330 130 Q380 60 450 180"
            fill="none" stroke="#000" strokeWidth="1.2" strokeLinecap="round" opacity="0.2" />
      <line x1="420" y1="150" x2="460" y2="220" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      <path d="M420 150 Q408 138 412 128 Q418 118 430 124" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
      {[80, 160, 240, 320, 400].map((x, i) => (
        <circle key={i} cx={x} cy={150 + (i % 2 === 0 ? -20 : 20)} r="4" fill="#FF3B30" opacity="0.5" />
      ))}
    </svg>
  )
}

const timeline = [
  {
    year: '2020',
    title: 'The first stitch',
    body: 'It started with a single ball of yarn and a video tutorial. What began as a way to keep hands busy during quiet evenings quickly became an obsession: watching loops turn into rows, rows into fabric, fabric into something real.',
  },
  {
    year: '2021',
    title: 'Gifting becomes a habit',
    body: 'The first finished pieces were given away: a small beanie for a friend, a tote bag for mum. The reactions were unexpected. People did not just like them; they cherished them. Handmade items carry something special.',
  },
  {
    year: '2022',
    title: 'Refining the craft',
    body: 'Hours spent mastering tension, studying stitches, and experimenting with yarn weights. Cotton for summer pieces, chunky merino for cosy wraps. Each material taught something new about structure and texture.',
  },
  {
    year: '2023',
    title: 'Knot & Craft is born',
    body: 'What was a private joy became a small, intentional business. Every piece is made by hand: no patterns rushed, no corners cut. The mission is simple: create things that last and feel good.',
  },
  {
    year: 'Today',
    title: 'Every thread tells a story',
    body: 'From baby booties to statement cardigans, from home decor to custom commissions: each order is a collaboration. A piece made specifically for you, woven with care and finished with pride.',
  },
]

export default function StoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    const targets = document.querySelectorAll('.reveal')
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      <main className="story">
        <section className="story__hero container">
          <div className="story__hero-text">
            <Link to="/" className="story__back t-label" aria-label="Back to home">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M13 7H1M6 2L1 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </Link>

            <span className="t-label story__eyebrow reveal">Our story</span>

            <h1 className="t-display story__title reveal reveal-delay-1">
              Made by hand.<br />Worn with heart.
            </h1>

            <p className="t-body story__lead reveal reveal-delay-2">
              Knot & Craft is not a factory. It is one person, one hook, and an unshakeable belief that the best things in life are made slowly: stitch by stitch.
            </p>
          </div>

          <div className="story__hero-visual reveal reveal-delay-3">
            <StoryHeroIllustration />
          </div>
        </section>

        <section className="story__portrait-section">
          <div className="container story__portrait-inner">
            <div className="story__portrait-img-wrap reveal">
              <div className="story__portrait-placeholder" role="img" aria-label="Creator portrait: photo coming soon">
                <svg viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="story__portrait-svg">
                  <circle cx="120" cy="100" r="55" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
                  <path d="M30 290 Q50 210 120 202 Q190 210 210 290" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="148" cy="128" r="20" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.2" />
                  <path d="M148 108 Q162 118 158 128 Q155 138 148 140" fill="none" stroke="#FF3B30" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                </svg>
                <span className="story__portrait-label t-label">Photo coming soon</span>
              </div>
            </div>

            <div className="story__portrait-quote reveal reveal-delay-1">
              <blockquote className="story__quote">
                <span className="story__quote-mark" aria-hidden="true">"</span>
                <p>
                  I did not start crocheting to build a brand. I started because I fell in love with what my hands could make: and I could not stop.
                </p>
              </blockquote>
              <cite className="story__quote-credit t-label">The maker behind Knot & Craft</cite>
            </div>
          </div>
        </section>

        <section className="story__timeline section">
          <div className="container">
            <h2 className="t-headline story__timeline-heading reveal">
              The journey
            </h2>

            <div className="story__timeline-track">
              {timeline.map((item, i) => (
                <article
                  key={item.year}
                  className={`story__event reveal ${i % 2 === 0 ? 'story__event--left' : 'story__event--right'} reveal-delay-${(i % 4) + 1}`}
                  id={`story-event-${i + 1}`}
                >
                  <div className="story__event-year t-label">{item.year}</div>
                  <div className="story__event-content">
                    <h3 className="story__event-title t-title">{item.title}</h3>
                    <p className="t-body story__event-body">{item.body}</p>
                    {item.year === 'Today' && (
                      <Link to="/#custom" className="btn-primary story__event-cta">
                        Order a piece
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </article>
              ))}

              <div className="story__timeline-line" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="story__values-strip">
          <div className="container story__values-inner">
            {[
              { icon: '◯', label: 'Slow fashion', desc: 'No mass production' },
              { icon: '✦', label: 'Premium yarn', desc: 'Materials built to last' },
              { icon: '◈', label: 'Made to order', desc: 'Your piece, your way' },
              { icon: '♡', label: 'Crafted with care', desc: 'Every single stitch' },
            ].map((v, i) => (
              <div key={v.label} className={`story__value reveal reveal-delay-${i + 1}`} id={`story-value-${i + 1}`}>
                <span className="story__value-icon" aria-hidden="true">{v.icon}</span>
                <strong className="story__value-label">{v.label}</strong>
                <span className="story__value-desc t-label">{v.desc}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
