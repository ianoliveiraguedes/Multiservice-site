import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Sparkles } from "lucide-react";
import heroPanel from "@/assets/hero-panel.jpg";
import { Reveal, premiumEase } from "@/components/motion/Reveal";
import { PremiumButton } from "@/components/landing/PremiumButton";
import { useCountUp } from "@/hooks/use-count-up";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { WHATSAPP_URL } from "@/lib/landing/constants";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { ref: statsRef, inView } = useInViewOnce<HTMLDivElement>(0.2);
  const projetos = useCountUp(197, 1600, inView);
  const mw = useCountUp(2.4, 1800, inView);
  const economia = useCountUp(92, 1800, inView);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentScale = useTransform(scrollYProgress, [0, 0.85], [1, 0.96]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [0.85, 0.35]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-end pt-24 pb-14 md:pb-20 overflow-hidden bg-white border-b border-slate-200/80"
    >
      <div className="pointer-events-none absolute inset-0 premium-ambient" aria-hidden />
      <div
        className="pointer-events-none absolute top-1/4 -right-24 size-[420px] rounded-full bg-eco-green/10 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 size-[320px] rounded-full bg-tech-blue-light/8 blur-[90px]"
        aria-hidden
      />

      <motion.div
        style={{ scale: contentScale, y: contentY }}
        className="max-w-7xl mx-auto px-6 relative z-10 w-full will-change-transform"
      >
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-end">
          <div ref={statsRef} className="lg:col-span-7">
            <Reveal delay={0.05} y={28}>
              <span className="inline-flex items-center gap-2 rounded-full bg-eco-green/10 border border-eco-green/20 px-4 py-1.5 text-[11px] font-semibold text-eco-green-dark mb-6 tracking-wide uppercase">
                <Leaf className="size-3.5" strokeWidth={2.5} aria-hidden />
                Energia limpa & sustentável
              </span>
            </Reveal>

            <Reveal delay={0.12} y={40} blur>
              <h1 className="text-display font-bold text-tech-blue text-balance mb-8 max-w-[14ch]">
                Economize até 95% na sua conta de energia
              </h1>
            </Reveal>

            <Reveal delay={0.2} y={32}>
              <p className="text-lg md:text-xl text-slate-600 max-w-[48ch] text-pretty leading-relaxed">
                Combinamos engenharia de precisão com tecnologia fotovoltaica de ponta para
                transformar o sol em economia real e impacto positivo no planeta.
              </p>
            </Reveal>

            <Reveal delay={0.28} y={24} className="mt-10 flex flex-wrap gap-4">
              <PremiumButton
                href={WHATSAPP_URL}
                variant="primary"
                size="lg"
                target="_blank"
                rel="noreferrer"
              >
                Solicitar orçamento
              </PremiumButton>
            </Reveal>

            <Reveal delay={0.36} y={20} className="mt-10 md:mt-14 flex flex-wrap gap-10 md:gap-16">
              <StatBlock value={`+${Math.round(projetos)}`} label="Projetos ativos" />
              <StatBlock value={`+${mw.toFixed(1)}MW`} label="Potência instalada" />
              <StatBlock value={`${Math.round(economia)}%`} label="Média de economia" />
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.18} y={48} scale className="relative">
              <motion.div
                style={{ opacity: glowOpacity }}
                className="absolute -inset-6 rounded-3xl bg-eco-green/15 blur-3xl"
                aria-hidden
              />
              <motion.div
                style={{ scale: imageScale, y: imageY }}
                className="relative will-change-transform"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="hero-image-frame"
                >
                  <div className="hero-image-glow" aria-hidden />
                  <img
                    src={heroPanel}
                    alt="Painel solar premium em instalação residencial"
                    width={1024}
                    height={1280}
                    className="relative z-10 size-full object-cover cinematic-float"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center gap-2 rounded-xl bg-white/90 backdrop-blur-md px-4 py-3 shadow-soft border border-slate-100">
                    <Sparkles className="size-4 text-eco-green shrink-0" strokeWidth={2} />
                    <span className="text-xs font-medium text-tech-blue">
                      Tecnologia Tier 1 • Zero emissões
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: premiumEase }}
    >
      <div className="text-3xl md:text-4xl font-bold tabular-nums text-eco-green-dark tracking-tight">
        {value}
      </div>
      <div className="text-[11px] uppercase tracking-[0.14em] text-slate-500 mt-2 font-medium">
        {label}
      </div>
    </motion.div>
  );
}
