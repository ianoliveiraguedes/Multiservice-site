import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  index: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeader({
  index,
  title,
  description,
  align = "left",
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <Reveal className={cn("mb-10 md:mb-14", align === "center" && "text-center mx-auto", className)}>
      <span
        className={cn(
          "text-[11px] font-semibold uppercase tracking-[0.2em]",
          light ? "text-eco-green" : "text-tech-blue-light",
        )}
      >
        {index}
      </span>
      <h2
        className={cn(
          "text-display-sm font-bold tracking-tight mt-4 mb-5",
          light ? "text-white" : "text-tech-blue",
          align === "center" && "max-w-3xl mx-auto",
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "h-1 w-20 rounded-full bg-gradient-to-r from-eco-green to-tech-blue-light",
          align === "center" && "mx-auto",
        )}
      />
      {description && (
        <p
          className={cn(
            "mt-6 text-base md:text-lg max-w-xl leading-relaxed",
            light ? "text-slate-300" : "text-slate-600",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
