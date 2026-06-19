import { About } from './components/About';
import { Contact } from './components/Contact';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Services } from './components/Services';
import { TopBar } from './components/TopBar';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { WhatsAppNotice } from './components/WhatsAppNotice';
import { useWhatsApp } from './hooks/useWhatsApp';

export default function App() {
  const { showNotice, handleWhatsAppClick, closeNotice } = useWhatsApp();

  return (
    <>
      <TopBar />
      <Header onWhatsAppClick={handleWhatsAppClick} />
      <main>
        <Hero onWhatsAppClick={handleWhatsAppClick} />
        <Highlights />
        <Services />
        <About onWhatsAppClick={handleWhatsAppClick} />
        <CtaBanner onWhatsAppClick={handleWhatsAppClick} />
        <Contact onWhatsAppClick={handleWhatsAppClick} />
      </main>
      <Footer />
      <WhatsAppFloat onWhatsAppClick={handleWhatsAppClick} />
      {showNotice && <WhatsAppNotice onClose={closeNotice} />}
    </>
  );
}
