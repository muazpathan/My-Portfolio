import { internshipsList } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

const InternshipCard = ({ intern, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="h-full"
  >
    <SpotlightCard className="h-full bg-sky-950/40 backdrop-blur-xl border border-sky-300/30 rounded-3xl p-8 hover:scale-[1.02] hover:border-sky-300 hover:shadow-[0_0_35px_rgba(56,189,248,0.4)] transition-all duration-500 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className="text-sky-200/60 text-xs font-mono font-bold tracking-widest uppercase">
            {intern.duration}
          </span>
          <span className="bg-sky-400/20 text-white text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-sky-300/30 shadow-[0_0_12px_rgba(56,189,248,0.3)]">
            {intern.badge || "Experience"}
          </span>
        </div>
        <h3 className="text-white text-2xl font-black mb-1 tracking-tight">
          {intern.role}
        </h3>
        <p className="text-[#38bdf8] text-sm font-black tracking-wide mb-6 uppercase drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
          {intern.organization}
        </p>

        {/* Skills gained */}
        <div className="mb-6">
          <h4 className="text-sky-100/70 text-xs font-bold uppercase tracking-wider mb-2">Skills Gained:</h4>
          <ul className="text-white/90 text-sm font-medium space-y-1 pl-4 list-disc">
            {intern.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technologies used */}
      <div className="pt-4 border-t border-sky-400/20">
        <h4 className="text-sky-100/70 text-xs font-bold uppercase tracking-wider mb-3">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {intern.tech.map((t) => (
            <span 
              key={t}
              className="px-3 py-1 text-xs font-mono font-bold text-white bg-sky-900/40 rounded-full border border-sky-400/30 hover:bg-sky-500/30 hover:border-sky-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </SpotlightCard>
  </div>
);

const Internships = () => {
  return (
    <section className="bg-gradient-to-br from-[#0369a1] via-[#0284c7] to-[#0ea5e9] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Glowing ambient light blue orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#38bdf8]/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#67e8f9]/20 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Subtle cloud server grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#bae6fd_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-md mb-4 tracking-tight uppercase">
            Work Experience
          </h2>
          <p className="text-sky-100 text-base md:text-lg font-semibold max-w-xl mx-auto drop-shadow-sm">
            Professional leadership and managerial experience in high-volume retail operations, process optimization, and academic software development.
          </p>
        </div>

        {/* Internship Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard key={intern.organization} intern={intern} index={index} />
          ))}
        </div>

      </div>

      {/* Decorative stars */}
      <div className="absolute bottom-10 left-10 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Internships;
