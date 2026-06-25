import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Logo } from "@/components/Logo";
import { PremiumButton } from "@/components/landing/PremiumButton";
import { premiumEase } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/landing/constants";

const links = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#processo", label: "Processo" },
  { href: "#projetos", label: "Projetos" },
  { href: "#simulador", label: "Simulador" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <motion.nav
      initial={false}
      animate={{
        height: scrolled ? 60 : 76,
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.88)" : "rgba(255, 255, 255, 0)",
        borderColor: scrolled ? "rgba(226, 232, 240, 0.9)" : "rgba(226, 232, 240, 0)",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(0px)",
      }}
      transition={{ duration: 0.5, ease: premiumEase }}
      className={cn(
        "fixed top-0 w-full z-50 border-b",
        scrolled && "shadow-soft",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <motion.a href="#top" whileHover={{ opacity: 0.85 }} transition={{ duration: 0.25 }}>
          <Logo />
        </motion.a>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {links.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="nav-link-premium relative py-1 text-slate-600 hover:text-tech-blue transition-colors duration-300"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.25, ease: premiumEase }}
            >
              {l.label}
            </motion.a>
          ))}
        </div>

        <PremiumButton
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          variant="primary"
          size="md"
          className="!py-2.5 !px-5 !text-xs"
        >
          Solicitar orçamento
        </PremiumButton>
      </div>
    </motion.nav>
  );
}
