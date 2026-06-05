import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaBg from "@/assets/cta-bg.jpg";

export const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-br from-ws-navy/90 via-ws-navy/85 to-ws-navy-light/90" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-width='0.5'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ws-gold/20 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 text-ws-gold/80 text-xs font-semibold tracking-wider uppercase mb-6 border border-ws-gold/20 px-4 py-1.5 rounded-full">
            <MessageCircle className="h-3.5 w-3.5" />
            استشارة أولية مجانية
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 leading-snug">
            نحمي حاضرك،
            <br />
            <span className="text-ws-gold">ونمهد الطريق لمستقبل أعمالك.</span>
          </h2>
          <p className="text-white/50 mb-10 max-w-lg mx-auto leading-relaxed">
            دعنا نكون الإدارة القانونية الخارجية لشركتك. تواصل معنا اليوم لترتيب اجتماع مع أحد شركائنا واحصل على استشارة
            أولية مجانية.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Button
              asChild
              size="lg"
              className="bg-ws-gold hover:bg-ws-gold-light text-ws-navy border-0 rounded-full px-10 text-sm font-bold shadow-[0_4px_30px_-4px_hsl(42_52%_54%/0.5)] hover:shadow-[0_4px_40px_-4px_hsl(42_52%_54%/0.7)] transition-all duration-300"
            >
              <a href="tel:+966557478188">
                <Phone className="h-4 w-4 me-2" />
                اتصل بنا الآن
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-full px-8 text-sm font-semibold backdrop-blur-sm"
            >
              <a href="https://wa.me/966557478188" target="_blank" rel="noopener noreferrer">
                واتساب
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
