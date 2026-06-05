import { getWhatsAppUrl } from "@/lib/constants";

export function CTAFinal() {
  return (
    <section className="bg-[#0F2647] py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
          Atendimento gratuito · Sem compromisso
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          Pronto para resolver sua{" "}
          <span className="text-[#C9952A]">situação financeira?</span>
        </h2>

        <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Fale agora com um de nossos especialistas. O dinheiro que você precisa
          está a uma conversa de distância.
        </p>

        <a
          href={getWhatsAppUrl("ctaFinal")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-xl px-10 py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <WaIcon />
          Falar com especialista agora
        </a>

        <p className="mt-6 text-white/35 text-sm">
          Gratuito · Sem compromisso · Resposta rápida
        </p>

        <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { numero: "100%", label: "Digital", desc: "Tudo pelo celular" },
            { numero: "6", label: "Bancos", desc: "Para melhor condição" },
            { numero: "24h", label: "Atendimento", desc: "Resposta rápida" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-3xl font-bold text-white">{item.numero}</p>
              <p className="text-[#C9952A] font-semibold text-sm mt-0.5">{item.label}</p>
              <p className="text-white/40 text-xs mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
