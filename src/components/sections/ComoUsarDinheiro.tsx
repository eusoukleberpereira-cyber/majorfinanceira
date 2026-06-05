const usos = [
  { emoji: "💳", titulo: "Quitar dívidas", desc: "Limpe o nome e saia do cheque especial ou cartão caro" },
  { emoji: "🏥", titulo: "Saúde", desc: "Consultas, exames, cirurgias e medicamentos" },
  { emoji: "🏠", titulo: "Reforma da casa", desc: "Deixe sua casa do jeito que você sempre quis" },
  { emoji: "✈️", titulo: "Viagens", desc: "Visite a família ou descanse onde merece" },
  { emoji: "🎓", titulo: "Educação", desc: "Cursos e formação para você ou seus filhos" },
  { emoji: "📈", titulo: "Investimento", desc: "Faça o dinheiro trabalhar para você" },
  { emoji: "🛟", titulo: "Emergências", desc: "Imprevistos sem desespero e sem juros abusivos" },
  { emoji: "🎁", titulo: "Datas especiais", desc: "Aniversários, Natal e momentos que merecem comemoração" },
];

export function ComoUsarDinheiro() {
  return (
    <section className="bg-[#F5F8FF] py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="text-[#C9952A] font-semibold text-sm uppercase tracking-widest">
            Liberdade de escolha
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2647]">
            Como usar seu crédito?
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            O dinheiro é seu — use como quiser, sem restrições e sem precisar explicar nada.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {usos.map((item) => (
            <div
              key={item.titulo}
              className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-[#0F2647]/20 hover:shadow-md transition-all duration-200"
            >
              <span className="text-4xl block mb-3">{item.emoji}</span>
              <h3 className="text-[#0F2647] font-bold text-base mb-1">{item.titulo}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
