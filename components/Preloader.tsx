import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("Φόρτωση Χάους...");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 5) + 1;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress > 30 && progress < 60) setText("Διόγκωση Εγώ...");
    if (progress > 60 && progress < 90) setText("Αποφυγή Φόρων...");
    if (progress >= 90 && progress < 100) setText("Καλωσήρθατε στην Κόλαση.");
    
    if (progress === 100) {
      setTimeout(() => {
        onComplete();
      }, 800);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-mudd-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-between mb-2 font-mono text-xs text-mudd-red uppercase tracking-widest">
          <span>ΚΑΤΑΣΤΑΣΗ ΣΥΣΤΗΜΑΤΟΣ</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full h-2 bg-zinc-900 border border-zinc-800">
          <div 
            className="h-full bg-mudd-white transition-all duration-75 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <h1 className="mt-8 text-4xl font-serif italic text-center text-mudd-white animate-pulse">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Preloader;