import React from 'react';

interface ImagePlaceholderProps {
  vehicleName: string;
  category?: string;
  className?: string;
  heightClass?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  vehicleName,
  category,
  className = '',
  heightClass = 'h-52'
}) => {
  return (
    <div
      className={`relative w-full ${heightClass} bg-gradient-to-br from-slate-100 via-amber-50/50 to-slate-200 border-2 border-dashed border-amber-300/80 rounded-xl flex flex-col items-center justify-center p-4 text-center select-none overflow-hidden group ${className}`}
    >
      <div className="w-16 h-16 rounded-full bg-white/90 shadow-sm border border-amber-200 flex items-center justify-center text-amber-600 mb-2 transform group-hover:scale-105 transition">
        {/* Car Silhouette Icon */}
        <svg
          className="w-9 h-9"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M5 13l4-8h6l4 8M5 13h14M5 13l-1.5 5.5A1 1 0 004.5 20h1a1 1 0 001-.8l.6-2.2h10.8l.6 2.2a1 1 0 001 .8h1a1 1 0 001-1.5L19 13M8 13v-3h8v3"
          />
          <circle cx="7.5" cy="16.5" r="1.5" fill="currentColor" />
          <circle cx="16.5" cy="16.5" r="1.5" fill="currentColor" />
        </svg>
      </div>

      <div className="space-y-1">
        <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase bg-amber-100 text-amber-800 rounded-full">
          Actual Photo Pending
        </span>
        <h4 className="text-sm font-bold text-gray-800 line-clamp-1">{vehicleName}</h4>
        <p className="text-xs text-gray-500 max-w-xs mx-auto">
          Add your vehicle photograph to <code className="bg-white/80 px-1 py-0.5 rounded text-amber-900 font-mono text-[10px]">public/car-images/</code>
        </p>
      </div>
    </div>
  );
};
