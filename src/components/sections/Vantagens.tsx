import { Shield, Zap, Smartphone, TrendingDown } from "lucide-react";

const vantagens = [
  {
    icon: TrendingDown,
    titulo: "Menor taxa do mercado",
    descricao: "Negociamos com os maiores bancos para garantir a melhor condição para o seu perfil.",
  },
  {
    icon: Smartphone,
    titulo: "Contratação 100% digital",
    descricao: "Sem sair de casa. Todo o processo pelo celular, da proposta à assinatura do contrato.",
  },
  {
    icon: Zap,
    titulo: "Dinheiro rápido",
    descricao: "Aprovação ágil e crédito na conta em até 5 dias úteis. Em muitos casos, no mesmo dia.",
  },
  {
    icon: Shield,
    titulo: "Análise simplificada",
    descricao: "Sem burocracia. Atendimento humano que entende sua situação e encontra a melhor solução.",
  },
];

export function Vantagens() {
  return (
    <section id="vantagens" className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="text-[#C9952A] font-semibold text-sm uppercase tracking-widest">
            Por que a MajorFinanceira
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2647]">
            Vantagens que fazem a diferença
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vantagens.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.titulo}
                className="bg-[#F5F8FF] rounded-2xl p-7 border border-transparent hover:border-[#E5E7EB] hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F2647] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="text-[#0F2647] font-bold text-lg leading-snug mb-2">{item.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.descricao}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
