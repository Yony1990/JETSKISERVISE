import { useState, useEffect } from 'react'
import logo11 from "../../assets/images/logo.png"
import './Header.css'

const NAV_LINKS = [
  { id: 'home',         label: 'Home',        icon: 'bi-house' },
  { id: 'about',        label: 'About Us',     icon: 'bi-people' },
  { id: 'services',     label: 'Services',     icon: 'bi-tools' },
  { id: 'service-area', label: 'Service Area', icon: 'bi-geo-alt' },
  { id: 'contact',      label: 'Contact',      icon: 'bi-chat-dots' },
]

export default function Header() {
  const [scrolled, setScrolled]       = useState(false)
  const [activeSection, setActive]    = useState('home')
  const [menuOpen, setMenuOpen]       = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Detect active section
      const sections = NAV_LINKS.map(l => document.getElementById(l.id))
      const scrollY = window.scrollY + 120

      sections.forEach(sec => {
        if (!sec) return
        if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
          setActive(sec.id)
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const scrollToContact = () => scrollTo('contact')

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="container__header">
          <div className="header__inner">

            {/* Logo */}
            <a className="header__logo" onClick={() => scrollTo('home')}>
              <div className="header__logo-icon">
                {/* <i className="bi bi-water"></i> */}
                <img src={logo11} alt="logo" />
              </div>
              <div className="header__logo-text">
                <span className="header__logo-name">Mobile Jetski</span>
                <span className="header__logo-tagline">Service · South Florida</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="header__nav">
              {NAV_LINKS.map(link => (
                <button
                  key={link.id}
                  className={`btn-nav${activeSection === link.id ? ' active' : ''}`}
                  onClick={() => scrollTo(link.id)}
                >
                  <i className={`bi ${link.icon}`}></i>
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="header__actions">
              <button className="btn-cta" onClick={scrollToContact}>
                <i className="bi bi-calendar-check"></i>
                Schedule Service
              </button>
              {/* Hamburger */}
              <button
                className={`header__hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <div className="mobile-menu__backdrop" onClick={() => setMenuOpen(false)}></div>
        <div className="mobile-menu__panel">
          <div className="mobile-menu__header">
            
          </div>

          <nav className="mobile-menu__nav">
            {NAV_LINKS.map((link, i) => (
              <button
                key={link.id}
                className={`btn-nav${activeSection === link.id ? ' active' : ''}`}
                onClick={() => scrollTo(link.id)}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <i className={`bi ${link.icon}`}></i>
                {link.label}
              </button>
            ))}
          </nav>

          <div className="mobile-menu__cta">
            <button className="btn-cta" onClick={scrollToContact}>
              <i className="bi bi-calendar-check"></i>
              Schedule Service
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
