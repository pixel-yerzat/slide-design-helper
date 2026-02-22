import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Key, Headphones, ShieldCheck, Check, Star } from "lucide-react";
import businessBg from "@/assets/business-bg.jpg";

const items = [
  {
    icon: Key,
    title: "Лицензия и внедрение",
    price: "60 млн ₸",
    period: "единовременно",
    desc: "Развертывание, интеграции с AD и мессенджерами, обучение AI.",
    includes: ["Установка On-Premise", "Интеграция AD", "Обучение AI", "Настройка каналов"],
    featured: true,
  },
  {
    icon: Headphones,
    title: "Техническая поддержка",
    price: "18 млн ₸",
    period: "в год",
    desc: "Сопровождение, обновления и развитие AI-моделей.",
    includes: ["Обновления системы", "Развитие AI", "SLA поддержки", "Мониторинг 24/7"],
    featured: false,
  },
  {
    icon: ShieldCheck,
    title: "Безопасность данных",
    price: "On-Premise",
    period: "",
    desc: "Данные внутри инфраструктуры клиента.",
    includes: ["Изолированная среда", "Шифрование", "Аудит доступа", "Compliance"],
    featured: false,
  },
];

const container = { animate: { transition: { staggerChildren: 0.15 } } };
const itemAnim = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BusinessModelSlide = () => {
  return (
    <SlideLayout variant="warm">
      <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${businessBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      <motion.div initial="initial" animate="animate" variants={container} className="relative z-10 flex flex-col h-full">
        <motion.div variants={itemAnim} className="mb-6 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-2.5 py-0.5 rounded-full mb-2">
              <span className="text-primary text-[11px] font-mono font-medium tracking-widest">06 / PRICING</span>
            </div>
            <h2 className="text-4xl font-bold font-display text-glow">Бизнес-модель</h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-transparent mb-2" />
        </motion.div>

        <div className="grid grid-cols-3 gap-4 flex-1 content-center">
          {items.map((s, i) => (
            <motion.div
              key={i}
              variants={itemAnim}
              className={`rounded-xl p-5 flex flex-col transition-all duration-300 slide-card-hover relative overflow-hidden group ${
                s.featured ? "slide-card-warm" : "slide-card"
              }`}
              style={s.featured ? { boxShadow: '0 0 30px hsl(35 90% 55% / 0.08)' } : {}}
            >
              {s.featured && (
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 text-[9px] font-mono px-1.5 py-0.5 rounded-full" style={{
                    background: 'linear-gradient(135deg, hsl(35 90% 55% / 0.15), hsl(35 90% 55% / 0.05))',
                    border: '1px solid hsl(35 90% 55% / 0.3)',
                    color: 'hsl(35 90% 65%)',
                  }}>
                    <Star className="w-2.5 h-2.5" /> TOP
                  </span>
                </div>
              )}

              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{
                background: s.featured
                  ? 'linear-gradient(135deg, hsl(35 90% 55% / 0.15), hsl(35 90% 55% / 0.05))'
                  : 'linear-gradient(135deg, hsl(185 80% 50% / 0.12), hsl(185 80% 50% / 0.04))',
                border: s.featured ? '1px solid hsl(35 90% 55% / 0.2)' : '1px solid hsl(185 80% 50% / 0.15)',
              }}>
                <s.icon className={`w-5 h-5 ${s.featured ? 'text-slide-warm' : 'text-primary'}`} />
              </div>
              <h3 className="text-sm font-bold font-display mb-1">{s.title}</h3>
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className={`text-2xl font-bold ${s.featured ? 'gradient-text-warm' : 'gradient-text'}`}>{s.price}</span>
                {s.period && <span className="text-xs text-muted-foreground">/ {s.period}</span>}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
              <div className="mt-auto space-y-1.5">
                {s.includes.map((inc, j) => (
                  <div key={j} className="flex items-center gap-1.5 text-[11px] text-secondary-foreground">
                    <Check className={`w-3 h-3 ${s.featured ? 'text-slide-warm/60' : 'text-primary/60'}`} />
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
