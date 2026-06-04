import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "MajorFinanceira — Crédito Consignado com as Melhores Taxas",
  description:
    "Aposentados, Servidores Públicos, Militares e Trabalhadores CLT. Crédito consignado com aprovação rápida, atendimento humano e as menores taxas do mercado. Correspondente bancário autorizado.",
  keywords: [
    "crédito consignado",
    "empréstimo consignado",
    "consignado INSS",
    "consignado servidor público",
    "consignado CLT",
    "consignado militar",
    "consignado BPC",
    "menor taxa consignado",
    "correspondente bancário",
    "MajorFinanceira",
  ],
  openGraph: {
    title: "MajorFinanceira — Crédito Consignado com as Melhores Taxas",
    description:
      "Crédito consignado para Aposentados, Servidores Públicos, Militares e CLT. Aprovação rápida, menores taxas e atendimento humano.",
    type: "website",
    locale: "pt_BR",
    siteName: "MajorFinanceira",
  },
  twitter: {
    card: "summary_large_image",
    title: "MajorFinanceira — Crédito Consignado",
    description:
      "Crédito consignado com aprovação rápida e menores taxas do mercado. Fale com um especialista pelo WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://majorfinanceira.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
