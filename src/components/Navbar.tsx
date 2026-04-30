import { useState, useEffect } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Language } from "../translations";

interface NavbarProps {
  lang: Language;
  toggleLang: () => void;
  t: any;
}

const Navbar = ({ lang, toggleLang, t }: NavbarProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsSticky(currentScrollY > 100);
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { label: t.nav.home, href: "#accueil" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#propos" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        ease: "easeOut" as any
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.nav 
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : { y: -100, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" as any }}
        className={`fixed top-0 left-0 right-0 z-[999] flex items-center justify-center pointer-events-none ${
          isSticky ? "pt-4 px-4 md:px-6 lg:px-10" : "pt-8 md:pt-12 px-4 md:px-6 lg:px-10"
        }`}
      >
        <div className={`w-full flex items-center justify-between pointer-events-auto transition-shadow duration-500 ${
          isSticky 
            ? "max-w-7xl bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_80px_rgba(45,76,59,0.12)] rounded-full px-2 sm:px-3 py-2" 
            : "max-w-none"
        }`}>
          {/* Logo Section */}
          <motion.a 
            variants={itemVariants} 
            href="#accueil" 
            className={`flex items-center gap-3 min-w-0 rounded-full transition-all duration-500 ${
              isSticky 
                ? "py-1.5 ps-1 pe-4 hover:bg-white/40" 
                : "bg-white/55 backdrop-blur-xl border border-white/30 py-1.5 ps-2 pe-4 shadow-[0_18px_55px_rgba(45,76,59,0.12)]"
            }`}
          >
            <div className={`overflow-hidden rounded-full flex items-center justify-center bg-[rgba(94,135,108,0.08)] transition-all duration-500 ${
              isSticky ? "h-9 w-9" : "h-10 w-10"
            }`}>
              <img src="/images/my-logo.webp" alt="NBS Logo" className="h-full w-full object-contain" />
            </div>
            <span className="flex flex-col leading-none">
              <span className={`font-normal tracking-tight text-[rgba(37,63,49,0.95)] transition-all duration-500 ${
                isSticky ? "text-[10px] sm:text-xs md:text-sm" : "text-xs sm:text-sm md:text-base"
              }`}>{t.nav.doctorName}</span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[9px] sm:text-[10px] md:text-xs text-[rgba(37,63,49,0.58)]">
                {t.nav.clinic}
              </motion.span>
            </span>
          </motion.a>

          {/* Menu Items (Desktop) */}
          <motion.ul 
            variants={itemVariants} 
            className={`hidden md:flex items-center transition-all duration-500 ${
              isSticky 
                ? "gap-6 lg:gap-8 px-4 text-xs lg:text-sm font-medium" 
                : "gap-8 lg:gap-11 px-7 py-3 rounded-full bg-white/35 backdrop-blur-xl border border-white/25 text-sm font-normal shadow-[0_18px_55px_rgba(45,76,59,0.1)]"
            }`}
          >
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className="cursor-pointer hover:text-[rgba(94,135,108,1)] transition-colors flex items-center gap-1 group">
                {item.label}
              </a>
            ))}
          </motion.ul>

          {/* Right Actions */}
          <motion.div 
            variants={itemVariants} 
            className={`flex items-center transition-all duration-500 ${
              isSticky 
                ? "gap-2" 
                : "p-1 rounded-full bg-white/35 backdrop-blur-xl border border-white/25 shadow-[0_18px_55px_rgba(45,76,59,0.1)]"
            }`}
          >
            <button 
              onClick={toggleLang}
              className={`hidden sm:block font-bold uppercase hover:opacity-70 transition-all duration-500 ${
                isSticky ? "px-3 py-1 text-xs" : "px-4 py-2 text-sm"
              }`}
            >
              {lang}
            </button>
            <motion.a
              href="#reservation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`hidden sm:flex items-center bg-[rgba(37,63,49,0.88)] text-white rounded-full transition-all duration-500 group shadow-lg ${
                isSticky ? "px-4 py-2 gap-1.5" : "px-5 py-2.5 gap-2"
              }`}
            >
              <ArrowUpRight className={`text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                isSticky ? "w-3.5 h-3.5" : "w-4 h-4"
              }`} />
              <span className={`font-medium whitespace-nowrap transition-all duration-500 ${
                isSticky ? "text-xs" : "text-sm"
              }`}>{t.nav.rdv}</span>
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden h-10 w-10 flex items-center justify-center rounded-full bg-[rgba(94,135,108,0.08)] text-[rgba(37,63,49,0.95)]"
            >
              <Menu className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[1000] md:hidden"
            />
            <motion.div 
              initial={{ x: lang === 'ar' ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: lang === 'ar' ? '-100%' : '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 } as any}
              className={`fixed top-0 bottom-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-[280px] bg-white/90 backdrop-blur-2xl z-[1001] md:hidden shadow-2xl p-6 flex flex-col`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-sm font-bold tracking-widest text-[rgba(94,135,108,0.9)] uppercase">Menu</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-[rgba(94,135,108,0.05)]"
                >
                  <ArrowUpRight className="rotate-45" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <a 
                    key={item.label} 
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-normal text-[rgba(37,63,49,0.95)] hover:text-[rgba(94,135,108,1)] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-black/5 flex flex-col gap-4">
                <button 
                  onClick={() => { toggleLang(); setIsMobileMenuOpen(false); }}
                  className="flex items-center justify-between w-full p-4 rounded-2xl bg-[rgba(94,135,108,0.05)] text-[rgba(37,63,49,0.95)]"
                >
                  <span className="font-medium">Language</span>
                  <span className="font-bold uppercase">{lang}</span>
                </button>
                <a 
                  href="#reservation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-4 rounded-2xl bg-[rgba(37,63,49,0.92)] text-white font-medium shadow-lg"
                >
                  {t.nav.rdv}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;