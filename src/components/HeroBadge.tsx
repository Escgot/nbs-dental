import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const HeroBadge = ({ t }: { t: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/95 backdrop-blur-md border border-black/5 mb-6 w-fit shadow-sm"
    >
      <MapPin className="w-4 h-4 text-[rgba(94,135,108,1)]" />
      <span className="text-[9px] xs:text-[11px] md:text-[13px] font-bold text-[rgba(37,63,49,0.7)] uppercase tracking-[0.12em] xs:tracking-[0.18em] whitespace-nowrap">{t.hero.overline}</span>
    </motion.div>
  );
};

export default HeroBadge;