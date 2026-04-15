"use client";

import Image from 'next/image';

export default function GrimoireProfile({ isHalf }) {
  const containerClass = "w-full h-full bg-[#f4ebd8] text-[#1a2421] relative flex flex-col p-10 md:p-16 border-[4px] border-[#d8cab0]";

  if (isHalf === "left") {
    return (
      <div className={containerClass}>
        <div className="flex flex-col items-center justify-center h-full">
            <div className="relative w-40 h-52 border-[3px] border-[#4a6b5d] p-1.5 bg-[#e8dcc4] mb-6">
                <Image src="/profile.png" alt="Profile" fill className="object-cover sepia-[.4]" />
            </div>
            <h1 className="text-4xl font-serif font-bold">Hirusha</h1>
            <p className="text-[#8b3a30] font-mono text-[10px] tracking-[0.2em] mt-2 uppercase border-b border-[#c2b295] pb-2">Level 22 Architect</p>
        </div>
      </div>
    );
  }

  if (isHalf === "right") {
    return (
      <div className={containerClass}>
        <div className="mb-8">
            <span className="text-[#a68f63] font-mono text-[10px] tracking-widest uppercase">Chronicle I</span>
            <h3 className="text-2xl font-serif border-b-2 border-[#1a2421] pb-1 mt-1">Origins</h3>
        </div>
        <div className="space-y-6 text-sm font-serif">
            <div>
                <p className="text-[#8b3a30] text-[10px] font-bold uppercase tracking-tighter">Current Path</p>
                <p>Full-Stack & Mobile Developer</p>
            </div>
            <div>
                <p className="text-[#8b3a30] text-[10px] font-bold uppercase tracking-tighter">Affiliation</p>
                <p>ICIEOS, Sri Lanka</p>
            </div>
        </div>
        <div className="mt-auto pt-8 flex justify-between items-end opacity-40">
            <div className="text-[10px] font-serif italic font-bold">H. Jayarathne</div>
            <div className="text-[10px] font-mono">P. 01</div>
        </div>
      </div>
    );
  }

  return null;
}