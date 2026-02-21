import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { User, Brain, Cpu, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  { icon: User, label: "Сотрудник", desc: "Пишет проблему в WhatsApp, Telegram или Teams", color: "text-primary" },
  { icon: Brain, label: "AI анализирует", desc: "Определяет категорию и пытается решить самостоятельно", color: "text-accent" },
  { icon: Cpu, label: "SmartDispatch", desc: "Создаёт заявку и назначает специалиста автоматически", color: "text-primary" },
  { icon: BarChart3, label: "Контроль и аналитика", desc: "Специалист выполняет, руководство видит аналитику в реальном времени", color: "text-accent" },
];

const container = { animate: { transition: { staggerChildren: 0.2 } } };
const item = {
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const HowItWorksSlide = () => {
  return (
    <SlideLayout>
      <motion.div initial="initial" animate="animate" variants={container} className="flex flex-col h-full">
        <motion.div variants={item} className="mb-12 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-3 py-1 rounded-full mb-3">
              <span className="text-primary text-xs font-mono font-medium tracking-widest">03 / PROCESS</span>
            </div>
            <h2 className="text-5xl font-bold font-display text-glow">Как это работает</h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-transparent mb-3" />
        </motion.div>

        <div className="flex items-center justify-center flex-1">
          <div className="flex items-center gap-4">
            {steps.map((step, i) => (
              <motion.div key={i} variants={item} className="flex items-center gap-4">
                <div className="slide-card rounded-2xl p-6 w-[220px] flex flex-col items-center text-center slide-card-hover transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl icon-container flex items-center justify-center mb-4 box-glow">
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <div className="text-xs text-primary/50 font-mono mb-1">0{i + 1}</div>
                  <h3 className="text-base font-semibold font-display mb-2">{step.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex flex-col items-center gap-1">
                    <ArrowRight className="w-5 h-5 text-primary/30" />
                    <div className="w-8 h-[1px] bg-gradient-to-r from-primary/20 to-primary/5" />
                  </div>
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
