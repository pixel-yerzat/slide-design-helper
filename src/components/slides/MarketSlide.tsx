import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Building2, GraduationCap, Users, TrendingUp } from "lucide-react";

const container = { animate: { transition: { staggerChildren: 0.15 } } };
const item = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MarketSlide = () => {
  return (
    <SlideLayout>
      <motion.div initial="initial" animate="animate" variants={container} className="flex flex-col h-full">
        <motion.div variants={item} className="mb-10 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-3 py-1 rounded-full mb-3">
              <span className="text-primary text-xs font-mono font-medium tracking-widest">05 / MARKET</span>
            </div>
            <h2 className="text-5xl font-bold font-display text-glow">Рынок</h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-transparent mb-3" />
        </motion.div>

        <div className="grid grid-cols-2 gap-6 flex-1 content-center">
          <motion.div variants={item} className="slide-card rounded-2xl p-8 slide-card-hover transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-xl icon-container flex items-center justify-center box-glow">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display">Enterprise</h3>
                <span className="text-xs text-muted-foreground">500+ сотрудников</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Крупные и средние организации, где требуется эффективное управление внутренней поддержкой и снижение операционных затрат.
            </p>
            <div className="mt-auto flex gap-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Users className="w-3.5 h-3.5 text-primary/60" />
                Масштабируемость
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <TrendingUp className="w-3.5 h-3.5 text-primary/60" />
                ROI 3-6 мес.
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="slide-card rounded-2xl p-8 slide-card-hover transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-xl icon-container-accent flex items-center justify-center box-glow-accent">
                <GraduationCap className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display">Образование</h3>
                <span className="text-xs text-muted-foreground">Университеты & колледжи</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Учебные заведения с большим количеством студентов и сотрудников, где необходимо централизованное управление внутренними сервисами.
            </p>
            <div className="mt-auto flex gap-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Users className="w-3.5 h-3.5 text-accent/60" />
                10K+ пользователей
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <TrendingUp className="w-3.5 h-3.5 text-accent/60" />
                Снижение нагрузки
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default MarketSlide;
