import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { HeroSection } from "@/components/molecules/hero-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
