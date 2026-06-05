import { getWhatsAppUrl } from "@/lib/constants";

const publicos = [
  { emoji: "👴", titulo: "Aposentados e Pensionistas", subtitulo: "INSS", desc: "Parcelas descontadas direto no benefício. Até 84x." },
  { emoji: "⚔️", titulo: "Forças Armadas", subtitulo: "Militares", desc: "Exército, Marinha, Aeronáutica e Reservistas." },
  { emoji: "🏛️", titulo: "Servidores Municipais", subtitulo: "Servidor Público", desc: "Desconto em folha. Taxas especiais." },
  { emoji: "🏢", titulo: "Servidores Estaduais", subtitulo: "Servidor Público", desc: "Crédito para servidores de estados conveniados." },
  { emoji: "🗂️", titulo: "Servidores Federais", subtitulo: "Servidor Público", desc: "SIAPE — taxas exclusivas para federais." },
  { emoji: "💼", titulo: "Trabalhadores CLT", subtitulo: "Setor Privado", desc: "Desconto direto no salário. 100% digital." },
];

export function Publicos() {
  return (
    <section id="publicos" className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2647]">
            O Consignado Major é para mim?
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            O Empréstimo Consignado pode ser contratado por pessoas com vínculo empregatício ou que recebam benefício do INSS.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {publicos.map((item) => (
            <div
              key={item.titulo}
              className="bg-[#F5F8FF] rounded-2xl p-5 text-center border border-gray-100 hover:border-[#C9952A]/30 hover:shadow-md transition-all duration-200"
            >
              <span className="text-3xl block mb-2">{item.emoji}</span>
              <p className="text-[#C9952A] text-xs font-bold uppercase tracking-wide mb-1">{item.subtitulo}</p>
              <h3 className="text-[#0F2647] font-bold text-sm leading-snug mb-1">{item.titulo}</h3>
              <p className="text-gray-500 text-xs leading-relaxed hidden sm:block">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-base mb-4">Não tem certeza se você tem direito?</p>
          <a
            href={getWhatsAppUrl("publicos")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9952A] hover:bg-[#e0a830] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Consultar gratuitamente
          </a>
        </div>
      </div>
    </section>
  );
}
