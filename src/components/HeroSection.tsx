import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import heroImage from "@/assets/hero-image.jpeg";
import logo from "@/assets/Logo.png";
import logoDarkMode from "@/assets/Logo-DARKMODE.png";

const HeroSection = () => {
  const { theme } = useTheme();
  const currentLogo = theme === "dark" ? logoDarkMode : logo;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Background image */}
      {/* <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Extensiones de pestañas premium"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div> */}

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-16"
        >
          <img
            src={currentLogo}
            alt="Orianis Moreno Lash Artist"
            className="w-full h-auto drop-shadow-lg"
            style={{
              maskImage: 'radial-gradient(ellipse at center, black 0%, black 30%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.01) 70%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, black 30%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.01) 70%, transparent 100%)',
              transform: 'scale(1)',
              transformOrigin: 'center',
            }}
          />
        </motion.div>

        {/* Slogan */}
        <motion.p
          className="font-heading text-sm uppercase tracking-[0.35em] text-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Arte, diseño y perfección
        </motion.p>

        <motion.div
          className="gradient-gold mx-auto mt-6 h-[1px] w-16"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ delay: 1, duration: 0.8 }}
        />

        <motion.p
          className="font-display mt-6 text-lg italic text-muted-foreground typewriter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Extensiones que transforman miradas
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gold text-xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
