import { motion } from 'framer-motion';
import { luxuryEase, luxuryDuration } from './constants';

export default function Reveal({ children, delay = 0, className = '' }) {
  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: luxuryDuration, ease: luxuryEase, delay }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: '-100%' }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: luxuryDuration, ease: luxuryEase, delay }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--color-primary)',
          zIndex: 10
        }}
      />
    </div>
  );
}
