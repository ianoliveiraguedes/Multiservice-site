import { useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  const bgActive = scrolled || menuOpen;

  return (
    <nav className="fixed top-0 w-full z-50">
      <motion.div
        initial={false}
        animate={{
          height: scrolled ? 60 : 76,
          backgroundColor: bgActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0)",
          borderColor: bgActive ? "rgba(226,232,240,0.9)" : "rgba(226,232,240,0)",
          backdropFilter: bgActive ? "blur(20px) saturate(180%)" : "blur(0px)",
        }}
        transition={{ duration: 0.5, ease: premiumEase }}
        className={cn("w-full border-b", scrolled && "shadow-soft")}
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

          <div className="flex items-center gap-3">
            <PremiumButton
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              size="md"
              className="hidden md:inline-flex !py-2.5 !px-5 !text-xs"
            >
              Solicitar orçamento
            </PremiumButton>

            <button
              className="md:hidden flex items-center justify-center size-9 rounded-lg text-tech-blue hover:bg-slate-100 transition-colors"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              <AnimatePresence initial={false} mode="wait">
                {menuOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="size-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="size-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: premiumEase }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-soft"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-3.5 rounded-lg text-sm font-medium text-slate-700 hover:text-tech-blue hover:bg-slate-50 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100">
                <PremiumButton
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  size="md"
                  className="!w-full !text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Solicitar orçamento
                </PremiumButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
