import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Phone, Clock, MapPin, Mail,
  ShieldPlus, Sparkles, Smile, Crown, Stethoscope, Search,
  Star, Quote, ChevronLeft, ChevronRight, Calendar
} from 'lucide-react';
import Reservation from './Reservation';
import './Reservation.css';
import { translations } from './translations';
import type { Language } from './translations';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as any }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const services = [
  {
    icon: <Search size={28} />,
    title: "Soins préventifs",
    desc: "Bilan complet, détartrage et soins des caries pour préserver la santé naturelle de vos dents au quotidien."
  },
  {
    icon: <Stethoscope size={28} />,
    title: "Implants dentaires",
    desc: "Remplacement durable, fonctionnel et esthétique de vos dents manquantes avec des matériaux de haute qualité."
  },
  {
    icon: <Sparkles size={28} />,
    title: "Facettes dentaires",
    desc: "Retrouvez un sourire parfait, aligné et éclatant sur-mesure grâce à de fines pellicules en céramique."
  },
  {
    icon: <Smile size={28} />,
    title: "Gouttières invisibles",
    desc: "Correction de l'alignement dentaire en toute discrétion avec des gouttières transparentes et confortables."
  },
  {
    icon: <Crown size={28} />,
    title: "Couronnes céramique",
    desc: "Restauration solide et 100% naturelle pour protéger et sublimer vos dents abîmées ou fragilisées."
  },
  {
    icon: <ShieldPlus size={28} />,
    title: "Blanchiment dentaire",
    desc: "Éclaircissement sécurisé, rapide et efficace au fauteuil pour un sourire rayonnant de blancheur."
  }
];

