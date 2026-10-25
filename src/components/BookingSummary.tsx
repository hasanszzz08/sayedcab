import React from 'react';
import { BookingPayload } from '@/utils/whatsapp';

interface BookingSummaryProps {
  data: BookingPayload;
}

export const BookingSummary: React.FC<BookingSummaryProps> = ({ data }) => {
  return (
    <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-4 sm:p-5 text-gray-800 space-y-3">
      <div className="flex items-center justify-between pb-3 border-b border-amber-200/70">
        <h4 className="font-bold text-sm text-amber-950 flex items-center gap-2">
          <span>📋</span> Booking Summary Review
        </h4>
        <span className="text-[11px] font-semibold uppercase bg-amber-200/70 text-amber-900 px-2 py-0.5 rounded-full">
          Step 2 of 2
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
        <div>
          <span className="text-gray-500 block">Selected Vehicle:</span>
          <span className="font-semibold text-gray-900 text-sm">{data.vehicleName}</span>
        </div>

        <div>
          <span className="text-gray-500 block">Travel Schedule:</span>
          <span className="font-semibold text-gray-900">
            {data.travelDate} at {data.travelTime}
          </span>
        </div>

        <div>
          <span className="text-gray-500 block">Pickup Location:</span>
          <span className="font-semibold text-gray-900">{data.pickupLocation}</span>
        </div>

        <div>
          <span className="text-gray-500 block">Destination:</span>
          <span className="font-semibold text-gray-900">{data.dropLocation}</span>
        </div>

        <div>
          <span className="text-gray-500 block">Customer Name:</span>
          <span className="font-semibold text-gray-900">{data.customerName}</span>
        </div>

        <div>
          <span className="text-gray-500 block">Contact Phone:</span>
          <span className="font-semibold text-gray-900">{data.customerPhone}</span>
        </div>

        {data.tripType && (
          <div>
            <span className="text-gray-500 block">Trip Type:</span>
            <span className="font-semibold text-gray-900">{data.tripType}</span>
          </div>
        )}
      </div>

      {data.notes && (
        <div className="pt-2 border-t border-amber-200/60 text-xs">
          <span className="text-gray-500 block">Additional Requirements:</span>
          <span className="text-gray-800 italic">"{data.notes}"</span>
        </div>
      )}
    </div>
  );
};
