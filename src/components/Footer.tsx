import React from 'react';
import Link from 'next/link';
import { BUSINESS_NAME, PHONE_NUMBERS, EMAIL, WHATSAPP_INTERNATIONAL } from '@/config/business';

export const Footer: React.FC = () => {
  const businessWhatsAppNumber = WHATSAPP_INTERNATIONAL;

  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="SAYEDCAB logo" className="w-9 h-9 object-contain" />
              <span className="text-xl font-bold text-white tracking-tight">
                {BUSINESS_NAME}
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Your dependable car rental & tour taxi partner across Rajasthan. Clean cars, polite chauffeurs, and instant WhatsApp booking.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${businessWhatsAppNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-semibold transition"
              >
                <span>💬</span> Connect on WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-amber-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/cars" className="hover:text-amber-400 transition">Our Vehicle Fleet</Link>
              </li>
              <li>
                <Link href="/#packages" className="hover:text-amber-400 transition">Rajasthan Tour Packages</Link>
              </li>
              <li>
                <Link href="/#why-us" className="hover:text-amber-400 transition">Why Choose Us</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-amber-400 transition">Contact & Enquiries</Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Top Destinations</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>Jaipur Sightseeing & Airport Cabs</li>
              <li>Udaipur Lakes & Mount Abu Tours</li>
              <li>Jodhpur & Jaisalmer Desert Safaris</li>
              <li>Pushkar, Ajmer & Bikaner Transfers</li>
              <li>Ranthambore Tiger Safari Transit</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div id="contact" className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact & Support</h4>
            <div className="space-y-2 text-xs text-gray-400">
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span>Rajasthan, India (Jaipur / Udaipur / Jodhpur Hubs)</span>
              </p>
              <p className="flex items-center gap-2">
                <span>💬</span>
                <span>WhatsApp: +{businessWhatsAppNumber}</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                {PHONE_NUMBERS.map((num) => (
                  <a key={num} href={`tel:${num}`} className="text-amber-300 hover:underline">{num}</a>
                ))}
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>
                <a href={`mailto:${EMAIL}`} className="text-amber-300 hover:underline">{EMAIL}</a>
              </p>
              <p className="flex items-center gap-2">
                <span>⏰</span>
                <span>24/7 Booking & Chauffeur Support</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms & Conditions</span>
            <span>•</span>
            <span className="hover:text-gray-400 cursor-pointer">Cancellation Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
