import { Package, Palette, ShoppingCart, Layout, ArrowRight, ExternalLink } from "lucide-react";
import { MotionDiv, MotionH2 } from "@/components/ui/motion-wrapper";

const services = [
  {
    icon: Package,
    title: "Design de produtos e mockups profissionais",
    description: "Desenvolvimento visual de produtos físicos e digitais, com foco em apresentação clara, estética forte e aplicação real em e-commerce e catálogos.",
    features: [
      "Mockups realistas",
      "Artes para novos produtos",
      "Atualização de catálogo",
      "Visual pensado para venda",
    ],
    cta: { label: "Ver projetos", href: "https://www.behance.net/BrunoEscorseH3", external: true },
  },
  {
    icon: Palette,
    title: "Identidade visual com conceito e intenção",
    description: "Criação de identidades visuais que equilibram estética, funcionalidade e posicionamento de marca.",
    features: [
      "Logotipos conceituais",
      "Paleta e tipografia estratégica",
      "Aplicações práticas",
      "Consistência visual",
    ],
    cta: { label: "Entrar em contato", href: "https://wa.me/5554999060340?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site.%20Podemos%20conversar%3F", external: true },
  },
  {
    icon: ShoppingCart,
    title: "Design aplicado a e-commerce e atacado",
    description: "Experiência prática com WordPress, WooCommerce, Woodmart e integrações como Olist Tiny, atuando tanto no visual quanto na operação.",
    features: [
      "Artes para produtos",
      "Layouts visuais consistentes",
      "Organização visual de catálogos",
      "Suporte visual para plataformas",
    ],
    cta: { label: "Ver projetos", href: "https://www.behance.net/BrunoEscorseH3", external: true },
  },
  {
    icon: Layout,
    title: "Direção visual para landing pages de conversão",
    description: "Atuação em parceria com a JK Enterprises, onde sou responsável por toda a identidade visual, hierarquia gráfica e direção estética das landing pages.",
    features: [
      "Visual focado em clareza",
      "Hierarquia de informação",
      "Design alinhado à copy",
      "Consistência estética",
    ],
    cta: { label: "Entrar em contato", href: "https://wa.me/5554999060340?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site.%20Podemos%20conversar%3F", external: true },
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Serviços
          </p>
          <MotionH2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Serviços de design
          </MotionH2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções visuais pensadas para marcas, produtos e experiências digitais
          </p>
        </MotionDiv>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 lg:p-10 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500"
              data-testid={`card-service-${index}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-3xl" />
              
              <div className="relative space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="flex-1 text-xl lg:text-2xl font-bold tracking-tight pt-2">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={service.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
                  data-testid={`link-service-cta-${index}`}
                >
                  {service.cta.label}
                  {service.cta.external ? (
                    <ExternalLink className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </a>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
