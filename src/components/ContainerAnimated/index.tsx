import { motion } from 'framer-motion';

export const ContainerAnimated: React.FC = ({ children }) => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{ duration: 1 }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
