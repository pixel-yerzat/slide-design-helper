import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Zap, Globe, Brain, Lock, Gauge, Workflow } from "lucide-react";
import advantageBg from "@/assets/advantage-bg.jpg";

const advantages = [
  {
    icon: Brain,
    title: "AI First Aid — решение без человека",
    desc: "До 80% обращений решаются автоматически. Конкуренты требуют вмешательства специалиста.",
    vs: "ServiceNow, Jira — только маршрутизация",
  },
  {
    icon: Workflow,
    title: "Умная маршрутизация",
    desc: "AI анализирует текст и назначает заявку с учётом нагрузки и компетенций.",
    vs: "Конкуренты — ручной выбор категории",
  },
  {
    icon: Globe,
    title: "Многоканальность из коробки",
    desc: "WhatsApp, Telegram, Microsoft Teams, веб-портал — единый опыт для сотрудников.",
    vs: "Большинство ITSM — только веб-портал",
  },
  {
    icon: Lock,
    title: "On-Premise & безопасность",
    desc: "Данные не покидают периметр компании. Полное соответствие ИБ-требованиям.",
    vs: "SaaS-конкуренты — облачное хранение",
  },
  {
    icon: Gauge,
    title: "Самообучение и адаптация",
    desc: "AI обучается на внутренних документах и улучшается с каждым обращением.",
    vs: "Типовые решения — статические базы знаний",
  },
  {
    icon: Zap,
    title: "Быстрое внедрение",
    desc: "Развертывание за 4-6 недель вместо 6-12 месяцев.",
    vs: "Enterprise ITSM — 6-12 месяцев внедрения",
  },
];

const container = { animate: { transition: { staggerChildren: 0.08 } } };
const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const CompetitiveAdvantageSlide = () => {
  return (
    <SlideLayout variant="accent">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${advantageBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />

      <motion.div initial="initial" animate="animate" variants={container} className="relative z-10 flex flex-col h-full">
        <motion.div variants={item} className="mb-8 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-3 py-1 rounded-full mb-3">
              <span className="text-primary text-xs font-mono font-medium tracking-widest">07 / ADVANTAGE</span>
            </div>
            <h2 className="text-5xl font-bold font-display text-glow-accent">Конкурентные преимущества</h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-accent/20 to-transparent mb-3" />
        </motion.div>

        <div className="grid grid-cols-3 gap-4 flex-1">
          {advantages.map((a, i) => (
            <motion.div
              key={i}
              variants={item}
              className="slide-card-accent rounded-xl p-5 flex flex-col transition-all duration-300 group relative overflow-hidden"
              style={{ cursor: 'default' }}
            >
              {/* Hover top bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{
                background: 'linear-gradient(90deg, hsl(260 60% 55%), hsl(185 80% 50%))',
              }} />

              <div className="relative flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg icon-container-accent flex items-center justify-center">
                  <a.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-sm font-semibold font-display leading-tight">{a.title}</h3>
              </div>
              <p className="relative text-xs text-muted-foreground leading-relaxed mb-3 flex-1">{a.desc}</p>
              <div className="relative pt-3 border-t border-border/50">
                <div className="text-[10px] text-destructive/70 font-mono leading-relaxed flex items-center gap-1">
                  <span className="text-destructive/50">✕</span> {a.vs}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default CompetitiveAdvantageSlide;
