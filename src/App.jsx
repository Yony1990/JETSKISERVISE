import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import ServiceArea from './components/ServiceArea/ServiceArea'
import Contact from './components/Contact/Contact'
import WhatsAppBtn from './components/WhatsAppBtn/WhatsAppBtn'

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <ServiceArea />
        <Contact />
      </main>

      {/* Fixed WhatsApp button */}
      <WhatsAppBtn />
    </>
  )
}
