import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Scale, Building2, Home, Users, FileText, CheckCircle2, HelpCircle, ArrowLeft, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTASection } from "@/components/website/sections/CTASection";
import { cn } from "@/lib/utils";

const tabs = [
  { key: "labor", label: "قانون العمل", icon: Users },
  { key: "commercial", label: "قانون تجاري", icon: Building2 },
  { key: "real-estate", label: "عقاري", icon: Home },
  { key: "family", label: "أحوال شخصية", icon: Scale },
  { key: "general", label: "عام", icon: FileText },
];

const servicesData: Record<string, { description: string; includes: string[]; timeline: string[]; faqs: { q: string; a: string }[] }> = {
  labor: {
    description: "نقدم خدمات قانونية متكاملة في مجال قانون العمل السعودي، من صياغة عقود العمل وسياسات الموارد البشرية إلى تمثيل الأطراف في نزاعات العمل أمام الجهات المختصة.",
    includes: ["صياغة ومراجعة عقود العمل", "تمثيل في النزاعات العمالية", "استشارات أنظمة العمل", "تسوية مستحقات نهاية الخدمة", "قضايا الفصل التعسفي"],
    timeline: ["استشارة مبدئية", "دراسة القضية", "إعداد الملف", "التمثيل القانوني", "الحكم والتنفيذ"],
    faqs: [
      { q: "ما مدة قضية العمل عادةً؟", a: "تتراوح مدة القضية من 3 إلى 12 شهراً حسب تعقيدها وجهة الاختصاص. تبدأ بمرحلة التسوية الودية في مكتب العمل (21 يوماً)، ثم تُحال للمحكمة العمالية." },
      { q: "هل يمكن التسوية قبل المحكمة؟", a: "نعم، نسعى دائماً للتسوية الودية أولاً مما يوفر الوقت والتكاليف. نسبة كبيرة من القضايا تُحل ودياً في مرحلة مكتب العمل." },
      { q: "ما حقوقي عند الفصل التعسفي؟", a: "يحق لك تعويض يعادل أجر شهرين عن كل سنة خدمة (بحد أدنى 3 أشهر)، بالإضافة لمكافأة نهاية الخدمة كاملة وبدل الإجازات المستحقة." },
      { q: "كيف تُحسب مكافأة نهاية الخدمة؟", a: "نصف شهر عن كل سنة في الخمس سنوات الأولى، وشهر كامل عن كل سنة بعد ذلك. تُحسب على أساس آخر أجر فعلي." },
      { q: "هل يشمل نظام العمل العمالة المنزلية؟", a: "العمالة المنزلية لها نظام خاص. نقدم استشارات متخصصة لكلا النظامين ونساعدك في فهم حقوقك والتزاماتك." },
    ],
  },
  commercial: {
    description: "نساعد الشركات والمؤسسات التجارية في جميع جوانب القانون التجاري، من تأسيس الشركات إلى حل النزاعات التجارية المعقدة.",
    includes: ["تأسيس الشركات والمؤسسات", "صياغة العقود التجارية", "الاندماج والاستحواذ", "حل النزاعات التجارية", "الامتياز التجاري"],
    timeline: ["تحليل الاحتياجات", "إعداد الوثائق", "المراجعة القانونية", "التنفيذ", "المتابعة"],
    faqs: [
      { q: "ما تكلفة تأسيس شركة؟", a: "تختلف التكلفة حسب نوع الشركة (ذ.م.م، مساهمة، فرع أجنبي) ورأس مالها. تشمل رسوم السجل التجاري والغرفة التجارية وأتعاب المحاماة. تواصل معنا لعرض سعر مخصص." },
      { q: "كم يستغرق تأسيس شركة؟", a: "عادةً من 2 إلى 6 أسابيع حسب نوع الكيان والإجراءات. المؤسسات الفردية أسرع، بينما الشركات المساهمة تتطلب وقتاً أطول." },
      { q: "هل يمكن للأجانب تأسيس شركات في السعودية؟", a: "نعم، يتيح نظام الاستثمار الأجنبي تأسيس شركات بملكية أجنبية كاملة في معظم القطاعات. نساعدك في الحصول على ترخيص الاستثمار من وزارة الاستثمار." },
      { q: "ما الفرق بين الشركة ذات المسؤولية المحدودة والمساهمة؟", a: "الذ.م.م أنسب للمشاريع الصغيرة والمتوسطة بمسؤولية محدودة بالحصص، بينما المساهمة مناسبة للمشاريع الكبرى مع إمكانية الطرح العام وتداول الأسهم." },
    ],
  },
  "real-estate": {
    description: "خبرة واسعة في القضايا العقارية بما يشمل البيع والشراء والإيجار والنزاعات العقارية والتطوير العمراني.",
    includes: ["عقود البيع والشراء", "عقود الإيجار", "النزاعات العقارية", "التسجيل العقاري", "التطوير العمراني"],
    timeline: ["فحص الملكية", "صياغة العقد", "التفاوض", "التوثيق", "نقل الملكية"],
    faqs: [
      { q: "هل تتعاملون مع العقارات التجارية والسكنية؟", a: "نعم، نتعامل مع جميع أنواع العقارات: تجارية، سكنية، صناعية، وأراضٍ. نقدم خدمات الصياغة والمراجعة والتمثيل في النزاعات." },
      { q: "كيف أتحقق من صحة صك الملكية؟", a: "يمكن التحقق عبر منصة 'إفراغ' الإلكترونية أو من خلال كتابة العدل. ننصح بشدة بمراجعة محامٍ قبل أي صفقة عقارية للتأكد من خلو العقار من الرهون والحقوق." },
      { q: "ما إجراءات نقل ملكية العقار؟", a: "تتم عبر منصة إفراغ الإلكترونية بحضور البائع والمشتري أو وكلائهم. نساعدك في إعداد جميع المستندات المطلوبة وضمان سلامة الإجراءات القانونية." },
      { q: "كيف أحل نزاع إيجار مع المستأجر؟", a: "يتم رفع الدعوى أمام المحكمة العامة. في حالات التأخر بالسداد، يمكن الإخلاء بأمر قضائي. نقدم خدمة كاملة من الإنذار حتى تنفيذ الحكم." },
    ],
  },
  family: {
    description: "نتعامل مع قضايا الأحوال الشخصية بحساسية عالية وخصوصية تامة، مع التركيز على حماية حقوق جميع الأطراف.",
    includes: ["قضايا الطلاق والخلع", "الحضانة والنفقة", "المواريث والوصايا", "عقود الزواج", "إثبات النسب"],
    timeline: ["استشارة سرية", "تقييم الوضع", "محاولة الصلح", "الإجراءات القانونية", "تنفيذ الحكم"],
    faqs: [
      { q: "هل القضايا سرية؟", a: "نعم، جميع قضايا الأحوال الشخصية تُعامل بسرية تامة وفقاً لأخلاقيات المهنة والأنظمة المعمول بها." },
      { q: "كم تستغرق قضية الحضانة؟", a: "تتراوح من 3 إلى 9 أشهر حسب مدى التوافق بين الأطراف. نسعى للصلح أولاً، وإن تعذّر نمثلك أمام محكمة الأحوال الشخصية." },
      { q: "كيف تُقسّم التركة بين الورثة؟", a: "تُقسّم وفقاً لأحكام الشريعة الإسلامية. نساعدك في استخراج صك حصر الورثة وتقسيم التركة بشكل عادل ونظامي." },
    ],
  },
  general: {
    description: "خدمات قانونية عامة تشمل الاستشارات القانونية والتمثيل القانوني في مختلف القضايا.",
    includes: ["استشارات قانونية عامة", "صياغة ومراجعة العقود", "التمثيل أمام الجهات الحكومية", "التحكيم", "الملكية الفكرية"],
    timeline: ["التواصل الأولي", "دراسة الحالة", "وضع الاستراتيجية", "التنفيذ", "المتابعة"],
    faqs: [
      { q: "كيف يمكنني التواصل للاستشارة؟", a: "يمكنك التواصل عبر الهاتف +966557478188 أو الواتساب أو تعبئة نموذج التواصل في الموقع. سنتواصل معك خلال 24 ساعة عمل." },
      { q: "هل تقدمون خدمات التحكيم؟", a: "نعم، نقدم خدمات التحكيم التجاري الشاملة ويضم فريقنا محكّمين معتمدين لدى المركز السعودي للتحكيم التجاري." },
      { q: "ما هو نظام حماية البيانات الشخصية؟", a: "نظام ينظم جمع ومعالجة البيانات الشخصية في المملكة. إذا كانت شركتك تجمع بيانات، فأنت ملزم بالامتثال. نساعدك في التقييم وضمان الامتثال." },
    ],
  },
};

