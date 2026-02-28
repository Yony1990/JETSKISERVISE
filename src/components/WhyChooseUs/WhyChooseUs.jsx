import './WhyChooseUs.css'

const LEFT_CARDS = [
  {
    icon: 'bi-truck',
    title: 'Mobile On-Site Repairs',
    desc: 'We travel to where your craft is — home, marina, or waterfront property. Zero hauling required.',
    delay: '0.1s',
  },
  {
    icon: 'bi-patch-check',
    title: 'Experienced Technicians',
    desc: 'Decades of hands-on experience focused exclusively on jet ski and personal watercraft systems.',
    delay: '0.2s',
  },
]

const RIGHT_CARDS = [
  {
    icon: 'bi-chat-quote',
    title: 'Transparent Communication',
    desc: 'Clear explanations of issues and repair options — no surprises, no hidden costs.',
    delay: '0.3s',
  },
  {
    icon: 'bi-peace',
    title: 'Convenience & Peace of Mind',
    desc: 'Avoid the hassle and cost of hauling your ski. We come to you — fast, dependable, friendly.',
    delay: '0.4s',
  },
]

export default function WhyChooseUs() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="why-choose-us" className="why">
      <div className="container">

        <div className="why__header">
          <div className="section-tag">Why Us</div>
          <h2 className="section-title">
            Why Choose <span>Mobile Jetski Service</span>
          </h2>
          <div className="section-divider" style={{ margin: '0 auto 24px' }}></div>
          <p className="section-subtitle">
            Your watercraft is more than a machine — it's your ticket to freedom on the water.
            That's why we treat every repair with the care it deserves.
          </p>
        </div>

        <div className="why__grid">

          {/* Left column */}
          <div className="why__col">
            {LEFT_CARDS.map(c => (
              <div className="why-card" key={c.title} style={{ animationDelay: c.delay }}>
                <div className="why-card__icon"><i className={`bi ${c.icon}`}></i></div>
                <h3 className="why-card__title">{c.title}</h3>
                <p className="why-card__desc">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Center visual */}
          <div className="why__center">
            <div className="why__center-badge">
              <div className="why__center-icon">
                <i className="bi bi-award"></i>
              </div>
              <h3 className="why__center-title">South Florida's #1 Mobile PWC Service</h3>
              <p className="why__center-desc">
                Over a decade in business and thousands of satisfied customers throughout
                South Florida. Fast, dependable, and friendly — guaranteed.
              </p>
            </div>

            <div className="why__trust">
              <div className="why__trust-item">
                <span className="why__trust-num">15+</span>
                <span className="why__trust-label">Years</span>
              </div>
              <div className="why__trust-item">
                <span className="why__trust-num">1K+</span>
                <span className="why__trust-label">Clients</span>
              </div>
              <div className="why__trust-item">
                <span className="why__trust-num">100%</span>
                <span className="why__trust-label">Mobile</span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="why__col">
            {RIGHT_CARDS.map(c => (
              <div className="why-card" key={c.title} style={{ animationDelay: c.delay }}>
                <div className="why-card__icon"><i className={`bi ${c.icon}`}></i></div>
                <h3 className="why-card__title">{c.title}</h3>
                <p className="why-card__desc">{c.desc}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom strip */}
        <div className="why__bottom">
          <div className="why__bottom-text">
            <strong>Ready to get back on the water?</strong>
            <p>Contact us today — we'll come to you, fully equipped and ready to work.</p>
          </div>
          <button className="btn-cta" onClick={() => scrollTo('contact')}>
            <i className="bi bi-calendar-check"></i>
            Schedule a Visit
          </button>
        </div>

      </div>
    </section>
  )
}
