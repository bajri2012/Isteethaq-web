import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Users, Award, CheckCircle, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-office.jpg";

export const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[92vh] flex items-center bg-ws-navy overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-15 scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(218_55%_8%/0.7)] via-[hsl(218_55%_12%/0.85)] to-[hsl(218_55%_12%)]" />
      </motion.div>

      {/* Animated geometric accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ws-gold/25 to-transparent origin-center"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-ws-gold/[0.04] blur-[100px]"
        />
        {/* Floating dots */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-[25%] right-[15%] w-2 h-2 rounded-full bg-ws-gold/20"
        />
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.08, 0.2, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute top-[60%] left-[10%] w-1.5 h-1.5 rounded-full bg-ws-gold/15"
        />
      </div>

      {/* Islamic geometric pattern */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-width='0.5'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z'/%3E%3Cpath d='M40 10L70 40L40 70L10 40Z'/%3E%3Cpath d='M40 20L60 40L40 60L20 40Z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <motion.div style={{ y: textY, opacity }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center sm:text-right">
            {/* Logo emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 flex justify-center sm:justify-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] flex items-center justify-center">
                <Scale className="h-7 w-7 text-ws-gold" />
              </div>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-[2px] bg-gradient-to-l from-ws-gold to-ws-gold/30 mb-6 mx-auto sm:mr-0 sm:ml-auto"
            />

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.25] mb-5 sm:mb-6"
            >
              أساسٌ قانوني راسخ،
              <br />
              <span className="bg-gradient-to-l from-ws-gold via-ws-gold-light to-ws-gold bg-clip-text text-transparent">
                لنجاحٍ مؤسسي مستدام.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white/50 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto sm:mx-0"
            >
              شركة <span className="text-white/80 font-semibold">استيثاق</span> للمحاماة والاستشارات القانونية — شريكك الاستراتيجي لتمثيل شركتك، حماية أصولك، وتوجيه استثماراتك نحو بر الأمان بخبرات قانونية تتجاوز 12 عاماً.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 sm:gap-5 mb-8 justify-center sm:justify-start"
            >
              {[
                { icon: CheckCircle, text: "مرخص من وزارة العدل" },
                { icon: Award, text: "+240 قضية منجزة" },
                { icon: CheckCircle, text: "94% نسبة النجاح" },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-1.5 text-white/35 text-xs">
                  <badge.icon className="h-3.5 w-3.5 text-ws-gold/60" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 items-center sm:items-start"
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-l from-ws-gold to-ws-gold-light text-ws-navy border-0 rounded-full px-8 text-sm font-bold shadow-[0_4px_28px_-4px_hsl(40_65%_52%/0.4)] hover:shadow-[0_6px_36px_-4px_hsl(40_65%_52%/0.55)] hover:brightness-105 transition-all duration-300"
              >
                <Link to="/team">
                  <Users className="h-4 w-4 me-2" />
                  تعرف على خبرائنا
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/25 rounded-full px-8 text-sm font-semibold backdrop-blur-sm group"
              >
                <Link to="/our-services">
                  تصفح خدمات الشركات
                  <ArrowLeft className="h-4 w-4 ms-2 group-hover:-translate-x-1 transition-transform rtl-flip" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right side - Office image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_25px_80px_-20px_rgba(0,0,0,0.6)]">
              <img
                src={heroImg}
                alt="مكتب استيثاق للمحاماة"
                className="w-full h-full object-cover"
                width={1080}
                height={1920}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(218_55%_12%/0.7)] via-transparent to-transparent" />
              {/* Gold corner accents */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-ws-gold/25 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-ws-gold/25 rounded-bl-2xl" />
              {/* Bottom text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-right">
                <p className="text-white/60 text-sm font-medium">المكتب الرئيسي — الرياض</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-ws-gold/50" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ws-gray to-transparent" />
    </section>
  );
};
