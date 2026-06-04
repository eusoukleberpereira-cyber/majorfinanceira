import { Hero } from "@/components/sections/Hero";
import { Publicos } from "@/components/sections/Publicos";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Vantagens } from "@/components/sections/Vantagens";
import { BancosParceiros } from "@/components/sections/BancosParceiros";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Publicos />
        <ComoFunciona />
        <Vantagens />
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
