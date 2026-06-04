const anoAtual = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-[#091929] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo / Nome */}
          <div>
            <p className="text-white font-bold text-xl tracking-wide">
              Major<span className="text-[#C9952A]">Financeira</span>
            </p>
            <p className="text-white/40 text-xs mt-1">Correspondente Bancário Autorizado</p>
          </div>

          {/* Info legal */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-white/50 text-xs">
              CNPJ: 14.626.010/0001-41
            </p>
            <p className="text-white/50 text-xs">
              Correspondente bancário nos termos da Resolução CMN nº 4.935/2021
            </p>
            <p className="text-white/30 text-xs mt-2">
              © {anoAtual} MajorFinanceira. Todos os direitos reservados.
            </p>
          </div>
        </div>

        {/* Aviso legal */}
        <p className="mt-8 pt-6 border-t border-white/8 text-white/25 text-xs text-center leading-relaxed max-w-3xl mx-auto">
          A MajorFinanceira é um correspondente bancário, não uma instituição financeira.
          As operações de crédito são realizadas pelas instituições financeiras parceiras
          autorizadas pelo Banco Central do Brasil. As condições de crédito (taxa, prazo e valor)
          estão sujeitas à análise e aprovação das instituições financeiras.
        </p>
      </div>
    </footer>
  );
}
