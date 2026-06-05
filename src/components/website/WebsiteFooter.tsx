import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Scale, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "من نحن", href: "/about" },
  { label: "خدماتنا", href: "/our-services" },
  { label: "فريقنا القانوني", href: "/team" },
  { label: "رؤى قانونية", href: "/blog" },
  { label: "الأسئلة الشائعة", href: "/faq" },
  { label: "تواصل معنا", href: "/contact" },
];

const serviceLinks = [
  { label: "التقاضي وفض المنازعات", href: "/our-services?tab=labor" },
  { label: "حوكمة وتأسيس الشركات", href: "/our-services?tab=commercial" },
  { label: "العقود التجارية", href: "/our-services?tab=commercial" },
  { label: "الأنظمة العمالية", href: "/our-services?tab=labor" },
  { label: "الاستثمار الأجنبي", href: "/our-services?tab=commercial" },
];

export const WebsiteFooter = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-ws-navy text-white/80 relative overflow-hidden">
      {/* Top gold gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-ws-gold/40 to-transparent" />

      {/* Back to top button */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-ws-gold text-ws-navy flex items-center justify-center shadow-[0_4px_20px_-4px_hsl(40_65%_52%/0.4)] hover:brightness-110 transition-all hover:-translate-y-0.5"
          aria-label="العودة للأعلى"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo & description */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ws-gold/20 to-ws-gold/5 flex items-center justify-center border border-ws-gold/10">
                <Scale className="h-5 w-5 text-ws-gold" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">استيثاق</h3>
                <span className="text-[9px] text-white/30 font-medium">للمحاماة والاستشارات القانونية</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/35">
              شركة محاماة واستشارات قانونية متكاملة، نقدم حلولاً قانونية مبتكرة بأعلى معايير الجودة والنزاهة.
            </p>
            <p className="text-[11px] text-white/20 border border-white/[0.06] rounded-lg p-3 leading-relaxed">
              شركة مهنية مرخصة من وزارة العدل السعودية
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/35 hover:text-ws-gold transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">ممارساتنا القانونية</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/35 hover:text-ws-gold transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">تواصل معنا</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-sm text-white/35">
                <MapPin className="h-4 w-4 mt-0.5 text-ws-gold/50 shrink-0" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/35">
                <Phone className="h-4 w-4 text-ws-gold/50 shrink-0" />
                <a href="tel:+966557478188" dir="ltr" className="hover:text-ws-gold transition-colors">+966 55 747 8188</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/35">
                <Mail className="h-4 w-4 text-ws-gold/50 shrink-0" />
                <span>info@isteethaq.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/35">
                <Clock className="h-4 w-4 mt-0.5 text-ws-gold/50 shrink-0" />
                <span>الأحد - الخميس: ٩ص - ٥م</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/20">
          <span>© {new Date().getFullYear()} استيثاق للمحاماة. جميع الحقوق محفوظة.</span>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-ws-gold transition-colors duration-300">
              سياسة الخصوصية
            </Link>
            <span className="text-white/15">•</span>
            <Link to="/terms" className="hover:text-ws-gold transition-colors duration-300">
              شروط الاستخدام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
