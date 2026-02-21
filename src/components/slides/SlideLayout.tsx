import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "warm";
}

const SlideLayout = ({ children, className = "", variant = "default" }: SlideLayoutProps) => {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-background" />
      {/* Grid background */}
      <div className="absolute inset-0 slide-grid-bg" />
      {/* Radial glow */}
      <div className={`absolute inset-0 ${
        variant === "accent" ? "slide-radial-glow-accent" : 
        variant === "warm" ? "slide-radial-glow" : 
        "slide-radial-glow"
      }`} />
      {/* Corner accent */}
      <div className="absolute inset-0 slide-corner-accent" />
      {/* Decorative orb */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="relative z-10 flex flex-col w-full h-full p-12 md:p-16">
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;
