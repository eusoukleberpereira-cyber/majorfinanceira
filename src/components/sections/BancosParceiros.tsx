const bancos = [
  { nome: "BMG", bg: "bg-[#E8F0F8]", text: "text-[#003B6F]" },
  { nome: "Banco Pan", bg: "bg-[#FFF0E8]", text: "text-[#E85D04]" },
  { nome: "Facta", bg: "bg-[#EEF0FF]", text: "text-[#3730A3]" },
  { nome: "Caixa Econômica", bg: "bg-[#E8F5E9]", text: "text-[#1B5E20]" },
  { nome: "Banco do Brasil", bg: "bg-[#FFFDE8]", text: "text-[#5D4037]" },
  { nome: "Itaú Consignado", bg: "bg-[#FFF3E0]", text: "text-[#E65100]" },
];

export function BancosParceiros() {
  return (
    <section className="bg-[#F5F8FF] py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <p className="text-gray-400 text-sm uppercase tracking-widest font-medium mb-2">
            Operamos com
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2647]">
            Os maiores bancos do mercado
          </h2>
          <p className="mt-3 text-gray-500 text-base max-w-lg mx-auto">
            Mais opções de crédito para você ter sempre as melhores condições.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {bancos.map((banco) => (
            <div
              key={banco.nome}
              className={`${banco.bg} ${banco.text} rounded-full px-6 py-3 font-semibold text-sm border border-current/10`}
            >
              {banco.nome}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-8">
          Correspondente Bancário Autorizado — operamos sob a regulamentação do Banco Central do Brasil
        </p>
      </div>
    </section>
  );
}
