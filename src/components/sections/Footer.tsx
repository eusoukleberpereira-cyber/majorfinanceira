const anoAtual = new Date().getFullYear();

const links = [
  { label: "O que é", href: "#oqueé" },
  { label: "Vantagens", href: "#vantagens" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Quem pode contratar", href: "#publicos" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1E3D] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo + descrição */}
          <div className="md:col-span-1">
            <p className="text-white font-bold text-xl">
              Major<span className="text-[#C9952A]">Financeira</span>
            </p>
            <p className="text-white/40 text-xs mt-1 mb-4">Correspondente Bancário Autorizado</p>
            <p className="text-white/35 text-xs leading-relaxed max-w-xs">
              Operamos com BMG, Pan, Facta, Caixa Econômica Federal,
              Banco do Brasil e Itaú Consignado.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
              Navegação
            </p>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dados legais */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
              Informações Legais
            </p>
            <div className="space-y-2">
              <p className="text-white/40 text-xs">CNPJ: 14.626.010/0001-41</p>
              <p className="text-white/40 text-xs leading-relaxed">
                Correspondente bancário nos termos da Resolução CMN nº 4.935/2021
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {anoAtual} MajorFinanceira. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs text-center leading-relaxed max-w-lg">
            A MajorFinanceira é um correspondente bancário, não uma instituição financeira.
            As condições de crédito estão sujeitas à análise e aprovação das instituições financeiras parceiras.
          </p>
        </div>
      </div>
    </footer>
  );
}
