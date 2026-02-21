import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Zap, Globe, Brain, Lock, Gauge, Workflow } from "lucide-react";

const advantages = [
  {
    icon: Brain,
    title: "AI First Aid — решение без человека",
    desc: "До 80% обращений решаются автоматически. Конкуренты требуют вмешательства специалиста на каждом этапе.",
    vs: "ServiceNow, Jira — только маршрутизация",
  },
  {
    icon: Workflow,
    title: "Умная маршрутизация",
    desc: "AI анализирует текст обращения и назначает заявку нужному специалисту с учётом нагрузки и компетенций.",
    vs: "Конкуренты — ручной выбор категории",
  },
  {
    icon: Globe,
    title: "Многоканальность из коробки",
    desc: "WhatsApp, Telegram, Microsoft Teams, веб-портал — единый опыт для сотрудников в любом канале.",
    vs: "Большинство ITSM — только веб-портал",
  },
  {
    icon: Lock,
    title: "On-Premise & полная безопасность",
    desc: "Данные не покидают периметр компании. Полное соответствие требованиям информационной безопасности.",
    vs: "SaaS-конкуренты — облачное хранение",
  },
  {
    icon: Gauge,
    title: "Самообучение и адаптация",
    desc: "AI обучается на внутренних документах и улучшается с каждым обращением, адаптируясь под компанию.",
    vs: "Типовые решения — статические базы знаний",
  },
  {
    icon: Zap,
    title: "Быстрое внедрение",
    desc: "Развертывание за 4-6 недель вместо 6-12 месяцев. Минимальная нагрузка на IT-команду клиента.",
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
      <motion.div initial="initial" animate="animate" variants={container} className="flex flex-col h-full">
        <motion.div variants={item} className="mb-8 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-3 py-1 rounded-full mb-3">
              <span className="text-primary text-xs font-mono font-medium tracking-widest">07 / ADVANTAGE</span>
            </div>
            <h2 className="text-5xl font-bold font-display text-glow">Конкурентные преимущества</h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-transparent mb-3" />
        </motion.div>

        <div className="grid grid-cols-3 gap-4 flex-1">
          {advantages.map((a, i) => (
            <motion.div
              key={i}
              variants={item}
              className="slide-card rounded-xl p-5 flex flex-col slide-card-hover transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg icon-container flex items-center justify-center">
                  <a.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold font-display leading-tight">{a.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">{a.desc}</p>
              <div className="pt-3 border-t border-border/50">
                <div className="text-[10px] text-destructive/70 font-mono leading-relaxed">
                  ✕ {a.vs}
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