const testimonials = [
  {
    name: "Nadia B",
    text: "Dentiste très douce et attentionnée. On se sent tout de suite en confiance. Je recommande les yeux fermés !",
    role: "Patiente"
  },
  {
    name: "Iyed",
    text: "Professionnel à l'écoute et très doux pendant les soins. Le cabinet est propre et l'accueil est chaleureux.",
    role: "Patient"
  },
  {
    name: "G.Mehdi",
    text: "Une praticienne d'une grande douceur... tout se passe sans douleur et avec beaucoup de pédagogie. Merci !",
    role: "Patient"
  },
  {
    name: "Smida.s",
    text: "Compétente, douce et attentionnée. Chaque visite se déroule avec sérieux et bienveillance, merci pour la qualité.",
    role: "Patiente"
  }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('fr');
  const servicesRef = useRef<HTMLDivElement>(null);

  const t = translations[lang];

  const closeMenu = () => setMenuOpen(false);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isVisible ? '' : 'hidden-nav'}`}>
        <div className="container">
          <div className="logo-wrapper">
            <img src="/images/my-logo.png" alt="Dr Nawres Logo" className="nav-logo-img" />
            <div className="logo-text">
              <span className="doctor-name">Dr Nawres Ben Salah</span>
              <span className="doctor-title">{t.nav.dentist}</span>
              <span className="clinic-location">{t.nav.clinic}</span>
            </div>
          </div>
          <ul className="nav-links">
            <li><a href="#accueil">{t.nav.home}</a></li>
            <li><a href="#services">{t.nav.services}</a></li>
            <li><a href="#propos">{t.nav.about}</a></li>
          </ul>
          <div className="flex items-center gap-4">
            <button 
              className="nav-fr-label btn-outline" 
              style={{ padding: '0.25rem 0.5rem', borderRadius: '8px', cursor: 'pointer', fontFamily: 'monospace' }} 
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            >
              {lang.toUpperCase()}
            </button>
            {/* Desktop RDV button */}
            <a href="#reservation" className="btn btn-primary nav-rdv-desktop">
              {t.nav.rdv}
            </a>
            {/* Mobile hamburger */}
            <button
              className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-menu-nav">
          <a href="#accueil" className="mobile-menu-link" onClick={closeMenu}>{t.nav.home}</a>
          <a href="#services" className="mobile-menu-link" onClick={closeMenu}>{t.nav.services}</a>
          <a href="#propos" className="mobile-menu-link" onClick={closeMenu}>{t.nav.about}</a>
          <a href="#avis" className="mobile-menu-link" onClick={closeMenu}>{t.nav.reviews}</a>
          <a href="#reservation" className="mobile-menu-link" onClick={closeMenu}>{t.nav.rdv}</a>
        </nav>
        <div className="mobile-menu-footer">
          <a href="tel:92691615" className="mobile-menu-phone">📞 92 691 615</a>
        </div>
      </div>
      {/* Mobile menu backdrop */}
      {menuOpen && <div className="mobile-menu-backdrop" onClick={closeMenu} />}

      {/* Mobile Fixed Bottom CTA */}
      <a href="#reservation" className="mobile-bottom-cta" onClick={closeMenu}>
        <div className="mobile-bottom-cta-inner">
          <Calendar size={18} />
          {t.nav.rdv}
        </div>
      </a>

      {/* Hero Section */}
      <section id="accueil" className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-primary mb-4"
              style={{ letterSpacing: '2px', textTransform: 'uppercase', fontFamily: '"DM Sans", sans-serif', fontWeight: 600, fontSize: '0.9rem' }}
            >
              {t.hero.overline}
            </motion.h3>
            <motion.h1 variants={fadeInUp} className="mb-6">
              <span style={{ color: '#293d33' }}>{t.hero.titlePart1}</span> <span style={{ color: '#5e876c' }}>{t.hero.titlePart2}</span>
            </motion.h1>
            <motion.p variants={fadeInUp}>
              {t.hero.description}
            </motion.p>
            <motion.div variants={fadeInUp} className="hero-buttons">
              <a href="#reservation" className="btn btn-primary">{t.hero.bookBtn}</a>
              <a href="#services" className="btn btn-outline">{t.hero.servicesBtn}</a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-stats-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="stat-item">
              <h4>100%</h4>
              <span>{t.stats.satisfaction}</span>
            </div>
            <div className="stat-item">
              <h4>500+</h4>
              <span>{t.stats.patients}</span>
            </div>
            <div className="stat-item">
              <h4>5.0<Star size={16} fill="#fbbf24" stroke="none" className="inline mb-1 ml-1" /></h4>
              <span>{t.stats.reviews}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="bg-light py-8" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div className="emergency-banner flex justify-between items-center flex-wrap gap-4" style={{ padding: '2rem 0' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{t.urgency.title}</h3>
              <p className="text-light">{t.urgency.description}</p>
            </div>
            <a href="tel:92691615" className="btn btn-secondary emergency-btn" style={{ border: '2px solid var(--primary-color)' }}>
              <Phone size={18} className="text-primary" />
              92 691 615
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span
              className="text-primary uppercase"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 400,
                letterSpacing: "3px",
                display: "block",
                marginBottom: "0.5rem"
              }}
            >
              {t.services.overline}
            </span>
            <h2
              className="section-title"
              style={{
                fontSize: '2.75rem',
                fontWeight: 700,
                color: 'var(--primary-dark)',
                margin: '0 auto 3.5rem'
              }}
            >
              {t.services.title}
            </h2>
          </motion.div>

          <div
            ref={servicesRef}
            className="services-grid"
          >
            {services.map((service, index) => (
              <div key={index} className="service-card-sticky-wrap" data-card-index={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.08 }}
                  className="service-card"
                  data-index={index}
                >
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3>{t.services.items[index].title}</h3>
                  <p>{t.services.items[index].desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section id="propos" className="section-padding doctor-section">
        <div className="container">
          <div className="doctor-grid">
            <motion.div
              className="doctor-image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/images/doctor.jpg" alt="Dr Nawres Ben Salah" />
            </motion.div>

            <motion.div
              className="doctor-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
               <span
                className="text-primary uppercase"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 400,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem'
                }}
              >
                {t.about.overline}
              </span>
              <h2 className="section-title" style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>
                {t.about.title}
              </h2>
              <p className="mb-4" style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#4a5568' }}>
                {t.about.p1}
              </p>
              <p className="mb-6" style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#4a5568' }}>
                {t.about.p2}
              </p>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <Reservation lang={lang} />

      {/* Testimonials */}
      <section id="avis" className="section-padding testimonials-section">
        <div className="container">
          <div className="text-center mb-20">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary uppercase"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 400,
                letterSpacing: "3px",
                marginBottom: '0.5rem'
              }}
            >
              {t.testimonials.overline}
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title text-center"
              style={{
                fontSize: '2.75rem',
                fontWeight: 700,
                color: 'var(--primary-dark)',
                marginBottom: '2.5rem'
              }}
            >
              {t.testimonials.title}
            </motion.h2>
          </div>

          <div className="testimonial-slider-container">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="testimonial-card-main"
            >
              <div className="quote-icon-outer">
                <div className="quote-icon-container">
                  <Quote size={24} fill="white" stroke="white" />
                </div>
              </div>

              <div className="testimonial-content-wrapper text-center">
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#fbbf24" stroke="none" />
                  ))}
                </div>

                <p className="testimonial-text">
                  "{t.testimonials.items[currentTestimonial].text}"
                </p>

                <div className="testimonial-author mt-8">
                  <div className="author-info">
                    <h4 className="font-bold text-lg">{t.testimonials.items[currentTestimonial].name}</h4>
                    <p className="text-light text-sm">{t.testimonials.items[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === currentTestimonial ? 'dot-active' : ''}`}
                  onClick={() => setCurrentTestimonial(i)}
                  aria-label={`Voir avis ${i + 1}`}
                />
              ))}
            </div>

            <div className="testimonial-bottom-row">
              <button onClick={prevTestimonial} className="nav-btn-round">
                <ChevronLeft size={20} />
              </button>
              <a
                href="https://g.page/r/CSKumJ-pYnUeEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary border-divider"
                aria-label="Donner mon avis sur Google Maps"
              >
                {t.testimonials.giveReview}
              </a>
              <button onClick={nextTestimonial} className="nav-btn-round active">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col-1">
              <h3 className="font-serif mb-1" style={{ fontSize: '1.2rem', paddingTop: '3rem', color: '#faf8f5' }}>Dr Nawres Ben Salah</h3>
              <p style={{ fontSize: '0.75rem', color: '#7d8881', marginBottom: '1.2rem' }}>{t.footer.role}</p>
              <p className="mb-6 text-sm" style={{ color: '#bbc0bb', lineHeight: 1.6, maxWidth: '300px' }}>{t.footer.description}</p>
              <ul className="footer-contact-list">
                <li><Phone size={16} /> <span style={{ fontFamily: 'monospace' }}>92 691 615</span></li>
                <li><Mail size={16} /> <span>drbensalahnawres@gmail.com</span></li>
                <li><MapPin size={16} style={{ flexShrink: 0, marginTop: '4px' }} /> <span style={{ lineHeight: 1.5 }}>Immeuble Kmar Médical Center, B 2-3<br />Appartement B 23, Ain Zaghouen Nord<br />Cité Aziza, La Marsa, Tunis 2046</span></li>
              </ul>
            </div>

            <div className="footer-col-2">
              <h3 className="font-serif flex items-center gap-2" style={{ fontSize: '1.1rem', marginBottom: '1.2rem', paddingTop: '3rem', color: '#faf8f5' }}><Clock size={18} /> {t.footer.scheduleTitle}</h3>
              <div className="schedule-list">
                <div className="schedule-row">
                  <span>{t.footer.schedule.monFri}</span>
                  <span>{t.footer.schedule.monFriTime}</span>
                </div>
                <div className="schedule-row">
                  <span>{t.footer.schedule.sat}</span>
                  <span>{t.footer.schedule.satTime}</span>
                </div>
                <div className="schedule-row">
                  <span>{t.footer.schedule.sun}</span>
                  <span style={{ color: '#7d8881' }}>{t.footer.schedule.sunTime}</span>
                </div>
              </div>
            </div>

            <div className="footer-col-3">
              <h3 className="font-serif flex items-center gap-2" style={{ fontSize: '1.1rem', marginBottom: '1.2rem', paddingTop: '3rem', color: '#faf8f5' }}><MapPin size={18} /> {t.footer.findUs}</h3>
              <div className="map-container mb-4 overflow-hidden" style={{ borderRadius: '16px' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12768.89329364533!2d10.277329!3d36.861073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b534d1f5d9a7%3A0x1e7562a99f98ae22!2sCabinet%20dentaire%20-%20Dr%20Nawres%20Ben%20Salah%20-%20M%C3%A9decin%20Dentiste!5e0!3m2!1sfr!2stn!4v1775079138244!5m2!1sfr!2stn" width="100%" height="160" style={{ border: 0, borderRadius: '16px' }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <a href="https://maps.google.com/?q=36.861073,10.277329" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors mb-6 pb-2 hover:text-white" style={{ color: '#bbc0bb', fontSize: '0.85rem', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                <MapPin size={16} /> Calculer l'itinéraire
              </a>

              <div className="social-links flex gap-4" style={{ marginTop: '1.5rem' }}>
                <a href="https://www.facebook.com/profile.php?id=61561642716789" target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://www.instagram.com/dr_nawres_bensalah/" target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', paddingBottom: '1.5rem', textAlign: 'center' }}>
            <p style={{ color: '#bbc0bb', fontSize: '0.85rem', letterSpacing: '0.5px' }}>© {new Date().getFullYear()} Dr Nawres Ben Salah — {t.footer.rights}</p>
          </div>

          <div className="watermark" style={{ display: 'none' }}>
            NAWRES
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
