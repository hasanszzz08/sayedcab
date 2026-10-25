export interface BookingPayload {
  customerName: string;
  customerPhone: string;
  pickupLocation: string;
  dropLocation: string;
  travelDate: string;
  travelTime: string;
  vehicleName?: string;
  tripType?: string;
  notes?: string;
}

export const formatWhatsAppMessage = (data: BookingPayload): string => {
  const lines: string[] = [
    'Hello Sayed Cab!',
    '',
    'I would like to book a cab. Here are my booking details:',
    '',
    `Name: ${data.customerName.trim()}`,
    `Phone Number: ${data.customerPhone.trim()}`,
    `Pickup Location: ${data.pickupLocation.trim()}`,
    `Drop Location: ${data.dropLocation.trim()}`,
    `Pickup Date: ${data.travelDate.trim()}`,
    `Pickup Time: ${data.travelTime.trim()}`,
  ];

  if (data.vehicleName && data.vehicleName.trim()) {
    lines.push(`Car Preference: ${data.vehicleName.trim()}`);
  }

  if (data.tripType && data.tripType.trim()) {
    lines.push(`Trip Type: ${data.tripType.trim()}`);
  }

  if (data.notes && data.notes.trim()) {
    lines.push(`Additional Requirements: ${data.notes.trim()}`);
  }

  lines.push('');
  lines.push('Please confirm the availability and booking details.');
  lines.push('');
  lines.push('Thank you!');

  return lines.join('\n');
};

export const getWhatsAppUrl = (phone: string, message: string): string => {
  // Strip any non-digit characters except leading +
  const cleanPhone = phone.replace(/[^\d]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
};
