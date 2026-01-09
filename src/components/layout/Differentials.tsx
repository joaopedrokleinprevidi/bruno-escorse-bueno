import { Briefcase, Target, Cpu, Heart, Eye } from "lucide-react";
import { MotionDiv, MotionH2, MotionP } from "@/components/ui/motion-wrapper";

const differentials = [
  { icon: Briefcase, text: "Experiência prática real de mercado" },
  { icon: Target, text: "Design orientado a intenção e conceito" },
  { icon: Cpu, text: "Uso consciente de inteligência artificial" },
  { icon: Heart, text: "Sensibilidade estética acima de fórmulas" },
  { icon: Eye, text: "Visão estratégica aplicada ao visual" },
];

export function Differentials() {
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
            Diferencial
          </p>
          <MotionH2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            O que diferencia meu trabalho
          </MotionH2>
        </MotionDiv>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((item, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                data-testid={`card-differential-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-medium text-foreground">{item.text}</span>
              </MotionDiv>
            ))}
          </div>

          <MotionP
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center text-sm text-muted-foreground"
          >
            <span className="font-medium">Influências criativas:</span> Pedro Paneto · Marcelo Kimura · Studio H3 (Yann Anderson)
          </MotionP>
        </div>
      </div>
    </section>
  );
}
