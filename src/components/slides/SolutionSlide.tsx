import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Zap, Layers, Bot, MessageSquare, Check } from "lucide-react";
import solutionBg from "@/assets/solution-bg.jpg";

const solutions = [
  {
    icon: Zap,
    title: "Автоопределение категории",
    desc: "AI определяет категорию, приоритет и назначает заявку нужному специалисту.",
    highlights: ["Без ручного выбора", "Мгновенная маршрутизация"],
  },
  {
    icon: Layers,
    title: "Единая система поддержки",
    desc: "IT, HR, бухгалтерия — все в одной платформе.",
    highlights: ["Все направления", "Единый центр"],
  },
  {
    icon: Bot,
    title: "AI First Aid",
    desc: "AI решает до 80% типовых запросов без участия специалистов.",
    highlights: ["80% автоматизация", "Мгновенный ответ"],
  },
  {
    icon: MessageSquare,
    title: "Многоканальность",
    desc: "WhatsApp, Telegram, Teams — без отдельного портала.",
    highlights: ["Привычные каналы", "Нулевой порог входа"],
  },
];

const container = { animate: { transition: { staggerChildren: 0.12 } } };
const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SolutionSlide = () => {
  return (
    <SlideLayout>
      <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${solutionBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />

      <motion.div initial="initial" animate="animate" variants={container} className="relative z-10 flex flex-col h-full">
        <motion.div variants={item} className="mb-6 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-2.5 py-0.5 rounded-full mb-2">
              <span className="text-primary text-[11px] font-mono font-medium tracking-widest">02 / SOLUTION</span>
            </div>
            <h2 className="text-4xl font-bold font-display text-glow">Решение</h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-transparent mb-2" />
        </motion.div>
        <div className="grid grid-cols-2 gap-3 flex-1 content-center">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="slide-card rounded-lg p-4 flex flex-col slide-card-hover transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(circle at top left, hsl(185 80% 50% / 0.12), transparent 70%)',
              }} />
              <div className="relative flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg icon-container flex items-center justify-center">
                  <s.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold font-display">{s.title}</h3>
              </div>
              <p className="relative text-xs text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
              <div className="relative mt-auto flex flex-wrap gap-1.5">
                {s.highlights.map((h, j) => (
                  <span key={j} className="inline-flex items-center gap-1 text-[11px] text-primary/80 bg-primary/[0.08] px-2 py-1 rounded-full border border-primary/10">
                    <Check className="w-2.5 h-2.5" />
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
