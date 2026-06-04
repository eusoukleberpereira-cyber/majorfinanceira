const bancos = [
  { nome: "BMG", cor: "bg-[#E8F4F8] text-[#003B6F]" },
  { nome: "Banco Pan", cor: "bg-[#FFF3E8] text-[#E85D04]" },
  { nome: "Facta", cor: "bg-[#EEF2FF] text-[#3730A3]" },
  { nome: "Caixa Econômica", cor: "bg-[#E8F5E9] text-[#1B5E20]" },
  { nome: "Banco do Brasil", cor: "bg-[#FFFDE7] text-[#795548]" },
  { nome: "Itaú Consignado", cor: "bg-[#FFF8E1] text-[#E65100]" },
];

export function BancosParceiros() {
  return (
    <section className="bg-white py-16 sm:py-20 border-y border-[#D1DCE8]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#718096] text-sm uppercase tracking-widest font-medium mb-2">
            Operamos com
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2647]">
            Os Maiores Bancos do Mercado
          </h2>
          <p className="mt-3 text-[#4A5568] text-base max-w-lg mx-auto">
            Mais opções de crédito para você ter as melhores condições.
          </p>
        </div>

        {/* Badges dos bancos */}
        <div className="flex flex-wrap justify-center gap-3">
          {bancos.map((banco) => (
            <div
              key={banco.nome}
              className={`${banco.cor} rounded-full px-5 py-2.5 font-semibold text-sm border border-current/10`}
            >
              {banco.nome}
            </div>
          ))}
        </div>

        {/* Nota de rodapé */}
        <p className="text-center text-[#718096] text-xs mt-8">
          Correspondente Bancário Autorizado — operamos sob a regulamentação do Banco Central do Brasil
        </p>
      </div>
    </section>
  );
}
