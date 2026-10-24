import React from 'react';
import { getWhatsAppUrl } from '@/utils/whatsapp';

interface WhatsAppButtonProps {
  phone: string;
  message: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phone,
  message,
  onClick,
  disabled = false,
  className = ''
}) => {
  const handleOpenWhatsApp = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (onClick) {
      onClick();
    }

    const url = getWhatsAppUrl(phone, message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      type="button"
      onClick={handleOpenWhatsApp}
      disabled={disabled}
      className={`w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/30 transition-all transform active:scale-98 flex items-center justify-center gap-3 cursor-pointer ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {/* WhatsApp SVG Icon */}
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.32C9.33 7.32 9.09 7.4 8.87 7.64C8.65 7.88 8.04 8.45 8.04 9.61C8.04 10.77 8.89 11.89 9.01 12.05C9.13 12.21 10.68 14.6 13.06 15.63C15.04 16.48 15.44 16.31 15.86 16.27C16.28 16.23 17.22 15.72 17.42 15.16C17.62 14.6 17.62 14.12 17.56 14.02C17.5 13.92 17.34 13.86 17.1 13.74C16.86 13.62 15.68 13.04 15.46 12.96C15.24 12.88 15.08 12.84 14.92 13.08C14.76 13.32 14.3 13.86 14.16 14.02C14.02 14.18 13.88 14.2 13.64 14.08C13.4 13.96 12.38 13.63 11.17 12.56C10.23 11.72 9.59 10.68 9.47 10.48C9.35 10.28 9.46 10.17 9.58 10.05C9.69 9.94 9.83 9.76 9.95 9.62C10.07 9.48 10.11 9.38 10.19 9.22C10.27 9.06 10.23 8.92 10.17 8.8C10.11 8.68 9.65 7.55 9.53 7.32Z" />
      </svg>
      <span>Confirm Booking on WhatsApp</span>
    </button>
  );
};
