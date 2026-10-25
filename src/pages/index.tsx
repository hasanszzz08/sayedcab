import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CarCard } from '@/components/CarCard';
import { Footer } from '@/components/Footer';
import { BookingForm } from '@/components/BookingForm';
import { VEHICLES, Vehicle, RAJASTHAN_PACKAGES, TourPackage } from '@/data/vehicles';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const handleBookVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedVehicle(VEHICLES[0] || null);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-gray-900">
      <Head>
        <title>SAYEDCAB – Reliable Car Rental & Tour Packages in Rajasthan</title>
        <meta
          name="description"
          content="SAYEDCAB provides premium car rentals, SUVs, and tempo travellers across Rajasthan. Book instantly via WhatsApp with transparent pricing and experienced chauffeurs." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* Structured Data: Organization */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SAYEDCAB",
          "url": "http://localhost:3000",
          "logo": "/logo.png",
          "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+91-9079780740",
            "email": "sayedcab@gmail.com",
            "areaServed": "Rajasthan, India",
            "contactType": "customer service"
          }]
        })}} />
      </Head>

      {/* Header */}
      <Header onBookNowClick={handleOpenGeneralBooking} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero */}
        <Hero onOpenBooking={handleOpenGeneralBooking} />

        {/* Featured Vehicle Fleet / Dedicated Car Gallery */}
        <section id="fleet" className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                Well-Maintained Fleet
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-2">
                Sayed Cab Royal Car & Bus Fleet
              </h2>
              <p className="text-sm text-gray-500 mt-1 max-w-xl">
                Every vehicle comes thoroughly sanitized, fully air-conditioned, and driven by licensed, courteous local drivers.
              </p>
            </div>

            <Link
              href="/cars"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-600 hover:text-amber-700 hover:underline"
            >
              <span>View All Fleet ({VEHICLES.length})</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {VEHICLES.map((vehicle) => (
              <CarCard
                key={vehicle.id}
                vehicle={vehicle}
                onBookNow={handleBookVehicle}
              />
            ))}
          </div>

          {/* Group Tour & Airport Dropping Experience Highlight Gallery banner */}
          <div className="mt-12 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Gallery Images Comparison / Showcase */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-2 p-3 bg-slate-900/5">
              <div className="relative h-60 sm:h-full min-h-[220px] rounded-2xl overflow-hidden shadow-sm group">
                <img
                  src="/car-images/tourist-group-night.jpg"
                  alt="Complete Rajasthan tour & airport dropping tourist group with Sayed Cab coach"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold rounded-xl text-center">
                  ✈️ Complete Rajasthan Tour & Airport Dropping
                </span>
              </div>
              <div className="relative h-60 sm:h-full min-h-[220px] rounded-2xl overflow-hidden shadow-sm group">
                <img
                  src="/car-images/tour-bus-group.jpg"
                  alt="Desert road tourist group tour in Rajasthan"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold rounded-xl text-center">
                  🏜️ Desert Safari & Inter-City Sightseeing
                </span>
              </div>
            </div>

            {/* Description & WhatsApp Action */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-center space-y-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-3 py-1 rounded-full w-fit">
                Tourist Group Service & Airport Transfers
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                Complete Rajasthan Tours & Punctual Airport Dropping / Pickups
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Whether you need a full multi-day Rajasthan family tour, corporate group journey, or guaranteed on-time airport dropping & railway station pick-and-drop, we have dedicated tourist coaches, tempo travellers, and luxury cabs ready.
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Complete Rajasthan Circuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>On-Time Airport Dropping</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Luggage Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>24/7 WhatsApp Support</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleOpenGeneralBooking}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-sm transition"
                >
                  Book Complete Tour / Airport Drop on WhatsApp →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Rajasthan Tour Packages */}
        <section id="packages" className="py-16 md:py-20 bg-amber-500/5 border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-3 py-1 rounded-full">
                Popular Itineraries
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Rajasthan Tour Packages
              </h2>
              <p className="text-sm text-gray-600">
                Customizable tour packages with dedicated car and chauffeur for sightseeing and inter-city travel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {RAJASTHAN_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 text-xs font-semibold bg-amber-100 text-amber-800 rounded-lg">
                        {pkg.duration}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">Tour Package</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">{pkg.title}</h3>
                    <p className="text-xs text-amber-900 font-medium mb-3">📍 {pkg.destination}</p>
                    <p className="text-xs text-gray-500 mb-4">{pkg.description}</p>

                    <div className="space-y-1.5 mb-6">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                        Highlights:
                      </span>
                      {pkg.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                          <span className="text-amber-500">✓</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-[11px] text-gray-500 mb-3">
                      Recommended: <span className="font-semibold text-gray-800">{pkg.recommendedCar}</span>
                    </p>
                    <button
                      onClick={handleOpenGeneralBooking}
                      className="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition"
                    >
                      Enquire for This Tour on WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
              Trust & Hospitality
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Why Travel With Us?
            </h2>
            <p className="text-sm text-gray-500">
              Experience the legendary Rajasthani hospitality with punctual pickups and zero hidden surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl mx-auto mb-4">
                🚗
              </div>
              <h4 className="font-bold text-base text-gray-900 mb-1">Clean & Maintained Fleet</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Spotless interiors, robust AC cooling, and regular mechanical servicing before every long trip.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl mx-auto mb-4">
                👨‍✈️
              </div>
              <h4 className="font-bold text-base text-gray-900 mb-1">Experienced Chauffeurs</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Courteous, verified drivers who know the best tourist sights, highway eateries, and scenic detours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl mx-auto mb-4">
                💬
              </div>
              <h4 className="font-bold text-base text-gray-900 mb-1">WhatsApp Booking</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                No complex apps or logins. Confirm your car, discuss custom itineraries, and get assistance right inside WhatsApp.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl mx-auto mb-4">
                💎
              </div>
              <h4 className="font-bold text-base text-gray-900 mb-1">Transparent Pricing</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Direct quotation with driver allowance, toll, and state tax clearly broken down before the journey.
              </p>
            </div>
          </div>
        </section>

        {/* WhatsApp Banner CTA */}
        <section className="bg-gradient-to-r from-amber-600 to-amber-700 py-12 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Book Your Rajasthan Journey?
            </h3>
            <p className="text-sm text-amber-100 max-w-xl mx-auto">
              Send us your travel dates and route plan. We'll send you an instant vehicle recommendation and custom quote.
            </p>
            <div className="pt-2">
              <button
                onClick={handleOpenGeneralBooking}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-amber-800 font-bold text-sm shadow-xl hover:bg-amber-50 active:scale-95 transition"
              >
                <span>💬</span> Connect With Us on WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Form Modal */}
      <BookingForm
        isOpen={isBookingOpen}
        initialVehicle={selectedVehicle}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
