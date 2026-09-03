import { motion } from 'framer-motion';
import { technicalSkills } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';
import CountUp from './CountUp';

const SkillProgress = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className="text-white text-sm font-semibold tracking-wide">{name}</span>
      <span className="text-[#38bdf8] text-xs font-black font-mono drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">
        <CountUp to={level} suffix="%" duration={1.2} />
      </span>
    </div>
    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
      <motion.div 
        className="h-full bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#00f0ff] rounded-full shadow-[0_0_15px_rgba(56,189,248,0.9)]"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
        viewport={{ once: true, margin: "-20px" }}
      />
    </div>
  </div>
);

const SkillCard = ({ category, index }) => (
  <motion.div 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
    className="h-full"
  >
    <SpotlightCard className="h-full bg-white/5 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 hover:border-[#38bdf8]/60 hover:shadow-[0_0_35px_rgba(56,189,248,0.25)] transition-all duration-500">
      <h3 className="text-white text-lg font-black tracking-tight mb-6 pb-2 border-b border-white/10 uppercase">
        {category.title}
      </h3>
      <div>
        {category.skills.map((skill) => (
          <SkillProgress key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </SpotlightCard>
  </motion.div>
);

const TechnicalSkills = () => {
  return (
    <section id="skills" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Cloud network matrix grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      {/* Background visual elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#0ea5e9]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#38bdf8]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Technical Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Cloud Architecture Skillset
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-medium">
            Architecting multi-cloud environments, container orchestration, automated CI/CD pipelines, and high-availability systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
