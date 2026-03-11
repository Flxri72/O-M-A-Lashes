import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  isVisible: boolean;
}

const Loader = ({ isVisible }: LoaderProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Sparkle decorations */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-gold"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${15 + Math.random() * 70}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
              }}
            >
              ✦
            </motion.div>
          ))}

          {/* Main line animation */}
          <motion.div
            className="gradient-gold h-[1px] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <motion.p
            className="font-display mt-6 text-2xl italic tracking-widest text-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Orianis Moreno
          </motion.p>

          <motion.p
            className="font-heading mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Lash Artist
          </motion.p>

          <motion.div
            className="gradient-gold mt-6 h-[1px] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
