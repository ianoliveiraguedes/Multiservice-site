import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
  depth?: boolean;
};

export function ParallaxLayer({ children, className, speed = 0.15 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

export function DepthSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.96, 1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 1], [48, -48]);

  return (
    <motion.div ref={ref} style={{ scale, y }} className={cn("will-change-transform", className)}>
      {children}
    </motion.div>
  );
}

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
};

export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.05, 1.1]);

  return (
    <div ref={ref} className={cn("overflow-hidden", containerClassName)}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, scale }}
        className={cn("size-full object-cover will-change-transform", className)}
      />
    </div>
  );
}
