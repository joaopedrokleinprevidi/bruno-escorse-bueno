import { Check, ArrowRight } from "lucide-react";
import { MotionDiv, MotionH2, MotionLi } from "@/components/ui/motion-wrapper";

const features = [
  "Design de produtos e mockups realistas",
  "Identidade visual e logomarcas com conceito",
  "Composições visuais para e-commerce e atacado",
  "Direção visual para landing pages de conversão",
  "Design pensado para uso real, não apenas portfólio",
];

export function WhatIDo() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                O que eu faço
              </p>
              <MotionH2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Design estratégico para marcas que querem{" "}
                <span className="text-gradient">se posicionar de verdade</span>
              </MotionH2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Mais do que estética, meu trabalho é focado em clareza, intenção e comunicação visual eficiente. Cada projeto nasce de um entendimento real do negócio, do produto e do público, traduzindo tudo isso em identidade visual, peças gráficas e composições que fazem sentido — visualmente e estrategicamente.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <MotionLi
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </MotionLi>
              ))}
            </ul>

            <a
              href="https://wa.me/5554999060340?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site.%20Podemos%20conversar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
              data-testid="link-whatido-contact"
            >
              Entrar em contato
              <ArrowRight className="w-4 h-4" />
            </a>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 via-transparent to-blue-100/50 rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/product_mockups_presentation.png"
                alt="Mockups de produtos e interfaces"
                className="w-full h-auto object-cover"
                data-testid="img-whatido"
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
