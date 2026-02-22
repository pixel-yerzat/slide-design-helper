import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { User, Brain, Cpu, BarChart3, ArrowRight } from "lucide-react";
import processBg from "@/assets/process-bg.jpg";

const steps = [
  { icon: User, label: "Сотрудник", desc: "Пишет проблему в WhatsApp, Telegram или Teams", color: "text-primary" },
  { icon: Brain, label: "AI анализирует", desc: "Определяет категорию и решает самостоятельно", color: "text-accent" },
  { icon: Cpu, label: "SmartDispatch", desc: "Создаёт заявку и назначает специалиста", color: "text-primary" },
  { icon: BarChart3, label: "Контроль", desc: "Руководство видит аналитику в реальном времени", color: "text-accent" },
];

const container = { animate: { transition: { staggerChildren: 0.2 } } };
const item = {
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const HowItWorksSlide = () => {
  return (
    <SlideLayout>
      <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${processBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <motion.div initial="initial" animate="animate" variants={container} className="relative z-10 flex flex-col h-full">
        <motion.div variants={item} className="mb-8 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-2.5 py-0.5 rounded-full mb-2">
              <span className="text-primary text-[11px] font-mono font-medium tracking-widest">03 / PROCESS</span>
            </div>
            <h2 className="text-4xl font-bold font-display text-glow">Как это работает</h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-transparent mb-2" />
        </motion.div>

        <div className="flex items-center justify-center flex-1">
          <div className="flex items-stretch gap-3">
            {steps.map((step, i) => (
              <motion.div key={i} variants={item} className="flex items-center gap-3">
                <div className="slide-card rounded-xl p-4 w-[190px] flex flex-col items-center text-center slide-card-hover transition-all duration-300 group relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 rounded-xl icon-container flex items-center justify-center mb-3 box-glow">
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <div className="text-[10px] text-primary/50 font-mono mb-0.5">0{i + 1}</div>
                  <h3 className="text-sm font-semibold font-display mb-1">{step.label}</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                    <ArrowRight className="w-4 h-4 text-primary/30" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default HowItWorksSlide;
