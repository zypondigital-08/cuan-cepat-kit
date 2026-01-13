import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "PLR itu apaan sih? Kok boleh dijual ulang?",
    answer:
      "PLR (Private Label Rights) itu lisensi yang ngasih lo hak penuh buat edit, rename, dan JUAL ULANG produk digital. Jadi semua 1500++ ebook ini literally jadi milik lo, mau lo jual berapa pun, CUAN-nya 100% masuk kantong lo! 💰",
  },
  {
    question: "Gue gaptek parah, bisa gak?",
    answer:
      "Bisa banget, bestie! Di sini ada mentoring step-by-step dari nol. Mulai dari cara download, edit, sampe cara jualan. Kalau masih bingung, tinggal tanya di grup support. Kita sabar kok! 😊",
  },
  {
    question: "Ini bukan tipu-tipu kan? Kok murah banget?",
    answer:
      "Valid question! Harga 20rb ini emang promo gila-gilaan buat ngebangun database customer kita. Harga asli 750rb dan bakal balik ke harga normal setelah promo berakhir. So, grab it while you can! ⚡",
  },
  {
    question: "Akses-nya selamanya beneran?",
    answer:
      "Yes, 100% LIFETIME ACCESS. Sekali bayar, selamanya bisa download. Plus kalau ada update produk baru, lo dapet juga secara GRATIS. Gak ada biaya bulanan, gak ada hidden cost! 🔥",
  },
  {
    question: "Gimana cara jualnya? Ribet gak?",
    answer:
      "Gampang banget! Lo cukup posting di sosmed (IG, TikTok, FB, WA Status), terus kasih link pembelian. Bisa juga jualan di marketplace kayak Shopee/Tokopedia. Semua strateginya diajarin di dalam! 📱",
  },
  {
    question: "Ada garansi uang kembali gak?",
    answer:
      "Karena ini produk digital dan langsung bisa di-download, kita gak bisa kasih refund ya. TAPI, kita GARANSI bakal mentoring sampai lo BISA. Kalau ada kendala, tim support kita siap bantu 24/7! 💪",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 px-4" id="faq">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          <span className="text-gradient-cyber">FAQ</span> - Pertanyaan Yang Sering Ditanya
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Masih ragu? Cek dulu jawaban dari pertanyaan-pertanyaan ini! 👇
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="card-cyber border-none px-6 data-[state=open]:glow-cyan transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary transition-colors py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
