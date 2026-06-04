import { MessageCircle, FileText, Banknote } from "lucide-react";

const passos = [
  {
    numero: "01",
    icon: MessageCircle,
    titulo: "Fale Conosco",
    descricao:
      "Entre em contato pelo WhatsApp. Nosso especialista te atende de forma personalizada e explica todas as condições.",
  },
  {
    numero: "02",
    icon: FileText,
    titulo: "Envie os Documentos",
    descricao:
      "Só precisamos dos documentos básicos. Tudo pelo celular, sem sair de casa e sem burocracia.",
  },
  {
    numero: "03",
    icon: Banknote,
    titulo: "Dinheiro na Conta",
    descricao:
      "Aprovação rápida e o dinheiro cai na sua conta em poucos dias. Simples assim.",
  },
];

export function ComoFunciona() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9960A] font-semibold text-sm uppercase tracking-widest mb-3">
            Sem complicação
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2647]">
            Como Funciona?
          </h2>
          <p className="mt-4 text-[#4A5568] text-lg max-w-xl mx-auto">
            Em apenas 3 passos simples você tem o crédito que precisa.
          </p>
        </div>

        {/* Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Linha conectora (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.6%+2rem)] right-[calc(16.6%+2rem)] h-px bg-[#D1DCE8]" />

          {passos.map((passo) => {
            const Icon = passo.icon;
            return (
              <div key={passo.numero} className="relative flex flex-col items-center text-center">
                {/* Número + ícone */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#0F2647] flex items-center justify-center shadow-lg relative z-10">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#C9952A] flex items-center justify-center text-white text-xs font-bold z-20">
                    {passo.numero}
                  </span>
                </div>

                <h3 className="text-[#0F2647] font-bold text-xl mb-3">{passo.titulo}</h3>
                <p className="text-[#4A5568] text-base leading-relaxed max-w-xs mx-auto">
                  {passo.descricao}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
