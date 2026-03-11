import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const policies = [
  {
    id: "policy-1",
    title: "Asistencia a la cita",
    description: "Asistir a la cita sin acompañantes y sin niños.",
    icon: "👤",
  },
  {
    id: "policy-2",
    title: "Anticipo obligatorio",
    description: "Para agendar es obligatorio realizar un anticipo.",
    icon: "💳",
  },
  {
    id: "policy-3",
    title: "Anticipo no reembolsable",
    description: "El anticipo no es reembolsable en caso de inasistencia o cancelación el mismo día.",
    icon: "❌",
  },
  {
    id: "policy-4",
    title: "Cancelaciones y cambios",
    description: "Cancelaciones o cambios solo con mínimo 24 horas de anticipación.",
    icon: "📅",
  },
  {
    id: "policy-5",
    title: "Reagendamiento",
    description: "El anticipo permite solo un (1) reagendamiento.",
    icon: "🔄",
  },
  {
    id: "policy-6",
    title: "Ubicación y confirmación",
    description: "La ubicación se envía el día de la cita y se reconfirma un día antes.",
    icon: "📍",
  },
  {
    id: "policy-7",
    title: "Tolerancia de tiempo",
    description: "10 minutos de tolerancia sin excepción.",
    icon: "⏱️",
  },
  {
    id: "policy-8",
    title: "Aceptación de términos",
    description: "Al agendar la cita, la clienta acepta las políticas y términos del servicio.",
    icon: "✓",
  },
];

const PoliciesSection = () => {
  return (
    <section className="px-6 py-24 md:py-32 bg-cream-dark" id="politicas">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Importante
          </p>
          <h2 className="font-display text-4xl font-light text-foreground md:text-5xl">
            Políticas
          </h2>
          <div className="gradient-gold mx-auto mt-4 h-[1px] w-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="all-policies"
              className="rounded-2xl border border-gold/30 bg-card overflow-hidden shadow-luxury"
            >
              <AccordionTrigger className="hover:no-underline py-6 px-6 text-left data-[state=open]:text-gold">
                <div className="flex items-center gap-3">
                  <span className="text-gold text-lg">✦</span>
                  <span className="font-display text-lg font-light text-foreground">
                    Términos y Condiciones
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 space-y-4">
                {policies.map((policy, index) => (
                  <motion.div
                    key={policy.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-gold-light/10 transition-colors"
                  >
                    <span className="text-lg flex-shrink-0 mt-0.5">{policy.icon}</span>
                    <div className="flex-1">
                      <p className="font-heading text-sm font-medium text-foreground">
                        {policy.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {policy.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default PoliciesSection;
