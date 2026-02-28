import { useRef, useState, useEffect } from 'react'
import './About.css'

const FEATURES = [
  {
    icon: 'bi-geo-alt',
    title: 'Fully Mobile Service',
    desc: 'We travel to your driveway, dock, marina, or waterfront property — no trailer needed.',
  },
  {
    icon: 'bi-tools',
    title: 'All Major Brands',
    desc: 'Deep expertise in Sea-Doo, Yamaha, and Kawasaki personal watercraft.',
  },
  {
    icon: 'bi-clock-history',
    title: 'Since 2010',
    desc: 'Over 15 years of hands-on experience keeping South Florida riders on the water.',
  },
]

export default function About() {
  const videoRef = useRef(null)
  const sectionRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [paused, setPaused] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [progress, setProgress] = useState(0)

  // Arranca el video solo cuando About entra en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play()
        } else {
          videoRef.current?.pause()
        }
      },
      { threshold: 0.4 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Actualiza barra de progreso
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const update = () => {
      if (video.duration) setProgress((video.currentTime / video.duration) * 100)
    }
    video.addEventListener('timeupdate', update)
    return () => video.removeEventListener('timeupdate', update)
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  const togglePlay = () => {
    if (!videoRef.current) return
    if (paused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
    setPaused(!paused)
  }

  const handleSeek = (e) => {
    const video = videoRef.current
    if (!video) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const pct = x / rect.width
    video.currentTime = pct * video.duration
  }

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about__inner">

          {/* Visual */}
          <div className="about__visual">
            <div className="about__brands">
              <p className="about__brands-label">Specializing In</p>
              {['Sea-Doo', 'Yamaha', 'Kawasaki'].map(b => (
                <div key={b} className="about__brand-item">
                  <span className="about__brand-dot"></span>
                  {b}
                </div>
              ))}
            </div>

            {/* Video wrap */}
            <div
              className="about__img-wrap about__video-wrap"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              >
                <source src="/videos/video.mp4" type="video/mp4" />
              </video>

              {/* Overlay controls — aparecen en hover */}
              <div className={`video-controls${showControls ? ' visible' : ''}`}>
                <button className="video-btn video-btn--play" onClick={togglePlay}>
                  <i className={`bi ${paused ? 'bi-play-fill' : 'bi-pause-fill'}`}></i>
                </button>

                <button className="video-btn video-btn--mute" onClick={toggleMute}>
                  <i className={`bi ${muted ? 'bi-volume-mute-fill' : 'bi-volume-up-fill'}`}></i>
                </button>

                <div className="video-progress" onClick={handleSeek}>
                  <div className="video-progress__fill" style={{ width: `${progress}%` }}></div>
                </div>
              </div>

              {/* Muted badge — siempre visible hasta q el usuario le da audio */}
              {muted && !showControls && (
                <div className="video-muted-badge" onClick={toggleMute}>
                  <i className="bi bi-volume-mute-fill"></i> Tap for sound
                </div>
              )}
            </div>

            <div className="about__float-card">
              <div className="about__float-card-title">1,000+</div>
              <div className="about__float-card-label">PWCs Serviced</div>
            </div>
          </div>

          {/* Text */}
          <div className="about__text">
            <div className="section-tag">About Us</div>
            <h2 className="section-title">
              Miami's Mobile<br/>
              <span>Watercraft Experts</span>
            </h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Since 2010, Mobile Jetski Service has been South Florida's trusted
              specialist in jet ski and jet boat repair. We focus exclusively on
              professional repairs and maintenance, delivering expert service directly
              to your location — no hauling, no hassle.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: 16, lineHeight: 1.8 }}>
              We proudly serve riders from Key Largo to West Palm Beach, arriving
              fully equipped to diagnose and fix problems right where your craft is
              stored. Our technicians bring the shop to you — faster turnaround,
              less stress, more time on the water.
            </p>
            <div className="about__features">
              {FEATURES.map(f => (
                <div className="about__feature" key={f.title}>
                  <div className="about__feature-icon">
                    <i className={`bi ${f.icon}`}></i>
                  </div>
                  <div className="about__feature-body">
                    <strong>{f.title}</strong>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}