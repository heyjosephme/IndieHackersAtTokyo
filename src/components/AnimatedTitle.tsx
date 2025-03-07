import { motion } from "framer-motion";

export const AnimatedTitle = () => {
  const titleWords = "Tokyo Indie Hackers".split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-6xl font-bold tracking-tight"
    >
      {titleWords.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block mr-3 text-foreground relative"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
        >
          {word}
          <motion.span
            className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
          />
        </motion.span>
      ))}
    </motion.div>
  );
};
