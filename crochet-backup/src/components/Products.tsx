import './Products.css'

interface Product {
  id: string
  category: string
  title: string
  desc: string
  svg: React.ReactNode
  tag?: string
}

function ClothingIllustration() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="product__illustration">
      <path d="M70 50 L40 75 L30 160 L170 160 L160 75 L130 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M70 50 L80 35 L100 40 L120 35 L130 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 90 Q100 85 150 90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      <path d="M45 110 Q100 105 155 110" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      <path d="M40 130 Q100 125 160 130" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      <path d="M35 150 Q100 145 165 150" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      <circle cx="100" cy="75" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="100" cy="95" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="100" cy="115" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  )
}

function BagIllustration() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="product__illustration">
      <path d="M55 75 L55 165 L145 165 L145 75 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M75 75 Q75 45 100 45 Q125 45 125 75" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M55 95 L145 95" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M55 115 L145 115" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M55 135 L145 135" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M55 155 L145 155" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M75 75 L75 165" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M95 75 L95 165" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M115 75 L115 165" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M135 75 L135 165" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <line x1="55" y1="75" x2="145" y2="165" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <line x1="145" y1="75" x2="55" y2="165" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    </svg>
  )
}

function HomeIllustration() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="product__illustration">
      <rect x="30" y="80" width="140" height="100" rx="12" fill="none" stroke="currentColor" strokeWidth="2" />
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4, 5].map((col) => (
          <path
            key={`${row}-${col}`}
            d={`M${42 + col * 20} ${95 + row * 17} Q${47 + col * 20} ${88 + row * 17} ${52 + col * 20} ${95 + row * 17} Q${47 + col * 20} ${102 + row * 17} ${42 + col * 20} ${95 + row * 17}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            opacity="0.5"
          />
        ))
      )}
      <path d="M30 80 Q100 60 170 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}

function BabyIllustration() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="product__illustration">
      <path d="M60 120 Q55 100 70 90 Q85 80 100 85 L140 85 Q155 85 158 100 Q161 115 148 120 Q140 130 100 132 Z"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 120 Q65 140 100 142 Q135 142 148 130" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 85 Q100 65 110 58 Q120 52 130 58 Q138 65 135 85"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M65 108 Q100 103 148 108" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
      <path d="M110 72 Q100 62 92 68 Q88 74 100 74 Q112 74 108 68 Q100 62 90 72"
            fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

function CustomIllustration() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="product__illustration">
      <path d="M60 160 L130 60 Q140 45 148 50 Q158 56 152 68 L140 80"
            fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M140 80 Q150 110 120 130 Q90 150 80 140 Q65 125 85 105 Q105 85 130 100"
            fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="6 3" opacity="0.6" />
      <circle cx="155" cy="48" r="3" fill="currentColor" opacity="0.5" />
      <path d="M165 35 l3 -8 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 Z" fill="currentColor" opacity="0.35" />
      <path d="M45 75 l2 -5 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 Z" fill="currentColor" opacity="0.35" />
    </svg>
  )
}

const products: Product[] = [
  {
    id: 'clothing',
    category: 'Wearables',
    title: 'Clothing & Accessories',
    desc: 'Cardigans, bralettes, crop tops, and hats. Soft textures designed to be worn and loved every day.',
    svg: <ClothingIllustration />,
    tag: 'Most loved',
  },
  {
    id: 'bags',
    category: 'Carry',
    title: 'Bags & Purses',
    desc: 'Handwoven tote bags, mini purses, and shoulder bags built to last and styled with intention.',
    svg: <BagIllustration />,
  },
  {
    id: 'home',
    category: 'Living',
    title: 'Home Decor',
    desc: 'Throw blankets, cushion covers, and wall art that bring warmth and texture to your home.',
    svg: <HomeIllustration />,
  },
  {
    id: 'baby',
    category: 'Baby & Kids',
    title: 'Baby Keepsakes',
    desc: 'Tiny booties, soft blankets, and cute hats. The perfect gift for a new arrival.',
    svg: <BabyIllustration />,
  },
]

export default function Products() {
  return (
    <section className="products section" id="products" aria-label="Our collections">
      <div className="container">
        <div className="products__header reveal">
          <span className="t-label" style={{ color: 'var(--color-red)' }}>Collections</span>
          <h2 className="t-headline products__title">
            Crafted for every moment
          </h2>
          <p className="t-body products__lead">
            From statement outerwear to tiny baby booties: everything is made by hand, with premium yarn and careful attention to every stitch.
          </p>
        </div>

        <div className="products__grid">
          {products.map((p, i) => (
            <article
              key={p.id}
              className={`product-card reveal reveal-delay-${(i % 4) + 1}`}
              id={`product-${p.id}`}
            >
              <div className="product-card__visual">
                {p.svg}
                {p.tag && <span className="product-card__tag t-label">{p.tag}</span>}
              </div>
              <div className="product-card__body">
                <span className="product-card__category t-label">{p.category}</span>
                <h3 className="product-card__title t-title">{p.title}</h3>
                <p className="product-card__desc t-body">{p.desc}</p>
                <a className="product-card__link" href="#custom" aria-label={`Order ${p.title}`}>
                  Order a piece
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="products__custom-banner reveal">
          <div className="products__custom-banner-inner">
            <CustomIllustration />
            <div>
              <span className="t-label" style={{ color: 'var(--color-red)' }}>Bespoke</span>
              <h3 className="t-title" style={{ marginBlock: '0.5rem 0.75rem' }}>Something unique in mind?</h3>
              <p className="t-body" style={{ marginBottom: '1.5rem' }}>
                Every custom order starts with a conversation. Tell us your vision: colour, size, occasion. We will bring it to life.
              </p>
              <a className="btn-primary" href="#custom" id="products-custom-btn">Request a custom piece</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
