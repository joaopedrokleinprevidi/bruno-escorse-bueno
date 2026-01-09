import { MotionDiv, MotionH2 } from "@/components/ui/motion-wrapper";

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Sobre mim
              </p>
              <MotionH2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Design como linguagem,{" "}
                <span className="text-gradient">não só ferramenta</span>
              </MotionH2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Sou designer gráfico autodidata desde 2023. Minha formação foi moldada pela convivência direta com um designer gráfico sênior, hoje diretor de marketing e design integrado, o que influenciou profundamente minha visão profissional desde o início.
              </p>
              <p>
                Atuei por quase três anos como designer gráfico na empresa anteriormente conhecida como Personalizados Camaleão, hoje Mikania, sendo responsável pela criação de produtos, mockups, artes para e-commerce e suporte completo a plataformas de atacado em WordPress.
              </p>
              <p>
                Em um mercado cada vez mais automatizado, escolhi usar a inteligência artificial como apoio — mantendo o fator humano como essência do design.
              </p>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/10 via-blue-100/50 to-transparent rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/creative_designer_workspace.png"
                alt="Ambiente criativo de trabalho"
                className="w-full h-auto object-cover"
                data-testid="img-about"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 rounded-2xl blur-xl" />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
