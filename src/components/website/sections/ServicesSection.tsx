import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Scale, Building2, FileText, Users, Globe, Gavel, ArrowLeft } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "التقاضي وفض المنازعات",
    description: "تمثيل قانوني قوي أمام كافة درجات التقاضي وهيئات التحكيم المحلية والدولية. نتولى القضايا المعقدة بمنهجية مدروسة.",
    tab: "labor",
  },
  {
    icon: Building2,
    title: "حوكمة وتأسيس الشركات",
    description: "تأسيس الكيانات، إعادة الهيكلة، صياغة اتفاقيات الشركاء، والاندماج والاستحواذ وفق أحدث الأنظمة.",
    tab: "commercial",
  },
  {
    icon: FileText,
    title: "العقود التجارية",
    description: "صياغة ومراجعة وتدقيق كافة أنواع العقود التجارية والتشغيلية لحماية حقوقك وتقليل المخاطر القانونية.",
    tab: "commercial",
  },
  {
    icon: Users,
    title: "الأنظمة العمالية",
    description: "استشارات متخصصة في نظام العمل السعودي، صياغة اللوائح الداخلية وعقود الموظفين وتسوية النزاعات العمالية.",
    tab: "labor",
  },
  {
    icon: Globe,
    title: "الاستثمار الأجنبي",
    description: "تيسير دخول المستثمرين الأجانب للسوق السعودي، إصدار التراخيص، وتأسيس الفروع والمكاتب التمثيلية.",
    tab: "commercial",
  },
  {
    icon: Gavel,
    title: "التحكيم التجاري",
    description: "خدمات التحكيم المحلي والدولي وفق أفضل الممارسات العالمية، مع فريق متخصص في فض المنازعات البديلة.",
    tab: "commercial",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold text-ws-gold mb-4 border border-ws-gold/20 px-4 py-1.5 rounded-full">
            ممارساتنا القانونية
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ws-navy mb-4">
            تغطية قانونية شاملة لقطاع الأعمال
          </h2>
          <p className="text-ws-text-muted max-w-2xl mx-auto">
            نقدم خدماتنا وفق منهجية مؤسسية دقيقة، لضمان تغطية كافة المخاطر القانونية التي قد تواجه منشأتك.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/our-services?tab=${svc.tab}`}
                className="group relative block p-7 rounded-2xl border border-ws-navy/5 bg-ws-gray hover:bg-ws-navy transition-all duration-500 h-full overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-ws-gold/5 rounded-bl-[40px] group-hover:bg-ws-gold/10 transition-colors duration-500" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-ws-gold/10 group-hover:bg-ws-gold/20 flex items-center justify-center mb-5 transition-colors duration-300">
                    <svc.icon className="h-6 w-6 text-ws-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-ws-navy group-hover:text-white mb-2.5 transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-ws-text-muted group-hover:text-white/55 leading-relaxed mb-5 transition-colors duration-300">
                    {svc.description}
                  </p>
                  <span className="inline-flex items-center text-xs font-semibold text-ws-gold group-hover:text-ws-gold-light transition-colors">
                    اعرف المزيد
                    <ArrowLeft className="h-3 w-3 ms-1 group-hover:-translate-x-0.5 transition-transform rtl-flip" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
