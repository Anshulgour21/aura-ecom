import { motion } from 'framer-motion';
import { luxuryEase, luxuryDuration } from './constants';

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.02, filter: 'blur(5px)' }}
      transition={{ duration: luxuryDuration, ease: luxuryEase }}
    >
      {children}
    </motion.div>
  );
}
