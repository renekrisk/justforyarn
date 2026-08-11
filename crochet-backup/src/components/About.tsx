import './About.css'

function HeartStitch() {
  return (
    <svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="about__illustration">
      <path
        d="M150 200 C100 165 40 130 40 85 C40 55 62 38 85 38 C108 38 130 55 150 72 C170 55 192 38 215 38 C238 38 260 55 260 85 C260 130 200 165 150 200 Z"
        fill="none"
        stroke="var(--color-red)"
        strokeWidth="2"
        strokeDasharray="6 4"
      />
      <path
        d="M150 185 C108 155 60 120 60 85 C60 63 76 55 95 55 C114 55 132 68 150 82 C168 68 186 55 205 55 C224 55 240 63 240 85 C240 120 192 155 150 185 Z"
        fill="none"
        stroke="var(--color-ink-soft)"
        strokeWidth="1.2"
      />
      {[
        [150, 100], [130, 90], [170, 90], [110, 100], [190, 100],
        [130, 115], [170, 115], [150, 130],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="none" stroke="var(--color-red)" strokeWidth="1.2" />
      ))}
      {[
        [150, 100], [130, 90], [170, 90], [110, 100], [190, 100],
        [130, 115], [170, 115], [150, 130],
      ].map(([cx, cy], i) => (
        <circle key={`dot-${i}`} cx={cx} cy={cy} r="2" fill="var(--color-red)" opacity="0.5" />
      ))}
    </svg>
  )
}

const values = [
  {
    icon: '✦',
    title: 'Slow fashion',
    desc: 'Every piece takes time — and that time shows. No factories, no shortcuts.',
  },
  {
    icon: '◈',
    title: 'Premium materials',
    desc: 'Soft merino, cotton blends, and chunky yarn selected for feel, durability, and beauty.',
  },
  {
    icon: '◯',
    title: 'Made to order',
    desc: 'Nothing sits in a warehouse. Your piece is made when you ask for it.',
  },
]

export default function About() {
  return (
    <section className="about section" id="about" aria-label="Our story">
      <div className="about__bg-strip" aria-hidden="true" />

      <div className="container about__grid">
        <div className="about__visual reveal">
          <div className="about__visual-inner">
            <HeartStitch />
            <div className="about__visual-caption t-label">
              stitched with intention
            </div>
          </div>
        </div>

        <div className="about__text">
          <span className="t-label reveal" style={{ color: 'var(--color-red)', display: 'block', marginBottom: '1.25rem' }}>
            Our story
          </span>

          <h2 className="t-headline about__headline reveal reveal-delay-1">
            Made by hand.
            <br />
            <em>Worn with heart.</em>
          </h2>

          <p className="t-body reveal reveal-delay-2" style={{ marginBottom: '1.25rem' }}>
            Knot & Craft was born from a simple love of creating. What started as a hobby — picking up a crochet hook during quiet evenings — grew into something people kept asking to take home.
          </p>

          <p className="t-body reveal reveal-delay-2" style={{ marginBottom: '2.5rem' }}>
            Every piece is still made by hand, one stitch at a time. No machines. No mass production. Just craft, care, and a whole lot of love woven into every row.
          </p>

          <div className="about__values">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`about__value reveal reveal-delay-${i + 2}`}
                id={`about-value-${i + 1}`}
              >
                <span className="about__value-icon" aria-hidden="true">{v.icon}</span>
                <div>
                  <h4 className="about__value-title">{v.title}</h4>
                  <p className="t-body" style={{ fontSize: '0.875rem' }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
