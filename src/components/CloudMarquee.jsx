const marqueeItems = [
  "AWS Cloud Solutions",
  "Kubernetes Orchestration",
  "Docker Containers",
  "Terraform IaC",
  "Azure Architecture",
  "CI/CD Pipelines",
  "Relational MySQL",
  "Multi-Region Failover",
  "Zero-Trust Security",
  "Enterprise Scalability",
  "System Telemetry",
  "High Availability (99.99%)",
];

const CloudMarquee = ({ reverse = false, className = "" }) => {
  const displayItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className={`relative w-full overflow-hidden py-4 bg-black/60 border-y border-sky-400/20 backdrop-blur-md ${className}`}>
      {/* Edge gradient masks for seamless fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div 
        className={`flex w-max items-center gap-8 ${
          reverse ? 'animate-[marqueeReverse_35s_linear_infinite]' : 'animate-[marquee_35s_linear_infinite]'
        } hover:[animation-play-state:paused]`}
      >
        {displayItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] uppercase text-white/75 hover:text-[#38bdf8] transition-colors cursor-default drop-shadow-sm">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudMarquee;
