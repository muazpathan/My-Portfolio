import stackImage from '../assets/about/muaz-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const AwsCloudIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      {/* Cloud Outline & Glow */}
      <path fill="#232F3E" d="M100 88H32a26 26 0 01-5-51.5 36 36 0 0170-6.5A28 28 0 01100 88z" />
      {/* AWS Swoop Arrow */}
      <path fill="#FF9900" d="M38 98c16 8 36 8 52 0 2-1 3-3 1-4s-3 0-5 1c-14 7-30 7-44 0-2-1-4 1-5 2s0 2 1 1z" />
      <polygon fill="#FF9900" points="92,94 88,103 97,100" />
      <text x="64" y="66" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">AWS</text>
    </svg>
    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">AWS & Cloud</span>
  </div>
);

const DockerDevOpsIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      {/* Hexagon Base */}
      <polygon points="64,12 114,40 114,96 64,124 14,96 14,40" fill="#0db7ed" />
      {/* Docker Container Blocks */}
      <rect x="42" y="52" width="12" height="10" rx="1" fill="#FFFFFF" />
      <rect x="58" y="52" width="12" height="10" rx="1" fill="#FFFFFF" />
      <rect x="74" y="52" width="12" height="10" rx="1" fill="#FFFFFF" />
      <rect x="50" y="40" width="12" height="10" rx="1" fill="#FFFFFF" />
      <rect x="66" y="40" width="12" height="10" rx="1" fill="#FFFFFF" />
      <text x="64" y="86" fill="#023047" fontSize="11" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">DOCKER</text>
    </svg>
    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Containers</span>
  </div>
);

const EnterpriseArchIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      {/* Database & Architecture Nodes */}
      <ellipse cx="64" cy="28" rx="36" ry="12" fill="#00758F" />
      <path d="M28 28v20c0 6.6 16.1 12 36 12s36-5.4 36-12V28" fill="#00758F" opacity="0.8" />
      <path d="M28 48v20c0 6.6 16.1 12 36 12s36-5.4 36-12V48" fill="#00758F" opacity="0.6" />
      <ellipse cx="64" cy="28" rx="36" ry="12" fill="#00A8CC" />
      {/* Network connection line and node */}
      <line x1="64" y1="68" x2="64" y2="92" stroke="#FFFFFF" strokeWidth="4" />
      <circle cx="64" cy="98" r="14" fill="#F29111" />
      <circle cx="64" cy="98" r="6" fill="#FFFFFF" />
      <text x="64" y="122" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">SYSTEMS</text>
    </svg>
    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Cloud Data</span>
  </div>
);

const DevOpsPipelineIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      {/* Infinity / Pipeline loop */}
      <path d="M42 44c-11 0-20 9-20 20s9 20 20 20c8 0 15-5 18-12l8-16c3-7 10-12 18-12 11 0 20 9 20 20s-9 20-20 20c-8 0-15-5-18-12l-8-16c-3-7-10-12-18-12z" fill="none" stroke="#38bdf8" strokeWidth="10" strokeLinecap="round" />
      <circle cx="42" cy="64" r="5" fill="#FFFFFF" />
      <circle cx="86" cy="64" r="5" fill="#00f0ff" />
      <text x="64" y="116" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">DEVOPS</text>
    </svg>
    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">CI/CD & IaC</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-[#0369a1] via-[#0284c7] to-[#0ea5e9] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Subtle cloud architecture server grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#bae6fd_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      {/* Ambient glowing light blue orbs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#38bdf8]/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#67e8f9]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full origin-top animate-[sway_6s_ease-in-out_infinite]">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card with Glowing Light Blue Border */}
            <div className="bg-gray-950 w-full max-w-[280px] rounded-2xl p-3 border-2 border-sky-400/50 shadow-[0_0_40px_rgba(56,189,248,0.4)] relative z-20 hover:scale-105 hover:shadow-[0_0_55px_rgba(56,189,248,0.7)] transition-all duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-950 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-900 border border-sky-400/30">
                <img 
                  src={stackImage} 
                  alt="Mohammed Muaz Nazir Pathan" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-md mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-10 leading-relaxed max-w-3xl text-sky-50 drop-shadow-sm"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* 4 Pillars of Cloud Computing Architecture */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            <div data-aos="zoom-in" data-aos-delay="200" className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-sky-300/30 hover:border-sky-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer">
              <AwsCloudIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="350" className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-sky-300/30 hover:border-sky-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer">
              <DockerDevOpsIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="500" className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-sky-300/30 hover:border-sky-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer">
              <EnterpriseArchIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="650" className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-sky-300/30 hover:border-sky-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer">
              <DevOpsPipelineIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
