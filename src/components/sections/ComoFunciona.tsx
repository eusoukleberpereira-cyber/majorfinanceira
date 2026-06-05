import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/constants";

const passos = [
  {
    numero: "01",
    titulo: "Fale com um especialista",
    descricao: "Entre em contato pelo WhatsApp. Vamos entender sua situação e apresentar as melhores opções disponíveis.",
  },
  {
    numero: "02",
    titulo: "Envie os documentos",
    descricao: "RG, CPF, comprovante de renda e endereço. Tudo pelo celular, sem precisar sair de casa.",
  },
  {
    numero: "03",
    titulo: "Dinheiro na sua conta",
    descricao: "Após aprovação e assinatura digital, o crédito cai na sua conta em até 5 dias úteis.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Esquerda — foto */}
          <div className="relative hidden lg:block">
            <Image
              src="/hero-aposentado.jpg"
              alt="Cliente MajorFinanceira contratando consignado pelo celular"
              width={540}
              height={560}
              className="w-full h-[520px] object-cover rounded-3xl"
            />
            {/* Badge flutuante */}
            <div className="absolute bottom-8 right-8 bg-white rounded-2xl shadow-xl px-5 py-4">
              <p className="text-[#0F2647] font-bold text-sm">✅ 100% pelo celular</p>
              <p className="text-gray-400 text-xs mt-0.5">Sem sair de casa · Sem burocracia</p>
            </div>
          </div>

          {/* Direita — passos + CTA */}
          <div>
            <span className="text-[#C9952A] font-semibold text-sm uppercase tracking-widest">
              Simples assim
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2647] mb-10">
              Como contratar o Consignado Major
            </h2>

            <div className="space-y-8">
              {passos.map((passo, i) => (
                <div key={passo.numero} className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#FBF1DC] border-2 border-[#C9952A]/30 flex items-center justify-center">
                    <span className="text-[#C9952A] font-bold text-base">{passo.numero}</span>
                  </div>
                  <div className={i < passos.length - 1 ? "pb-8 border-b border-gray-100 flex-1" : "flex-1"}>
                    <h3 className="text-[#0F2647] font-bold text-xl mb-1">{passo.titulo}</h3>
                    <p className="text-gray-500 leading-relaxed">{passo.descricao}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={getWhatsAppUrl("hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#C9952A] hover:bg-[#e0a830] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <WaIcon />
                Iniciar agora pelo WhatsApp
              </a>
              <p className="mt-3 text-gray-400 text-sm">Gratuito · Sem compromisso</p>
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
