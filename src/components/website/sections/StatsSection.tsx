import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";
import { Scale, Trophy, Clock, Users } from "lucide-react";

const useCountUp = (end: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
};

const StatCard = ({ value, suffix, label, icon: Icon, delay }: { value: number; suffix: string; label: string; icon: React.ElementType; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, 2000, visible);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center p-6 md:p-8 group"
    >
      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-ws-gold/10 flex items-center justify-center group-hover:bg-ws-gold/20 transition-colors duration-300">
        <Icon className="h-6 w-6 text-ws-gold" />
      </div>
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-ws-navy mb-2">
        <span className="text-ws-gold">+</span>{count}{suffix}
      </div>
      <p className="text-sm text-ws-text-muted font-medium">{label}</p>
    </motion.div>
  );
};

export const StatsSection = () => {
  const { data: stats } = useWebsiteContent("stats");

  const items = [
    { value: (stats as any)?.cases ?? 240, suffix: "", label: "قضية منجزة", icon: Scale },
    { value: (stats as any)?.success_rate ?? 94, suffix: "%", label: "نسبة النجاح", icon: Trophy },
    { value: (stats as any)?.years ?? 12, suffix: "", label: "سنة خبرة", icon: Clock },
    { value: (stats as any)?.clients ?? 180, suffix: "", label: "عميل راضٍ", icon: Users },
  ];

  return (
    <section className="py-12 md:py-16 bg-white relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-ws-gold/0 via-ws-gold to-ws-gold/0" />
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-x-reverse divide-ws-gold/15">
          {items.map((item, i) => (
            <StatCard key={item.label} {...item} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};
