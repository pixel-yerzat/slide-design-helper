import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Zap, Layers, Bot, MessageSquare, Check } from "lucide-react";

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
      <motion.div initial="initial" animate="animate" variants={container} className="flex flex-col h-full">
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
              className="slide-card rounded-xl p-7 flex flex-col slide-card-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg icon-container flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-display">{s.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {s.highlights.map((h, j) => (
                  <span key={j} className="inline-flex items-center gap-1.5 text-xs text-primary/80 bg-primary/[0.06] px-2.5 py-1 rounded-full">
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
