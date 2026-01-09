import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";
import { WhatIDo } from "@/components/layout/WhatIDo";
import { DesignImpact } from "@/components/layout/DesignImpact";
import { Services } from "@/components/layout/Services";
import { About } from "@/components/layout/About";
import { Differentials } from "@/components/layout/Differentials";
import { Projects } from "@/components/layout/Projects";
import { Process } from "@/components/layout/Process";
import { CTA } from "@/components/layout/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhatIDo />
        <DesignImpact />
        <Services />
        <About />
        <Differentials />
        <Projects />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
