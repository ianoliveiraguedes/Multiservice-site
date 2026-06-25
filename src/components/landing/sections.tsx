import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  Leaf,
  Home,
  Zap,
  TrendingUp,
  Search,
  PenTool,
  HardHat,
  FileCheck,
  Sparkles,
  Quote,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import projectHouse from "@/assets/project-house.jpg";
import projectIndustry from "@/assets/project-industry.jpg";
import projectFarm from "@/assets/project-farm.jpg";
import { DepthSection } from "@/components/motion/Parallax";
import { Reveal, StaggerReveal, StaggerItem, premiumEase } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/Parallax";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { PremiumButton, PremiumSubmitButton } from "@/components/landing/PremiumButton";
import {
  ADDRESS_LINES,
  COMPANY_NAME,
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  WHATSAPP_DIRECT_URL,
  WHATSAPP_URL,
} from "@/lib/landing/constants";
import { Logo } from "@/components/Logo";

function EcoIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="eco-icon-ring">
      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
    </div>
  );
}

/* ---------- Benefits ---------- */
export function Benefits() {
  const items: { t: string; d: string; icon: LucideIcon }[] = [
    { t: "Economia Mensal", d: "Redução imediata do custo fixo operacional da sua residência ou empresa.", icon: Wallet },
    { t: "Sustentabilidade", d: "Geração de energia limpa com zero emissão de poluentes ou ruídos.", icon: Leaf },
    { t: "Valorização", d: "Imóveis com sistemas solares têm valor de mercado até 10% superior.", icon: Home },
    { t: "Energia Limpa", d: "Independência energética utilizando a fonte mais abundante do planeta.", icon: Zap },
    { t: "ROI Acelerado", d: "Retorno do investimento garantido entre 3 e 5 anos de utilização.", icon: TrendingUp },
  ];

  return (
    <section id="beneficios" className="section-premium relative py-28 md:py-36 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader index="01 — Vantagens" title="Vantagens Estruturais" />
        <StaggerReveal className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((it, i) => (
            <StaggerItem key={it.t}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: premiumEase }}
                className="depth-card group bg-white rounded-2xl border border-slate-200/80 p-8 md:p-9 flex flex-col gap-5 h-full shadow-soft"
              >
                <EcoIcon icon={it.icon} />
                <span className="text-[10px] font-mono font-medium text-slate-400">0{i + 1}</span>
                <h3 className="font-semibold text-lg tracking-tight text-tech-blue">{it.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{it.d}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
export function Process() {
  const steps: { t: string; d: string; icon: LucideIcon }[] = [
    { t: "Análise Gratuita", d: "Estudo técnico do seu consumo e do seu telhado, sem custo.", icon: Search },
    { t: "Projeto Personalizado", d: "Dimensionamento exato com painéis e inversores Tier 1.", icon: PenTool },
    { t: "Instalação", d: "Equipe própria, segurança e acabamento de alto padrão.", icon: HardHat },
    { t: "Homologação", d: "Cuidamos de toda a burocracia junto à concessionária.", icon: FileCheck },
    { t: "Economia Imediata", d: "Você passa a gerar sua própria energia no mês seguinte.", icon: Sparkles },
  ];

  return (
    <section id="processo" className="section-premium py-28 md:py-36 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 md:mb-24 flex flex-wrap items-end justify-between gap-8">
          <SectionHeader index="02 — Processo" title="Como funciona" className="!mb-0" />
          <Reveal delay={0.1} className="max-w-sm">
            <p className="text-base text-slate-600 leading-relaxed">
              Cinco etapas precisas, do diagnóstico inicial à sua primeira fatura reduzida.
            </p>
          </Reveal>
        </div>

        <StaggerReveal className="grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <StaggerItem key={s.t}>
              <li className="depth-card list-none bg-surface-muted rounded-2xl border border-slate-200/60 p-8 md:p-9 relative h-full">
                <div className="flex items-center justify-between mb-6">
                  <EcoIcon icon={s.icon} />
                  <span className="text-xs font-mono font-semibold text-tech-blue-light">
                    {String(i + 1).padStart(2, "0")} / 05
                  </span>
                </div>
                <div className="h-px w-full bg-slate-200 relative mb-6">
                  <motion.div
                    className="absolute -top-[3px] left-0 size-2 bg-eco-green rounded-full shadow-[0_0_12px_rgba(34,197,94,0.5)]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: premiumEase }}
                  />
                </div>
                <h3 className="font-semibold text-lg tracking-tight text-tech-blue mb-3">{s.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.d}</p>
              </li>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
export function Projects() {
  const items = [
    { img: projectHouse, t: "Residência Aurora", tag: "Residencial • 12 kWp" },
    { img: projectIndustry, t: "Indústria Helios", tag: "Comercial • 150 kWp" },
    { img: projectFarm, t: "Fazenda Vale Solar", tag: "Rural • 80 kWp" },
  ];

  return (
    <section id="projetos" className="section-premium relative py-28 md:py-36 bg-surface-muted border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader index="03 — Portfólio" title="Projetos realizados" />
        <StaggerReveal className="grid md:grid-cols-3 gap-8">
          {items.map((p) => (
            <StaggerItem key={p.t}>
              <DepthSection>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.45, ease: premiumEase }}
                  className="group depth-card overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-soft hover:border-eco-green/30 transition-[border-color,box-shadow] duration-500"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <ParallaxImage
                      src={p.img}
                      alt={p.t}
                      containerClassName="size-full"
                      className="transition-transform duration-[1400ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7 flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg tracking-tight text-tech-blue">{p.t}</h3>
                      <p className="text-xs uppercase tracking-[0.12em] text-slate-500 mt-2 font-medium">{p.tag}</p>
                    </div>
                    <motion.span
                      className="flex size-10 items-center justify-center rounded-full bg-eco-green/10 text-eco-green-dark"
                      whileHover={{ x: 2, y: -2, backgroundColor: "rgba(37, 99, 235, 0.12)", color: "#2563eb" }}
                      transition={{ duration: 0.3 }}
                    >
                      ↗
                    </motion.span>
                  </div>
                </motion.article>
              </DepthSection>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

/* ---------- Simulator ---------- */
export function Simulator() {
  const [conta, setConta] = useState("450");
  const [cidade, setCidade] = useState("");
  const [tipo, setTipo] = useState("Residencial");
  const [result, setResult] = useState<{ anual: number; payback: number } | null>(null);
  const [error, setError] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const n = Number(conta.replace(",", "."));
    if (!n || n < 50 || n > 50000) {
      setError("Informe um valor entre R$ 50 e R$ 50.000.");
      setResult(null);
      return;
    }
    const factor = tipo === "Rural" ? 0.93 : tipo === "Comercial" ? 0.9 : 0.95;
    const anual = Math.round(n * 12 * factor);
    const payback = Math.round((n * 18) / n * 10) / 10 + 2.4;
    setResult({ anual, payback });
  }

  return (
    <section id="simulador" className="section-premium py-28 md:py-36 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader index="04 — Calculadora" title="Simule sua economia" />
        <Reveal scale>
          <div className="glass-panel rounded-3xl overflow-hidden shadow-soft-lg">
            <div className="grid lg:grid-cols-2">
              <form
                onSubmit={submit}
                className="p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-slate-200 space-y-8 bg-white"
              >
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.14em] text-slate-500 font-semibold mb-3">
                    Valor médio da conta (R$)
                  </label>
                  <input
                    type="text"
                    value={conta}
                    onChange={(e) => setConta(e.target.value.slice(0, 8))}
                    placeholder="Ex: 450,00"
                    className="premium-input w-full text-2xl font-mono"
                  />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.14em] text-slate-500 font-semibold mb-3">
                      Cidade
                    </label>
                    <input
                      type="text"
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value.slice(0, 60))}
                      placeholder="Anápolis"
                      className="premium-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.14em] text-slate-500 font-semibold mb-3">
                      Tipo de imóvel
                    </label>
                    <select
                      value={tipo}
                      onChange={(e) => setTipo(e.target.value)}
                      className="premium-input w-full"
                    >
                      <option>Residencial</option>
                      <option>Comercial</option>
                      <option>Rural</option>
                    </select>
                  </div>
                </div>
                {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
                <PremiumSubmitButton>Calcular estimativa</PremiumSubmitButton>
              </form>
              <div className="p-10 lg:p-14 section-gradient-blue flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15),transparent_65%)]"
                  aria-hidden
                />
                <div className="relative z-10">
                  <div className="text-slate-300 text-sm mb-3 tracking-wide font-medium">
                    Estimativa de economia anual
                  </div>
                  <motion.div
                    key={result?.anual ?? "default"}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: premiumEase }}
                    className="text-5xl md:text-7xl font-bold text-eco-green mb-8 tabular-nums tracking-tight"
                  >
                    R$ {(result?.anual ?? 5400).toLocaleString("pt-BR")}
                  </motion.div>
                  <p className="text-slate-300 text-base max-w-[36ch] leading-relaxed">
                    {result
                      ? `Com base nos dados informados, seu sistema se paga em aproximadamente ${result.payback.toFixed(1)} anos.`
                      : "Preencha os campos ao lado para receber uma estimativa personalizada."}
                  </p>
                  <motion.a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                    className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-white/90 hover:text-eco-green transition-colors"
                  >
                    Falar com especialista →
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
export function Testimonials() {
  const items = [
    { q: "Reduzimos 92% da conta no primeiro mês. A equipe é impecável.", a: "Marina Albuquerque", r: "Residencial • Campinas/SP" },
    { q: "Projeto entregue no prazo e com acabamento premium. Recomendo.", a: "Carlos Mendes", r: "Indústria • Goiânia/GO" },
    { q: "Sério, profissional e transparente do orçamento à homologação.", a: "Júlia Tavares", r: "Fazenda • Uberaba/MG" },
  ];

  return (
    <section className="section-premium relative py-28 md:py-36 bg-surface-muted border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader index="05 — Clientes" title="Quem confiou no projeto" />
        <StaggerReveal className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <StaggerItem key={t.a}>
              <figure className="depth-card bg-white rounded-2xl border border-slate-200/80 p-10 md:p-12 flex flex-col gap-6 h-full shadow-soft">
                <Quote className="size-8 text-eco-green/60" strokeWidth={1.5} aria-hidden />
                <blockquote className="text-lg leading-relaxed text-tech-blue tracking-tight font-medium">
                  {t.q}
                </blockquote>
                <figcaption className="mt-auto pt-4 border-t border-slate-100">
                  <div className="text-sm font-semibold text-tech-blue">{t.a}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-[0.12em] mt-2 font-medium">{t.r}</div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function FAQ() {
  const items = [
    { q: "Existe financiamento?", a: "Sim. Trabalhamos com linhas de crédito específicas para energia solar, com parcelas que costumam caber dentro da economia gerada." },
    { q: "Quanto tempo leva a instalação?", a: "Sistemas residenciais ficam prontos em 2 a 5 dias úteis. Projetos industriais variam conforme dimensionamento." },
    { q: "Qual a economia real esperada?", a: "Entre 80% e 95% da conta de luz, dependendo do consumo, telhado e região." },
    { q: "Qual a garantia dos equipamentos?", a: "Painéis Tier 1 com garantia de até 25 anos de geração e 12 anos de defeito de fabricação." },
    { q: "Como funciona a manutenção?", a: "Mínima. Recomendamos limpeza preventiva anual. Oferecemos planos de monitoramento remoto contínuo." },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-premium py-28 md:py-36 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
        <Reveal className="lg:col-span-4">
          <span className="text-[11px] font-semibold text-tech-blue-light uppercase tracking-[0.2em]">
            06 — FAQ
          </span>
          <h2 className="text-display-sm font-bold tracking-tight text-tech-blue mt-4 mb-6">
            Perguntas frequentes
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Tudo o que você precisa saber antes de migrar para energia solar.
          </p>
        </Reveal>
        <ul className="lg:col-span-8 border-t border-slate-200">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <li key={it.q} className="border-b border-slate-200">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-6">
                    <span className="text-xs font-mono font-medium text-slate-400">0{i + 1}</span>
                    <span className="text-lg font-semibold tracking-tight text-tech-blue group-hover:text-tech-blue-light transition-colors duration-300">
                      {it.q}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: premiumEase }}
                    className="flex size-8 items-center justify-center rounded-full bg-eco-green/10 text-eco-green-dark font-mono text-lg shrink-0"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: premiumEase }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-slate-600 leading-relaxed max-w-2xl pl-10 pb-7">
                        {it.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
export function FinalCTA() {
  return (
    <section className="section-premium relative py-36 md:py-44 overflow-hidden section-gradient-blue border-t border-slate-800">
      <div className="pointer-events-none absolute inset-0 premium-ambient opacity-40" aria-hidden />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-eco-green uppercase tracking-[0.22em]">
            <Leaf className="size-3.5" strokeWidth={2.5} />
            07 — Próximo passo
          </span>
        </Reveal>
        <Reveal delay={0.1} y={40}>
          <h2 className="text-display font-bold tracking-tight text-balance mt-8 mb-12 max-w-4xl mx-auto text-white">
            Comece a economizar hoje mesmo.
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="flex flex-col md:flex-row items-center justify-center gap-5">
          <PremiumButton href={WHATSAPP_URL} variant="primary" size="lg" target="_blank" rel="noreferrer">
            Entrar em contato
            <span className="size-2 bg-white/50 rounded-full animate-pulse-soft" />
          </PremiumButton>
          <PremiumButton href="#projetos" variant="outline" size="lg">
            Ver projetos realizados
          </PremiumButton>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="py-20 bg-tech-blue text-slate-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-14">
          <div>
            <Logo className="mb-5" light />
            <p className="text-sm max-w-[40ch] leading-relaxed text-slate-400">
              Energia solar em Anápolis (GO) e Goiás, com foco em tecnologia, eficiência e sustentabilidade.
            </p>
          </div>
          <div>
            <div className="text-white text-[11px] font-semibold uppercase tracking-[0.16em] mb-5">Contato</div>
            <ul className="space-y-3 text-sm">
              <li>{PHONE_DISPLAY}</li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-eco-green transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_DIRECT_URL} target="_blank" rel="noreferrer" className="hover:text-eco-green transition-colors">
                  WhatsApp: {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-white text-[11px] font-semibold uppercase tracking-[0.16em] mb-5">Endereço</div>
            <ul className="space-y-3 text-sm">
              {ADDRESS_LINES.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-white text-[11px] font-semibold uppercase tracking-[0.16em] mb-5">Social</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-eco-green transition-colors">
                  Instagram: {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li><a href="#" className="hover:text-eco-green transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-2 text-[11px] text-slate-500">
          <p>© 2026 {COMPANY_NAME}. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}
