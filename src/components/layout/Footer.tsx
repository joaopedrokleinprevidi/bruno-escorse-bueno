import { Phone, Mail, ArrowRight } from "lucide-react";
import { MotionDiv } from "@/components/ui/motion-wrapper";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-1">
                Bruno <span className="text-primary">Escorse Bueno</span>
              </h3>
              <p className="text-slate-400">Designer Gráfico</p>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Design com intenção humana, potencializado por tecnologia. Transformando marcas através de identidade visual estratégica.
            </p>
            <a
              href="https://wa.me/5554999060340?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site.%20Podemos%20conversar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
              data-testid="link-footer-cta"
            >
              Vamos criar algo juntos
              <ArrowRight className="w-4 h-4" />
            </a>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5554999060340"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                  data-testid="link-footer-phone"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  (54) 9 9906-0340
                </a>
              </li>
              <li>
                <a
                  href="mailto:Bruno.escorse@outlook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                  data-testid="link-footer-email"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  Bruno.escorse@outlook.com
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <p className="text-sm text-slate-500">Parceria:</p>
              <p className="text-slate-400">JK Enterprises</p>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </MotionDiv>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Bruno Escorse Bueno. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
