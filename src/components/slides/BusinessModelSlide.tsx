import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Key, Headphones, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Key,
    title: "Лицензия и внедрение",
    price: "60 млн ₸",
    period: "единовременно",
    desc: "Развертывание системы, интеграции с AD, мессенджерами и корпоративными системами, обучение AI.",
  },
  {
    icon: Headphones,
    title: "Техническая поддержка",
    price: "18 млн ₸",
    period: "в год",
    desc: "Сопровождение системы, обновления, развитие AI-моделей и техническая поддержка.",
  },
  {
    icon: ShieldCheck,
    title: "Безопасность данных",
    price: "On-Premise",
    period: "",
    desc: "Все данные внутри инфраструктуры клиента, без передачи во внешние облака.",
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
        <motion.div variants={item} className="mb-12">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">06</span>
          <h2 className="text-5xl font-bold font-display mt-2 text-glow">Бизнес-модель</h2>
        </motion.div>
        <div className="grid grid-cols-3 gap-6 flex-1 content-center">
          {items.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="slide-card rounded-2xl p-8 slide-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display mb-1">{s.title}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold gradient-text">{s.price}</span>
                {s.period && <span className="text-sm text-muted-foreground">/ {s.period}</span>}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default BusinessModelSlide;
