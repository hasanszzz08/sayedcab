import React, { useState, useEffect } from 'react';
import { Vehicle, VEHICLES } from '@/data/vehicles';
import { BookingPayload, formatWhatsAppMessage } from '@/utils/whatsapp';
import { WHATSAPP_INTERNATIONAL } from '@/config/business';
import { BookingSummary } from './BookingSummary';
import { WhatsAppButton } from './WhatsAppButton';

interface BookingFormProps {
  initialVehicle?: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialVehicle,
  isOpen,
  onClose
}) => {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelTime, setTravelTime] = useState('');
  const [tripType, setTripType] = useState('Outstation / Sightseeing');
  const [notes, setNotes] = useState('');

  // Step state: 'form' | 'review'
  const [step, setStep] = useState<'form' | 'review'>('form');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copied, setCopied] = useState(false);

  // WhatsApp business number from environment or verified config
  const businessWhatsAppNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || WHATSAPP_INTERNATIONAL;

  useEffect(() => {
    if (initialVehicle) {
      setSelectedVehicleId(initialVehicle.id);
    } else if (VEHICLES.length > 0 && !selectedVehicleId) {
      setSelectedVehicleId(VEHICLES[0].id);
    }
  }, [initialVehicle]);

  // Current selected vehicle
  const currentVehicle =
    VEHICLES.find((v) => v.id === selectedVehicleId) || initialVehicle || VEHICLES[0];

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!customerName.trim()) {
      newErrors.customerName = 'Please enter your full name';
    }

    if (!customerPhone.trim()) {
      newErrors.customerPhone = 'Please enter your phone number';
    } else if (!/^\+?[0-9]{10,14}$/.test(customerPhone.replace(/[\s-]/g, ''))) {
      newErrors.customerPhone = 'Enter a valid 10-digit mobile number';
    }

    if (!pickupLocation.trim()) {
      newErrors.pickupLocation = 'Enter pickup address, airport, or hotel';
    }

    if (!dropLocation.trim()) {
      newErrors.dropLocation = 'Enter destination city, sightseeing, or drop location';
    }

    if (!travelDate) {
      newErrors.travelDate = 'Select travel date';
    }

    if (!travelTime) {
      newErrors.travelTime = 'Select preferred pickup time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStep('review');
    }
  };

  const payload: BookingPayload = {
    customerName,
    customerPhone,
    vehicleName: currentVehicle ? currentVehicle.name : 'Not Specified',
    tripType,
    pickupLocation,
    dropLocation,
    travelDate,
    travelTime,
    notes: notes.trim() ? notes : undefined
  };

  const whatsappMessage = formatWhatsAppMessage(payload);

  const handleCopyDetails = () => {
    navigator.clipboard.writeText(whatsappMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden my-6 border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-700 to-amber-600 px-6 py-4 text-white flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold">Book Your Rajasthan Ride</h3>
            <p className="text-xs text-amber-100">
              Quick & instant WhatsApp booking request
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {step === 'form' ? (
            <form onSubmit={handleProceedToReview} className="space-y-4">
              {/* Vehicle & Trip Type Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Select Vehicle *
                  </label>
                  <select
                    value={selectedVehicleId}
                    onChange={(e) => setSelectedVehicleId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none bg-gray-50"
                  >
                    {VEHICLES.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} ({v.seatingCapacity} Seater)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Trip Type
                  </label>
                  <select
                    value={tripType}
                    onChange={(e) => setTripType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none bg-gray-50"
                  >
                    <option value="Outstation Tour">Outstation Tour</option>
                    <option value="City Sightseeing">City Sightseeing</option>
                    <option value="Airport / Station Transfer">Airport / Station Transfer</option>
                    <option value="Round Trip">Round Trip</option>
                    <option value="One Way Drop">One Way Drop</option>
                  </select>
                </div>
              </div>

              {/* Pickup & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Jaipur Airport, Hotel"
                    value={pickupLocation}
                    onChange={(e) => {
                      setPickupLocation(e.target.value);
                      if (errors.pickupLocation) setErrors({ ...errors, pickupLocation: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none ${
                      errors.pickupLocation ? 'border-red-400 bg-red-50/50' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                  {errors.pickupLocation && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.pickupLocation}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Drop Location *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Udaipur, City Sightseeing"
                    value={dropLocation}
                    onChange={(e) => {
                      setDropLocation(e.target.value);
                      if (errors.dropLocation) setErrors({ ...errors, dropLocation: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none ${
                      errors.dropLocation ? 'border-red-400 bg-red-50/50' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                  {errors.dropLocation && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.dropLocation}</p>
                  )}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Pickup Date *
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => {
                      setTravelDate(e.target.value);
                      if (errors.travelDate) setErrors({ ...errors, travelDate: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none ${
                      errors.travelDate ? 'border-red-400 bg-red-50/50' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                  {errors.travelDate && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.travelDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Pickup Time *
                  </label>
                  <input
                    type="time"
                    value={travelTime}
                    onChange={(e) => {
                      setTravelTime(e.target.value);
                      if (errors.travelTime) setErrors({ ...errors, travelTime: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none ${
                      errors.travelTime ? 'border-red-400 bg-red-50/50' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                  {errors.travelTime && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.travelTime}</p>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rajesh Kumar"
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                      if (errors.customerName) setErrors({ ...errors, customerName: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none ${
                      errors.customerName ? 'border-red-400 bg-red-50/50' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                  {errors.customerName && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.customerName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={customerPhone}
                    onChange={(e) => {
                      setCustomerPhone(e.target.value);
                      if (errors.customerPhone) setErrors({ ...errors, customerPhone: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none ${
                      errors.customerPhone ? 'border-red-400 bg-red-50/50' : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                  {errors.customerPhone && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.customerPhone}</p>
                  )}
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Additional Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Round-trip required, child seat needed, flight number..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none bg-gray-50"
                />
              </div>

              {/* Submit to review */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition active:scale-98 cursor-pointer"
              >
                Review Booking Details →
              </button>
            </form>
          ) : (
            /* Review & WhatsApp Step */
            <div className="space-y-4">
              <BookingSummary data={payload} />

              {/* WhatsApp Action Button */}
              <WhatsAppButton
                phone={businessWhatsAppNumber}
                message={whatsappMessage}
              />

              {/* Fallback copy details */}
              <div className="flex items-center justify-between text-xs text-gray-500 px-1">
                <span>WhatsApp not opening automatically?</span>
                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className="text-amber-700 hover:text-amber-800 font-bold underline"
                >
                  {copied ? '✓ Details Copied!' : 'Copy Booking Message'}
                </button>
              </div>

              {/* Mandatory Clarification Notice */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-gray-600 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-gray-800">
                  <span>ℹ️</span> Important Notice:
                </div>
                <p>
                  Clicking the button opens WhatsApp with your prefilled booking request. Please <strong>manually press Send</strong> in WhatsApp. Our team will verify vehicle availability and confirm your booking with the final quote.
                </p>
              </div>

              {/* Back to edit button */}
              <button
                type="button"
                onClick={() => setStep('form')}
                className="w-full py-2.5 text-xs text-gray-600 hover:text-gray-900 font-semibold text-center border border-gray-200 rounded-xl hover:bg-gray-50 transition"
              >
                ← Back to Edit Details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
