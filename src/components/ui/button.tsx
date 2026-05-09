import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  href?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-white text-[#08090a] hover:bg-[#e8e9ea] shadow-[0_0_0_1px_rgba(255,255,255,0.1)]",
  secondary:
    "bg-transparent text-text-primary border border-border hover:border-border-strong hover:bg-surface",
  ghost:
    "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface",
  outline:
    "bg-transparent text-text-primary border border-border hover:border-border-strong hover:bg-surface",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, href, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-text-faint focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    if (href) {
      return (
        <a
          href={href}
          className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
