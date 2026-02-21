import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { AlertTriangle, Clock, DollarSign, Ban } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Увеличение времени обработки",
    desc: "Сотрудникам сложно определить правильную категорию обращения, заявки попадают не тем специалистам и требуют переназначения.",
    stat: "~40%",
    statLabel: "времени на переназначение",
  },
  {
    icon: AlertTriangle,
    title: "Фрагментация процессов",
    desc: "Существующие решения охватывают только отдельные функции, вынуждая сотрудников использовать разные системы и каналы.",
    stat: "5+",
    statLabel: "разных систем",
  },
  {
    icon: DollarSign,
    title: "Рост операционных расходов",
    desc: "Ключевые специалисты тратят значительное время на обработку типовых обращений, увеличивая нагрузку и затраты.",
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
      <motion.div initial="initial" animate="animate" variants={container} className="flex flex-col h-full">
        <motion.div variants={item} className="mb-10 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-3 py-1 rounded-full mb-3">
              <span className="text-primary text-xs font-mono font-medium tracking-widest">01 / PROBLEM</span>
            </div>
            <h2 className="text-5xl font-bold font-display text-glow">Проблема</h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-transparent mb-3" />
        </motion.div>
        <div className="grid grid-cols-2 gap-5 flex-1">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className="slide-card rounded-xl p-7 flex flex-col slide-card-hover transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-11 h-11 rounded-lg icon-container flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold font-display">{p.title}</h3>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xl font-bold stat-value">{p.stat}</div>
                  <div className="text-[10px] text-muted-foreground">{p.statLabel}</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-auto pt-4">
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
