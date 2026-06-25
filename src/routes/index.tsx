import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { COMPANY_NAME } from "@/lib/landing/constants";
import {
  Benefits,
  Process,
  Projects,
  Simulator,
  Testimonials,
  FAQ,
  FinalCTA,
  Footer,
} from "@/components/landing/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${COMPANY_NAME} — Energia Solar em Anápolis/GO | Economize até 95%` },
      {
        name: "description",
        content:
          "Energia solar em Anápolis (GO) e Goiás. Projetos fotovoltaicos para residências e empresas. Fale no WhatsApp e peça seu orçamento.",
      },
      { property: "og:title", content: `${COMPANY_NAME} — Energia Solar em Anápolis/GO` },
      {
        property: "og:description",
        content:
          "Empresa de energia solar em Goiás. Economize até 95% na conta de energia com projetos fotovoltaicos em Anápolis/GO.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: COMPANY_NAME,
          description:
            "Empresa de energia solar em Anápolis/GO e Goiás. Projetos fotovoltaicos residenciais e empresariais.",
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white text-tech-blue overflow-x-hidden">
        <Nav />
        <Hero />
        <Benefits />
        <Process />
        <Projects />
        <Simulator />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
