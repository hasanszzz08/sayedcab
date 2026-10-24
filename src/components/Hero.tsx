import React from 'react';
import Link from 'next/link';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-amber-500/10 via-white to-amber-50/30 overflow-hidden">
      {/* Background Subtle Accent Pattern */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide">
            <span>✨</span> Premium Chauffeur Driven & Car Rental in Rajasthan
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            Explore Rajasthan with <span className="text-amber-600 underline decoration-amber-400 decoration-wavy decoration-2">Comfort & Royalty</span>
          </h1>

          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Reliable AC cabs, luxury SUVs, and tempo travellers for Jaipur, Udaipur, Jodhpur, and Jaisalmer tours. Instant booking & transparent quotes directly on WhatsApp.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-base shadow-xl shadow-amber-600/30 active:scale-95 transition flex items-center justify-center gap-2"
            >
              <span>Book Cab via WhatsApp</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <Link
              href="/cars"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 font-bold text-base shadow-sm transition text-center"
            >
              View Our Fleet
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto text-left">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-amber-100 shadow-xs">
              <span className="text-xl">🛡️</span>
              <div>
                <h5 className="font-bold text-xs text-gray-900">Verified Cabs</h5>
                <p className="text-[10px] text-gray-500">Clean & sanitized</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-amber-100 shadow-xs">
              <span className="text-xl">👨‍✈️</span>
              <div>
                <h5 className="font-bold text-xs text-gray-900">Expert Drivers</h5>
                <p className="text-[10px] text-gray-500">Local route masters</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-amber-100 shadow-xs">
              <span className="text-xl">💬</span>
              <div>
                <h5 className="font-bold text-xs text-gray-900">WhatsApp Fast</h5>
                <p className="text-[10px] text-gray-500">Direct booking</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-amber-100 shadow-xs">
              <span className="text-xl">📍</span>
              <div>
                <h5 className="font-bold text-xs text-gray-900">All Rajasthan</h5>
                <p className="text-[10px] text-gray-500">Pick up any city</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
