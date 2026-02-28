import './ServiceArea.css'

const CITIES = [
  'Miami', 'Miami Beach', 'Hialeah', 'Coral Gables', 'Doral',
  'Homestead', 'Key Largo', 'Fort Lauderdale', 'Pompano Beach',
  'Boca Raton', 'Delray Beach', 'Boynton Beach', 'West Palm Beach',
]

const INFO_BOXES = [
  {
    icon: 'bi-geo-alt-fill',
    title: 'Based in Miami',
    desc: 'Centrally located to serve all of South Florida',
  },
  {
    icon: 'bi-arrow-down-up',
    title: 'Coverage Span',
    desc: 'Key Largo (south) → West Palm Beach (north)',
  },
  {
    icon: 'bi-house-door',
    title: 'We Come to You',
    desc: 'Home, marina, dock, waterfront property — anywhere',
  },
]

export default function ServiceArea() {
  return (
    <section id="service-area" className="service-area">
      <div className="container">
        <div className="service-area__inner">

          {/* Text */}
          <div className="service-area__text">
            <div className="section-tag">Coverage</div>
            <h2 className="section-title">
              Our <span>Service Area</span>
            </h2>
            <div className="section-divider"></div>

            <p className="section-subtitle" style={{ marginBottom: 20 }}>
              Although based in Miami, our mobile service reaches riders and boat
              owners across South Florida's full coastline.
            </p>

            <p className="service-area__tagline">
              <strong>No trailers. No stress.</strong> Just expert repairs where you need them.
            </p>

            <div className="service-area__cities">
              {CITIES.map(city => (
                <span className="city-pill" key={city}>
                  <i className="bi bi-pin-map-fill"></i>
                  {city}
                </span>
              ))}
            </div>

            <div className="service-area__info">
              {INFO_BOXES.map(box => (
                <div className="area-info-box" key={box.title}>
                  <div className="area-info-box__icon">
                    <i className={`bi ${box.icon}`}></i>
                  </div>
                  <div className="area-info-box__text">
                    <strong>{box.title}</strong>
                    <span>{box.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Visual */}
          <div className="service-area__map">
            <div className="service-area__map-wrap">
              <span className="map-range map-range--top">↑ West Palm Beach</span>
              <span className="map-range map-range--bottom">Key Largo ↓</span>

              {/* SVG Map of South Florida */}
              <svg viewBox="0 0 300 420" className="florida-map" xmlns="http://www.w3.org/2000/svg">
                {/* Florida peninsula outline (simplified) */}
                <path
                  className="florida-fill florida-outline"
                  d="
                    M 145 20
                    L 200 18
                    L 230 30
                    L 250 55
                    L 260 85
                    L 255 120
                    L 248 150
                    L 240 175
                    L 235 210
                    L 230 240
                    L 225 270
                    L 218 300
                    L 208 325
                    L 195 345
                    L 178 360
                    L 162 368
                    L 148 372
                    L 138 370
                    L 132 360
                    L 140 345
                    L 145 330
                    L 148 310
                    L 150 290
                    L 148 268
                    L 142 248
                    L 138 228
                    L 136 208
                    L 134 185
                    L 132 160
                    L 128 135
                    L 120 108
                    L 112 80
                    L 115 50
                    L 128 28
                    Z
                  "
                />

                {/* Coverage zone (South Florida corridor) */}
                <ellipse
                  className="coverage-zone"
                  cx="190"
                  cy="200"
                  rx="60"
                  ry="160"
                  transform="rotate(-5 190 200)"
                />

                {/* Route line */}
                <path
                  className="map-route"
                  d="M 190 90 Q 200 170 195 200 Q 190 260 185 310 Q 182 340 178 360"
                />

                {/* City dots */}
                {/* West Palm Beach */}
                <circle className="map-city-dot" cx="196" cy="92" r="4"/>
                <text className="map-city-label" x="204" y="95">West Palm Beach</text>

                {/* Boca Raton */}
                <circle className="map-city-dot" cx="196" cy="122" r="3"/>
                <text className="map-city-label" x="203" y="125">Boca Raton</text>

                {/* Fort Lauderdale */}
                <circle className="map-city-dot" cx="197" cy="158" r="3.5"/>
                <text className="map-city-label" x="204" y="161">Fort Lauderdale</text>

                {/* Miami — HOME BASE */}
                <circle className="map-city-dot--home" cx="196" cy="200" r="5.5"/>
                <text className="map-city-label" x="204" y="198" style={{ fill: 'var(--gold)', fontSize: '10px', fontWeight: 700 }}>Miami ★</text>

                {/* Homestead */}
                <circle className="map-city-dot" cx="190" cy="270" r="3"/>
                <text className="map-city-label" x="197" y="273">Homestead</text>

                {/* Key Largo */}
                <circle className="map-city-dot" cx="182" cy="338" r="3"/>
                <text className="map-city-label" x="165" y="341">Key Largo</text>

                {/* Decorative water dots */}
                <circle cx="60" cy="180" r="1.5" fill="var(--accent)" opacity="0.2"/>
                <circle cx="70" cy="200" r="1" fill="var(--accent)" opacity="0.15"/>
                <circle cx="55" cy="220" r="2" fill="var(--accent)" opacity="0.1"/>
                <circle cx="75" cy="240" r="1.5" fill="var(--accent)" opacity="0.18"/>
                <circle cx="50" cy="260" r="1" fill="var(--accent)" opacity="0.12"/>

                {/* Atlantic ocean side dots */}
                <circle cx="255" cy="150" r="1.5" fill="var(--accent)" opacity="0.15"/>
                <circle cx="265" cy="180" r="1" fill="var(--accent)" opacity="0.12"/>
                <circle cx="258" cy="210" r="2" fill="var(--accent)" opacity="0.1"/>

                {/* Ocean label */}
                <text x="58" y="305" fill="rgba(0,200,255,0.2)" fontSize="8" fontFamily="Rajdhani" transform="rotate(-90 58 305)">GULF OF MEXICO</text>
                <text x="250" y="130" fill="rgba(0,200,255,0.2)" fontSize="7" fontFamily="Rajdhani" transform="rotate(90 250 130)">ATLANTIC</text>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
