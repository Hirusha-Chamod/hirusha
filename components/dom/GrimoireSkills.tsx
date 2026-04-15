"use client";

const skillCategories = [
  {
    title: "Conjuration (Frontend)",
    tag: "I",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"]
  },
  {
    title: "Deep Runes (Backend)",
    tag: "II",
    skills: ["Node.js", "Express", "REST APIs", "Microservices", "Java"]
  },
  {
    title: "Memory Vaults (Storage)",
    tag: "III",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"]
  },
  {
    title: "Transmutation (Mobile)",
    tag: "IV",
    skills: ["React Native", "Kotlin", "Swift"]
  },
  {
    title: "Alchemy (DevOps)",
    tag: "V",
    skills: ["Docker", "Git", "Postman", "Linux", "AWS"]
  }
];

export default function GrimoireSkills({ isHalf }) {
  const containerClass = "w-full h-full bg-[#f4ebd8] text-[#1a2421] relative flex flex-col p-10 md:p-16 border-[4px] border-[#d8cab0] overflow-hidden";
  
  // Texture Overlay for consistency
  const Texture = () => (
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }} />
  );

  // LEFT PAGE: Primary Categories
  if (isHalf === "left") {
    return (
      <div className={containerClass}>
        <Texture />
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-8">
            <span className="text-[#a68f63] font-mono text-[10px] tracking-widest uppercase font-bold">Chronicle II</span>
            <h3 className="text-3xl font-serif text-[#1a2421] border-b-2 border-[#1a2421] pb-1 mt-1 italic">Arsenal of Spells</h3>
          </div>

          <div className="space-y-8">
            {skillCategories.slice(0, 2).map((cat) => (
              <div key={cat.tag} className="flex flex-col">
                <span className="text-[#8b3a30] text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8b3a30] rounded-full" />
                  {cat.title}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-2.5 py-1 border border-[#c2b295] rounded-full text-[11px] font-serif bg-[#e8dcc4]/20 text-[#1a2421]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // RIGHT PAGE: Secondary Categories & Diagram
  if (isHalf === "right") {
    return (
      <div className={containerClass}>
        <Texture />
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="space-y-8">
            {skillCategories.slice(2).map((cat) => (
              <div key={cat.tag} className="flex flex-col">
                <span className="text-[#8b3a30] text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8b3a30] rounded-full" />
                  {cat.title}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-2.5 py-1 border border-[#c2b295] rounded-full text-[11px] font-serif bg-[#e8dcc4]/20 text-[#1a2421]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Runic Diagram */}
          <div className="pt-6 border-t border-[#c2b295]/40 flex flex-col items-center">
            <div className="relative w-20 h-20 opacity-20">
              <div className="absolute inset-0 border-2 border-[#1a2421] rounded-full" />
              <div className="absolute inset-2 border border-[#1a2421] border-dashed rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-[1px] bg-[#1a2421] rotate-45" />
                <div className="w-full h-[1px] bg-[#1a2421] -rotate-45" />
              </div>
            </div>
            <p className="mt-3 text-[8px] font-mono tracking-[0.4em] uppercase text-[#a68f63] font-bold">
              MANA_FLOW // STABLE
            </p>
          </div>

          <div className="flex justify-between items-end opacity-40">
            <div className="text-[10px] font-serif italic font-bold">Field Records</div>
            <div className="text-[10px] font-mono font-bold tracking-tighter">P. 02</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}