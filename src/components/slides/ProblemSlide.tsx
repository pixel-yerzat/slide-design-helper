import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { AlertTriangle, Clock, DollarSign, Ban } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Увеличение времени обработки",
    desc: "Сотрудникам сложно определить правильную категорию обращения, заявки попадают не тем специалистам и требуют переназначения.",
  },
  {
    icon: AlertTriangle,
    title: "Фрагментация процессов",
    desc: "Существующие решения охватывают только отдельные функции, вынуждая сотрудников использовать разные системы и каналы.",
  },
  {
    icon: DollarSign,
    title: "Рост операционных расходов",
    desc: "Ключевые специалисты тратят значительное время на обработку типовых обращений, увеличивая нагрузку и затраты.",
  },
  {
    icon: Ban,
    title: "Снижение доступности поддержки",
    desc: "Создание заявки требует входа в отдельный портал, при отсутствии доступа — неэффективные каналы.",
  },
];

const container = {
  animate: { transition: { staggerChildren: 0.15 } },
};

const item = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const ProblemSlide = () => {
  return (
    <SlideLayout>
      <motion.div initial="initial" animate="animate" variants={container} className="flex flex-col h-full">
        <motion.div variants={item} className="mb-12">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">01</span>
          <h2 className="text-5xl font-bold font-display mt-2 text-glow">Проблема</h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className="slide-card rounded-xl p-8 flex gap-5 slide-card-hover transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-display mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default ProblemSlide;
