const bancos = [
  "BMG", "Bradesco", "BRB", "BV", "C6 Bank",
  "Caixa Econômica", "CashMe", "Crefaz", "Daycoval", "Digio",
  "FACTA", "Imbursa", "Mercantil", "Neon", "Banco Pan",
  "Paraná Banco", "PicPay", "Safra",
];

export function BancosParceiros() {
  return (
    <section className="bg-[#F7F7F7] py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <p className="text-[#FF7A00] font-semibold text-sm uppercase tracking-widest mb-2">Operamos com</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
            Os maiores bancos do mercado
          </h2>
          <p className="mt-3 text-[#666] text-base max-w-lg mx-auto">
            Mais de 18 bancos parceiros para você ter sempre as melhores condições de crédito.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {bancos.map((banco) => (
            <div
              key={banco}
              className="bg-white border border-gray-200 hover:border-[#FF7A00]/50 hover:shadow-sm rounded-full px-5 py-2.5 text-[#1A1A1A] font-semibold text-sm transition-all duration-200"
            >
              {banco}
            </div>
          ))}
          <div className="bg-[#FF7A00] rounded-full px-5 py-2.5 text-white font-semibold text-sm">
            + outros
          </div>
        </div>

        <p className="text-center text-[#999] text-xs mt-8">
          Correspondente Bancário Autorizado — CNPJ 14.626.010/0001-41 — Resolução CMN nº 4.935/2021
        </p>
      </div>
    </section>
  );
}
