export interface BookingPayload {
  customerName: string;
  customerPhone: string;
  vehicleName: string;
  pickupLocation: string;
  dropLocation: string;
  travelDate: string;
  travelTime: string;
  estimatedFare?: string | number;
  notes?: string;
}

export const formatWhatsAppMessage = (data: BookingPayload): string => {
  const lines: string[] = [
    '👋 *NAMASTE! NEW CAR BOOKING ENQUIRY*',
    '--------------------------------------',
    `👤 *Customer Name:* ${data.customerName.trim()}`,
    `📞 *Contact Number:* ${data.customerPhone.trim()}`,
    `🚗 *Selected Car:* ${data.vehicleName.trim()}`,
    `📍 *Pickup Location:* ${data.pickupLocation.trim()}`,
    `🏁 *Destination:* ${data.dropLocation.trim()}`,
    `📅 *Travel Date:* ${data.travelDate.trim()}`,
    `⏰ *Travel Time:* ${data.travelTime.trim()}`,
  ];

  if (data.estimatedFare) {
    lines.push(`💰 *Estimated Fare:* ₹${data.estimatedFare}`);
  }

  if (data.notes && data.notes.trim()) {
    lines.push(`📝 *Additional Notes:* ${data.notes.trim()}`);
  }

  lines.push('--------------------------------------');
  lines.push('ℹ️ *Request submitted via website. Please confirm availability & final quote.*');

  return lines.join('\n');
};

export const getWhatsAppUrl = (phone: string, message: string): string => {
  // Strip any non-digit characters except leading +
  const cleanPhone = phone.replace(/[^\d]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
};
