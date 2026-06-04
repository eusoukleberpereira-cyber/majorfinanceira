const depoimentos = [
  {
    texto:
      "Estava precisando de dinheiro para uma cirurgia urgente. A MajorFinanceira me atendeu no mesmo dia, sem burocracia nenhuma. Em 3 dias o dinheiro já estava na minha conta. Recomendo de olhos fechados!",
    nome: "Maria Aparecida S.",
    perfil: "Aposentada INSS",
    estrelas: 5,
  },
  {
    texto:
      "Já tentei em outros lugares e sempre tinha algum problema. Aqui foi diferente — me explicaram tudo direitinho, as taxas eram as menores que encontrei e o atendimento foi muito humano. Ótima experiência!",
    nome: "João Carlos F.",
    perfil: "Servidor Público Municipal",
    estrelas: 5,
  },
  {
    texto:
      "Precisei de crédito para reformar minha casa. O processo foi 100% pelo celular, muito fácil. A equipe tirou todas as minhas dúvidas com paciência. Com certeza vou indicar para minha família.",
    nome: "Ana Paula M.",
    perfil: "Trabalhadora CLT",
    estrelas: 5,
  },
];

export function Depoimentos() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C9952A] font-semibold text-sm uppercase tracking-widest mb-3">
            Quem já passou por aqui
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2647]">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="mt-4 text-[#4A5568] text-lg max-w-xl mx-auto">
            Histórias reais de pessoas que resolveram sua situação financeira com a MajorFinanceira.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depoimentos.map((item) => (
            <div
              key={item.nome}
              className="bg-[#FAFAF8] border border-[#D1DCE8]/60 rounded-2xl p-7 flex flex-col gap-4"
            >
              {/* Estrelas */}
              <div className="flex gap-1">
                {Array.from({ length: item.estrelas }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="#C9952A" className="w-5 h-5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Depoimento */}
              <p className="text-[#4A5568] text-base leading-relaxed flex-1">
                &ldquo;{item.texto}&rdquo;
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#D1DCE8]/60">
                <div className="w-10 h-10 rounded-full bg-[#0F2647] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {item.nome.charAt(0)}
                </div>
                <div>
                  <p className="text-[#0F2647] font-semibold text-sm">{item.nome}</p>
                  <p className="text-[#718096] text-xs">{item.perfil}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota de placeholder */}
        <p className="text-center text-[#718096] text-xs mt-8">
          * Depoimentos ilustrativos — substituir pelos reais assim que disponíveis.
        </p>
      </div>
    </section>
  );
}
