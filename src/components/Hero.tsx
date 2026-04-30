import BottomLeftCard from "./BottomLeftCard";
import BottomRightCorner from "./BottomRightCorner";
import HeroBadge from "./HeroBadge";
import Navbar from "./Navbar";
import Reservation from "../Reservation";
import { ArrowUp, ArrowUpRight, Calendar, Clock, Crown, Facebook, Instagram, Layers, Mail, MapPin, Maximize, MessageCircle, Phone, Shield, Sparkles, Star, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import type { Language } from "../translations";
import "../Reservation.css";

interface HeroProps {
  lang: Language;
  toggleLang: () => void;
  t: any;
}

const ServiceCardMobile = ({ service, index }: { service: any, index: number }) => {
  const icons = [Shield, Layers, Sparkles, Maximize, Crown, Sun];
  const Icon = icons[index] || Star;

  return (
    <div
      className="sticky w-full h-[70vh] -mb-[40vh] flex items-center justify-center px-4"
      style={{
        top: `${index * 32 + 80}px`,
        zIndex: 10 + index
      }}
    >
      <motion.article
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-[92%] p-8 rounded-[2.5rem] bg-white/90 backdrop-blur-3xl border border-white/60 shadow-[0_30px_90px_rgba(45,76,59,0.18)] group relative"
      >
        <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(94,135,108,0.1)] text-[rgba(94,135,108,0.95)] group-hover:scale-105 transition-transform">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-3xl font-normal text-[rgba(37,63,49,0.96)] tracking-tight">{service.title}</h3>
        <p className="mt-5 text-base leading-relaxed text-[rgba(37,63,49,0.58)]">{service.desc}</p>

        {/* Subtle index indicator */}
        <div className="absolute top-8 right-8 flex items-center gap-2">
          <span className="text-[10px] font-bold text-[rgba(94,135,108,0.4)] tracking-widest uppercase">
            {index + 1}
          </span>
          <div className="w-4 h-[1px] bg-[rgba(94,135,108,0.2)]" />
          <span className="text-[10px] font-bold text-[rgba(94,135,108,0.2)]">6</span>
        </div>
      </motion.article>
    </div>
  );
};

