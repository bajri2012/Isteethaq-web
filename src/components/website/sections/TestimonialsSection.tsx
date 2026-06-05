import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTestimonials } from "@/hooks/useWebsiteContent";

const placeholderTestimonials = [
  { id: "1", client_name: "أحمد العمري", client_title: "رئيس مجلس إدارة — شركة تقنية", content: "تعاملنا مع مكتب استيثاق في قضية تحكيم تجاري معقدة بقيمة تتجاوز 15 مليون ريال. أبدع الفريق في بناء استراتيجية دفاعية محكمة أدت لكسب القضية بالكامل.", rating: 5 },
  { id: "2", client_name: "سارة الشهري", client_title: "مديرة تنفيذية — مجموعة استثمارية", content: "خدمة استشارات ممتازة في مجال حوكمة الشركات. ساعدونا في إعادة هيكلة المجموعة بالكامل وفق أعلى المعايير، مما وفر علينا الكثير من المخاطر المستقبلية.", rating: 5 },
  { id: "3", client_name: "محمد القحطاني", client_title: "مستثمر — قطاع العقارات", content: "أفضل مكتب محاماة تعاملت معه. دقة في العمل واهتمام بالتفاصيل وسرعة في الاستجابة. أنصح بهم بشدة لأي شركة تبحث عن شريك قانوني موثوق.", rating: 5 },
];

export const TestimonialsSection = () => {
  const { data: testimonials } = useTestimonials();
  const displayItems = testimonials && testimonials.length > 0 ? testimonials : placeholderTestimonials;

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ws-gold/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold text-ws-gold mb-4 border border-ws-gold/20 px-4 py-1.5 rounded-full">
            آراء العملاء
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ws-navy mb-3">ثقة عملائنا هي أعظم إنجازاتنا</h2>
          <p className="text-ws-text-muted max-w-xl mx-auto">شهادات حقيقية من عملاء وثقوا بنا في أهم قضاياهم القانونية</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.slice(0, 3).map((t: any, i: number) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative p-7 rounded-2xl border border-ws-navy/5 bg-ws-gray hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-5 left-5 h-8 w-8 text-ws-gold/10 group-hover:text-ws-gold/20 transition-colors" />
              
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`h-4 w-4 ${si < t.rating ? "text-ws-gold fill-ws-gold" : "text-ws-navy/10"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-ws-text leading-relaxed mb-6 min-h-[80px]">"{t.content}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-ws-navy/5">
                <div className="w-11 h-11 rounded-full bg-ws-navy/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-ws-navy">
                    {t.client_name?.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-ws-navy">{t.client_name}</p>
                  <p className="text-xs text-ws-text-muted">{t.client_title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
