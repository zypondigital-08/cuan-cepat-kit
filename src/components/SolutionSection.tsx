import { CheckCircle, Star } from "lucide-react";

const features = [
  "1500++ Ebook PLR berbagai niche (bisnis, kesehatan, self-help, dll)",
  "Hak jual ulang 100% - CUAN masuk kantong lo semua",
  "Mentoring step-by-step dari nol sampai pecah telur",
  "Grup support aktif 24/7 - gak bakal sendirian",
  "Template caption & strategi jualan yang proven",
  "Update produk baru GRATIS selamanya",
];

const SolutionSection = () => {
  return (
    <section className="py-16 px-4 relative" id="produk">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-5xl relative">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-4">
            <Star className="w-4 h-4" />
            SOLUSI TERBAIK
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Perkenalkan:{" "}
            <span className="text-gradient-cyber">Digital Starter Kit</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Bundle lengkap 1500++ produk digital siap jual + mentoring yang bakal bikin lo
            dari <span className="text-primary font-semibold">NOL</span> jadi{" "}
            <span className="text-primary font-semibold">HERO</span>! 🦸‍♂️
          </p>
        </div>

        {/* Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Features List */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold text-foreground mb-6">
              Apa Aja Yang Lo Dapet?
            </h3>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 card-cyber group hover:glow-cyan transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-neon-green shrink-0 mt-0.5" />
                <p className="text-foreground/90">{feature}</p>
              </div>
            ))}
          </div>

          {/* Visual Card */}
          <div className="card-cyber p-8 glow-purple relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/20 rounded-full blur-[60px]" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-cyan/20 rounded-full blur-[60px]" />

            <div className="relative text-center">
              <div className="text-8xl md:text-9xl font-display font-bold text-gradient-cyber mb-4">
                1500+
              </div>
              <p className="text-xl font-semibold text-foreground mb-2">
                Produk Digital Siap Jual
              </p>
              <p className="text-muted-foreground mb-6">
                Langsung download, langsung jualan, langsung CUAN!
              </p>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-lg bg-dark-elevated/50">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-xs text-muted-foreground">Profit Lo Semua</p>
                </div>
                <div className="p-4 rounded-lg bg-dark-elevated/50">
                  <p className="text-2xl font-bold text-accent">Lifetime</p>
                  <p className="text-xs text-muted-foreground">Akses Selamanya</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Udah dipercaya oleh 7000+ member di seluruh Indonesia 🇮🇩
          </p>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-sm text-primary font-semibold mt-2">Rating 4.9/5 dari member</p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
