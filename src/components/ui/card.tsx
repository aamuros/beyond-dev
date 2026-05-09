import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export function Card({ children, className = "", hover = false, glass = false }: CardProps) {
  return (
    <div
      className={`rounded-xl p-6 md:p-8 transition-all duration-300 ${
        glass
          ? "glass-card"
          : "border border-border bg-card"
      } ${
        hover
          ? "hover:border-border-strong hover:-translate-y-0.5 hover:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.6)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