const ServicesPage = () => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") || "labor";
  const [activeTab, setActiveTab] = useState(initialTab);
  const data = servicesData[activeTab] || servicesData.labor;
  const activeTabInfo = tabs.find((t) => t.key === activeTab) || tabs[0];

  return (
    <>
      <Helmet>
        <title>خدماتنا | استيثاق للمحاماة</title>
        <meta name="description" content="خدمات قانونية متكاملة في قانون العمل والقانون التجاري والعقاري والأحوال الشخصية" />
      </Helmet>

      <section className="bg-ws-navy py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-white mb-4">
            خدماتنا <span className="text-ws-gold">القانونية</span>
          </motion.h1>
          <p className="text-white/60">حلول قانونية متخصصة تلبي احتياجاتك</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-ws-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all",
                  activeTab === tab.key
                    ? "bg-ws-navy text-white"
                    : "bg-ws-gray text-ws-text-muted hover:bg-ws-navy/5"
                )}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {/* Description */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold text-ws-navy mb-4">{activeTabInfo.label}</h2>
              <p className="text-ws-text-muted leading-relaxed">{data.description}</p>
            </div>

            {/* Timeline */}
            <div className="mb-12">
              <h3 className="text-lg font-bold text-ws-navy mb-6 text-center">مسار القضية</h3>
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
                {data.timeline.map((step, i) => (
                  <div key={i} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-ws-gold/10 border-2 border-ws-gold flex items-center justify-center text-sm font-bold text-ws-gold">
                        {i + 1}
                      </div>
                      <span className="text-xs text-ws-text-muted mt-2 text-center max-w-[80px]">{step}</span>
                    </div>
                    {i < data.timeline.length - 1 && (
                      <div className="hidden md:block w-12 h-0.5 bg-ws-gold/20 mx-1 mt-[-16px]" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* What's included */}
            <div className="mb-12 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-ws-navy mb-4">ما تشمله الخدمة</h3>
              <div className="space-y-2">
                {data.includes.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-ws-gray">
                    <CheckCircle2 className="h-4 w-4 text-ws-gold shrink-0" />
                    <span className="text-sm text-ws-navy">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="text-lg font-bold text-ws-navy mb-4">أسئلة شائعة</h3>
              <Accordion type="single" collapsible>
                {data.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-ws-navy/5">
                    <AccordionTrigger className="text-sm text-ws-navy hover:no-underline">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-ws-text-muted">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button asChild className="bg-ws-gold hover:bg-ws-gold-light text-ws-white rounded-full px-8">
                <a href="/contact">ابدأ قضيتك</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ServicesPage;
