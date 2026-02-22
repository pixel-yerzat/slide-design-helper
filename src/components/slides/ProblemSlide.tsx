import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { AlertTriangle, Clock, DollarSign, Ban } from "lucide-react";
import problemBg from "@/assets/problem-bg.jpg";

const problems = [
  {
    icon: Clock,
    title: "Увеличение времени обработки",
    desc: "Сотрудникам сложно определить правильную категорию обращения, заявки попадают не тем специалистам.",
    stat: "~40%",
    statLabel: "времени на переназначение",
  },
  {
    icon: AlertTriangle,
    title: "Фрагментация процессов",
    desc: "Существующие решения охватывают только отдельные функции, вынуждая использовать разные системы.",
    stat: "5+",
    statLabel: "разных систем",
  },
  {
    icon: DollarSign,
    title: "Рост операционных расходов",
    desc: "Специалисты тратят значительное время на обработку типовых обращений, увеличивая затраты.",
    stat: "60%",
    statLabel: "типовых запросов",
  },
  {
    icon: Ban,
    title: "Снижение доступности",
    desc: "Создание заявки требует входа в отдельный портал, при отсутствии доступа — неэффективные каналы.",
    stat: "3x",
    statLabel: "дольше без портала",
  },
];

const container = { animate: { transition: { staggerChildren: 0.12 } } };
const item = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProblemSlide = () => {
  return (
    <SlideLayout>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${problemBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      <motion.div initial="initial" animate="animate" variants={container} className="relative z-10 flex flex-col h-full">
        <motion.div variants={item} className="mb-10 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-3 py-1 rounded-full mb-3">
              <span className="text-destructive text-xs font-mono font-medium tracking-widest">01 / PROBLEM</span>
            </div>
            <h2 className="text-5xl font-bold font-display" style={{ textShadow: '0 0 30px hsl(0 72% 51% / 0.4)' }}>
              Проблема
            </h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-destructive/30 to-transparent mb-3" />
        </motion.div>

        <div className="grid grid-cols-2 gap-5 flex-1">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className="rounded-xl p-7 flex flex-col slide-card-hover transition-all duration-300 group relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, hsl(0 20% 12% / 0.7), hsl(220 18% 8% / 0.9))',
                border: '1px solid hsl(0 72% 51% / 0.15)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(circle at 50% 0%, hsl(0 72% 51% / 0.08), transparent 70%)',
              }} />

              <div className="relative flex items-start gap-4 mb-4">
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, hsl(0 72% 51% / 0.15), hsl(0 72% 51% / 0.05))',
                  border: '1px solid hsl(0 72% 51% / 0.2)',
                }}>
                  <p.icon className="w-5 h-5 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold font-display">{p.title}</h3>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-2xl font-bold" style={{
                    background: 'linear-gradient(135deg, hsl(0 72% 60%), hsl(0 72% 40%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>{p.stat}</div>
                  <div className="text-[10px] text-muted-foreground">{p.statLabel}</div>
                </div>
              </div>
              <p className="relative text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="relative mt-auto pt-4">
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
