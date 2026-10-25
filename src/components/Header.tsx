import Link from 'next/link';
import { BUSINESS_NAME, PHONE_NUMBERS, PRIMARY_PHONE } from '@/config/business';
import { useState } from 'react';

interface HeaderProps {
  onBookNowClick?: () => void;
}

export const Header = ({ onBookNowClick }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm">
      {/* Top Contact Bar */}
      <div className="bg-amber-950 text-amber-100 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-amber-800/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-amber-200">24/7 Car Rental & Tour Service in Rajasthan</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] sm:text-xs">
            <span className="text-amber-300/80 hidden sm:inline">Call for Booking:</span>
            {PHONE_NUMBERS.map((num, idx) => (
              <a
                key={num}
                href={`tel:${num}`}
                className={`hover:text-white transition inline-flex items-center gap-1 ${
                  num === PRIMARY_PHONE ? 'font-bold text-amber-400' : 'text-amber-200'
                }`}
              >
                <span>📞</span>
                <span>{num}</span>
                {idx < PHONE_NUMBERS.length - 1 && (
                  <span className="text-amber-800 ml-2 hidden sm:inline">|</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-amber-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="SAYEDCAB logo" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 leading-tight">
                {BUSINESS_NAME}
              </span>
              <span className="text-xs text-amber-700 font-medium tracking-wide">
                Royal Travel & Tour Packages
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 font-medium text-sm transition">
              Home
            </Link>
            <Link href="/cars" className="text-gray-700 hover:text-amber-600 font-medium text-sm transition">
              Our Fleet
            </Link>
            <Link href="/#packages" className="text-gray-700 hover:text-amber-600 font-medium text-sm transition">
              Tour Packages
            </Link>
            <Link href="/#why-us" className="text-gray-700 hover:text-amber-600 font-medium text-sm transition">
              Why Choose Us
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-amber-600 font-medium text-sm transition">
              Contact
            </Link>
            {onBookNowClick && (
              <button
                onClick={onBookNowClick}
                className="px-5 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-md shadow-amber-600/20 transition transform active:scale-95"
              >
                Book on WhatsApp
              </button>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            {onBookNowClick && (
              <button
                onClick={onBookNowClick}
                className="px-3.5 py-1.5 rounded-full bg-amber-600 text-white font-semibold text-xs shadow-sm"
              >
                Book Now
              </button>
            )}
            <button
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl px-4 pt-3 pb-6 space-y-2">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-amber-50 hover:text-amber-700"
          >
            Home
          </Link>
          <Link
            href="/cars"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-amber-50 hover:text-amber-700"
          >
            Our Fleet
          </Link>
          <Link
            href="/#packages"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-amber-50 hover:text-amber-700"
          >
            Tour Packages
          </Link>
          <Link
            href="/#why-us"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-amber-50 hover:text-amber-700"
          >
            Why Choose Us
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-amber-50 hover:text-amber-700"
          >
            Contact
          </Link>
          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-500 font-semibold px-3 mb-1">Direct Calling Numbers:</p>
            {PHONE_NUMBERS.map((num) => (
              <a
                key={num}
                href={`tel:${num}`}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-amber-700 hover:bg-amber-50 rounded-lg"
              >
                <span>📞</span>
                <span>{num}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
