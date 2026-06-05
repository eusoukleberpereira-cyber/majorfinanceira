"use client";
import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const VALORES = [500, 1000, 2000, 3000, 5000, 8000, 10000, 15000, 20000, 30000, 50000];
const PARCELAS = [12, 24, 36, 48, 60, 72, 84];
const TAXA_MENSAL = 0.018;

function calcPMT(pv: number, n: number): number {
  const r = TAXA_MENSAL;
  return (pv * r) / (1 - Math.pow(1 + r, -n));
}

function fmt(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function Simulator() {
  const [valor, setValor] = useState(5000);
  const [parcelas, setParcelas] = useState(24);

  const pmt = calcPMT(valor, parcelas);
  const total = pmt * parcelas;

  const msg = encodeURIComponent(
    `Olá! 😊 Fiz uma simulação no site da MajorFinanceira:\n\n` +
    `💰 Valor desejado: ${fmt(valor)}\n` +
    `📅 Parcelas: ${parcelas}x de ${fmt(pmt)}\n` +
    `📊 Total estimado: ${fmt(total)}\n\n` +
    `Gostaria de verificar se consigo essa proposta. Podem me atender?`
  );
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
      <h3 className="text-[#1A1A1A] font-bold text-xl mb-6">Simule seu Consignado!</h3>

      {/* Valor */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
          Qual valor você precisa?
        </label>
        <select
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
          className="w-full border-2 border-gray-200 focus:border-[#FF7A00] rounded-xl px-4 py-3 text-[#1A1A1A] font-semibold text-base outline-none transition-colors appearance-none bg-white cursor-pointer"
        >
          {VALORES.map((v) => (
            <option key={v} value={v}>{fmt(v)}</option>
          ))}
        </select>
      </div>

      {/* Parcelas */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
          Em quantas parcelas?
        </label>
        <select
          value={parcelas}
          onChange={(e) => setParcelas(Number(e.target.value))}
          className="w-full border-2 border-gray-200 focus:border-[#FF7A00] rounded-xl px-4 py-3 text-[#1A1A1A] font-semibold text-base outline-none transition-colors appearance-none bg-white cursor-pointer"
        >
          {PARCELAS.map((p) => (
            <option key={p} value={p}>{p}x meses</option>
          ))}
        </select>
      </div>

      {/* Resultado */}
      <div className="bg-[#FFF3E8] rounded-2xl px-5 py-4 mb-6 border border-[#FF7A00]/20">
        <p className="text-sm text-[#666] mb-1">Parcela estimada</p>
        <p className="text-3xl font-bold text-[#FF7A00]">{fmt(pmt)}<span className="text-base font-normal text-[#666]">/mês</span></p>
        <p className="text-xs text-[#999] mt-1">Taxa representativa de 1,80% a.m. · Sujeito à análise</p>
      </div>

      {/* CTA */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 w-full bg-[#FF7A00] hover:bg-[#E56D00] text-white font-bold text-base py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
      >
        <WaIcon />
        Simule seu Consignado!
      </a>

      <p className="text-center text-xs text-gray-400 mt-3">
        Já tem uma proposta?{" "}
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-[#FF7A00] font-semibold hover:underline">
          Acompanhe pelo WhatsApp.
        </a>
      </p>
    </div>
  );
}

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
