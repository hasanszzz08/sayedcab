import React, { useState } from 'react';
import Head from 'next/head';
import { Header } from '@/components/Header';
import { CarCard } from '@/components/CarCard';
import { Footer } from '@/components/Footer';
import { BookingForm } from '@/components/BookingForm';
import { VEHICLES, Vehicle } from '@/data/vehicles';

export default function CarsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(VEHICLES.map((v) => v.category)))];

  const filteredVehicles =
    selectedCategory === 'All'
      ? VEHICLES
      : VEHICLES.filter((v) => v.category === selectedCategory);

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
        <title>Our Vehicle Fleet | Rajasthan Car Rental</title>
        <meta
          name="description"
          content="Explore our fleet of sedans, luxury SUVs, and tempo travellers for rent across Rajasthan with professional chauffeurs."
        />
      </Head>

      <Header onBookNowClick={handleOpenGeneralBooking} />

      <main className="flex-1 pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
            Available Vehicles
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Rajasthan Fleet
          </h1>
          <p className="text-sm text-gray-500">
            Choose from comfortable budget sedans to royal luxury SUVs and high-capacity group coaches.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredVehicles.map((vehicle) => (
              <CarCard
                key={vehicle.id}
                vehicle={vehicle}
                onBookNow={handleBookVehicle}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8 max-w-md mx-auto">
            <p className="text-gray-500 text-sm">No vehicles found in this category.</p>
          </div>
        )}
      </main>

      <Footer />

      <BookingForm
        isOpen={isBookingOpen}
        initialVehicle={selectedVehicle}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
