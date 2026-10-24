import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BookingForm } from '@/components/BookingForm';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { VEHICLES, Vehicle } from '@/data/vehicles';

interface CarDetailPageProps {
  vehicle: Vehicle;
}

export default function CarDetailPage({ vehicle }: CarDetailPageProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Vehicle Not Found</h2>
          <Link href="/cars" className="text-amber-600 underline text-sm">
            ← Back to Fleet
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-gray-900">
      <Head>
        <title>{`${vehicle.name} Rental in Rajasthan | With Chauffeur`}</title>
        <meta
          name="description"
          content={`Hire ${vehicle.name} (${vehicle.seatingCapacity} seater, AC) for sightseeing and outstation trips in Rajasthan. Book instantly on WhatsApp.`}
        />
      </Head>

      <Header onBookNowClick={() => setIsBookingOpen(true)} />

      <main className="flex-1 pt-24 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <span>/</span>
          <Link href="/cars" className="hover:text-amber-600">Our Fleet</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{vehicle.name}</span>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Prominent Vehicle Image Area */}
          <div className="relative w-full bg-slate-100 border-b border-gray-100">
            {vehicle.hasActualPhoto && vehicle.imageSrc ? (
              <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                <img
                  src={vehicle.imageSrc}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-emerald-600 text-white rounded-full shadow-md">
                  Verified Actual Vehicle
                </span>
              </div>
            ) : (
              <ImagePlaceholder
                vehicleName={vehicle.name}
                category={vehicle.category}
                heightClass="h-72 sm:h-96"
              />
            )}
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                  {vehicle.category}
                </span>
                <h1 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight mt-2">
                  {vehicle.name}
                </h1>
                {vehicle.suitableFor && (
                  <p className="text-xs text-amber-900 font-medium mt-1">
                    Ideal for: {vehicle.suitableFor}
                  </p>
                )}
              </div>

              {/* Price Display */}
              <div className="sm:text-right">
                <span className="text-xs text-gray-400 block font-medium">Rental Tariff</span>
                {vehicle.pricePerDay ? (
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-gray-900">
                      ₹{vehicle.pricePerDay}
                    </span>
                    <span className="text-xs text-gray-500"> / day</span>
                  </div>
                ) : (
                  <span className="inline-block text-xs font-bold text-amber-800 bg-amber-100/80 px-3 py-1.5 rounded-xl">
                    Tariff on Request
                  </span>
                )}
              </div>
            </div>

            {/* Specifications Grid */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                Vehicle Specifications
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-gray-500 block">Seating Capacity</span>
                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    {vehicle.seatingCapacity} Passengers
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-gray-500 block">Air Conditioning</span>
                  <span className="text-base sm:text-lg font-bold text-teal-700">
                    {vehicle.ac ? 'Dual Climate AC' : 'Non-AC'}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-gray-500 block">Transmission</span>
                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    {vehicle.transmission || 'Manual'}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-gray-500 block">Luggage Space</span>
                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    {vehicle.luggageCapacity ? `${vehicle.luggageCapacity} Large Bags` : 'Standard'}
                  </span>
                </div>
              </div>
            </div>

            {/* Vehicle Description */}
            {vehicle.description && (
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  Overview & Experience
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {vehicle.description}
                </p>
              </div>
            )}

            {/* Inclusions */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                What’s Included
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Commercial licensed taxi registration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Uniformed, punctual chauffeur
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Sanitized seats & clean interior
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Luggage carrier / trunk space
                </li>
              </ul>
            </div>

            {/* Book Now Section */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-gray-500">
                Have questions or need custom multi-city package?
              </div>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-xl shadow-amber-600/20 active:scale-95 transition flex items-center justify-center gap-2"
              >
                <span>Book {vehicle.name} on WhatsApp</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <BookingForm
        isOpen={isBookingOpen}
        initialVehicle={vehicle}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = VEHICLES.map((vehicle) => ({
    params: { slug: vehicle.slug }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const vehicle = VEHICLES.find((v) => v.slug === slug) || null;

  return {
    props: {
      vehicle
    }
  };
};
