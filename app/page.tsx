import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { HeroSection } from "@/components/molecules/hero-section";
import { NewArrival } from "@/components/common/new-arrival";
import { BestSellers } from "@/components/common/best-sellers";
import { TrustBar } from "@/components/common/trust-bar";
import { FAQSection } from "@/components/common/faq-section";
import { NewsletterSection } from "@/components/common/newsletter-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <NewArrival />
        <BestSellers />
        <FAQSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
