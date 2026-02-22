import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { AlertTriangle, Clock, DollarSign, Ban } from "lucide-react";
import problemBg from "@/assets/problem-bg.jpg";

const problems = [
  {
    icon: Clock,
    title: "Увеличение времени обработки",
    desc: "Заявки попадают не тем специалистам и требуют переназначения.",
    stat: "~40%",
    statLabel: "на переназначение",
  },
  {
    icon: AlertTriangle,
    title: "Фрагментация процессов",
    desc: "Разные системы для разных функций вынуждают сотрудников переключаться.",
    stat: "5+",
    statLabel: "разных систем",
  },
  {
    icon: DollarSign,
    title: "Рост операционных расходов",
    desc: "Специалисты тратят время на типовые обращения, увеличивая затраты.",
    stat: "60%",
    statLabel: "типовых запросов",
  },
  {
    icon: Ban,
    title: "Снижение доступности",
    desc: "Создание заявки требует входа в отдельный портал.",
    stat: "3x",
    statLabel: "дольше без портала",
  },
];

const container = { animate: { transition: { staggerChildren: 0.12 } } };
const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ProblemSlide = () => {
  return (
    <SlideLayout>
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${problemBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      <motion.div initial="initial" animate="animate" variants={container} className="relative z-10 flex flex-col h-full">
        <motion.div variants={item} className="mb-6 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-2.5 py-0.5 rounded-full mb-2">
              <span className="text-destructive text-[11px] font-mono font-medium tracking-widest">01 / PROBLEM</span>
            </div>
            <h2 className="text-4xl font-bold font-display" style={{ textShadow: '0 0 30px hsl(0 72% 51% / 0.4)' }}>Проблема</h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-destructive/30 to-transparent mb-2" />
        </motion.div>

        <div className="grid grid-cols-2 gap-3 flex-1 content-center">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className="rounded-lg p-4 flex flex-col slide-card-hover transition-all duration-300 group relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, hsl(0 20% 12% / 0.7), hsl(220 18% 8% / 0.9))',
                border: '1px solid hsl(0 72% 51% / 0.15)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="relative flex items-center gap-3 mb-2">
                <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, hsl(0 72% 51% / 0.15), hsl(0 72% 51% / 0.05))',
                  border: '1px solid hsl(0 72% 51% / 0.2)',
                }}>
                  <p.icon className="w-4 h-4 text-destructive" />
                </div>
                <h3 className="text-sm font-semibold font-display flex-1">{p.title}</h3>
                <div className="text-right shrink-0">
                  <div className="text-lg font-bold" style={{
                    background: 'linear-gradient(135deg, hsl(0 72% 60%), hsl(0 72% 40%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>{p.stat}</div>
                  <div className="text-[9px] text-muted-foreground">{p.statLabel}</div>
                </div>
              </div>
              <p className="relative text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="relative mt-auto pt-2">
                <div className="h-[1px] bg-gradient-to-r from-destructive/30 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default ProblemSlide;
