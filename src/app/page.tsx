import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { OQueE } from "@/components/sections/OQueE";
import { Servidores } from "@/components/sections/Servidores";
import { Vantagens } from "@/components/sections/Vantagens";
import { ComoUsarDinheiro } from "@/components/sections/ComoUsarDinheiro";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Publicos } from "@/components/sections/Publicos";
import { BancosParceiros } from "@/components/sections/BancosParceiros";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OQueE />
        <Servidores />
        <Vantagens />
        <ComoUsarDinheiro />
        <ComoFunciona />
        <Publicos />
        <BancosParceiros />
        <Depoimentos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
