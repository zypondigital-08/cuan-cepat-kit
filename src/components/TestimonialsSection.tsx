import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rina Santika",
    role: "Mahasiswi",
    content:
      "Awalnya ragu karena murah banget, tapi ternyata isinya daging semua! Udah balik modal berkali-kali lipat. Thanks banget! 🙏",
    rating: 5,
  },
  {
    name: "Dimas Prasetyo",
    role: "Fresh Graduate",
    content:
      "Gue yang gaptek aja bisa! Mentoringnya jelas banget, tinggal ikutin aja. Sekarang udah punya side income lumayan.",
    rating: 5,
  },
  {
    name: "Siti Nurhaliza",
    role: "Ibu Rumah Tangga",
    content:
      "Sambil ngurus anak bisa jualan. Modal 20rb, bulan pertama udah balik 500rb. Alhamdulillah! 💚",
    rating: 5,
  },
  {
    name: "Budi Hartono",
    role: "Karyawan Swasta",
    content:
      "Side hustle yang gak ribet. Tinggal posting, dapat cuan. Sekarang income dari sini udah lebih gede dari gaji kantor! 😅",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-full h-96 bg-gradient-to-r from-neon-cyan/5 via-neon-purple/5 to-neon-cyan/5 blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="container max-w-5xl relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-neon-green/20 text-neon-green font-semibold text-sm mb-4">
            💬 BUKTI NYATA
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Kata Mereka Yang Udah{" "}
            <span className="text-gradient-cyber">BUKTIIN</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Bukan testimoni settingan, ini real story dari member kita!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-cyber p-6 relative group hover:glow-cyan transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-cyber flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-gradient-cyber">
              7000+
            </p>
            <p className="text-sm text-muted-foreground">Member Aktif</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-gradient-cyber">
              98%
            </p>
            <p className="text-sm text-muted-foreground">Puas & Repeat</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-gradient-cyber">
              4.9/5
            </p>
            <p className="text-sm text-muted-foreground">Rating Tertinggi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
