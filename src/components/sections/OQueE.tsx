export function OQueE() {
  return (
    <section id="oqueé" className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#1A1A1A] leading-tight">
              O que é o Empréstimo Consignado?
            </h2>
            <p className="mt-5 text-[#666] text-lg leading-relaxed">
              É uma modalidade de crédito em que as parcelas são descontadas diretamente
              do seu salário ou benefício — antes mesmo de o dinheiro cair na sua conta.
            </p>
            <p className="mt-4 text-[#666] leading-relaxed">
              Por essa garantia de pagamento, os bancos cobram taxas muito menores
              do que no cartão de crédito ou cheque especial. É o crédito mais barato
              do mercado para quem tem direito.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { titulo: "Menor taxa de juros", desc: "Comparado a outras modalidades" },
                { titulo: "Desconto automático", desc: "Sem boleto, sem risco de esquecer" },
                { titulo: "Nome negativado contrata", desc: "A garantia é o benefício ou salário" },
                { titulo: "Aprovação facilitada", desc: "Para quem tem direito ao consignado" },
              ].map((item) => (
                <div key={item.titulo} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#FF7A00] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#1A1A1A] font-semibold text-sm">{item.titulo}</p>
                    <p className="text-[#999] text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { numero: "18+", label: "Bancos parceiros", sublabel: "BMG, Bradesco, Pan, Caixa e mais" },
              { numero: "84x", label: "Parcelas máximas", sublabel: "Para aposentados e pensionistas INSS" },
              { numero: "35%", label: "Da margem consignável", sublabel: "Percentual máximo do benefício" },
              { numero: "24h", label: "Resposta rápida", sublabel: "Aprovação no mesmo dia em muitos casos" },
            ].map((item) => (
              <div key={item.label} className="bg-[#F7F7F7] rounded-2xl p-6 border border-gray-100">
                <p className="text-3xl font-bold text-[#FF7A00]">{item.numero}</p>
                <p className="text-sm font-semibold text-[#1A1A1A] mt-1">{item.label}</p>
                <p className="text-xs text-[#999] mt-1 leading-relaxed">{item.sublabel}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
