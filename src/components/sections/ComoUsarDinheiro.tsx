const usos = [
  { emoji: "💳", titulo: "Quitar dívidas", desc: "Saia do cheque especial e do cartão caro" },
  { emoji: "🏥", titulo: "Saúde", desc: "Consultas, exames e medicamentos" },
  { emoji: "✈️", titulo: "Faça uma viagem", desc: "Descanse ou visite quem você ama" },
  { emoji: "🎁", titulo: "Presenteie alguém", desc: "Datas especiais e momentos felizes" },
  { emoji: "📈", titulo: "Investimento", desc: "Faça o dinheiro trabalhar para você" },
  { emoji: "🏠", titulo: "Pague suas contas", desc: "Reforma, aluguel ou imprevistos" },
];

export function ComoUsarDinheiro() {
  return (
    <section className="bg-[#FF7A00] py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Como posso usar o dinheiro do meu Consignado?
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            O Crédito Consignado Major é pra você usar da melhor maneira possível.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {usos.map((item) => (
            <div
              key={item.titulo}
              className="bg-white/15 hover:bg-white/25 border border-white/20 rounded-2xl p-5 text-center transition-all duration-200 hover:-translate-y-1"
            >
              <span className="text-4xl block mb-3">{item.emoji}</span>
              <h3 className="text-white font-bold text-sm mb-1">{item.titulo}</h3>
              <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
