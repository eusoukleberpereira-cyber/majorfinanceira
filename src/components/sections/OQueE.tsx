export function OQueE() {
  return (
    <section id="oqueé" className="bg-[#F5F8FF] py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Esquerda — texto */}
          <div>
            <span className="text-[#C9952A] font-semibold text-sm uppercase tracking-widest">
              Entenda
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0F2647] leading-tight">
              O que é o Empréstimo Consignado?
            </h2>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              É uma modalidade de crédito em que as parcelas são descontadas diretamente
              do seu salário ou benefício — antes mesmo de o dinheiro cair na sua conta.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Por essa garantia de pagamento, os bancos cobram taxas de juros muito menores
              do que no cartão de crédito, cheque especial ou empréstimo pessoal.
              É o crédito mais barato do mercado para quem tem direito.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { titulo: "Menor taxa de juros", desc: "Comparado a outras modalidades de crédito" },
                { titulo: "Desconto automático", desc: "Sem boleto, sem risco de esquecer" },
                { titulo: "Nome negativado pode contratar", desc: "A garantia é o benefício ou salário" },
                { titulo: "Crédito facilitado", desc: "Aprovação mais fácil para quem tem direito" },
              ].map((item) => (
                <div key={item.titulo} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#0F2647] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0F2647] font-semibold text-sm">{item.titulo}</p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Direita — cards de números */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { numero: "6+", label: "Bancos parceiros", sublabel: "BMG, Pan, Facta, Caixa, BB e Itaú" },
              { numero: "84x", label: "Parcelas máximas", sublabel: "Para aposentados e pensionistas INSS" },
              { numero: "35%", label: "Da margem consignável", sublabel: "Percentual máximo do benefício" },
              { numero: "24h", label: "Resposta rápida", sublabel: "Aprovação no mesmo dia em muitos casos" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <p className="text-3xl font-bold text-[#0F2647]">{item.numero}</p>
                <p className="text-sm font-semibold text-gray-800 mt-1">{item.label}</p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.sublabel}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
