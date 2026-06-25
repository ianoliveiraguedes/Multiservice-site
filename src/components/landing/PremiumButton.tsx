import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { premiumEase } from "@/components/motion/Reveal";

type PremiumButtonProps = HTMLMotionProps<"a"> & {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "md" | "lg";
};

export function PremiumButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: PremiumButtonProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease: premiumEase }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden font-semibold tracking-tight",
        "rounded-full transition-[box-shadow,background-color,color,border-color] duration-500",
        size === "md" && "px-7 py-3 text-sm",
        size === "lg" && "px-9 py-4 text-base",
        variant === "primary" && [
          "bg-eco-green text-white",
          "shadow-[0_4px_20px_-4px_rgba(34,197,94,0.5)]",
          "hover:bg-tech-blue-light hover:shadow-[0_8px_32px_-6px_rgba(37,99,235,0.45)]",
        ],
        variant === "secondary" && [
          "bg-tech-blue text-white",
          "shadow-[0_4px_20px_-6px_rgba(15,23,42,0.25)]",
          "hover:bg-tech-blue-light",
        ],
        variant === "ghost" && [
          "bg-surface-muted text-tech-blue ring-1 ring-slate-200",
          "hover:ring-tech-blue-light/40 hover:bg-white hover:text-tech-blue-light",
        ],
        variant === "outline" && [
          "bg-transparent text-white ring-2 ring-white/40",
          "hover:bg-white/10 hover:ring-white/70",
        ],
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%)",
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}

export function PremiumSubmitButton({
  className,
  children,
  ...props
}: HTMLMotionProps<"button">) {
  return (
    <motion.button
      type="submit"
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease: premiumEase }}
      className={cn(
        "group relative w-full overflow-hidden rounded-full bg-eco-green py-4 font-semibold text-white",
        "shadow-[0_4px_24px_-6px_rgba(34,197,94,0.45)] transition-[background-color,box-shadow] duration-500",
        "hover:bg-tech-blue-light hover:shadow-[0_8px_36px_-4px_rgba(37,99,235,0.4)]",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
