import React from 'react';
import { motion } from 'framer-motion';

type PropsType = {
  children: JSX.Element;
};

const animations = {
  initial: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -200 },
};

const AnimatedPage: React.FC<PropsType> = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
