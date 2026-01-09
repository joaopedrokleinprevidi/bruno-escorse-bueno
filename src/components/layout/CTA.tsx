import { ArrowRight } from "lucide-react";
import { MotionDiv, MotionH2 } from "@/components/ui/motion-wrapper";

export function CTA() {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/abstract_soft_flowing_cta.png"
              alt="Background abstrato"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-blue-600/90" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center p-10 lg:p-16">
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <MotionH2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Vamos criar algo juntos?
              </MotionH2>
              <p className="text-lg text-white/80 max-w-md">
                Se você busca design com intenção, critério e sensibilidade humana, vamos conversar.
              </p>
              <a
                href="https://wa.me/5554999060340?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site.%20Podemos%20conversar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                data-testid="button-cta-contact"
              >
                Entrar em contato
                <ArrowRight className="w-5 h-5" />
              </a>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm" />
                <div className="relative p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Design que transforma</p>
                      <p className="text-white/60 text-sm">Estética + estratégia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Focado em resultados</p>
                      <p className="text-white/60 text-sm">Visual que converte</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Parceria real</p>
                      <p className="text-white/60 text-sm">Do conceito à entrega</p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
