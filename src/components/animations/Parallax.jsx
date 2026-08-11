import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function Parallax({ children, offset = 50, className = '' }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const springX = useSpring(0, { stiffness: 100, damping: 30 });
  const springY = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * offset;
      const y = (e.clientY / innerHeight - 0.5) * offset;
      springX.set(x);
      springY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [offset, springX, springY]);

  return (
    <motion.div 
      className={className}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}
