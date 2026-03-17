import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { PainPoints } from "@/components/sections/pain-points";
import { ValueProposition } from "@/components/sections/value-proposition";
import { TargetAudience } from "@/components/sections/target-audience";
import { Services } from "@/components/sections/services";
import { TechDifferential } from "@/components/sections/tech-differential";
import { Process } from "@/components/sections/process";
import { SocialProof } from "@/components/sections/social-proof";
import { Partnership } from "@/components/sections/partnership";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FinalCta } from "@/components/sections/final-cta";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <PainPoints />
        <ValueProposition />
        <TargetAudience />
        <Services />
        <TechDifferential />
        <Process />
        <SocialProof />
        <Partnership />
        <BlogPreview />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
