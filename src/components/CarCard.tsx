import React from 'react';
import Link from 'next/link';
import { Vehicle } from '@/data/vehicles';
import { ImagePlaceholder } from './ImagePlaceholder';

interface CarCardProps {
  vehicle: Vehicle;
  onBookNow: (vehicle: Vehicle) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ vehicle, onBookNow }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden group">
      {/* Photo Area */}
      <div className="relative w-full overflow-hidden bg-slate-100">
        {vehicle.hasActualPhoto && vehicle.imageSrc ? (
          <div className="relative h-56 w-full overflow-hidden bg-slate-50 flex items-center justify-center">
            {/* Real photo tag */}
            <img
              src={vehicle.imageSrc}
              alt={`SAYEDCAB ${vehicle.name} rental in Rajasthan`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold bg-emerald-600/95 text-white rounded-full shadow-sm">
              Verified Vehicle
            </span>
          </div>
        ) : (
          <ImagePlaceholder vehicleName={vehicle.name} category={vehicle.category} heightClass="h-56" />
        )}

        <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-medium bg-gray-900/80 backdrop-blur-sm text-white rounded-full">
          {vehicle.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900 tracking-tight group-hover:text-amber-600 transition">
              {vehicle.name}
            </h3>
          </div>

          {vehicle.description && (
            <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">
              {vehicle.description}
            </p>
          )}

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 gap-2 py-3 border-y border-gray-100 text-xs text-gray-600 mb-4">
            <div className="flex items-center gap-1.5">
              <span className="w-6 h-6 rounded-md bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-[11px]">
                {vehicle.seatingCapacity}
              </span>
              <span>{vehicle.seatingCapacity} Seater</span>
            </div>

            {vehicle.transmission && (
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-[11px]">
                  {vehicle.transmission === 'Automatic' ? 'AT' : 'MT'}
                </span>
                <span>{vehicle.transmission}</span>
              </div>
            )}

            <div className="flex items-center gap-1.5">
              <span className="w-6 h-6 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-[11px]">
                AC
              </span>
              <span>Air Conditioned</span>
            </div>

            {vehicle.luggageCapacity && (
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-md bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-[11px]">
                  {vehicle.luggageCapacity}B
                </span>
                <span>{vehicle.luggageCapacity} Bags</span>
              </div>
            )}
          </div>
        </div>

        {/* Pricing & CTA */}
        <div>
          <div className="mb-3 flex items-baseline justify-between">
            <span className="text-xs text-gray-500 font-medium">Rental Tariff:</span>
            {vehicle.pricePerDay ? (
              <div>
                <span className="text-lg font-extrabold text-gray-900">₹{vehicle.pricePerDay}</span>
                <span className="text-xs text-gray-500"> / day</span>
              </div>
            ) : (
              <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                Custom Fare on Request
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/cars/${vehicle.slug}`}
              className="py-2.5 px-3 text-center border border-gray-300 hover:border-gray-400 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              Details
            </Link>

            <button
              onClick={() => onBookNow(vehicle)}
              className="py-2.5 px-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow-md shadow-amber-600/20 active:scale-95 transition flex items-center justify-center gap-1"
            >
              <span>Book Now</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
