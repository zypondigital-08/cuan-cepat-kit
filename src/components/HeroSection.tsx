import CountdownTimer from "./CountdownTimer";
import { Sparkles, TrendingUp, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen pt-8 pb-20 px-4 relative overflow-hidden flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-cyan/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-pink/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container max-w-4xl relative">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-semibold text-sm animate-float">
            <Sparkles className="w-4 h-4" />
            PROMO GILA 24 JAM SAJA!
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center leading-tight mb-6">
          Modal <span className="text-gradient-cyber">Rp 20.000</span> Dapet{" "}
          <br className="hidden md:block" />
          <span className="text-gradient-cyber">1500++ Produk Digital</span>{" "}
          <br className="hidden md:block" />
          Siap Jual Ulang!
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-center text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Gak perlu bikin produk, gak perlu modal gede. Tinggal{" "}
          <span className="text-primary font-semibold">download, upload, CUAN!</span> 💰
          <br />
          <span className="text-sm">
            Plus diajarin jualan dari NOL sampai pecah telur pertama!
          </span>
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="w-5 h-5 text-neon-green" />
            <span>7000+ Member</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span>Akses Lifetime</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Zap className="w-5 h-5 text-accent" />
            <span>Mentoring Gratis</span>
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-10">
          <p className="text-center text-sm text-muted-foreground mb-4">
            ⏰ Harga naik dalam:
          </p>
          <CountdownTimer />
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={scrollToCheckout}
            className="btn-cyber text-xl md:text-2xl px-10 py-5 md:px-14 md:py-6 rounded-2xl"
          >
            <span className="flex items-center gap-3">
              🚀 MAU CUAN SEKARANG!
            </span>
          </button>
          <p className="mt-4 text-sm text-muted-foreground">
            Harga normal <span className="line-through text-destructive">Rp 750.000</span> →{" "}
            <span className="text-primary font-bold">Rp 20.000 SAJA!</span>
          </p>
        </div>

        {/* Price comparison */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-6 text-sm">
          <div className="card-cyber px-4 py-3 text-center">
            <p className="text-muted-foreground">Lebih murah dari:</p>
            <p className="font-semibold text-foreground">☕ 1 Cup Kopi</p>
          </div>
          <div className="card-cyber px-4 py-3 text-center">
            <p className="text-muted-foreground">Lebih murah dari:</p>
            <p className="font-semibold text-foreground">🍜 1 Porsi Mie Ayam</p>
          </div>
          <div className="card-cyber px-4 py-3 text-center">
            <p className="text-muted-foreground">Lebih murah dari:</p>
            <p className="font-semibold text-foreground">🅿️ 2 Jam Parkir</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
