import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import heroBg from "@/assets/hero-bg.jpg";

const TitleSlide = () => {
  return (
    <SlideLayout>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-bold font-display tracking-tight gradient-text mb-4">
            SmartDispatch AI
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI-платформа управления внутренней поддержкой организации
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex gap-4 mt-4"
        >
          {["Problem", "Solution", "How it works", "Product", "Market", "Business model"].map(
            (item, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm text-muted-foreground border border-border"
              >
                {item}
              </span>
            )
          )}
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default TitleSlide;
