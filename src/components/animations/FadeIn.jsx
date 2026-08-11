import { motion } from 'framer-motion';
import { luxuryEase, luxuryDuration } from './constants';

export default function FadeIn({ children, delay = 0, blur = false, slide = true, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y: slide ? 20 : 0, 
        filter: blur ? 'blur(10px)' : 'none' 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)' 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: luxuryDuration, 
        ease: luxuryEase, 
        delay 
      }}
    >
      {children}
    </motion.div>
  );
}
