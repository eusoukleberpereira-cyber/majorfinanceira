import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative bg-[#C9960A] min-h-[88vh] flex items-center overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-white/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0F2647]/10 blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Coluna esquerda — texto */}
          <div>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl text-[#1A1200] font-bold leading-tight mb-6">
              Crédito Consignado com{" "}
              <span className="text-white">Aprovação Rápida</span>{" "}
              e as Menores Taxas
            </h1>

            <p className="text-lg text-[#1A1200]/70 leading-relaxed mb-10 max-w-lg">
              Atendemos Aposentados do INSS, Servidores Públicos, Militares e
              Trabalhadores CLT. Taxa justa, sem burocracia e atendimento humano de verdade.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href={getWhatsAppUrl("hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0F2647] hover:bg-[#1A3A6B] active:bg-[#091929] text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <WhatsAppIcon />
                Consultar Agora pelo WhatsApp
              </a>
              <p className="text-[#1A1200]/50 text-sm">Gratuito · Sem compromisso</p>
            </div>

            {/* Indicadores rápidos */}
            <div className="mt-12 flex flex-wrap gap-5 border-t border-[#1A1200]/15 pt-10">
              {["Aprovação rápida", "100% digital", "Atendimento humano", "Menor taxa"].map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#1A1200]/75 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita — imagem */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-white/20 blur-2xl" />
              <Image
                src="/hero-aposentado.jpg"
                alt="Aposentada feliz após contratar crédito consignado"
                width={480}
                height={560}
                className="relative rounded-3xl object-cover shadow-2xl"
                priority
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-5 py-3 shadow-xl whitespace-nowrap">
                <p className="text-[#0F2647] font-bold text-sm">✅ Aprovação em minutos</p>
                <p className="text-[#718096] text-xs mt-0.5">Sem sair de casa · 100% pelo celular</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