const Hero = ({ lang, toggleLang, t }: HeroProps) => {
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    target?.scrollIntoView({ block: "start" });
  }, []);

  return (
    <main dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen w-full bg-[#f0f0f0] p-2.5 sm:p-3 md:p-4 font-helvetica text-[rgba(37,63,49,0.95)]">
      <Navbar lang={lang} toggleLang={toggleLang} t={t} />
      <section id="accueil" dir={lang === 'ar' ? 'rtl' : 'ltr'} className="relative min-h-[calc(100vh-1rem)] sm:min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-2rem)] w-full rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] overflow-clip bg-white">
        <img src="/images/hero.jpg" alt="Hero background" className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0" />
        <div className={`absolute inset-0 z-[1] ${lang === 'ar' ? 'bg-[linear-gradient(270deg,rgba(240,240,240,0.9),rgba(240,240,240,0.48)_45%,rgba(240,240,240,0.12))]' : 'bg-[linear-gradient(90deg,rgba(240,240,240,0.9),rgba(240,240,240,0.48)_45%,rgba(240,240,240,0.12))]'}`} />
        <div className="relative z-10 min-h-[calc(100vh-1rem)] sm:min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-2rem)] flex flex-col">
          <div className={`flex-1 flex flex-col w-full ${lang === 'ar' ? 'items-start text-right' : 'items-start text-left'} justify-center px-5 sm:px-10 md:px-16 lg:px-24 pt-24 md:pt-0 pb-48 md:pb-28 lg:pb-24 max-w-4xl`}>
            <HeroBadge t={t} />
            <motion.h1
              className="text-[2.6rem] xs:text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[86px] font-normal text-[rgba(37,63,49,0.98)] mb-5 tracking-tight leading-[0.98]"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.hero.titlePart1}
              <span className="block text-[rgba(94,135,108,0.96)]">{t.hero.titlePart2}</span>
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-[rgba(37,63,49,0.68)] leading-relaxed max-w-2xl font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t.hero.description}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }} className="mt-8 flex flex-wrap gap-3">
              <a href="#reservation" className="flex items-center bg-[rgba(37,63,49,0.92)] text-white rounded-full ps-2 pe-6 py-2.5 gap-3 hover:bg-[rgba(37,63,49,1)] transition-colors shadow-xl group">
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:rotate-12"><Calendar className="w-5 h-5" /></span>
                <span className="text-sm font-medium tracking-wide">{t.hero.bookBtn}</span>
              </a>
              <motion.a
                href="#services"
                whileHover="hover"
                className="flex items-center bg-white/55 backdrop-blur-xl border border-white/40 text-[rgba(37,63,49,0.9)] rounded-full px-7 py-3.5 gap-2 hover:bg-white/75 transition-colors shadow-sm font-medium group"
              >
                <span>{t.hero.servicesBtn}</span>
                <motion.div
                  variants={{
                    hover: { x: 3, y: -3 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </motion.div>
              </motion.a>
            </motion.div>
          </div>
          <BottomLeftCard t={t} />
          <BottomRightCorner t={t} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 sm:px-6 md:px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.24em] text-[rgba(94,135,108,0.92)]">{t.services.overline}</span>
              <h2 className="mt-3 text-4xl md:text-6xl font-normal tracking-tight text-[rgba(37,63,49,0.96)]">{t.services.title}</h2>
            </div>
            <p className="max-w-md text-[rgba(37,63,49,0.6)] leading-relaxed">{t.services.description}</p>
          </motion.div>
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.services.items.map((service: any, index: number) => {
              const icons = [Shield, Layers, Sparkles, Maximize, Crown, Sun];
              const Icon = icons[index] || Star;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="group rounded-[2rem] bg-white/55 backdrop-blur-xl border border-white/45 p-6 md:p-7 shadow-[0_22px_70px_rgba(45,76,59,0.08)] hover:-translate-y-1 transition-transform"
                >
                  <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(94,135,108,0.1)] text-[rgba(94,135,108,0.95)] group-hover:scale-105 transition-transform"><Icon className="h-6 w-6" /></div>
                  <h3 className="text-2xl font-normal text-[rgba(37,63,49,0.96)]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[rgba(37,63,49,0.58)]">{service.desc}</p>
                </motion.article>
              );
            })}
          </div>

          {/* Mobile Stacking Layout */}
          <div className="md:hidden relative flex flex-col pt-10 pb-[30vh]">
            {t.services.items.map((service: any, index: number) => (
              <ServiceCardMobile
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="propos" className="px-4 sm:px-6 md:px-6 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-stretch">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative min-h-[350px] md:min-h-[600px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-white shadow-xl group">
            <img src="/images/doctor.jpeg" alt="Cabinet Dr Nawres Ben Salah" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] bg-white/25 backdrop-blur-xl border border-white/25 p-7 text-white shadow-2xl">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold opacity-90">{t.about.expertiseTitle}</span>
              <h3 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight">{t.nav.doctorName}</h3>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-[2rem] md:rounded-[2.5rem] bg-[#f8f9f8] border border-black/5 p-6 md:p-12 lg:p-16 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[rgba(94,135,108,0.95)] font-bold">{t.about.overline}</span>
              <h2 className="mt-6 text-4xl md:text-5xl lg:text-[62px] font-normal tracking-tight leading-[1.05] text-[rgba(37,63,49,0.96)]">{t.about.title}</h2>
              <div className="mt-8 space-y-4">
                <p className="text-[rgba(37,63,49,0.65)] leading-relaxed text-base md:text-lg">{t.about.p1}</p>
                <p className="text-[rgba(37,63,49,0.65)] leading-relaxed text-base md:text-lg">{t.about.p2}</p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Reservation Section */}
      <motion.div
        id="reservation"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-4 sm:px-6 md:px-6 pb-20 md:pb-32"
      >
        <div className="max-w-7xl mx-auto">
          <Reservation lang={lang} />
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <section id="avis" className="px-4 sm:px-6 md:px-6 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.24em] text-[rgba(94,135,108,0.92)]">{t.testimonials.overline}</span>
              <h2 className="mt-3 text-4xl md:text-6xl font-normal tracking-tight text-[rgba(37,63,49,0.96)]">{t.testimonials.title}</h2>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={t.testimonials.reviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-xl border border-white/45 px-6 py-3.5 text-[rgba(37,63,49,0.88)] hover:bg-white/80 transition-colors w-fit shadow-sm font-medium"
            >
              {t.testimonials.giveReview} <MessageCircle className="h-4 w-4 opacity-70" />
            </motion.a>
          </motion.div>
          <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {t.testimonials.items.map((item: any, index: number) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="min-w-[85vw] md:min-w-0 snap-center rounded-[2rem] bg-white/58 backdrop-blur-xl border border-white/45 p-5 md:p-7 shadow-[0_22px_70px_rgba(45,76,59,0.08)]"
              >
                <div className="flex gap-1 text-[rgba(94,135,108,0.92)]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 md:h-4 md:w-4" fill="currentColor" />)}</div>
                <p className="mt-5 md:mt-8 text-[16px] md:text-lg leading-relaxed text-[rgba(37,63,49,0.78)]">“{item.text}”</p>
                <div className="mt-6 md:mt-8 flex items-center gap-3">
                  <div className="h-9 w-9 md:h-11 md:w-11 rounded-full bg-[rgba(94,135,108,0.12)] flex items-center justify-center text-[rgba(94,135,108,0.95)]"><Star className="h-4 w-4 md:h-5 md:w-5" /></div>
                  <div><h3 className="text-sm md:text-base font-normal text-[rgba(37,63,49,0.95)]">{item.name}</h3><p className="text-[12px] md:text-sm text-[rgba(37,63,49,0.55)]">{item.role}</p></div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-2 sm:px-4 md:px-6 pb-2 sm:pb-3 md:pb-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-white/58 backdrop-blur-2xl border border-white/45 shadow-[0_24px_90px_rgba(45,76,59,0.1)] text-[rgba(37,63,49,0.72)]"
        >
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.7fr_1.6fr] p-6 md:p-8 lg:p-10">
            {/* Column 1: Logo, Description, Contact, Socials */}
            <div className="flex flex-col">
              <a href="#accueil" className="inline-flex items-center gap-3 rounded-full bg-white/60 border border-white/40 py-1.5 pl-2 pr-5 backdrop-blur-xl w-fit">
                <div className="h-10 w-10 overflow-hidden rounded-full flex items-center justify-center bg-[rgba(94,135,108,0.08)]">
                  <img src="/images/my-logo.webp" alt="NBS Logo" className="h-full w-full object-contain" />
                </div>
                <span className="text-base font-normal text-[rgba(37,63,49,0.95)]">{t.nav.doctorName}</span>
              </a>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-[rgba(37,63,49,0.58)]">{t.footer.description}</p>

              <div className="mt-14">
                <h3 className="text-sm font-normal uppercase tracking-[0.22em] text-[rgba(94,135,108,0.92)]">{t.footer.contactTitle}</h3>
                <div className="mt-5 flex flex-col gap-3 text-sm">
                  <a href="tel:92691615" className="inline-flex items-center gap-2 hover:text-[rgba(37,63,49,0.95)] transition-colors"><Phone className="h-4 w-4 text-[rgba(94,135,108,0.9)]" /><span dir="ltr">92 691 615</span></a>
                  <a href="mailto:drbensalahnawres@gmail.com" className="inline-flex items-center gap-2 hover:text-[rgba(37,63,49,0.95)] transition-colors"><Mail className="h-4 w-4 text-[rgba(94,135,108,0.9)]" />drbensalahnawres@gmail.com</a>
                  <a href="https://maps.app.goo.gl/ijZSS8r19uv9zbci6" target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 hover:text-[rgba(37,63,49,0.95)] transition-colors">
                    <MapPin className="h-4 w-4 text-[rgba(94,135,108,0.9)] mt-1 shrink-0" />
                    <span className="whitespace-pre-line">{t.footer.address}</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Column 2: Liens & Socials */}
            <div className="flex flex-col">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-0">
                <div>
                  <h3 className="text-sm font-normal uppercase tracking-[0.22em] text-[rgba(94,135,108,0.92)]">{t.footer.linksTitle}</h3>
                  <div className="mt-5 flex flex-col gap-3 text-sm">
                    <a href="#accueil" className="hover:text-[rgba(37,63,49,0.95)] transition-colors">{t.nav.home}</a>
                    <a href="#services" className="hover:text-[rgba(37,63,49,0.95)] transition-colors">{t.nav.services}</a>
                    <a href="#propos" className="hover:text-[rgba(37,63,49,0.95)] transition-colors">{t.nav.about}</a>
                    <a href="#reservation" className="hover:text-[rgba(37,63,49,0.95)] transition-colors">{t.nav.rdv}</a>
                    <a href="https://maps.app.goo.gl/ijZSS8r19uv9zbci6" target="_blank" rel="noopener noreferrer" className="hover:text-[rgba(37,63,49,0.95)] transition-colors">{t.footer.calcItinerary}</a>
                  </div>
                </div>

                <div className="mt-0 md:mt-10">
                  <h3 className="text-sm font-normal uppercase tracking-[0.22em] text-[rgba(94,135,108,0.92)]">{t.footer.socialsTitle}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href="https://www.instagram.com/dr_nawres_bensalah/" target="_blank" rel="noopener noreferrer" className="h-11 w-11 rounded-full bg-[rgba(94,135,108,0.1)] border border-[rgba(94,135,108,0.12)] flex items-center justify-center text-[rgba(94,135,108,0.95)] hover:bg-[rgba(94,135,108,0.16)] transition-colors"><Instagram className="h-5 w-5" /></a>
                    <a href="https://www.facebook.com/profile.php?id=61561642716789" target="_blank" rel="noopener noreferrer" className="h-11 w-11 rounded-full bg-[rgba(94,135,108,0.1)] border border-[rgba(94,135,108,0.12)] flex items-center justify-center text-[rgba(94,135,108,0.95)] hover:bg-[rgba(94,135,108,0.16)] transition-colors"><Facebook className="h-5 w-5" /></a>
                  </div>

                  <a href="#accueil" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[rgba(37,63,49,0.92)] text-white ps-6 pe-2 py-2 hover:bg-[rgba(37,63,49,1)] transition-colors shadow-lg group w-fit">
                    <span className="text-sm font-medium tracking-wide">{t.footer.backToTop}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:-translate-y-0.5"><ArrowUp className="h-4 w-4" /></span>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Horaires & Map */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-sm font-normal uppercase tracking-[0.22em] text-[rgba(94,135,108,0.92)] flex items-center gap-2">
                  <Clock className="h-4 w-4" /> {t.footer.scheduleTitle}
                </h3>
                <div className="mt-5 flex flex-col gap-3 text-sm text-[rgba(37,63,49,0.58)]">
                  <div className="flex justify-between gap-4 border-b border-[rgba(94,135,108,0.08)] pb-2">
                    <span>{t.footer.schedule.monFri}</span>
                    <span className="font-medium text-[rgba(37,63,49,0.85)]">{t.footer.schedule.monFriTime}</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-[rgba(94,135,108,0.08)] pb-2">
                    <span>{t.footer.schedule.sat}</span>
                    <span className="font-medium text-[rgba(37,63,49,0.85)]">{t.footer.schedule.satTime}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>{t.footer.schedule.sun}</span>
                    <span className="font-medium text-[rgba(94,135,108,0.88)]">{t.footer.schedule.sunTime}</span>
                  </div>
                </div>
              </div>

              <div className="relative flex-1 min-h-[220px] rounded-[1.8rem] overflow-hidden border border-[rgba(94,135,108,0.12)] bg-[rgba(94,135,108,0.04)] shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12768.89329364533!2d10.277329!3d36.861073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b534d1f5d9a7%3A0x1e7562a99f98ae22!2zRHIgTmF3cmVzIEJlbiBTYWxhaCBNw6lkZWNpbiBEZW50aXN0ZSDYp9mE2K_Zg9iq2YjYsdipINmG2YjYsdizINio2YYg2LXYp9mE2K0g2LfYqNmK2KjYqSDYo9iz2YbYp9mG!5e0!3m2!1sen!2stn!4v1777556579366!5m2!1sen!2stn"
                  className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-85 hover:opacity-100"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </footer>
    </main>
  );
};

export default Hero;