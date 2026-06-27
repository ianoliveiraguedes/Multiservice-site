import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
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
