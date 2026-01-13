import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BonusSection from "@/components/BonusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CheckoutSection from "@/components/CheckoutSection";
import StickyFooter from "@/components/StickyFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden pb-24 md:pb-0">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BonusSection />
      <TestimonialsSection />
      <CheckoutSection />
      <FAQSection />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container max-w-4xl text-center">
          <p className="text-muted-foreground text-sm mb-2">
            © 2024 Digital Starter Kit. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Disclaimer: Hasil yang ditampilkan merupakan testimoni dari member kami.
            Hasil setiap individu dapat berbeda tergantung usaha dan konsistensi.
          </p>
        </div>
      </footer>

      <StickyFooter />
    </main>
  );
};

export default Index;
