import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { useFaqs } from "@/hooks/useWebsiteContent";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  { key: "all", label: "الكل" },
  { key: "general", label: "عام" },
  { key: "labor", label: "قانون العمل" },
  { key: "commercial", label: "تجاري" },
  { key: "real-estate", label: "عقاري" },
  { key: "family", label: "أحوال شخصية" },
];

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { data: faqs } = useFaqs(activeCategory);

  return (
    <>
      <Helmet>
        <title>الأسئلة الشائعة | استيثاق للمحاماة</title>
        <meta name="description" content="إجابات على الأسئلة القانونية الأكثر شيوعاً" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": (faqs || []).map((f: any) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer },
          })),
        })}</script>
      </Helmet>

      <section className="bg-ws-navy py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-white mb-4">
            الأسئلة <span className="text-ws-gold">الشائعة</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-ws-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat.key ? "bg-ws-navy text-white" : "bg-ws-gray text-ws-text-muted hover:bg-ws-navy/5"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {faqs && faqs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq: any) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-ws-navy/5 rounded-lg px-4 data-[state=open]:bg-ws-gray">
                  <AccordionTrigger className="text-sm font-medium text-ws-navy hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-ws-text-muted pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="text-center text-ws-text-muted py-12">سيتم إضافة الأسئلة الشائعة من لوحة التحكم.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default FaqPage;
