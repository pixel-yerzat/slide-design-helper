import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Zap, Layers, Bot, MessageSquare } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Автоопределение категории",
    desc: "Сотрудник описывает проблему в чате, AI автоматически определяет категорию, приоритет и назначает заявку нужному специалисту.",
  },
  {
    icon: Layers,
    title: "Единая система поддержки",
    desc: "Платформа объединяет все направления — IT, HR, бухгалтерию, административные и другие сервисы — в одной системе.",
  },
  {
    icon: Bot,
    title: "Автономное решение обращений",
    desc: "AI First Aid позволяет искусственному интеллекту самостоятельно решать до 80% типовых запросов без участия специалистов.",
  },
  {
    icon: MessageSquare,
    title: "Многоканальность",
    desc: "Заявки через привычные каналы — WhatsApp, Telegram, Teams — без необходимости входа в отдельный портал.",
  },
];

const container = {
  animate: { transition: { staggerChildren: 0.15 } },
};
const item = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SolutionSlide = () => {
  return (
    <SlideLayout>
      <motion.div initial="initial" animate="animate" variants={container} className="flex flex-col h-full">
        <motion.div variants={item} className="mb-12">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">02</span>
          <h2 className="text-5xl font-bold font-display mt-2 text-glow">Решение</h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="slide-card rounded-xl p-8 slide-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-display mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default SolutionSlide;
