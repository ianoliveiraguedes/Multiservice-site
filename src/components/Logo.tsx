import { Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY_NAME } from "@/lib/landing/constants";

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div
        className={cn(
          "relative flex size-9 items-center justify-center rounded-xl shadow-[0_4px_14px_-2px_rgba(34,197,94,0.45)]",
          light
            ? "bg-white/10 ring-1 ring-white/20"
            : "bg-gradient-to-br from-eco-green to-eco-green-dark",
        )}
      >
        <Sun className="size-5 text-white" strokeWidth={2} aria-hidden />
      </div>
      <span
        className={cn(
          "font-bold text-[0.92rem] sm:text-base lg:text-[1.03rem] tracking-[-0.015em] whitespace-nowrap leading-none",
          light ? "text-white" : "text-tech-blue",
        )}
      >
        {COMPANY_NAME}
      </span>
    </div>
  );
}
