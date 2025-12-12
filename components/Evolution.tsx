import React, { useState, useRef } from 'react';

const Evolution: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }

    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div className="py-24 px-4 md:px-12 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
             <div className="mb-12">
                <h2 className="text-xs font-mono text-mudd-red mb-2 tracking-widest">ΕΤΑΙΡΙΚΗ ΑΝΑΔΙΑΡΘΡΩΣΗ</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-mudd-white">Η Εξέλιξη</h3>
                <p className="mt-4 text-zinc-400 max-w-xl">
                    Το 2024, η Muddlab Media συρρικνώθηκε κατά 30%. Τώρα είμαστε πιο γρήγοροι, πιο πεινασμένοι και χωράμε σε δείγματα ρούχων. Ίδιο χάος, λιγότερη μάζα.
                </p>
            </div>

            <div 
                ref={containerRef}
                className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden cursor-col-resize select-none border border-zinc-700 grayscale hover:grayscale-0 transition-all duration-700"
                onMouseMove={handleMouseMove}
                onTouchMove={handleMouseMove}
            >
                {/* Right Image (After/Fit) - Background */}
                <div className="absolute inset-0 w-full h-full">
                    <img 
                        src="images/fanisgoat.jpg" 
                        alt="Fit Fanis" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 right-6 bg-black text-white px-3 py-1 font-mono text-xs z-10">
                        2025: ΑΕΡΟΔΥΝΑΜΙΚΟ
                    </div>
                </div>

                {/* Left Image (Before/Heavy) - Clipped */}
                <div 
                    className="absolute inset-0 h-full overflow-hidden border-r-2 border-mudd-red bg-zinc-800"
                    style={{ width: `${sliderPosition}%` }}
                >
                    <img 
                        src="images/fanisbeach.jpg" 
                        alt="Classic Fanis" 
                        className="absolute top-0 left-0 w-[100vw] max-w-none h-full object-cover"
                        style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
                    />
                     <div className="absolute top-6 left-6 bg-white text-black px-3 py-1 font-mono text-xs z-10">
                        2018: ΒΑΡΥ ΚΛΑΣΙΚΟ
                    </div>
                </div>

                {/* Slider Handle */}
                <div 
                    className="absolute inset-y-0 w-1 bg-transparent cursor-col-resize z-20 flex items-center justify-center -ml-[20px]"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className="w-8 h-8 bg-mudd-red rounded-full flex items-center justify-center shadow-xl border-2 border-white">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180"><path d="m9 18 6-6-6-6"/></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Evolution;