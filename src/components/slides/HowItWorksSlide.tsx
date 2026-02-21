import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { User, Brain, Cpu, BarChart3, ArrowDown } from "lucide-react";

const steps = [
  { icon: User, label: "Сотрудник", desc: "Пишет проблему в WhatsApp или Telegram" },
  { icon: Brain, label: "AI анализирует", desc: "Определяет категорию и пытается решить" },
  { icon: Cpu, label: "SmartDispatch", desc: "Автоматически создаёт заявку и назначает специалиста" },
  { icon: BarChart3, label: "Контроль", desc: "Специалист выполняет, руководство видит аналитику" },
];

const container = { animate: { transition: { staggerChildren: 0.2 } } };
const item = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const HowItWorksSlide = () => {
  return (
    <SlideLayout>
      <motion.div initial="initial" animate="animate" variants={container} className="flex flex-col h-full">
        <motion.div variants={item} className="mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">03</span>
          <h2 className="text-5xl font-bold font-display mt-2 text-glow">Как это работает</h2>
        </motion.div>
        <div className="flex items-center justify-center flex-1">
          <div className="flex flex-col items-center gap-4">
            {steps.map((step, i) => (
              <motion.div key={i} variants={item}>
                <div className="flex items-center gap-6 w-[600px]">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center box-glow">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-display">{step.label}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex justify-start ml-7 my-2">
                    <ArrowDown className="w-5 h-5 text-primary/40" />
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
