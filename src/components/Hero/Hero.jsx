import { useEffect, useState } from 'react'
import './Hero.css'
import heroImg from '../../assets/images/portada2.jpg'  

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const [showScroll, setShowScroll] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY < window.innerHeight * 0.1)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="home" className="hero">
      {/* Background */}
      <div className="hero__bg">
        <div className="hero__bg-image"></div>
        <div className="hero__grid"></div>
        <div className="hero__glow hero__glow--1"></div>
        <div className="hero__glow hero__glow--2"></div>
      </div>

      <div className="container">
        <div className="hero__content">

          {/* Text Side */}
          <div className="hero__text">
            <div className="hero__tag">
              <span className="hero__tag-dot"></span>
              South Florida · Since 2010
            </div>

            <h1 className="hero__title">
              Expert Jet Ski
              <span className="line--accent">Repair & Service</span>
              Right at Your Door
            </h1>

            <p className="hero__desc">
              Miami's trusted mobile watercraft specialist. We bring professional
              repair and maintenance directly to your driveway, dock, or marina —
              from Key Largo to West Palm Beach.
            </p>

            <div className="hero__actions">
              <button className="btn-primary" onClick={() => scrollTo('contact')}>
                <i className="bi bi-whatsapp"></i>
                Get a Free Quote
              </button>
              <button className="btn-secondary" onClick={() => scrollTo('services')}>
                <i className="bi bi-tools"></i>
                Our Services
              </button>
            </div>

            {/* Stats */}
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-num">15+</span>
                <span className="hero__stat-label">Years Experience</span>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat">
                <span className="hero__stat-num">1K+</span>
                <span className="hero__stat-label">PWCs Serviced</span>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat">
                <span className="hero__stat-num">100%</span>
                <span className="hero__stat-label">Mobile Service</span>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="hero__visual">
            {/* Floating badge top-right */}
            <div className="hero__badge-card hero__badge-card--2">
              <div className="hero__badge-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <div className="hero__badge-text">
                <strong>Certified Techs</strong>
                <span>Sea-Doo · Yamaha · Kawasaki</span>
              </div>
            </div>

            {/* Main visual box */}
            <div className="hero__visual-main">
              {/* Uncomment and use when you add the image: */}
              <img src={heroImg} alt="Mobile Jetski Service technician" />
            
            </div>

            {/* Floating badge bottom-left */}
            <div className="hero__badge-card hero__badge-card--1">
              <div className="hero__badge-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="hero__badge-text">
                <strong>We Come to You</strong>
                <span>Key Largo → West Palm Beach</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      
      {showScroll && (
        <div className="hero__scroll" onClick={() => scrollTo('about')}>
          <span>Scroll</span>
          <div className="hero__scroll-line"></div>
        </div>
      )}
    </section>
  )
}
