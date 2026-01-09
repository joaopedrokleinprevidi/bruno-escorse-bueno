import { Package, Palette, Layout, ExternalLink } from "lucide-react";
import { MotionDiv, MotionH2 } from "@/components/ui/motion-wrapper";

const projects = [
  {
    icon: Package,
    title: "Produto físico",
    category: "Mockups & Produtos",
  },
  {
    icon: Palette,
    title: "Identidade visual",
    category: "Branding",
  },
  {
    icon: Layout,
    title: "Landing page",
    category: "Web Design",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Portfólio
          </p>
          <MotionH2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Projetos
          </MotionH2>
          <p className="text-lg text-muted-foreground">
            Algumas aplicações reais do meu trabalho
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
              data-testid={`card-project-${index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary to-blue-700 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
              
              <div className="relative h-full flex flex-col items-center justify-center p-8 text-white">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="w-8 h-8" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-white/70 mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://www.behance.net/BrunoEscorseH3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            data-testid="button-projects-behance"
          >
            Ver projetos completos no Behance
            <ExternalLink className="w-4 h-4" />
          </a>
        </MotionDiv>
      </div>
    </section>
  );
}
