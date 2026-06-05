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
  {
    pergunta: "Meu nome está negativado. Posso contratar?",
    resposta:
      "Em muitos casos, sim! Como a garantia do consignado é o próprio benefício ou salário, os bancos costumam aprovar mesmo para clientes com restrições no CPF. Entre em contato e verifique sua situação com nosso especialista.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-[#F5F8FF] py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="text-[#C9952A] font-semibold text-sm uppercase tracking-widest">
            Tire suas dúvidas
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2647]">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
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

        <div className="space-y-2">
          {perguntas.map((item) => (
            <details
              key={item.pergunta}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
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
              <p className="px-6 pb-5 text-gray-500 leading-relaxed text-sm">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
