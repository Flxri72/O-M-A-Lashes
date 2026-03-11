import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";

const images = [
  { src: gallery1, alt: "Antes y después extensiones de pestañas", quote: "Tus ojos merecen brillar como diamantes" },
  { src: gallery2, alt: "Volumen dramático de pestañas", quote: "Cada pestaña cuenta una historia de belleza" },
  { src: gallery3, alt: "Mega volumen extensiones", quote: "El poder de una mirada perfecta" },
  { src: gallery4, alt: "Extensiones híbridas cat eye", quote: "Pestañas que transforman vidas" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { theme } = useTheme();
  const quoteTextColor = theme === "dark" ? "text-white" : "text-cream";

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl font-light text-foreground md:text-5xl">
            Galería
          </h2>
          <div className="gradient-gold mx-auto mt-4 h-[1px] w-12" />
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:gap-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Frase bonita en hover */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <p className={`font-display text-center text-lg md:text-xl ${quoteTextColor} px-4 italic`}>
                  {img.quote}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal para ampliar la imagen */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-4xl w-full"
          >
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="h-full w-full object-contain rounded-lg"
            />

            {/* Frase en el modal */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`absolute bottom-6 left-6 right-6 font-display text-xl ${quoteTextColor} text-center italic`}
            >
              {images[selectedImage].quote}
            </motion.p>

            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-charcoal hover:bg-gold/80 transition-colors"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
