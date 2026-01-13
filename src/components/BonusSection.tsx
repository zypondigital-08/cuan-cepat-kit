import { Gift, Video, Users, Zap, BookOpen, Rocket } from "lucide-react";

const bonuses = [
  {
    icon: BookOpen,
    title: "1500++ Ebook PLR Siap Jual",
    value: "Rp 5.000.000",
    description: "Semua niche: bisnis, kesehatan, self-improvement, dll",
  },
  {
    icon: Video,
    title: "Video Mentoring Jualan",
    value: "Rp 1.500.000",
    description: "Step-by-step dari nol sampai pecah telur pertama",
  },
  {
    icon: Users,
    title: "Akses Grup Support Lifetime",
    value: "Rp 500.000",
    description: "Komunitas seller yang saling bantu dan sharing",
  },
  {
    icon: Zap,
    title: "Template Caption Viral",
    value: "Rp 300.000",
    description: "Tinggal copas, langsung closing!",
  },
  {
    icon: Rocket,
    title: "Strategi TikTok & Reels",
    value: "Rp 750.000",
    description: "Cara bikin konten yang FYP dan convert",
  },
  {
    icon: Gift,
    title: "Update Produk Selamanya",
    value: "PRICELESS",
    description: "Dapat produk baru secara GRATIS setiap ada update",
  },
];

const BonusSection = () => {
  const totalValue = "Rp 8.050.000+";

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-5xl relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-4">
            🎁 BONUS GILA-GILAAN
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ini Yang Lo <span className="text-gradient-cyber">DAPET SEMUA</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Bukan cuma ebook doang, tapi FULL PACKAGE buat lo yang mau serius cuan dari jualan digital!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="card-cyber p-6 group hover:glow-purple transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-cyber">
                  <bonus.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {bonus.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{bonus.description}</p>
                  <span className="text-sm font-semibold text-accent line-through opacity-70">
                    {bonus.value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value */}
        <div className="mt-12 text-center">
          <div className="card-cyber inline-block px-8 py-6 glow-cyan">
            <p className="text-muted-foreground text-sm mb-2">Total Nilai Keseluruhan:</p>
            <p className="text-3xl md:text-4xl font-display font-bold text-destructive line-through mb-2">
              {totalValue}
            </p>
            <p className="text-muted-foreground text-sm mb-3">Lo cuma bayar:</p>
            <p className="text-5xl md:text-6xl font-display font-bold text-gradient-cyber">
              Rp 20.000
            </p>
            <p className="text-primary text-sm mt-2 font-semibold">
              ⚡ HARGA PROMO TERBATAS ⚡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
