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

const slides = [
  TitleSlide,
  ProblemSlide,
  SolutionSlide,
  HowItWorksSlide,
  ProductSlide,
  MarketSlide,
  BusinessModelSlide,
];

const slideLabels = ["Титул", "Проблема", "Решение", "Как работает", "Продукт", "Рынок", "Бизнес-модель"];

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
      if (e.key === "ArrowRight" || e.key === " ") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  const SlideComponent = slides[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden select-none">
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
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        {current > 0 && (
          <button
            onClick={() => go(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center text-foreground hover:bg-secondary transition-colors z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        {current < slides.length - 1 && (
          <button
            onClick={() => go(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center text-foreground hover:bg-secondary transition-colors z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Bottom bar */}
      <div className="h-14 border-t border-border flex items-center justify-center gap-2 px-4 bg-card/50 backdrop-blur-sm">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              i === current
                ? "bg-primary/15 text-primary border border-primary/30"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            <span className="font-display">{i + 1}</span>
            <span className="hidden sm:inline">{slideLabels[i]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Index;
