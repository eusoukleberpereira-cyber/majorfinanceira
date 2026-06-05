import { Simulator } from "@/components/ui/Simulator";

export function Hero() {
  return (
    <section className="bg-white py-14 sm:py-18 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Esquerda — texto */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-[1.15] mb-5">
              Empréstimo Consignado INSS:{" "}
              <span className="text-[#FF7A00]">simplicidade e segurança para você!</span>
            </h1>

            <p className="text-lg text-[#666] leading-relaxed mb-8 max-w-xl">
              Simule, contrate e acompanhe tudo pelo celular, sem sair de casa.
              Sem burocracia, com as menores taxas e atendimento humano de verdade.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Parcelas descontadas direto no benefício",
                "Dinheiro na conta em até 5 dias úteis",
                "18+ bancos parceiros para a melhor condição",
                "Nome negativado pode contratar",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#1A1A1A] text-base">
                  <div className="w-5 h-5 rounded-full bg-[#FF7A00] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-8 pt-6 border-t border-gray-100">
              {[
                { value: "Até 35%", label: "da margem consignável" },
                { value: "Até 84x", label: "parcelas no INSS" },
                { value: "18+", label: "bancos parceiros" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-[#FF7A00]">{stat.value}</p>
                  <p className="text-xs text-[#999] mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Direita — simulador */}
          <div>
            <Simulator />
          </div>

        </div>
      </div>
    </section>
  );
}
