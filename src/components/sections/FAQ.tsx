import { getWhatsAppUrl } from "@/lib/constants";

const perguntas = [
  {
    pergunta: "O que é crédito consignado?",
    resposta:
      "É uma modalidade de empréstimo em que as parcelas são descontadas diretamente do seu benefício ou salário, antes mesmo de o dinheiro chegar na sua conta. Por isso, as taxas de juros são muito menores do que em outros tipos de crédito — o banco tem garantia de receber.",
  },
  {
    pergunta: "Quem tem direito ao crédito consignado?",
    resposta:
      "Têm direito aposentados e pensionistas do INSS, servidores públicos federais, estaduais e municipais, militares, trabalhadores com carteira assinada (CLT) e beneficiários do BPC/LOAS. Cada perfil tem condições específicas — entre em contato e nosso especialista verifica sua situação.",
  },
  {
    pergunta: "Como funciona o desconto em folha ou no benefício?",
    resposta:
      "Após a contratação, o banco parceiro envia automaticamente as informações ao órgão pagador (INSS, prefeitura, empresa, etc.). O desconto passa a ocorrer todo mês direto na fonte — sem boleto, sem risco de esquecimento.",
  },
  {
    pergunta: "Qual é a taxa de juros do consignado?",
    resposta:
      "As taxas variam conforme seu perfil (INSS, servidor, CLT) e o banco escolhido. Por trabalharmos com os maiores bancos do mercado — BMG, Pan, Facta, Caixa, Banco do Brasil e Itaú — conseguimos sempre apresentar as melhores condições disponíveis para o seu caso.",
  },
  {
    pergunta: "Quanto tempo demora para o dinheiro cair na conta?",
    resposta:
      "Após a aprovação e assinatura do contrato, o prazo varia de 1 a 5 dias úteis, dependendo do banco e do seu perfil. Em muitos casos, a aprovação acontece no mesmo dia do pedido.",
  },
  {
    pergunta: "Quais documentos são necessários?",
    resposta:
      "Em geral, são necessários apenas: documento de identidade (RG ou CNH), CPF, comprovante de renda (holerite, extrato do benefício ou contracheque) e comprovante de residência. Nosso especialista te orienta exatamente o que você precisa no seu caso.",
  },
  {
    pergunta: "Posso quitar o empréstimo antes do prazo?",
    resposta:
      "Sim! Você pode solicitar a quitação antecipada a qualquer momento. Nesse caso, os juros são recalculados proporcionalmente ao período restante, gerando economia. É um direito garantido pela legislação brasileira.",
  },
];

export function FAQ() {
  return (
    <section className="bg-[#F0F4F9] py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#C9952A] font-semibold text-sm uppercase tracking-widest mb-3">
            Tire suas dúvidas
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2647]">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-[#4A5568] text-lg">
            Não encontrou o que procura?{" "}
            <a
              href={getWhatsAppUrl("faq")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F2647] font-semibold underline underline-offset-2 hover:text-[#C9952A] transition-colors"
            >
              Fale com um especialista.
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {perguntas.map((item) => (
            <details
              key={item.pergunta}
              className="group bg-white border border-[#D1DCE8]/60 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 list-none select-none">
                <span className="text-[#0F2647] font-semibold text-base leading-snug">
                  {item.pergunta}
                </span>
                <svg
                  className="w-5 h-5 text-[#C9952A] shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="px-6 pb-5 text-[#4A5568] leading-relaxed text-sm">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
