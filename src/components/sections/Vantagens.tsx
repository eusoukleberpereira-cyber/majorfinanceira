const vantagens = [
  {
    titulo: "Menores taxas do mercado",
    descricao: "Negociamos as melhores condições com os maiores bancos para você pagar menos.",
  },
  {
    titulo: "100% digital — sem sair de casa",
    descricao: "Todo o processo pelo celular. Do pedido à assinatura, sem precisar se deslocar.",
  },
  {
    titulo: "Atendimento humano personalizado",
    descricao: "Nada de robô ou espera. Você fala com uma pessoa real que entende a sua situação.",
  },
  {
    titulo: "Aprovação em minutos",
    descricao: "Análise ágil e resposta rápida. Sem enrolação, sem burocracia desnecessária.",
  },
  {
    titulo: "Parcelas descontadas no benefício",
    descricao: "Desconto automático em folha ou benefício. Sem preocupação com boletos ou atrasos.",
  },
  {
    titulo: "Correspondente autorizado pelos maiores bancos",
    descricao: "Operamos com BMG, Pan, Facta, Caixa, Banco do Brasil e Itaú Consignado.",
  },
];

export function Vantagens() {
  return (
    <section className="bg-[#C9960A] py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
            Nossas vantagens
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1200]">
            Por Que Escolher a MajorFinanceira?
          </h2>
          <p className="mt-4 text-[#1A1200]/65 text-lg max-w-xl mx-auto">
            Mais do que crédito — uma experiência de atendimento que respeita você.
          </p>
        </div>

        {/* Grid de vantagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vantagens.map((item) => (
            <div
              key={item.titulo}
              className="flex gap-4 bg-white/15 border border-white/20 rounded-2xl p-6 hover:bg-white/22 transition-colors duration-200"
            >
              <div className="shrink-0 mt-0.5">
                <div className="w-6 h-6 rounded-full bg-[#0F2647]/15 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#0F2647]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-[#1A1200] font-semibold text-base leading-snug mb-1">
                  {item.titulo}
                </h3>
                <p className="text-[#1A1200]/60 text-sm leading-relaxed">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
