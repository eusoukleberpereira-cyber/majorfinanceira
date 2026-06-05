import { Landmark, Briefcase, Shield, Heart } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

const publicos = [
  {
    icon: Landmark,
    subtitulo: "INSS",
    titulo: "Aposentados e Pensionistas",
    descricao: "Parcelas descontadas direto no benefício. Até 84 parcelas e margem de até 35%.",
    itens: ["Aposentados por idade ou invalidez", "Pensionistas do INSS", "Beneficiários do BPC/LOAS"],
  },
  {
    icon: Shield,
    subtitulo: "Servidores Públicos",
    titulo: "Civil e Militar",
    descricao: "Desconto em folha de pagamento. Taxas especiais e condições exclusivas.",
    itens: ["Servidores federais, estaduais e municipais", "Militares das Forças Armadas", "Policiais e bombeiros"],
  },
  {
    icon: Briefcase,
    subtitulo: "CLT",
    titulo: "Trabalhadores com Carteira",
    descricao: "Crédito com desconto direto no salário. Rápido e sem complicação.",
    itens: ["Funcionários de empresas privadas", "Desconto direto no salário", "Processo 100% digital"],
  },
  {
    icon: Heart,
    subtitulo: "BPC / LOAS",
    titulo: "Beneficiários do BPC",
    descricao: "Crédito acessível para quem recebe o Benefício de Prestação Continuada.",
    itens: ["Pessoas com deficiência", "Idosos de baixa renda", "Condições especiais de contratação"],
  },
];

export function Publicos() {
  return (
    <section id="publicos" className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="text-[#C9952A] font-semibold text-sm uppercase tracking-widest">
            Atendimento personalizado
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2647]">
            Quem pode contratar?
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Atendemos diferentes perfis com condições específicas para cada situação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {publicos.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.titulo}
                className="bg-[#F5F8FF] rounded-2xl p-7 border border-transparent hover:border-[#E5E7EB] hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F2647] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-[#C9952A] text-xs font-bold uppercase tracking-wider">{item.subtitulo}</span>
                <h3 className="text-[#0F2647] font-bold text-lg leading-snug mt-1 mb-2">{item.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.descricao}</p>
                <ul className="space-y-1.5">
                  {item.itens.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9952A] shrink-0" />
                      <span className="text-gray-600 text-xs">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-base mb-4">Não tem certeza se você tem direito?</p>
          <a
            href={getWhatsAppUrl("publicos")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#0F2647] border-2 border-[#0F2647] hover:bg-[#0F2647] hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
          >
            Consultar gratuitamente
          </a>
        </div>
      </div>
    </section>
  );
}
