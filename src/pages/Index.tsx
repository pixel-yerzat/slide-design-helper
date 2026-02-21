import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TitleSlide from "@/components/slides/TitleSlide";
import ProblemSlide from "@/components/slides/ProblemSlide";
import SolutionSlide from "@/components/slides/SolutionSlide";
import HowItWorksSlide from "@/components/slides/HowItWorksSlide";
import ProductSlide from "@/components/slides/ProductSlide";
import MarketSlide from "@/components/slides/MarketSlide";
import BusinessModelSlide from "@/components/slides/BusinessModelSlide";
import CompetitiveAdvantageSlide from "@/components/slides/CompetitiveAdvantageSlide";
import VisionSlide from "@/components/slides/VisionSlide";

const slides = [
  TitleSlide,
  ProblemSlide,
  SolutionSlide,
  HowItWorksSlide,
  ProductSlide,
  MarketSlide,
  BusinessModelSlide,
  CompetitiveAdvantageSlide,
  VisionSlide,
];

const slideLabels = ["Титул", "Проблема", "Решение", "Процесс", "Продукт", "Рынок", "Модель", "Преимущества", "Видение"];

const Index = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => Math.max(0, Math.min(slides.length - 1, prev + dir)));
    },
    []
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  const SlideComponent = slides[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0, scale: 0.98 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0, scale: 0.98 }),
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden select-none bg-background">
      {/* Progress bar */}
      <div className="h-[2px] bg-muted relative z-30">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent"
          animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>

      {/* Main slide area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        {current > 0 && (
          <button
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:border-primary/30 hover:text-primary transition-all z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        {current < slides.length - 1 && (
          <button
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:border-primary/30 hover:text-primary transition-all z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Slide counter */}
        <div className="absolute top-4 right-4 z-20 text-xs font-mono text-muted-foreground bg-card/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="h-12 border-t border-border flex items-center justify-center gap-1.5 px-4 bg-card/30 backdrop-blur-sm">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all duration-200 ${
              i === current
                ? "bg-primary/15 text-primary border border-primary/25"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            <span className="font-mono text-[10px]">{String(i + 1).padStart(2, "0")}</span>
            <span className="hidden md:inline">{slideLabels[i]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Index;
