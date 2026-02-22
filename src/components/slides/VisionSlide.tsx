import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Rocket, Globe2, Sparkles, Building, Smartphone, Database } from "lucide-react";
import visionBg from "@/assets/vision-bg.jpg";

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
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${visionBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />

      <motion.div initial="initial" animate="animate" variants={container} className="relative z-10 flex flex-col h-full">
        <motion.div variants={item} className="mb-8 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-3 py-1 rounded-full mb-3">
              <span className="text-primary text-xs font-mono font-medium tracking-widest">08 / VISION</span>
            </div>
            <h2 className="text-5xl font-bold font-display text-glow-warm">Видение & Roadmap</h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-slide-warm/30 to-transparent mb-3" />
        </motion.div>

        {/* Mission statement */}
        <motion.div variants={item} className="mb-8 max-w-3xl">
          <div className="slide-card-warm rounded-xl p-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full" style={{ background: 'linear-gradient(to bottom, hsl(35 90% 55%), hsl(15 80% 55%))' }} />
            <p className="text-lg text-secondary-foreground leading-relaxed italic pl-4">
              «Наша цель — сделать SmartDispatch AI стандартом управления внутренней поддержкой для каждой крупной организации в Центральной Азии и за её пределами.»
            </p>
          </div>
        </motion.div>

        {/* Timeline roadmap */}
        <div className="flex-1 relative">
          <div className="absolute left-[72px] top-0 bottom-0 w-[2px]" style={{
            background: 'linear-gradient(to bottom, hsl(35 90% 55% / 0.4), hsl(185 80% 50% / 0.2), transparent)',
          }} />

          <div className="space-y-4">
            {roadmap.map((r, i) => (
              <motion.div key={i} variants={item} className="flex items-start gap-5">
                <div className="shrink-0 w-[145px] flex items-center justify-end">
                  <span className={`text-xs font-mono font-semibold px-3 py-1.5 rounded-full ${
                    r.status === "in-progress"
                      ? "text-slide-warm border"
                      : "bg-secondary text-muted-foreground border border-border"
                  }`} style={r.status === "in-progress" ? {
                    background: 'linear-gradient(135deg, hsl(35 90% 55% / 0.15), hsl(35 90% 55% / 0.05))',
                    borderColor: 'hsl(35 90% 55% / 0.3)',
                  } : {}}>
                    {r.phase}
                  </span>
                </div>

                <div className="relative shrink-0">
                  <div className={`w-3 h-3 rounded-full mt-1.5 ${
                    r.status === "in-progress" ? "bg-slide-warm animate-pulse-glow" : "bg-muted-foreground/30"
                  }`} />
                  {r.status === "in-progress" && (
                    <div className="absolute inset-0 w-3 h-3 rounded-full mt-1.5 bg-slide-warm/30 animate-ping" />
                  )}
                </div>

                <div className="slide-card rounded-xl p-5 flex-1 slide-card-hover transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity" style={{
                    background: 'linear-gradient(90deg, transparent, hsl(35 90% 55% / 0.3), transparent)',
                  }} />
                  <div className="relative flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg icon-container-warm flex items-center justify-center">
                      <r.icon className="w-4 h-4 text-slide-warm" />
                    </div>
                    <h3 className="text-sm font-semibold font-display">{r.title}</h3>
                    {r.status === "in-progress" && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full" style={{
                        background: 'hsl(35 90% 55% / 0.1)',
                        color: 'hsl(35 90% 65%)',
                        border: '1px solid hsl(35 90% 55% / 0.2)',
                      }}>IN PROGRESS</span>
                    )}
                  </div>
                  <p className="relative text-xs text-muted-foreground leading-relaxed ml-11">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div variants={item} className="mt-4 flex items-center gap-4">
          <Rocket className="w-5 h-5 text-slide-warm" />
          <span className="text-sm font-display font-medium gradient-text-warm">Будущее корпоративной поддержки начинается сейчас</span>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default VisionSlide;
