import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import heroBg from "@/assets/hero-bg.jpg";

const TitleSlide = () => {
  return (
    <SlideLayout>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mb-8 w-20 h-20 rounded-2xl icon-container flex items-center justify-center box-glow animate-float"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="hsl(185 80% 50%)" strokeWidth="2" fill="hsl(185 80% 50% / 0.1)" />
              <circle cx="20" cy="20" r="6" fill="hsl(185 80% 50%)" opacity="0.8" />
              <path d="M20 14V8M26 17L31 14M26 23L31 26M20 26V32M14 23L9 26M14 17L9 14" stroke="hsl(185 80% 50%)" strokeWidth="1.5" opacity="0.5" />
            </svg>
          </motion.div>

          <h1 className="text-6xl font-bold font-display tracking-tight gradient-text mb-4">
            SmartDispatch AI
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-primary rounded-full" />
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-primary rounded-full" />
          </div>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            AI-платформа управления внутренней поддержкой организации
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-4"
        >
          {[
            { label: "Problem", num: "01" },
            { label: "Solution", num: "02" },
            { label: "How it works", num: "03" },
            { label: "Product", num: "04" },
            { label: "Market", num: "05" },
            { label: "Business model", num: "06" },
            { label: "Advantages", num: "07" },
            { label: "Vision", num: "08" },
          ].map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-sm text-muted-foreground border border-border hover:border-primary/30 hover:text-primary transition-all duration-300 flex items-center gap-2"
            >
              <span className="text-[10px] text-primary/60 font-mono">{item.num}</span>
              {item.label}
            </span>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex gap-12 mt-6"
        >
          {[
            { value: "80%", label: "автоматизация" },
            { value: "24/7", label: "доступность" },
            { value: "5+", label: "каналов" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold font-display stat-value">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default TitleSlide;
