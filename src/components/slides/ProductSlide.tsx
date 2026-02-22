import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Shield, GraduationCap, Settings, BarChart3, Puzzle } from "lucide-react";
import productBg from "@/assets/product-bg.jpg";

const features = [
  { icon: Shield, title: "AI First Aid", desc: "Решает до 80% типовых запросов без участия специалистов.", badge: "CORE" },
  { icon: GraduationCap, title: "Самообучаемый AI", desc: "Обучается на документах компании и совершенствуется.", badge: "AI" },
  { icon: Settings, title: "Управление заявками", desc: "Создание, назначение, статусы, контроль SLA.", badge: "ITSM" },
  { icon: BarChart3, title: "Аналитика", desc: "Дашборд: заявки, время обработки, загрузка.", badge: "BI" },
  { icon: Puzzle, title: "Интеграции", desc: "WhatsApp, Telegram, Teams, AD. SaaS и On-Premise.", badge: "API" },
];

const container = { animate: { transition: { staggerChildren: 0.1 } } };
const item = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ProductSlide = () => {
  return (
    <SlideLayout variant="accent">
      <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${productBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-to-l from-background/80 via-transparent to-background/50" />

      <motion.div initial="initial" animate="animate" variants={container} className="relative z-10 flex flex-col h-full">
        <motion.div variants={item} className="mb-6 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-2.5 py-0.5 rounded-full mb-2">
              <span className="text-primary text-[11px] font-mono font-medium tracking-widest">04 / PRODUCT</span>
            </div>
            <h2 className="text-4xl font-bold font-display text-glow">Продукт & Инновации</h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-transparent mb-2" />
        </motion.div>

        <div className="grid grid-cols-3 gap-3 mb-3">
          {features.slice(0, 3).map((f, i) => (
            <motion.div key={i} variants={item} className="slide-card rounded-lg p-4 slide-card-hover transition-all duration-300 group relative overflow-hidden">
              <div className="relative flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg icon-container flex items-center justify-center">
                  <f.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-[9px] font-mono font-medium text-accent/80 bg-accent/[0.08] px-1.5 py-0.5 rounded border border-accent/10">{f.badge}</span>
              </div>
              <h3 className="relative text-sm font-semibold font-display mb-1">{f.title}</h3>
              <p className="relative text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 flex-1 content-center">
          {features.slice(3).map((f, i) => (
            <motion.div key={i} variants={item} className="slide-card rounded-lg p-4 slide-card-hover transition-all duration-300 group relative overflow-hidden">
              <div className="relative flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg icon-container flex items-center justify-center">
                  <f.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-[9px] font-mono font-medium text-accent/80 bg-accent/[0.08] px-1.5 py-0.5 rounded border border-accent/10">{f.badge}</span>
              </div>
              <h3 className="relative text-sm font-semibold font-display mb-1">{f.title}</h3>
              <p className="relative text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default ProductSlide;
