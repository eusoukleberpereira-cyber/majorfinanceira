import { Landmark, Briefcase, Shield, Heart } from "lucide-react";

const publicos = [
  {
    icon: Landmark,
    titulo: "Aposentados e Pensionistas",
    subtitulo: "INSS",
    descricao: "Parcelas descontadas direto no benefício. Processo simples e sem burocracia.",
  },
  {
    icon: Shield,
    titulo: "Servidores Públicos",
    subtitulo: "Civil e Militar",
    descricao: "Desconto em folha de pagamento. Taxas especiais para servidores.",
  },
  {
    icon: Briefcase,
    titulo: "Trabalhadores CLT",
    subtitulo: "Setor Privado",
    descricao: "Crédito com desconto direto no salário. Rápido e sem complicação.",
  },
  {
    icon: Heart,
    titulo: "Beneficiários do BPC",
    subtitulo: "BPC / LOAS",
    descricao: "Crédito acessível para quem recebe o Benefício de Prestação Continuada.",
  },
];

export function Publicos() {
  return (
    <section className="bg-[#F0F4F9] py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C9960A] font-semibold text-sm uppercase tracking-widest mb-3">
            Atendimento personalizado
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2647]">
            Quem Pode Contratar?
          </h2>
          <p className="mt-4 text-[#4A5568] text-lg max-w-xl mx-auto">
            Atendemos diferentes perfis com condições específicas para cada um.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {publicos.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.titulo}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#D1DCE8]/60 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F2647]/8 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#0F2647]" strokeWidth={1.5} />
                </div>
                <p className="text-[#C9960A] text-xs font-semibold uppercase tracking-wider mb-1">
                  {item.subtitulo}
                </p>
                <h3 className="text-[#0F2647] font-bold text-lg leading-snug mb-2">
                  {item.titulo}
                </h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  {item.descricao}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
