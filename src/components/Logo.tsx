import { cn } from "@/lib/utils";
import { COMPANY_NAME } from "@/lib/landing/constants";

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <img
        src="/logo.png"
        alt="Multiservice Eletrônica"
        className={cn(
          "h-11 w-auto object-contain select-none logo-glow",
          light && "brightness-0 invert",
        )}
        draggable={false}
      />
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
