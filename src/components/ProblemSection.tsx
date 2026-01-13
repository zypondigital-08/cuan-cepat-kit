import { AlertTriangle, XCircle } from "lucide-react";

const problems = [
  "Pengen punya penghasilan tambahan tapi gak tau mulai dari mana?",
  "Udah coba jualan online tapi selalu BONCOS duluan?",
  "Gak punya modal besar buat stok barang?",
  "Pengen resign tapi takut gak ada income?",
  "Bingung mau jualan apa yang PASTI LAKU?",
  "Capek jadi budak korporat tapi gak punya skill?",
];

const ProblemSection = () => {
  return (
    <section className="py-16 px-4 relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-destructive/5 to-transparent pointer-events-none" />

      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 text-destructive font-semibold text-sm mb-4">
            <AlertTriangle className="w-4 h-4" />
            JUJUR AJA...
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Pernah Ngerasa{" "}
            <span className="text-destructive">Kayak Gini</span> Gak?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kalau salah satu aja relate, berarti lo WAJIB baca sampai habis...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="card-cyber p-5 flex items-start gap-4 group hover:border-destructive/50 transition-all duration-300"
            >
              <XCircle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
              <p className="text-foreground/90 leading-relaxed">{problem}</p>
            </div>
          ))}
        </div>

        {/* Agitate */}
        <div className="mt-12 card-cyber p-8 border-destructive/30 text-center">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-4">
            Coba bayangin... <span className="text-destructive font-semibold">5 tahun lagi</span>{" "}
            lo masih di posisi yang sama. Masih mengeluh soal gaji. Masih iri liat temen yang
            udah bisa liburan. Masih scrolling TikTok orang-orang flexing income-nya...
          </p>
          <p className="text-xl md:text-2xl font-display font-bold text-gradient-cyber">
            SAKIT GAK TUH? 💔
          </p>
        </div>

        {/* Transition to solution */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-2">Tapi tenang...</p>
          <h3 className="text-2xl md:text-3xl font-display font-bold">
            Gue punya <span className="text-gradient-cyber">SOLUSINYA!</span> 👇
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
