import { contactWhatsAppNumber } from '@/config/contact';

export const createWhatsAppUrl = (message: string, phoneNumber = contactWhatsAppNumber) => {
  const params = new URLSearchParams({ phone: phoneNumber, text: message });

  return `https://api.whatsapp.com/send?${params.toString()}`;
};
