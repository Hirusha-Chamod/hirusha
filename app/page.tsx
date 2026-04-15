"use client";

import { useState, useEffect } from 'react';
import BookIntro from '../components/dom/BookIntro';
import GrimoireController from '../components/dom/GrimoireController';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-[#0a0f0d] min-h-screen" />;

  return (
    <main className="relative w-full h-screen bg-[#0a0f0d] flex items-center justify-center overflow-hidden">
      {/* ── AMBIENT BACKGROUND ── */}
      <div 
        className="fixed inset-0 z-0 opacity-40" 
        style={{
          background: `radial-gradient(circle at 50% 50%, #1e3a2d 0%, #0a0f0d 100%)`
        }} 
      />

      {!introFinished && (
        <BookIntro onComplete={() => setIntroFinished(true)} />
      )}

      <div className={`relative z-10 w-full transition-opacity duration-1000 ${introFinished ? "opacity-100" : "opacity-0"}`}>
        <GrimoireController />
      </div>
    </main>
  );
}