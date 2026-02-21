import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Shield, GraduationCap, Settings, BarChart3, Puzzle } from "lucide-react";

const features = [
  { icon: Shield, title: "AI First Aid", desc: "AI принимает обращения, ведёт диалог и решает до 80% типовых запросов без участия специалистов.", badge: "CORE" },
  { icon: GraduationCap, title: "Самообучаемый AI", desc: "Обучается на внутренних документах компании и совершенствуется в процессе эксплуатации.", badge: "AI" },
  { icon: Settings, title: "Управление заявками", desc: "Полный жизненный цикл: создание, назначение, статусы, контроль SLA.", badge: "ITSM" },
  { icon: BarChart3, title: "Аналитика", desc: "Дашборд в реальном времени: заявки, время обработки, загрузка специалистов.", badge: "BI" },
  { icon: Puzzle, title: "Интеграции", desc: "WhatsApp, Telegram, Teams, Active Directory. SaaS и On-Premise.", badge: "API" },
];

const container = { animate: { transition: { staggerChildren: 0.1 } } };
const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ProductSlide = () => {
  return (
    <SlideLayout variant="accent">
      <motion.div initial="initial" animate="animate" variants={container} className="flex flex-col h-full">
        <motion.div variants={item} className="mb-10 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-3 py-1 rounded-full mb-3">
              <span className="text-primary text-xs font-mono font-medium tracking-widest">04 / PRODUCT</span>
            </div>
            <h2 className="text-5xl font-bold font-display text-glow">Продукт & Инновации</h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-transparent mb-3" />
        </motion.div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {features.slice(0, 3).map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              className="slide-card rounded-xl p-6 slide-card-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg icon-container flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[10px] font-mono font-medium text-primary/60 bg-primary/[0.06] px-2 py-0.5 rounded">{f.badge}</span>
              </div>
              <h3 className="text-base font-semibold font-display mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
        {/* Bottom row: 2 cards */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {features.slice(3).map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              className="slide-card rounded-xl p-6 slide-card-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg icon-container flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[10px] font-mono font-medium text-primary/60 bg-primary/[0.06] px-2 py-0.5 rounded">{f.badge}</span>
              </div>
              <h3 className="text-base font-semibold font-display mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default ProductSlide;
