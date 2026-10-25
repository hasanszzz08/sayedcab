import React from 'react';
import Link from 'next/link';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-slate-900 text-white">
      {/* Background Hero Image with Responsive Cover & Subtle Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('/car-images/hero-fleet.png')` }}
        role="img"
        aria-label="Sayed Cab tour fleet in Rajasthan"
      />
      {/* Multi-layered dark gradient overlay for optimal readability & contrast */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/70" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />

      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm shadow-sm">
            <span>✨</span> Premium Chauffeur Driven & Car Rental in Rajasthan
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
            Explore Rajasthan with <span className="text-amber-400 underline decoration-amber-400 decoration-wavy decoration-2">Comfort & Royalty</span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Reliable AC cabs, luxury SUVs, and tempo travellers for Jaipur, Udaipur, Jodhpur, and Jaisalmer tours. Instant booking & transparent quotes directly on WhatsApp.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/30 active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Cab via WhatsApp</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <Link
              href="/cars"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-base shadow-sm transition text-center backdrop-blur-sm"
            >
              View Our Fleet
            </Link>
          </div>

          {/* Trust Badges with Glassmorphism */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-700/60 shadow-lg backdrop-blur-md">
              <span className="text-2xl">🛡️</span>
              <div>
                <h5 className="font-bold text-xs text-white">Verified Cabs</h5>
                <p className="text-[10px] text-slate-300">Clean & sanitized</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-700/60 shadow-lg backdrop-blur-md">
              <span className="text-2xl">👨‍✈️</span>
              <div>
                <h5 className="font-bold text-xs text-white">Expert Drivers</h5>
                <p className="text-[10px] text-slate-300">Local route masters</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-700/60 shadow-lg backdrop-blur-md">
              <span className="text-2xl">💬</span>
              <div>
                <h5 className="font-bold text-xs text-white">WhatsApp Fast</h5>
                <p className="text-[10px] text-slate-300">Direct booking</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-700/60 shadow-lg backdrop-blur-md">
              <span className="text-2xl">📍</span>
              <div>
                <h5 className="font-bold text-xs text-white">All Rajasthan</h5>
                <p className="text-[10px] text-slate-300">Pick up any city</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

