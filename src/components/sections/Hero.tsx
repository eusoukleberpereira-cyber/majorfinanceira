import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/constants";

export function Hero() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Esquerda — texto */}
          <div>
            <span className="inline-block bg-[#FBF1DC] text-[#C9952A] text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
              Correspondente Bancário Autorizado
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-[3.25rem] font-bold text-[#0F2647] leading-[1.15] mb-5">
              Empréstimo Consignado com as{" "}
              <span className="text-[#C9952A]">Menores Taxas</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              Atendemos Aposentados do INSS, Servidores Públicos, Militares e Trabalhadores CLT.
              Aprovação rápida, 100% digital e atendimento humano de verdade.
            </p>

            <div className="flex flex-wrap gap-8 mb-10 pb-10 border-b border-gray-100">
              {[
                { value: "Até 35%", label: "da margem disponível" },
                { value: "Até 84x", label: "parcelas no INSS" },
                { value: "1 a 5 dias", label: "dinheiro na conta" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-[#0F2647]">{stat.value}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href={getWhatsAppUrl("hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-base px-7 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <WaIcon />
                Simule pelo WhatsApp
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 text-[#0F2647] hover:text-[#C9952A] font-semibold text-base px-2 py-4 transition-colors"
              >
                Como funciona
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Direita — imagem */}
          <div className="hidden lg:block relative">
            <Image
              src="/hero-aposentado.jpg"
              alt="Aposentada feliz com crédito consignado aprovado"
              width={540}
              height={520}
              className="w-full h-[520px] object-cover rounded-3xl"
              priority
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-4 whitespace-nowrap">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-[#0F2647] font-bold text-sm">Aprovação rápida</p>
                <p className="text-gray-500 text-xs">100% pelo celular · Sem sair de casa</p>
              </div>
            </div>
          </div>

        </div>

        {/* Linha de confiança */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: "🏦", label: "6 bancos parceiros" },
            { icon: "📱", label: "100% digital" },
            { icon: "👤", label: "Atendimento humano" },
            { icon: "⚡", label: "Resposta no mesmo dia" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm text-gray-600 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
