import './Services.css'

const SERVICES = [
  {
    icon: 'bi-search',
    title: 'Diagnostic & Troubleshooting',
    desc: 'Comprehensive electronic and mechanical diagnostics to pinpoint any issue fast.',
    list: ['ECU scanning', 'Fault code reading', 'Mechanical inspection', 'Performance assessment'],
    delay: '0.1s',
  },
  {
    icon: 'bi-gear',
    title: 'Engine & Drive System',
    desc: 'Full engine service, impeller rebuilds, and drive system repairs for all PWC brands.',
    list: ['Engine rebuilds & tune-ups', 'Impeller replacement', 'Wear ring service', 'Jet pump overhaul'],
    delay: '0.2s',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Electrical Systems',
    desc: 'Expert diagnosis and repair of all electrical and electronic components.',
    list: ['Starter & ignition', 'Battery & charging', 'DESS system', 'Sensor replacement'],
    delay: '0.3s',
  },
  {
    icon: 'bi-droplet',
    title: 'Fuel System Service',
    desc: 'Fuel injector cleaning, carburetor rebuilds, and complete fuel system maintenance.',
    list: ['Injector cleaning', 'Carburetor rebuild', 'Fuel pump service', 'Filter replacement'],
    delay: '0.4s',
  },
  {
    icon: 'bi-thermometer-half',
    title: 'Cooling System',
    desc: 'Cooling system inspections, flush services, and water system repairs.',
    list: ['System flush & clean', 'Thermostat service', 'Water pump repair', 'Hose inspection'],
    delay: '0.5s',
  },
  {
    icon: 'bi-tools',
    title: 'Hull & Fiberglass Repair',
    desc: 'Professional hull inspection and fiberglass repair to restore structural integrity.',
    list: ['Hull inspection', 'Fiberglass repair', 'Gelcoat restoration', 'Anti-fouling service'],
    delay: '0.6s',
  },
]

export default function Services() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  // const waLink = `https://wa.me/${"+013059041514"}?text=${"Hi! My jet ski needs repair and I'd like to schedule a mobile service visit as soon as possible. I'm located in [City]. When are you available?"}`
  const WA_NUMBER = '13059041514'
  const WA_MESSAGE = encodeURIComponent("Hi! My jet ski needs repair and I'd like to schedule a mobile service visit as soon as possible. I'm located in [City]. When are you available?")
  const waLink = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

  return (
    <section id="services" className="services">
      <div className="container">

        <div className="services__header">
          <div className="section-tag">What We Do</div>
          <h2 className="section-title">
            Comprehensive <span>Repair Services</span>
          </h2>
          <div className="section-divider" style={{ margin: '0 auto 24px' }}></div>
          <p className="section-subtitle">
            Specializing in personal watercraft repair for all major makes and models —
            Sea-Doo, Yamaha, and Kawasaki. Every service tailored to your watercraft's needs.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((svc) => (
            <div
              className="service-card"
              key={svc.title}
              style={{ animationDelay: svc.delay }}
            >
              <div className="service-card__icon-wrap">
                <i className={`bi ${svc.icon}`}></i>
              </div>
              <h3 className="service-card__title">{svc.title}</h3>
              <p className="service-card__desc">{svc.desc}</p>
              <ul className="service-card__list">
                {svc.list.map(item => (
                  <li key={item}>
                    <i className="bi bi-chevron-right"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="services__cta">
          <p>
            Don't see your specific issue? <strong style={{ color: 'var(--text-primary)' }}>We handle it all.</strong>{' '}
            Contact us and describe your problem — we'll come fully equipped.
          </p>
          <div className="services__cta-actions">
            <a target="_blank" href={waLink}>
              <button className="btn-primary" onClick={() => scrollTo('contact')}>
                <i className="bi bi-whatsapp"></i>
                Chat on WhatsApp
              </button>
            </a>
            <button className="btn-secondary" onClick={() => scrollTo('service-area')}>
              <i className="bi bi-geo-alt"></i>
              Check Service Area
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
