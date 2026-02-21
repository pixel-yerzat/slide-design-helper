import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Rocket, Globe2, Sparkles, Building, Smartphone, Database } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const roadmap = [
  {
    phase: "Q2 2026",
    title: "Microsoft Teams Deep Integration",
    desc: "Полная интеграция с Teams: создание заявок прямо в чате, адаптивные карточки, статусы в реальном времени.",
    icon: Smartphone,
    status: "in-progress",
  },
  {
    phase: "Q3 2026",
    title: "Slack & Bitrix24 коннекторы",
    desc: "Расширение экосистемы каналов — поддержка Slack, Bitrix24, корпоративных порталов.",
    icon: Globe2,
    status: "planned",
  },
  {
    phase: "Q4 2026",
    title: "AI Vision & голосовые обращения",
    desc: "Распознавание скриншотов ошибок, голосовые заявки через Teams и Telegram с транскрипцией.",
    icon: Sparkles,
    status: "planned",
  },
  {
    phase: "2027",
    title: "Мультиязычный AI & региональная экспансия",
    desc: "Поддержка казахского, английского, арабского языков. Выход на рынки Центральной Азии и Ближнего Востока.",
    icon: Building,
    status: "planned",
  },
];

const container = { animate: { transition: { staggerChildren: 0.15 } } };
const item = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const VisionSlide = () => {
  return (
    <SlideLayout variant="warm">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <motion.div initial="initial" animate="animate" variants={container} className="relative z-10 flex flex-col h-full">
        <motion.div variants={item} className="mb-8 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-3 py-1 rounded-full mb-3">
              <span className="text-primary text-xs font-mono font-medium tracking-widest">08 / VISION</span>
            </div>
            <h2 className="text-5xl font-bold font-display text-glow">Видение & Roadmap</h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-transparent mb-3" />
        </motion.div>

        {/* Mission statement */}
        <motion.div variants={item} className="mb-8 max-w-3xl">
          <p className="text-lg text-secondary-foreground leading-relaxed italic">
            «Наша цель — сделать SmartDispatch AI стандартом управления внутренней поддержкой для каждой крупной организации в Центральной Азии и за её пределами.»
          </p>
        </motion.div>

        {/* Timeline roadmap */}
        <div className="flex-1 relative">
          {/* Timeline line */}
          <div className="absolute left-[72px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 via-accent/20 to-transparent" />

          <div className="space-y-5">
            {roadmap.map((r, i) => (
              <motion.div key={i} variants={item} className="flex items-start gap-5">
                {/* Phase badge */}
                <div className="shrink-0 w-[145px] flex items-center justify-end">
                  <span className={`text-xs font-mono font-semibold px-3 py-1 rounded-full ${
                    r.status === "in-progress"
                      ? "bg-primary/15 text-primary border border-primary/30"
                      : "bg-secondary text-muted-foreground border border-border"
                  }`}>
                    {r.phase}
                  </span>
                </div>

                {/* Dot */}
                <div className="relative shrink-0">
                  <div className={`w-3 h-3 rounded-full mt-1.5 ${
                    r.status === "in-progress" ? "bg-primary animate-pulse-glow" : "bg-muted-foreground/30"
                  }`} />
                </div>

                {/* Card */}
                <div className="slide-card rounded-xl p-5 flex-1 slide-card-hover transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg icon-container flex items-center justify-center">
                      <r.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold font-display">{r.title}</h3>
                    {r.status === "in-progress" && (
                      <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full">IN PROGRESS</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed ml-11">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div variants={item} className="mt-6 flex items-center gap-4">
          <Rocket className="w-5 h-5 text-primary" />
          <span className="text-sm font-display font-medium gradient-text">Будущее корпоративной поддержки начинается сейчас</span>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default VisionSlide;
