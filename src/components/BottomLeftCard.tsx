import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const BottomLeftCard = ({ t }: { t: any }) => {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute bottom-24 left-4 right-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10 p-3 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/30 backdrop-blur-xl flex flex-col gap-2 lg:gap-3 min-w-[140px] md:min-w-[150px] lg:min-w-[180px] w-fit border border-white/20 shadow-lg"
    >
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-normal text-[rgba(37,63,49,0.95)] tracking-tight leading-tight" dir="ltr">92 691 615</span>
        <span className="text-[10px] md:text-[12px] font-bold text-[rgba(94,135,108,0.9)] uppercase tracking-[0.12em]">{t.urgency.title}</span>
      </div>
      <motion.a
        href="tel:92691615"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        className="flex items-center bg-[rgba(37,63,49,0.92)] text-white rounded-full ps-1 pe-4 md:pe-6 py-2 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(37,63,49,1)] transition-colors self-start group shadow-md"
      >
        <motion.div 
          className="bg-white/10 p-2 md:p-2 rounded-full flex items-center justify-center"
          variants={{
            hover: { rotate: [0, -15, 15, -15, 15, 0] }
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Phone className="w-3 h-3 md:w-4 md:h-4 text-white" />
        </motion.div>
        <span className="text-[13px] md:text-sm font-medium tracking-wide">{t.urgency.callBtn}</span>
      </motion.a>
    </motion.div>
  );
};

export default BottomLeftCard;