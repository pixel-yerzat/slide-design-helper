import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
}

const SlideLayout = ({ children, className = "" }: SlideLayoutProps) => {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-background" />
      <div className="relative z-10 flex flex-col w-full h-full p-16">
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;
