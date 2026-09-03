import { contentCreation, socialLinks } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

const CreatorCard = ({ category, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="h-full"
  >
    <SpotlightCard className="h-full bg-white/5 backdrop-blur-xl border border-sky-400/20 rounded-3xl p-8 hover:scale-[1.02] hover:border-[#38bdf8]/60 hover:shadow-[0_0_35px_rgba(56,189,248,0.25)] transition-all duration-500 group flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className="text-4xl p-3 bg-white/5 rounded-2xl group-hover:bg-[#38bdf8]/20 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] group-hover:scale-110 transition-all duration-300">
            {category.icon}
          </span>
          <span className="text-sky-300/60 text-xs font-mono font-bold tracking-widest uppercase py-1 px-2.5 border border-sky-400/20 rounded-full">
            {category.stats}
          </span>
        </div>
        <h3 className="text-white text-xl md:text-2xl font-black mb-3 tracking-tight group-hover:text-[#38bdf8] transition-colors">
          {category.title}
        </h3>
        <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 font-medium">
          {category.description}
        </p>
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono tracking-wider font-bold text-white/40 group-hover:text-white transition-colors">
        <span>Operational Focus</span>
        <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </SpotlightCard>
  </div>
);

const ContentCreator = () => {
  return (
    <section id="operations" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            {contentCreation.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            {contentCreation.heading}
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            {contentCreation.description}
          </p>
        </div>

        {/* Content Creation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {contentCreation.categories.map((category, index) => (
            <div 
              key={category.title}
              className="block cursor-default"
            >
              <CreatorCard category={category} index={index} />
            </div>
          ))}
        </div>

        {/* Professional Network CTA */}
        <div data-aos="fade-up" data-aos-delay="400" className="mt-16 flex justify-center">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(56,189,248,0.8)] transition-all duration-500 hover:scale-105 group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Connect on Professional Network
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContentCreator;
