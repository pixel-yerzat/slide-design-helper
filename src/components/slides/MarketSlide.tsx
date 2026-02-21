import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Building2, GraduationCap } from "lucide-react";

const container = { animate: { transition: { staggerChildren: 0.2 } } };
const item = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MarketSlide = () => {
  return (
    <SlideLayout>
      <motion.div initial="initial" animate="animate" variants={container} className="flex flex-col h-full">
        <motion.div variants={item} className="mb-12">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">05</span>
          <h2 className="text-5xl font-bold font-display mt-2 text-glow">Рынок</h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-8 flex-1 content-center">
          <motion.div variants={item} className="slide-card rounded-2xl p-10 slide-card-hover transition-all duration-300 flex flex-col items-start">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 box-glow">
              <Building2 className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-display mb-3">Enterprise компании</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Крупные и средние организации с большим количеством сотрудников, где требуется эффективное управление внутренней поддержкой и снижение операционных затрат.
            </p>
          </motion.div>
          <motion.div variants={item} className="slide-card rounded-2xl p-10 slide-card-hover transition-all duration-300 flex flex-col items-start">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 box-glow">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-display mb-3">Образовательные учреждения</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Университеты и колледжи с большим количеством студентов и сотрудников, где необходимо централизованное управление внутренними сервисами.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default MarketSlide;
