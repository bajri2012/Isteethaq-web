import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Award, Users, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";
import aboutImg from "@/assets/about-office.jpg";

export const AboutBriefSection = () => {
  const { data: about } = useWebsiteContent("about_brief");

  return (
    <section className="py-20 md:py-28 bg-ws-gray relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-ws-gold/[0.03] blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="aspect-[4/3] rounded-2xl overflow-hidden order-2 md:order-1 relative group shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
          >
            <img
              src={aboutImg}
              alt="مكتب استيثاق للمحاماة"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ws-navy/40 via-transparent to-transparent" />
            {/* Corner accents */}
            <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-ws-gold/40 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-ws-gold/40 rounded-bl-lg" />
            {/* Stats overlay */}
            <div className="absolute bottom-4 right-4 left-4 flex gap-3">
              <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center">
                <p className="text-lg font-bold text-ws-navy">+12</p>
                <p className="text-[10px] text-ws-text-muted">سنة خبرة</p>
              </div>
              <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center">
                <p className="text-lg font-bold text-ws-navy">94%</p>
                <p className="text-[10px] text-ws-text-muted">نسبة النجاح</p>
              </div>
              <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center">
                <p className="text-lg font-bold text-ws-navy">+180</p>
                <p className="text-[10px] text-ws-text-muted">عميل راضٍ</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <span className="inline-block text-xs font-bold text-ws-gold mb-4 border border-ws-gold/20 px-4 py-1.5 rounded-full">
              من نحن
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ws-navy mb-5 leading-snug">
              مكتب محاماة بخبرة عميقة
              <br />
              <span className="text-ws-gold">ورؤية مستقبلية</span>
            </h2>
            <p className="text-ws-text-muted leading-relaxed mb-6">
              {(about as any)?.text || "تأسست شركة استيثاق للمحاماة والاستشارات القانونية لتكون الذراع القانوني الموثوق لقطاع الأعمال في المملكة العربية السعودية. نجمع بين العمق القانوني والفهم التجاري لتقديم حلول مبتكرة تحمي مصالح عملائنا."}
            </p>
            
            {/* Key points */}
            <div className="space-y-3 mb-8">
              {[
                { icon: Scale, text: "تمثيل قانوني أمام جميع الجهات القضائية" },
                { icon: Users, text: "فريق متكامل من المحامين والمستشارين المتخصصين" },
                { icon: Award, text: "سجل حافل بالإنجازات في أعقد القضايا التجارية" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-ws-text-muted">
                  <div className="w-8 h-8 rounded-lg bg-ws-gold/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-ws-gold" />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" className="border-ws-navy/20 text-ws-navy hover:bg-ws-navy hover:text-white rounded-full px-7 group transition-all duration-300">
              <Link to="/about">
                اعرف أكثر
                <ArrowLeft className="h-4 w-4 ms-2 group-hover:-translate-x-1 transition-transform rtl-flip" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
