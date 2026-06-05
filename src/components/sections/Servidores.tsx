import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/constants";

export function Servidores() {
  return (
    <section className="bg-[#F7F7F7] py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Esquerda — texto */}
          <div>
            <span className="inline-block bg-[#FFF3E8] text-[#FF7A00] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
              Servidores Públicos e Professores
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#1A1A1A] leading-tight mb-5">
              Condições exclusivas para quem serve ao público
            </h2>
            <p className="text-[#666] text-lg leading-relaxed mb-6">
              Professores, policiais, bombeiros e servidores municipais, estaduais e federais
              têm acesso às melhores taxas do mercado — com desconto direto em folha de pagamento.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { titulo: "Desconto em folha garantido", desc: "Parcela descontada automaticamente todo mês, sem boleto." },
                { titulo: "Taxas especiais para servidores", desc: "Condições melhores do que para o público geral." },
                { titulo: "Até 96 parcelas", desc: "Prazo estendido para servidores públicos conveniados." },
                { titulo: "Aprovação simplificada", desc: "Vínculo com o serviço público facilita a análise de crédito." },
              ].map((item) => (
                <div key={item.titulo} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#FF7A00] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#1A1A1A] font-semibold text-sm">{item.titulo}</p>
                    <p className="text-[#999] text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={getWhatsAppUrl("publicos")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#FF7A00] hover:bg-[#E56D00] text-white font-bold text-base px-7 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <WaIcon />
              Consultar como servidor
            </a>
          </div>

          {/* Direita — foto professora */}
          <div className="hidden lg:block relative">
            <Image
              src="/foto-professor.jpg"
              alt="Professora servidora pública sorrindo em sala de aula"
              width={560}
              height={540}
              className="w-full h-[520px] object-cover object-top rounded-3xl shadow-lg"
            />
            <div className="absolute top-8 left-8 bg-white rounded-2xl shadow-xl px-5 py-4">
              <p className="text-[#1A1A1A] font-bold text-sm">🏛️ Servidores conveniados</p>
              <p className="text-[#999] text-xs mt-0.5">Municipal · Estadual · Federal · SIAPE</p>
            </div>
          </div>

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
