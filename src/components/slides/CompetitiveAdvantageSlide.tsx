import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Zap, Globe, Brain, Lock, Gauge, Workflow } from "lucide-react";
import advantageBg from "@/assets/advantage-bg.jpg";

const advantages = [
  {
    icon: Brain,
    title: "AI First Aid",
    desc: "80% обращений решаются автоматически.",
    vs: "ServiceNow — только маршрутизация",
  },
  {
    icon: Workflow,
    title: "Умная маршрутизация",
    desc: "AI назначает с учётом нагрузки и компетенций.",
    vs: "Конкуренты — ручной выбор",
  },
  {
    icon: Globe,
    title: "Многоканальность",
    desc: "WhatsApp, Telegram, Teams, веб-портал.",
    vs: "ITSM — только веб-портал",
  },
  {
    icon: Lock,
    title: "On-Premise",
    desc: "Данные не покидают периметр компании.",
    vs: "SaaS — облачное хранение",
  },
  {
    icon: Gauge,
    title: "Самообучение",
    desc: "AI улучшается с каждым обращением.",
    vs: "Статические базы знаний",
  },
  {
    icon: Zap,
    title: "Быстрое внедрение",
    desc: "4-6 недель вместо 6-12 месяцев.",
    vs: "Enterprise ITSM — 6-12 мес.",
  },
];

const container = { animate: { transition: { staggerChildren: 0.08 } } };
const item = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const CompetitiveAdvantageSlide = () => {
  return (
    <SlideLayout variant="accent">
      <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${advantageBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />

      <motion.div initial="initial" animate="animate" variants={container} className="relative z-10 flex flex-col h-full">
        <motion.div variants={item} className="mb-5 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-2.5 py-0.5 rounded-full mb-2">
              <span className="text-primary text-[11px] font-mono font-medium tracking-widest">07 / ADVANTAGE</span>
            </div>
            <h2 className="text-4xl font-bold font-display text-glow-accent">Конкурентные преимущества</h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-accent/20 to-transparent mb-2" />
        </motion.div>

        <div className="grid grid-cols-3 gap-3 flex-1 content-center">
          {advantages.map((a, i) => (
            <motion.div
              key={i}
              variants={item}
              className="slide-card-accent rounded-lg p-3.5 flex flex-col transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{
                background: 'linear-gradient(90deg, hsl(260 60% 55%), hsl(185 80% 50%))',
              }} />
              <div className="relative flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-md icon-container-accent flex items-center justify-center">
                  <a.icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-xs font-semibold font-display leading-tight">{a.title}</h3>
              </div>
              <p className="relative text-[11px] text-muted-foreground leading-relaxed mb-2 flex-1">{a.desc}</p>
              <div className="relative pt-2 border-t border-border/50">
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
