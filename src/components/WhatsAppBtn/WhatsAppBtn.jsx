import './WhatsAppBtn.css'

// ⚠️ Replace with your real WhatsApp number
const WA_NUMBER = '13059041514'
const WA_MESSAGE = encodeURIComponent("Hi! My jet ski needs repair and I'd like to schedule a mobile service visit as soon as possible. I'm located in [City]. When are you available?")

export default function WhatsAppBtn() {
  const waLink = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

  return (
    <div className="wa-float">
      {/* <span className="wa-float__tooltip">
        <i className="bi bi-whatsapp"></i> Chat with Us
      </span> */}
      <a
        className="wa-float__btn"
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      <span className="wa-float__tooltip">
        <i className="bi bi-whatsapp"></i> Chat with Us
      </span>
    </div>
  )
}
