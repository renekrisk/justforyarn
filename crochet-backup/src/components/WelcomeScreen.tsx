import { useState, useEffect } from 'react'
import './WelcomeScreen.css'

// SVG yarn illustration with smooth looping motion
function YarnIllustration() {
  return (
    <svg
      className="welcome__yarn-svg"
      viewBox="0 0 480 580"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="240" cy="300" r="160" fill="#F5F5F7" stroke="#000" strokeWidth="1.5" />
      <ellipse cx="240" cy="300" rx="160" ry="60" fill="none" stroke="#000" strokeWidth="1.2" opacity="0.35" />
      <ellipse cx="240" cy="300" rx="130" ry="155" fill="none" stroke="#000" strokeWidth="1" opacity="0.25" />

      <path d="M105 200 Q240 280 375 200" fill="none" stroke="#000" strokeWidth="1.2" opacity="0.5" />
      <path d="M95 240 Q240 310 385 240" fill="none" stroke="#000" strokeWidth="1" opacity="0.4" />
      <path d="M88 280 Q240 350 392 280" fill="none" stroke="#000" strokeWidth="1" opacity="0.3" />
      <path d="M100 360 Q240 410 380 360" fill="none" stroke="#000" strokeWidth="1" opacity="0.35" />

      <path d="M175 145 Q220 300 175 455" fill="none" stroke="#000" strokeWidth="1" opacity="0.3" />
      <path d="M220 138 Q255 300 220 462" fill="none" stroke="#000" strokeWidth="1" opacity="0.25" />
      <path d="M265 140 Q290 300 265 460" fill="none" stroke="#000" strokeWidth="1" opacity="0.25" />

      {/* Signature Red Thread */}
      <path d="M240 140 Q320 200 380 300 Q420 370 360 440 Q300 500 240 460 Q170 420 145 360"
            fill="none" stroke="#FF3B30" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />

      <path d="M240 140 Q260 100 250 60 Q244 38 255 20"
            fill="none" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function CreatorPlaceholder() {
  return (
    <div className="welcome__creator-placeholder" aria-label="Creator portrait">
      <svg className="welcome__creator-svg" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="100" cy="75" r="38" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <path d="M30 220 Q40 155 100 148 Q160 155 170 220"
              fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <p className="welcome__creator-label">Creator</p>
    </div>
  )
}

interface WelcomeScreenProps {
  onComplete?: () => void
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [exiting, setExiting] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // 1-second auto pop-up display, then portal opens up
    const timer = setTimeout(() => {
      setExiting(true)
    }, 1100)

    const removeTimer = setTimeout(() => {
      setHidden(true)
      if (onComplete) onComplete()
    }, 1900)

    return () => {
      clearTimeout(timer)
      clearTimeout(removeTimer)
    }
  }, [onComplete])

  if (hidden) return null

  return (
    <div
      className={`welcome ${exiting ? 'welcome--exit' : 'welcome--in'}`}
      role="region"
      aria-label="Welcome to Knot & Craft"
    >
      {/* Left curtain panel */}
      <div className="welcome__panel welcome__panel--left">
        <div className="welcome__panel-content">
          <YarnIllustration />
        </div>
      </div>

      {/* Right curtain panel */}
      <div className="welcome__panel welcome__panel--right">
        <div className="welcome__panel-content">
          <CreatorPlaceholder />
        </div>
      </div>

      {/* Center overlay portal logo */}
      <div className="welcome__brand">
        <span className="welcome__brand-name">Knot & Craft</span>
        <span className="welcome__brand-sub t-label">Handcrafted Crochet</span>
        <div className="welcome__line"></div>
      </div>
    </div>
  )
}
