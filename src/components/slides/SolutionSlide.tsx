import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Zap, Layers, Bot, MessageSquare, Check } from "lucide-react";
import solutionBg from "@/assets/solution-bg.jpg";

const solutions = [
  {
    icon: Zap,
    title: "Автоопределение категории",
    desc: "AI автоматически определяет категорию, приоритет и назначает заявку нужному специалисту.",
    highlights: ["Без ручного выбора", "Мгновенная маршрутизация"],
  },
  {
    icon: Layers,
    title: "Единая система поддержки",
    desc: "IT, HR, бухгалтерия, администрация — все в одной платформе с централизованным управлением.",
    highlights: ["Все направления", "Единый центр"],
  },
  {
    icon: Bot,
    title: "AI First Aid",
    desc: "AI самостоятельно решает до 80% типовых запросов без участия специалистов.",
    highlights: ["80% автоматизация", "Мгновенный ответ"],
  },
  {
    icon: MessageSquare,
    title: "Многоканальность",
    desc: "WhatsApp, Telegram, Teams — без необходимости входа в отдельный портал.",
    highlights: ["Привычные каналы", "Нулевой порог входа"],
  },
];

const container = { animate: { transition: { staggerChildren: 0.12 } } };
const item = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SolutionSlide = () => {
  return (
    <SlideLayout>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${solutionBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />

      <motion.div initial="initial" animate="animate" variants={container} className="relative z-10 flex flex-col h-full">
        <motion.div variants={item} className="mb-10 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-3 py-1 rounded-full mb-3">
              <span className="text-primary text-xs font-mono font-medium tracking-widest">02 / SOLUTION</span>
            </div>
            <h2 className="text-5xl font-bold font-display text-glow">Решение</h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-transparent mb-3" />
        </motion.div>
        <div className="grid grid-cols-2 gap-5 flex-1">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="slide-card rounded-xl p-7 flex flex-col slide-card-hover transition-all duration-300 group relative overflow-hidden"
            >
              {/* Animated corner glow */}
              <div className="absolute top-0 left-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(circle at top left, hsl(185 80% 50% / 0.12), transparent 70%)',
              }} />

              <div className="relative flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl icon-container flex items-center justify-center box-glow">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-display">{s.title}</h3>
              </div>
              <p className="relative text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <div className="relative mt-auto flex flex-wrap gap-2">
                {s.highlights.map((h, j) => (
                  <span key={j} className="inline-flex items-center gap-1.5 text-xs text-primary/80 bg-primary/[0.08] px-3 py-1.5 rounded-full border border-primary/10">
                    <Check className="w-3 h-3" />
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default SolutionSlide;
