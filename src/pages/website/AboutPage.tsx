import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, Target, Heart, CheckCircle2 } from "lucide-react";
import { useWebsiteContent, useCertifications } from "@/hooks/useWebsiteContent";
import { CTASection } from "@/components/website/sections/CTASection";

const whyChooseUs = [
  "فريق محامين متخصص بخبرة تتجاوز 12 عاماً",
  "نسبة نجاح تتجاوز 94% في القضايا",
  "استشارات قانونية شاملة ومتكاملة",
  "سرية تامة وحماية معلومات العملاء",
  "تواصل مستمر وتحديثات دورية على القضايا",
  "أتعاب عادلة وشفافة بدون رسوم مخفية",
];

const AboutPage = () => {
  const { data: story } = useWebsiteContent("about_story");
  const { data: vision } = useWebsiteContent("vision");
  const { data: certifications } = useCertifications();

  const visionCards = [
    { icon: Eye, title: "رؤيتنا", text: (vision as any)?.vision || "أن نكون المرجع القانوني الأول في المملكة" },
    { icon: Target, title: "رسالتنا", text: (vision as any)?.mission || "تقديم حلول قانونية مبتكرة بأعلى معايير الجودة والنزاهة" },
    { icon: Heart, title: "قيمنا", text: (vision as any)?.values || "النزاهة، التميز، الالتزام، الشفافية" },
  ];

  return (
    <>
      <Helmet>
        <title>من نحن | استيثاق للمحاماة</title>
        <meta name="description" content="تعرف على مكتب استيثاق للمحاماة والاستشارات القانونية - تاريخنا، رؤيتنا، وقيمنا" />
      </Helmet>

      {/* Hero */}
      <section className="bg-ws-navy py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-white mb-4">
            من <span className="text-ws-gold">نحن</span>
          </motion.h1>
          <p className="text-white/60 max-w-xl mx-auto">تعرف على قصة مكتبنا ورؤيتنا وقيمنا</p>
        </div>
      </section>

      {/* قصة المكتب */}
      <section className="py-16 md:py-24 bg-ws-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="text-xs font-semibold tracking-wider text-ws-gold uppercase mb-3 block">قصتنا</span>
            <h2 className="text-2xl md:text-3xl font-bold text-ws-navy mb-6">قصة المكتب</h2>
            <p className="text-ws-text-muted leading-relaxed text-base md:text-lg">
              {(story as any)?.text || "تأسس مكتب استيثاق للمحاماة والاستشارات القانونية بهدف تقديم خدمات قانونية احترافية تلبي احتياجات الأفراد والشركات في المملكة العربية السعودية. على مدار سنوات من العمل الجاد، استطعنا بناء سمعة قوية في مختلف المجالات القانونية."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* الرؤية والقيم */}
      <section className="py-16 md:py-20 bg-ws-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {visionCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-ws-white border border-ws-navy/5 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-ws-gold/10 flex items-center justify-center">
                  <card.icon className="h-6 w-6 text-ws-gold" />
                </div>
                <h3 className="font-bold text-ws-navy mb-2">{card.title}</h3>
                <p className="text-sm text-ws-text-muted leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* لماذا تختارنا */}
      <section className="py-16 md:py-20 bg-ws-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-ws-navy mb-8 text-center">لماذا تختارنا</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-lg bg-ws-gray"
              >
                <CheckCircle2 className="h-5 w-5 text-ws-gold shrink-0 mt-0.5" />
                <span className="text-sm text-ws-navy">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* الشهادات والاعتمادات */}
      {certifications && certifications.length > 0 && (
        <section className="py-16 bg-ws-gray">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-ws-navy mb-8">الجوائز والشهادات</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {certifications.map((cert: any) => (
                <div key={cert.id} className="p-4 rounded-lg bg-ws-white border border-ws-navy/5">
                  <div className="w-16 h-16 mx-auto mb-2 rounded bg-ws-navy/5 flex items-center justify-center text-2xl">🏆</div>
                  <p className="text-sm font-medium text-ws-navy">{cert.name}</p>
                  {cert.issuer && <p className="text-xs text-ws-text-muted">{cert.issuer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
};

export default AboutPage;
