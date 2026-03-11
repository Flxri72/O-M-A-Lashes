import { motion } from "framer-motion";
import aboutImage from "@/assets/about-artist.jpg";

const AboutSection = () => {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-luxury">
              <img
                src={aboutImage}
                alt="Orianis Moreno - Lash Artist"
                className="h-80 w-full object-cover md:h-[480px]"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-gold/20 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl border border-gold/30 bg-gold-light/20 p-8 md:p-10"
          >
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Sobre mí
            </p>
            <h2 className="font-display text-4xl font-light text-foreground md:text-5xl">
              Orianis Moreno
            </h2>
            <div className="gradient-gold mt-4 h-[1px] w-12" />
            <motion.p
              className="mt-6 font-body text-sm leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Con pasión por la belleza y la perfección en cada detalle, me especializo en el arte
              de las extensiones de pestañas. Cada set es diseñado con precisión, cuidando la salud
              de tus pestañas naturales mientras realzo tu mirada.
            </motion.p>
            <motion.p
              className="mt-4 font-body text-sm leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Mi compromiso es ofrecerte una experiencia premium, con productos de la más alta calidad
              y técnicas avanzadas que garantizan resultados espectaculares y duraderos.
            </motion.p>
            <div className="mt-8 flex items-center gap-3">
              <span className="text-gold text-lg">✦</span>
              <p className="font-heading text-xs uppercase tracking-[0.2em] text-foreground/70">
                Barranquilla, Colombia
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
