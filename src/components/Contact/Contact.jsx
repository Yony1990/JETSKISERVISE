import './Contact.css'

// ⚠️ REPLACE THESE WITH YOUR REAL CONTACT INFO
const WA_NUMBER = '13059041514'
const WA_MESSAGE = encodeURIComponent("Hi! My jet ski needs repair and I'd like to schedule a mobile service visit as soon as possible. I'm located in [City]. When are you available?")
const IG_HANDLE = '@mobilejetskiservice'
const IG_URL = 'https://instagram.com/mobilejetskiservice'

export default function Contact() {
  const waLink = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

  return (
    <section id="contact" className="contact">
      <div className="container">

        {/* Header */}
        <div className="contact__header">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">
            Contact <span>Us</span>
          </h2>
          <div className="section-divider" style={{ margin: '0 auto 24px' }}></div>
          <p className="section-subtitle">
            The fastest way to reach us is through WhatsApp. We're ready to come
            to you — just send us a message and we'll schedule your service.
          </p>
        </div>

        {/* Grid */}
        <div className="contact__grid">

          {/* WhatsApp main card */}
          <div className="contact__main">
            <div className="contact__wa-card">
              <div className="contact__wa-icon">
                <i className="bi bi-whatsapp"></i>
              </div>
              <h3 className="contact__wa-title">Chat with Us on WhatsApp</h3>
              <p className="contact__wa-desc">
                Send us a message describing your jet ski issue, your location,
                and the best time for a visit. We typically respond within minutes
                during business hours.
              </p>
              <a
                className="contact__wa-btn"
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
                Message Us Now
              </a>
              <p className="contact__wa-note">
                <i className="bi bi-clock"></i>{'  '}
                Available Mon–Sat · 8 AM – 6 PM · South Florida Time
              </p>
            </div>
          </div>

          {/* Side cards */}
          <div className="contact__side">

            {/* Instagram */}
            <div className="contact__ig-card">
              <div className="contact__ig-icon">
                <i className="bi bi-instagram"></i>
              </div>
              <h3 className="contact__ig-title">Follow Us on Instagram</h3>
              <p className="contact__ig-handle">{IG_HANDLE}</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                See our latest repairs, before & after shots, and tips to keep
                your watercraft running strong.
              </p>
              <a
                className="contact__ig-btn"
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
                Follow Us
              </a>
            </div>

            {/* Info items */}
            <div className="contact__info-cards">
              {/* <div className="contact__info-item">
                <i className="bi bi-geo-alt-fill"></i>
                <div>
                  <strong>Service Area</strong>
                  <span>Key Largo → West Palm Beach, South Florida</span>
                </div>
              </div>
              <div className="contact__info-item">
                <i className="bi bi-truck"></i>
                <div>
                  <strong>We Come to You</strong>
                  <span>Home, marina, dock — no trailer needed</span>
                </div>
              </div>
              <div className="contact__info-item">
                <i className="bi bi-calendar-week"></i>
                <div>
                  <strong>Working Hours</strong>
                  <span>Monday – Saturday, 8 AM – 6 PM</span>
                </div>
              </div> */}
              <div className="contact__info-item">
                <i className="bi bi-lightning-charge"></i>
                <div>
                  <strong>Fast Response</strong>
                  <span>Same-day or next-day service available</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="contact__footer">
          <p>
            © {new Date().getFullYear()} <strong>Mobile Jetski Service</strong> · South Florida's Mobile PWC Specialist Since 2010
          </p>
        </div>

      </div>
    </section>
  )
}
