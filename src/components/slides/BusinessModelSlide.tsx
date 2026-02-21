import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Key, Headphones, ShieldCheck, Check } from "lucide-react";

const items = [
  {
    icon: Key,
    title: "Лицензия и внедрение",
    price: "60 млн ₸",
    period: "единовременно",
    desc: "Развертывание системы, интеграции с AD, мессенджерами и корпоративными системами, обучение AI.",
    includes: ["Установка On-Premise", "Интеграция AD", "Обучение AI", "Настройка каналов"],
  },
  {
    icon: Headphones,
    title: "Техническая поддержка",
    price: "18 млн ₸",
    period: "в год",
    desc: "Сопровождение, обновления, развитие AI-моделей и техническая поддержка.",
    includes: ["Обновления системы", "Развитие AI", "SLA поддержки", "Мониторинг 24/7"],
  },
  {
    icon: ShieldCheck,
    title: "Безопасность данных",
    price: "On-Premise",
    period: "",
    desc: "Все данные внутри инфраструктуры клиента, без передачи во внешние облака.",
    includes: ["Изолированная среда", "Шифрование", "Аудит доступа", "Compliance"],
  },
];

const container = { animate: { transition: { staggerChildren: 0.15 } } };
const item = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BusinessModelSlide = () => {
  return (
    <SlideLayout>
      <motion.div initial="initial" animate="animate" variants={container} className="flex flex-col h-full">
        <motion.div variants={item} className="mb-10 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-3 py-1 rounded-full mb-3">
              <span className="text-primary text-xs font-mono font-medium tracking-widest">06 / PRICING</span>
            </div>
            <h2 className="text-5xl font-bold font-display text-glow">Бизнес-модель</h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-transparent mb-3" />
        </motion.div>
        <div className="grid grid-cols-3 gap-5 flex-1 content-center">
          {items.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`rounded-2xl p-7 flex flex-col transition-all duration-300 ${
                i === 0 ? "slide-card-accent slide-card-hover" : "slide-card slide-card-hover"
              } ${i === 0 ? "ring-1 ring-accent/20" : ""}`}
            >
              <div className="w-12 h-12 rounded-xl icon-container flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-display mb-1">{s.title}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold gradient-text">{s.price}</span>
                {s.period && <span className="text-sm text-muted-foreground">/ {s.period}</span>}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
              <div className="mt-auto space-y-2">
                {s.includes.map((inc, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs text-secondary-foreground">
                    <Check className="w-3.5 h-3.5 text-primary/60" />
                    {inc}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default BusinessModelSlide;
