import { useState, useEffect } from "react";

const StickyFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waNumber = "6281234567890"; // Ganti dengan nomor WA asli
  const waMessage = encodeURIComponent(
    "Halo kak! Saya mau order Digital Starter Kit yang promo Rp 20.000 🔥"
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-lg border-t border-border md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1">
          <p className="text-xs text-muted-foreground">Promo terbatas!</p>
          <p className="font-display font-bold">
            <span className="text-destructive line-through text-sm">Rp 750rb</span>{" "}
            <span className="text-primary text-lg">Rp 20rb</span>
          </p>
        </div>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cyber px-6 py-3 text-sm rounded-xl"
        >
          <span>🚀 ORDER NOW</span>
        </a>
      </div>
    </div>
  );
};

export default StickyFooter;
