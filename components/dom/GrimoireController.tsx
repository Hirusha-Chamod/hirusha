"use client";

import { useState } from 'react';
import GrimoireProfile from './GrimoireProfile';
import GrimoireSkills from './GrimoireSkills';

const pages = [
  { id: 'profile', component: GrimoireProfile },
  { id: 'skills', component: GrimoireSkills },
];

export default function GrimoireController() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState("next");

  const turnPage = (dir) => {
    if (isFlipping) return;
    const nextStep = currentPage + dir;
    if (nextStep >= 0 && nextStep < pages.length) {
      setFlipDir(dir === 1 ? "next" : "prev");
      setIsFlipping(true);
      setTimeout(() => setCurrentPage(nextStep), 500);
      setTimeout(() => setIsFlipping(false), 1000);
    }
  };

  const Current = pages[currentPage].component;
  const Next = pages[Math.min(currentPage + 1, pages.length - 1)].component;
  const Prev = pages[Math.max(currentPage - 1, 0)].component;

  return (
    <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center p-4">
      <div className="perspective-container relative w-full aspect-[1.4/1] md:aspect-[1.8/1]">
        
        {/* ── THE EXTERNAL HARDCOVER ── */}
        <div className="book-cover-base absolute inset-0 -m-3 md:-m-5 z-0" />

        {/* ── THE BOOK BODY (STATIC SIDES) ── */}
        <div className="absolute inset-0 flex z-10">
          
          {/* LEFT PAGE (with stack effect) */}
          <div className="page-stack-left w-1/2 h-full bg-[#f4ebd8] border-r border-[#c2b295]/40 overflow-hidden relative">
            {isFlipping && flipDir === "prev" ? <Prev isHalf="left" /> : <Current isHalf="left" />}
            {/* Spine Shadow */}
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/25 via-black/5 to-transparent pointer-events-none z-20" />
          </div>
          
          {/* RIGHT PAGE (with stack effect) */}
          <div className="page-stack-right w-1/2 h-full bg-[#f4ebd8] overflow-hidden relative">
            {isFlipping && flipDir === "next" ? <Next isHalf="right" /> : <Current isHalf="right" />}
            {/* Spine Shadow */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/25 via-black/5 to-transparent pointer-events-none z-20" />
          </div>
        </div>

        {/* ── THE MOVING LEAF ── */}
        <div 
          className="book-leaf"
          style={{ 
            left: flipDir === "next" ? "50%" : "0",
            width: "50%",
            height: "100%",
            transformOrigin: flipDir === "next" ? "left" : "right",
            transform: isFlipping 
              ? (flipDir === "next" ? "rotateY(-180deg)" : "rotateY(180deg)") 
              : "rotateY(0deg)",
            zIndex: isFlipping ? 60 : -1, 
            transition: isFlipping ? "transform 1s cubic-bezier(0.645, 0.045, 0.355, 1)" : "none",
            pointerEvents: "none"
          }}
        >
          {/* FRONT OF LEAF */}
          <div className="leaf-front bg-[#f4ebd8] overflow-hidden shadow-2xl">
            {flipDir === "next" ? <Current isHalf="right" /> : <Current isHalf="left" />}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5" />
          </div>

          {/* BACK OF LEAF */}
          <div className="leaf-back bg-[#f4ebd8] overflow-hidden shadow-2xl">
            {flipDir === "next" ? <Next isHalf="left" /> : <Prev isHalf="right" />}
            <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-black/5" />
          </div>
        </div>

        {/* ── NAVIGATION BOOKMARKS ── */}
        <div className="absolute inset-0 z-[100] pointer-events-none">
          {currentPage < pages.length - 1 && !isFlipping && (
            <button onClick={() => turnPage(1)} className="absolute right-6 top-0 pointer-events-auto group">
              <div className="bg-[#8b3a30] w-10 h-24 shadow-lg transition-all group-hover:h-28 flex items-end justify-center pb-4 cursor-pointer">
                <span className="text-[#f4ebd8] text-[10px] font-mono [writing-mode:vertical-rl] tracking-widest font-bold">NEXT</span>
              </div>
            </button>
          )}
          {currentPage > 0 && !isFlipping && (
            <button onClick={() => turnPage(-1)} className="absolute left-6 top-0 pointer-events-auto group">
              <div className="bg-[#4a6b5d] w-10 h-24 shadow-lg transition-all group-hover:h-28 flex items-end justify-center pb-4 cursor-pointer">
                <span className="text-[#f4ebd8] text-[10px] font-mono [writing-mode:vertical-rl] tracking-widest font-bold">PREV</span>
              </div>
            </button>
          )}
        </div>
      </div>
      
      {/* Footer Info */}
      <div className="mt-12 flex flex-col items-center gap-2">
        <div className="flex gap-3">
          {pages.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-all duration-500 ${i === currentPage ? 'bg-[#f0d090] scale-125' : 'bg-white/10'}`} />
          ))}
        </div>
        <p className="text-[#a68f63]/50 font-serif text-[10px] tracking-[0.4em] uppercase mt-2">
          Master_Grimoire // Entry_{currentPage + 1}
        </p>
      </div>
    </div>
  );
}