"use client"; // Required because we are using hooks and canvas

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useStore } from '../store/useStore';

// We will build these components next!
// import SceneLayout from '../components/canvas/SceneLayout';
// import Hero from '../components/dom/Hero';
// import Navigation from '../components/dom/Navigation';

export default function Home() {
  const lowPowerMode = useStore((state:any) => state.lowPowerMode);

  return (
    <main className="relative w-full h-screen bg-neutral-950 text-white overflow-x-hidden">
      
      {/* 3D CANVAS LAYER - Fixed to the background */}
      {!lowPowerMode && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Canvas
            dpr={[1, 2]} // Performance optimization: Cap pixel ratio
            camera={{ position: [0, 0, 5], fov: 50 }}
          >
            <Suspense fallback={null}>
              {/* <SceneLayout /> will go here later */}
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              {/* Temporary placeholder cube until Mystic arrives */}
              <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="hotpink" />
              </mesh>
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* HTML DOM LAYER - Scrolls over the canvas */}
      <div className="relative z-10 w-full">
        {/* <Navigation /> */}
        
        <div className="flex flex-col items-center w-full">
          {/* <Hero /> */}
          <section className="h-screen flex items-center justify-center">
            <h1 className="text-5xl font-bold">HirushaOS Initializing...</h1>
          </section>
          
          <section className="h-screen flex items-center justify-center">
            <h2 className="text-4xl">About Section</h2>
          </section>
        </div>
      </div>
    </main>
  );
}