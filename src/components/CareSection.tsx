import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const careBeforeItems = [
  { id: "before-1", title: "Llegar puntual", description: "Máximo 10 minutos de tolerancia", icon: "⏰" },
  { id: "before-2", title: "Sin acompañantes", description: "Asistir sin acompañantes y sin niños", icon: "👤" },
  { id: "before-3", title: "Sin maquillaje", description: "Llegar sin maquillaje en los ojos", icon: "✨" },
  { id: "before-4", title: "Sin rímel", description: "No usar rímel", icon: "❌" },
  { id: "before-5", title: "Sin lentes de contacto", description: "No usar lentes de contacto", icon: "👁️" },
  { id: "before-6", title: "Evitar cafeína", description: "Evitar cafeína 24 horas antes", icon: "☕" },
  { id: "before-7", title: "Ropa cómoda", description: "Usar ropa cómoda", icon: "👕" },
  { id: "before-8", title: "Medio de pago", description: "Traer medio de pago acordado", icon: "💳" },
];

const careAfterItems = [
  { id: "after-1", title: "No mojar pestañas", description: "No mojar pestañas por 24 horas", icon: "💧" },
  { id: "after-2", title: "Evitar vapor", description: "Evitar vapor, sauna o agua caliente", icon: "🔥" },
  { id: "after-3", title: "Sin rímel ni rizador", description: "No usar rímel ni rizador", icon: "🧴" },
  { id: "after-4", title: "Sin frotar ojos", description: "No frotar los ojos", icon: "🙅" },
  { id: "after-5", title: "Sin productos oleosos", description: "No usar productos oleosos", icon: "🚫" },
  { id: "after-6", title: "Desmaquillante sin aceite", description: "Desmaquillar con productos sin aceite", icon: "🧼" },
  { id: "after-7", title: "Posición al dormir", description: "Dormir boca arriba o de lado", icon: "😴" },
  { id: "after-8", title: "Lavado regular", description: "Lavar pestañas cada 2–3 días", icon: "💦" },
  { id: "after-9", title: "Cepillado diario", description: "Cepillar diariamente", icon: "🧹" },
  { id: "after-10", title: "Mantenimiento", description: "Asistir a mantenimiento cada 15–18 días", icon: "🔄" },
];

const importantNotes = [
  {
    id: "note-1",
    title: "No retirar extensiones",
    description: "No retirar extensiones por cuenta propia",
    icon: "⚠️",
  },
  {
    id: "note-2",
    title: "Cuidados afectan retención",
    description: "El mal cuidado afecta la retención y la salud de la pestaña natural",
    icon: "💔",
  },
];

const CareCard = ({ title, icon, items }: { title: string; icon: string; items: any[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className="rounded-2xl border border-border bg-card p-6 shadow-luxury"
  >
    <div className="mb-5 flex items-center gap-3">
      <span className="text-gold text-lg">{icon}</span>
      <h3 className="font-display text-2xl text-card-foreground">{title}</h3>
    </div>

    <div className="space-y-0">
      {items.map((item, i) => (
        <div
          key={item.id}
          className={`flex items-start gap-3 py-3 ${
            i !== items.length - 1 ? "border-b border-border/50" : ""
          }`}
        >
          <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
          <div className="flex-1">
            <p className="font-heading text-sm font-medium text-card-foreground">{item.title}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const CareSection = () => {
  return (
    <section className="px-6 py-24 md:py-32 bg-cream-dark" id="cuidados">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Para el éxito
          </p>
          <h2 className="font-display text-4xl font-light text-foreground md:text-5xl">
            Cuidados
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
            {/* Antes de tu cita */}
            <AccordionItem
              value="before"
              className="rounded-2xl border border-border overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline py-6 px-6 text-left data-[state=open]:text-gold data-[state=open]:bg-card">
                <div className="flex items-center gap-3">
                  <span className="text-gold text-lg">✦</span>
                  <h3 className="font-display text-xl font-light text-foreground">
                    Antes de tu cita
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 bg-card space-y-0">
                {careBeforeItems.map((item, i) => (
                  <div
                    key={item.id}
                    className={`flex items-start gap-3 py-3 ${
                      i !== careBeforeItems.length - 1 ? "border-b border-border/50" : ""
                    }`}
                  >
                    <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div className="flex-1">
                      <p className="font-heading text-sm font-medium text-card-foreground">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* Cuidados posteriores */}
            <AccordionItem
              value="after"
              className="rounded-2xl border border-border overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline py-6 px-6 text-left data-[state=open]:text-gold data-[state=open]:bg-card">
                <div className="flex items-center gap-3">
                  <span className="text-gold text-lg">✦</span>
                  <h3 className="font-display text-xl font-light text-foreground">
                    Cuidados posteriores
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 bg-card space-y-0">
                {careAfterItems.map((item, i) => (
                  <div
                    key={item.id}
                    className={`flex items-start gap-3 py-3 ${
                      i !== careAfterItems.length - 1 ? "border-b border-border/50" : ""
                    }`}
                  >
                    <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div className="flex-1">
                      <p className="font-heading text-sm font-medium text-card-foreground">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* Notas importantes */}
            <AccordionItem
              value="notes"
              className="rounded-2xl border border-red-300/30 bg-red-50/30 overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline py-6 px-6 text-left data-[state=open]:text-gold data-[state=open]:bg-red-50/50">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-600 text-lg">⚠️</span>
                  <h3 className="font-display text-xl font-light text-foreground">
                    Notas Importantes
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 space-y-0">
                {importantNotes.map((note, i) => (
                  <div
                    key={note.id}
                    className={`flex items-start gap-3 py-3 ${
                      i !== importantNotes.length - 1 ? "border-b border-red-200/50" : ""
                    }`}
                  >
                    <span className="text-lg flex-shrink-0 mt-0.5">{note.icon}</span>
                    <div className="flex-1">
                      <p className="font-heading text-sm font-medium text-card-foreground">
                        {note.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{note.description}</p>
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default CareSection;
