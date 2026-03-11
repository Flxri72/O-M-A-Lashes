import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceItem {
  name: string;
  price: string;
  maintenance?: string;
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

const services: ServiceCategory[] = [
  {
    title: "Extensiones",
    items: [
      { name: "Clásicas", price: "$90", maintenance: "$60" },
      { name: "Híbridas", price: "$105", maintenance: "$70" },
      { name: "Set 2D", price: "$120", maintenance: "$80" },
      { name: "Set 3D Armado", price: "$180", maintenance: "$100" },
      { name: "Lash Lifting", price: "$80" },
    ],
  },
  {
    title: "Volúmenes Tecnológicos",
    items: [
      { name: "3D Omera Lash", price: "$130", maintenance: "$85" },
      { name: "4D Exclusiva", price: "$140", maintenance: "$90" },
      { name: "5D Atenea", price: "$150", maintenance: "$100" },
      { name: "6D Mega Volumen", price: "$170", maintenance: "$110" },
    ],
  },
  {
    title: "Diseños Especiales",
    items: [
      { name: "Volumen Fantasía", price: "$130", maintenance: "$80" },
      { name: "Mocca Lash 3D", price: "$130", maintenance: "$85" },
      { name: "Mocca Lash 4D", price: "$140", maintenance: "$90" },
    ],
  },
  {
    title: "Retiros",
    items: [
      { name: "Retiro con crema", price: "$20" },
      { name: "Retiro con pinza", price: "$15" },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="px-6 py-24 md:py-32 bg-cream-dark" id="servicios">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Nuestros servicios
          </p>
          <h2 className="font-display text-4xl font-light text-foreground md:text-5xl">
            Catálogo
          </h2>
          <div className="gradient-gold mx-auto mt-4 h-[1px] w-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-6">
            {services.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={category.title}
                  className="rounded-2xl border border-border overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline py-6 px-6 text-left data-[state=open]:text-gold data-[state=open]:bg-card">
                    <div className="flex items-center gap-3">
                      <span className="text-gold text-lg">✦</span>
                      <h3 className="font-display text-xl font-light text-foreground">
                        {category.title}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 bg-card space-y-0">
                    {category.items.map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between py-3 ${
                          i !== category.items.length - 1 ? "border-b border-border/50" : ""
                        }`}
                      >
                        <span className="font-body text-sm text-card-foreground/80">
                          {item.name}
                        </span>
                        <div className="flex items-center gap-3 text-right">
                          <span className="font-display text-lg font-light text-gold">
                            {item.price}
                          </span>
                          {item.maintenance && (
                            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-heading uppercase tracking-wider text-muted-foreground">
                              Mant: {item.maintenance}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
