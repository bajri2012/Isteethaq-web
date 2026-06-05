import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/website/sections/HeroSection";
import { StatsSection } from "@/components/website/sections/StatsSection";
import { TeamShowcaseSection } from "@/components/website/sections/TeamShowcaseSection";
import { ServicesSection } from "@/components/website/sections/ServicesSection";
import { WhyUsSection } from "@/components/website/sections/WhyUsSection";
import { AboutBriefSection } from "@/components/website/sections/AboutBriefSection";
import { TestimonialsSection } from "@/components/website/sections/TestimonialsSection";
import { BlogSection } from "@/components/website/sections/BlogSection";
import { CTASection } from "@/components/website/sections/CTASection";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>استيثاق للمحاماة والاستشارات القانونية | الرياض</title>
        <meta name="description" content="شركة استيثاق للمحاماة والاستشارات القانونية - شريكك الاستراتيجي لتمثيل شركتك وحماية أصولك بخبرات قانونية متراكمة تتجاوز 12 عاماً." />
        <link rel="canonical" href="https://isteethaq.com" />
        <meta property="og:title" content="استيثاق للمحاماة والاستشارات القانونية" />
        <meta property="og:description" content="أساس قانوني راسخ، لنجاح مؤسسي مستدام" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "استيثاق للمحاماة والاستشارات القانونية",
          "url": "https://isteethaq.com",
          "address": { "@type": "PostalAddress", "addressLocality": "الرياض", "addressCountry": "SA" },
          "description": "شركة محاماة واستشارات قانونية متكاملة"
        })}</script>
      </Helmet>
      <HeroSection />
      <section className="bg-ws-navy text-white border-y border-ws-gold/20" aria-label="روابط قانونية مهمة">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-2 text-center text-sm">
          <span className="text-white/60">للاطلاع على سياساتنا القانونية وكيفية حماية بياناتك:</span>
          <div className="flex items-center gap-3">
            <Link to="/privacy" className="font-bold text-ws-gold hover:text-ws-gold-light transition-colors underline underline-offset-4">
              سياسة الخصوصية
            </Link>
            <span className="text-white/30">•</span>
            <Link to="/terms" className="font-bold text-ws-gold hover:text-ws-gold-light transition-colors underline underline-offset-4">
              شروط الاستخدام
            </Link>
          </div>
        </div>
      </section>
      <StatsSection />
      <TeamShowcaseSection />
      <ServicesSection />
      <WhyUsSection />
      <AboutBriefSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </>
  );
};

export default HomePage;
