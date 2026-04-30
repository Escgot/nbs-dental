import { motion } from "framer-motion";
import { Star } from "lucide-react";

const BottomRightCorner = ({ t }: { t: any }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="absolute bottom-0 right-0 p-2.5 pt-4 pl-6 sm:p-4 sm:pt-6 sm:pl-10 md:p-6 md:pt-8 md:pl-14 bg-[#f0f0f0] rounded-tl-[1.2rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem] flex items-center gap-2.5 sm:gap-4 md:gap-6"
    >
      <div className="absolute -top-[1.2rem] sm:-top-[2rem] md:-top-[3.5rem] right-0 w-[1.2rem] sm:w-[2rem] md:w-[3.5rem] h-[1.2rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#f0f0f0" />
        </svg>
      </div>
      <div className="absolute bottom-0 -left-[1.2rem] sm:-left-[2rem] md:-left-[3.5rem] w-[1.2rem] sm:w-[2rem] md:w-[3.5rem] h-[1.2rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="#f0f0f0" />
        </svg>
      </div>
      <motion.a 
        href="#avis"
        whileHover="hover"
        className="flex items-center gap-2.5 sm:gap-4 md:gap-6 group cursor-pointer"
      >
        <motion.div 
          className="bg-[rgba(94,135,108,0.08)] w-9 h-9 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-[rgba(94,135,108,0.12)] transition-colors group-hover:bg-[rgba(94,135,108,0.12)]"
          variants={{
            hover: { scale: 1.1, rotate: 180 }
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Star className="w-4 h-4 md:w-5 md:h-5 text-[rgba(94,135,108,0.95)]" fill="currentColor" />
        </motion.div>
        <div className="flex flex-col">
          <span className="text-sm md:text-[20px] font-normal text-[rgba(37,63,49,0.95)] leading-tight">500+ {t.stats.patients}</span>
          <div className="flex items-center gap-1 text-[10px] md:text-[15px] text-[rgba(37,63,49,0.58)] transition-colors group-hover:text-[rgba(37,63,49,0.85)]">
            <span className="font-normal">5.0 {t.stats.reviews}</span>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default BottomRightCorner;