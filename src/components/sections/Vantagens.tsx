import { Shield, Zap, Smartphone, TrendingDown } from "lucide-react";

const vantagens = [
  {
    icon: TrendingDown,
    titulo: "Liberdade de escolha",
    descricao: "Escolha o número de parcelas que melhor cabe no seu bolso. Você decide como e quando pagar.",
  },
  {
    icon: Smartphone,
    titulo: "Contratação simples",
    descricao: "Contrate o Consignado sem precisar sair de casa. Tudo 100% digital pelo celular.",
  },
  {
    icon: Zap,
    titulo: "Dinheiro rápido",
    descricao: "Receba o crédito na sua conta em até 48 horas após a aprovação.",
  },
  {
    icon: Shield,
    titulo: "Análise descomplicada",
    descricao: "Sem burocracia para contratar. Aprovação ágil e atendimento humano de verdade.",
  },
];

export function Vantagens() {
  return (
    <section id="vantagens" className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            Quais são as vantagens do Crédito Consignado Major?
          </h2>
          <p className="mt-4 text-[#666] text-lg max-w-2xl mx-auto">
            O Crédito Consignado Major foi criado para simplificar a sua vida com taxas justas e facilidade na contratação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {vantagens.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.titulo} className="flex items-start gap-5 p-7 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="w-14 h-14 rounded-full bg-[#FFF3E8] flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-[#FF7A00]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-[#1A1A1A] font-bold text-xl mb-2">{item.titulo}</h3>
                  <p className="text-[#666] text-base leading-relaxed">{item.descricao}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
