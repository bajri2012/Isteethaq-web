import { motion } from "framer-motion";
import { Shield, Lock, TrendingUp, Briefcase, HeartHandshake } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "العمل المؤسسي",
    description: "نبتعد عن العمل الفردي؛ قضيتك واستشاراتك تُدرس من قبل لجنة من الخبراء لضمان دقة الرأي القانوني.",
  },
  {
    icon: Lock,
    title: "السرية المطلقة",
    description: "نلتزم بأعلى معايير الحفاظ على أسرار عملائنا (Attorney-Client Privilege) كأولوية قصوى لا مساومة فيها.",
  },
  {
    icon: TrendingUp,
    title: "فهم لغة الأعمال",
    description: "محامونا لا يفهمون القانون فحسب، بل يدركون ديناميكية السوق التجاري وكيفية تحقيق أهدافك الاستراتيجية.",
  },
  {
    icon: Briefcase,
    title: "حلول استباقية",
    description: "لا ننتظر المشاكل لنعالجها، بل نعمل على استباقها من خلال تقييم المخاطر القانونية وبناء دفاعات وقائية.",
  },
  {
    icon: HeartHandshake,
    title: "شراكة طويلة الأمد",
    description: "نؤمن ببناء علاقات مستدامة مع عملائنا، لا مجرد تقديم خدمات مؤقتة. نمو أعمالك هو نجاحنا.",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-ws-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ws-gold/15 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ws-gold/15 to-transparent" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-ws-gold/[0.02] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block text-xs font-bold text-ws-gold mb-4 border border-ws-gold/20 px-4 py-1.5 rounded-full">
              لماذا استيثاق
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-5">
              ليس مجرد مكتب،
              <br />
              <span className="text-ws-gold">بل كيان مؤسسي.</span>
            </h2>
            <p className="text-white/40 leading-relaxed max-w-md mb-8">
              نقدم خدمات قانونية مؤسسية تتجاوز الاستشارات الفردية التقليدية، لنكون الذراع القانوني الخارجي لشركتك. نجمع بين الخبرة القانونية العميقة والتقنيات الحديثة لتقديم أفضل خدمة ممكنة.
            </p>
            {/* Decorative element */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-ws-gold to-ws-gold/0" />
              <p className="text-xs text-white/25 font-medium">نعمل وفق أعلى المعايير المهنية</p>
            </div>
          </motion.div>

          {/* Right - Advantages */}
          <div className="space-y-4">
            {advantages.map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-5 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:border-ws-gold/20 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-ws-gold/10 flex items-center justify-center group-hover:bg-ws-gold/20 transition-colors">
                  <adv.icon className="h-6 w-6 text-ws-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1.5">{adv.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{adv.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
