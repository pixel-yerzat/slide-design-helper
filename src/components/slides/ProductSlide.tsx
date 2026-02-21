import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Shield, GraduationCap, Settings, BarChart3, Puzzle } from "lucide-react";

const features = [
  { icon: Shield, title: "AI First Aid", desc: "AI принимает обращения, анализирует проблему, ведёт диалог и решает до 80% типовых запросов." },
  { icon: GraduationCap, title: "Самообучаемый AI", desc: "Обучается на внутренних документах компании и совершенствуется в процессе эксплуатации." },
  { icon: Settings, title: "Управление заявками", desc: "Полный жизненный цикл: создание, назначение, статусы, контроль SLA и прозрачность." },
  { icon: BarChart3, title: "Аналитика", desc: "Аналитика в реальном времени: заявки, время обработки, загрузка специалистов." },
  { icon: Puzzle, title: "Интеграции", desc: "WhatsApp, Telegram, Teams, Active Directory. SaaS и On-Premise deployment." },
];

const container = { animate: { transition: { staggerChildren: 0.12 } } };
const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ProductSlide = () => {
  return (
    <SlideLayout>
      <motion.div initial="initial" animate="animate" variants={container} className="flex flex-col h-full">
        <motion.div variants={item} className="mb-10">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">04</span>
          <h2 className="text-5xl font-bold font-display mt-2 text-glow">Продукт & Инновации</h2>
        </motion.div>
        <div className="grid grid-cols-3 gap-5 flex-1 content-start">
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`slide-card rounded-xl p-6 slide-card-hover transition-all duration-300 ${i >= 3 ? "col-span-1" : ""}`}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <f.icon className="w-5 h-5 text-primary" />
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
