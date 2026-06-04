// TODO: Substituir pelo número real do WhatsApp da MajorFinanceira (formato: 55DDXXXXXXXXX)
export const WHATSAPP_NUMBER = "5500000000000";

export const getWhatsAppUrl = (context?: string) => {
  const message = context
    ? `Olá! Vim pelo site da MajorFinanceira (${context}) e gostaria de saber mais sobre crédito consignado.`
    : "Olá! Vim pelo site da MajorFinanceira e gostaria de saber mais sobre crédito consignado.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
