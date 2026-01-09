import { MessageCircle, Compass, CheckCircle } from "lucide-react";
import { MotionDiv, MotionH2 } from "@/components/ui/motion-wrapper";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Contato",
    description: "Entendemos sua necessidade e objetivo.",
  },
  {
    icon: Compass,
    number: "02",
    title: "Direção visual",
    description: "Definição de conceito, referências e abordagem.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Criação & entrega",
    description: "Design aplicado, refinado e pronto para uso real.",
  },
];

export function Process() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Processo
          </p>
          <MotionH2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Como funciona o processo
          </MotionH2>
        </MotionDiv>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative text-center"
              data-testid={`card-process-${index}`}
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
              )}
              
              <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full bg-primary/10" />
                <div className="absolute inset-2 rounded-full bg-primary/5" />
                <div className="relative w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-primary text-primary text-xs font-bold flex items-center justify-center shadow-sm">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
