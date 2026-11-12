import { ArrowRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "light" | "dark";
type Size = "sm" | "md";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  href?: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "children" | "className">;

const base =
  "font-display inline-flex items-center gap-3 rounded-full text-sm uppercase tracking-wide transition active:scale-95";

const variants: Record<Variant, string> = {
  primary: "bg-lime-400 font-bold text-black hover:bg-lime-300",
  secondary: "border border-white/15 bg-white/5 text-white backdrop-blur hover:bg-white/10",
  light: "bg-white text-black hover:bg-white/90",
  dark: "bg-black text-white hover:bg-black/90",
};

const circles: Record<Variant, string> = {
  primary: "bg-black text-white",
  secondary: "bg-white text-black",
  light: "bg-black text-white",
  dark: "bg-white text-black",
};

const sizes: Record<Size, { withIcon: string; plain: string; circle: string }> = {
  md: { withIcon: "py-1.5 pl-6 pr-1.5", plain: "px-6 py-3.5", circle: "size-9" },
  sm: { withIcon: "py-1.5 pl-5 pr-1.5", plain: "px-5 py-2.5", circle: "size-[30px]" },
};

export default function Button({
  variant = "primary",
  size = "md",
  icon = variant !== "secondary", // arrow everywhere except the glass button
  href,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const s = sizes[size];
  const padding = icon ? s.withIcon : s.plain;
  const classes = `${base} ${variants[variant]} ${padding} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <span
          className={`grid ${s.circle} place-items-center rounded-full ${circles[variant]}`}
        >
          <ArrowRight size={16} />
        </span>
      )}
    </>
  );

  return href ? (
    <Link href={href} className={classes}>
      {content}
    </Link>
  ) : (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}