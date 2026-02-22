import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Building2, GraduationCap, Users, TrendingUp, Globe } from "lucide-react";
import marketBg from "@/assets/market-bg.jpg";

const container = { animate: { transition: { staggerChildren: 0.15 } } };
const item = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MarketSlide = () => {
  return (
    <SlideLayout>
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${marketBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />

      <motion.div initial="initial" animate="animate" variants={container} className="relative z-10 flex flex-col h-full">
        <motion.div variants={item} className="mb-5 flex items-end gap-6">
          <div>
            <div className="number-badge inline-flex items-center px-2.5 py-0.5 rounded-full mb-2">
              <span className="text-primary text-[11px] font-mono font-medium tracking-widest">05 / MARKET</span>
            </div>
            <h2 className="text-4xl font-bold font-display text-glow">Рынок</h2>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-transparent mb-2" />
        </motion.div>

        <motion.div variants={item} className="mb-4 flex items-center gap-3">
          <Globe className="w-4 h-4 text-primary/60" />
          <span className="text-xs text-muted-foreground">Целевой рынок Казахстана и Центральной Азии</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/10 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-2 gap-4 flex-1 content-center">
          <motion.div variants={item} className="slide-card rounded-xl p-5 slide-card-hover transition-all duration-300 flex flex-col group relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
              background: 'radial-gradient(circle, hsl(185 80% 50% / 0.1), transparent 70%)',
            }} />
            <div className="relative flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl icon-container flex items-center justify-center box-glow">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-bold font-display">Enterprise</h3>
                <span className="text-[11px] text-muted-foreground">500+ сотрудников</span>
              </div>
            </div>
            <p className="relative text-xs text-muted-foreground leading-relaxed mb-3">
              Крупные и средние организации с потребностью в эффективном управлении внутренней поддержкой.
            </p>
            <div className="relative mt-auto flex gap-2">
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground bg-primary/[0.05] px-2.5 py-1 rounded-full">
                <Users className="w-3 h-3 text-primary/60" />
                Масштабируемость
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground bg-primary/[0.05] px-2.5 py-1 rounded-full">
                <TrendingUp className="w-3 h-3 text-primary/60" />
                ROI 3-6 мес.
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="slide-card-accent rounded-xl p-5 slide-card-hover transition-all duration-300 flex flex-col group relative overflow-hidden">
            <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
              background: 'radial-gradient(circle, hsl(260 60% 55% / 0.1), transparent 70%)',
            }} />
            <div className="relative flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl icon-container-accent flex items-center justify-center box-glow-accent">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-base font-bold font-display">Образование</h3>
                <span className="text-[11px] text-muted-foreground">Университеты & колледжи</span>
              </div>
            </div>
            <p className="relative text-xs text-muted-foreground leading-relaxed mb-3">
              Учебные заведения с большим количеством студентов и сотрудников.
            </p>
            <div className="relative mt-auto flex gap-2">
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground bg-accent/[0.05] px-2.5 py-1 rounded-full">
                <Users className="w-3 h-3 text-accent/60" />
                10K+ пользователей
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground bg-accent/[0.05] px-2.5 py-1 rounded-full">
                <TrendingUp className="w-3 h-3 text-accent/60" />
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
