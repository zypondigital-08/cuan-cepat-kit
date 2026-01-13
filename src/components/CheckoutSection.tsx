import { Shield, Clock, Gift, Zap } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const CheckoutSection = () => {
  const waNumber = "6281234567890"; // Ganti dengan nomor WA asli
  const waMessage = encodeURIComponent(
    "Halo kak! Saya mau order Digital Starter Kit yang promo Rp 20.000 🔥"
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <section className="py-16 px-4 relative" id="checkout">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent pointer-events-none" />

      <div className="container max-w-2xl relative">
        <div className="card-cyber p-8 md:p-12 glow-cyan relative overflow-hidden">
          {/* Corner decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-neon-cyan/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-neon-purple/10 rounded-full blur-[80px]" />

          <div className="relative">
            {/* Header */}
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-destructive/20 text-destructive font-bold text-sm mb-4 animate-shake">
                🔥 SLOT HAMPIR HABIS!
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Ambil <span className="text-gradient-cyber">Digital Starter Kit</span> Sekarang!
              </h2>
              <CountdownTimer />
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <p className="text-muted-foreground text-sm mb-2">Harga Normal:</p>
              <p className="text-3xl font-display font-bold text-destructive line-through mb-2">
                Rp 750.000
              </p>
              <p className="text-muted-foreground text-sm mb-2">Harga Promo Hari Ini:</p>
              <p className="text-5xl md:text-6xl font-display font-bold text-gradient-cyber">
                Rp 20.000
              </p>
              <p className="text-sm text-primary mt-2">Hemat Rp 730.000! 🤯</p>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-neon-green" />
                <span>Transaksi Aman</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>Akses Instan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Gift className="w-5 h-5 text-accent" />
                <span>Bonus Eksklusif</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-5 h-5 text-neon-pink" />
                <span>Support 24/7</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber w-full text-center text-xl md:text-2xl py-5 md:py-6 rounded-2xl block"
            >
              <span className="flex items-center justify-center gap-3">
                💬 ORDER VIA WHATSAPP
              </span>
            </a>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Klik tombol di atas untuk chat langsung dengan admin kami
            </p>

            {/* Urgency */}
            <div className="mt-8 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
              <p className="text-center text-sm text-foreground">
                ⚠️ <span className="font-semibold">PERINGATAN:</span> Harga akan kembali ke{" "}
                <span className="text-destructive font-bold">Rp 750.000</span> setelah timer
                habis. Gak ada perpanjangan!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
