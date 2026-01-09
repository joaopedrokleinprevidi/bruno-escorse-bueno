import { Eye, Shield, TrendingUp, Sparkles, Globe } from "lucide-react";
import { MotionDiv, MotionH3 } from "@/components/ui/motion-wrapper";

const impacts = [
  {
    icon: Eye,
    title: "Clareza visual",
    description: "Seu produto ou serviço é entendido rapidamente.",
  },
  {
    icon: Shield,
    title: "Autoridade e profissionalismo",
    description: "Design consistente transmite confiança imediata.",
  },
  {
    icon: TrendingUp,
    title: "Conversão real",
    description: "Visual bem estruturado guia decisões.",
  },
  {
    icon: Sparkles,
    title: "Diferenciação",
    description: "Sua marca deixa de parecer genérica.",
  },
  {
    icon: Globe,
    title: "Presença forte em qualquer canal",
    description: "Site, e-commerce, redes sociais ou catálogo.",
  },
];

export function DesignImpact() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Impacto
          </p>
          <MotionH3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            O que um design bem pensado faz pela sua marca
          </MotionH3>
        </MotionDiv>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {impacts.map((impact, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              data-testid={`card-impact-${index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <impact.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">{impact.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {impact.description}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
