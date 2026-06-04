export const WHATSAPP_NUMBER = "5541996465223";

const MENSAGENS = {
  hero: "Olá! 😊 Vim pelo site da MajorFinanceira e gostaria de consultar as opções de crédito consignado. Podem me atender?",
  flutuante: "Olá! 😊 Vim pelo site da MajorFinanceira e gostaria de saber mais sobre crédito consignado. Podem me ajudar?",
  ctaFinal: "Olá! 🙋 Quero contratar crédito consignado pela MajorFinanceira. Como devo prosseguir?",
  depoimentos: "Olá! Vi os depoimentos no site da MajorFinanceira e quero saber mais sobre o crédito consignado. Podem me atender?",
  faq: "Olá! Tenho uma dúvida sobre crédito consignado. Encontrei o site da MajorFinanceira e gostaria de conversar com um especialista.",
  publicos: "Olá! 😊 Vim pelo site da MajorFinanceira. Gostaria de saber se tenho direito ao crédito consignado e quais são as condições.",
} as const;

export type MensagemContexto = keyof typeof MENSAGENS;

export const getWhatsAppUrl = (contexto: MensagemContexto = "hero") => {
  const mensagem = MENSAGENS[contexto];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
};
