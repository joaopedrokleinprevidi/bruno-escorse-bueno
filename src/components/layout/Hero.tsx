import { ArrowRight, ExternalLink } from "lucide-react";
import { MotionDiv, MotionH1, MotionP } from "@/components/ui/motion-wrapper";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-white" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <MotionH1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
              >
                Design com intenção humana,{" "}
                <span className="text-gradient">
                  potencializado por tecnologia.
                </span>
              </MotionH1>

              <MotionP
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg font-medium text-primary"
              >
                Designer gráfico focado em design de produtos, identidade visual
                e composições estratégicas.
              </MotionP>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base space-y-6 text-muted-foreground leading-relaxed max-w-xl"
              >
                <p>
                  Sou designer gráfico autodidata desde 2023. Minha formação foi
                  moldada pela convivência direta com um designer gráfico
                  sênior, hoje diretor de marketing e design integrado, o que
                  influenciou profundamente minha visão profissional desde o
                  início.
                </p>
                <p>
                  Atuei por quase três anos como designer gráfico na empresa
                  anteriormente conhecida como Personalizados Camaleão, hoje
                  Mikania, sendo responsável pela criação de produtos, mockups,
                  artes para e-commerce e suporte completo a plataformas de
                  atacado em WordPress.
                </p>
              </MotionDiv>
            </div>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/5554999060340?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site.%20Podemos%20conversar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                data-testid="button-hero-contact"
              >
                Entrar em contato
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.behance.net/BrunoEscorseH3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-all duration-200 border border-border"
                data-testid="button-hero-behance"
              >
                Ver projetos
                <ExternalLink className="w-4 h-4" />
              </a>
            </MotionDiv>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src="/abstract_minimalist_hero_composition.png"
                alt="Design abstrato minimalista"
                className="w-full h-auto object-cover"
                data-testid="img-hero"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl blur-xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl" />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
