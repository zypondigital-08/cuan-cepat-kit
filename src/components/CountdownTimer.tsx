import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4">
      <div className="flex flex-col items-center">
        <div className="card-cyber px-3 py-2 md:px-5 md:py-3 glow-cyan">
          <span className="text-2xl md:text-4xl font-display font-bold text-primary">
            {formatNumber(timeLeft.hours)}
          </span>
        </div>
        <span className="text-xs md:text-sm text-muted-foreground mt-1">Jam</span>
      </div>
      <span className="text-2xl md:text-4xl font-bold text-primary animate-glow">:</span>
      <div className="flex flex-col items-center">
        <div className="card-cyber px-3 py-2 md:px-5 md:py-3 glow-cyan">
          <span className="text-2xl md:text-4xl font-display font-bold text-primary">
            {formatNumber(timeLeft.minutes)}
          </span>
        </div>
        <span className="text-xs md:text-sm text-muted-foreground mt-1">Menit</span>
      </div>
      <span className="text-2xl md:text-4xl font-bold text-primary animate-glow">:</span>
      <div className="flex flex-col items-center">
        <div className="card-cyber px-3 py-2 md:px-5 md:py-3 glow-cyan">
          <span className="text-2xl md:text-4xl font-display font-bold text-primary">
            {formatNumber(timeLeft.seconds)}
          </span>
        </div>
        <span className="text-xs md:text-sm text-muted-foreground mt-1">Detik</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
