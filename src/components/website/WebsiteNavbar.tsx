import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo.ico";
import { ROUTES } from "@/lib/routes";

const navLinks = [
  { label: "الرئيسية", href: ROUTES.home },
  { label: "من نحن", href: ROUTES.about },
  { label: "خدماتنا", href: ROUTES.ourServices },
  { label: "فريقنا القانوني", href: ROUTES.team },
  { label: "شركاؤنا", href: ROUTES.partners },
  { label: "رؤى قانونية", href: ROUTES.blog },
  { label: "سياسة الخصوصية", href: ROUTES.privacy },
  { label: "تواصل", href: ROUTES.contact },
];

export const WebsiteNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-500",
      scrolled
        ? "bg-ws-white/95 backdrop-blur-2xl border-b border-ws-navy/[0.06] shadow-[0_1px_20px_-4px_rgba(0,0,0,0.08)]"
        : "bg-transparent border-b border-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[4.5rem] md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group relative z-10">
            <div className="w-11 h-11 rounded-xl bg-white ring-1 ring-ws-navy/10 flex items-center justify-center p-1.5 shadow-[0_2px_12px_-2px_hsl(218_55%_12%/0.18)] group-hover:shadow-[0_4px_20px_-4px_hsl(218_55%_12%/0.28)] transition-shadow duration-300">
              <img src={logoImg} alt="استيثاق" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold text-ws-navy tracking-tight leading-none">
                استيثاق
              </span>
              <span className="hidden sm:block text-[9px] text-ws-text-muted/70 leading-none mt-0.5 font-medium">
                للمحاماة والاستشارات القانونية
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-200",
                    isActive
                      ? "text-ws-gold"
                      : "text-ws-text-muted hover:text-ws-navy"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-ws-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex bg-gradient-to-l from-ws-gold to-ws-gold-light text-ws-navy border-0 rounded-full px-5 text-[12px] sm:text-[13px] font-bold shadow-[0_2px_16px_-3px_hsl(40_65%_52%/0.35)] hover:shadow-[0_4px_24px_-4px_hsl(40_65%_52%/0.5)] hover:brightness-105 transition-all duration-300"
            >
              <Link to="/contact">
                <Phone className="h-3.5 w-3.5 me-1.5" />
                احجز استشارتك
              </Link>
            </Button>
            <a
              href={import.meta.env.VITE_RABT_PLATFORM_URL ?? "https://app.rabt.sa"}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex text-[12px] font-medium text-ws-gold hover:text-ws-navy transition-colors px-3 py-2"
            >
              منصة ربط — لإدارة المحاماة
            </a>
            <a
              href={import.meta.env.VITE_RABT_LOGIN_URL ?? "https://app.rabt.sa/auth/login"}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex text-[13px] font-medium text-ws-text-muted hover:text-ws-navy transition-colors px-3 py-2"
            >
              تسجيل الدخول
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-ws-navy rounded-lg hover:bg-ws-navy/5 transition-colors relative z-10"
              aria-label="فتح القائمة"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-ws-navy/5 bg-ws-white/98 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      location.pathname === link.href
                        ? "text-ws-gold bg-ws-gold/[0.06]"
                        : "text-ws-text-muted hover:text-ws-navy hover:bg-ws-navy/[0.03]"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.04 }}
              >
                <a
                  href={import.meta.env.VITE_RABT_LOGIN_URL ?? "https://app.rabt.sa/auth/login"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-ws-text-muted hover:text-ws-navy"
                >
                  تسجيل الدخول إلى منصة ربط
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.04 }}
                className="pt-3"
              >
                <Button
                  asChild
                  className="w-full bg-gradient-to-l from-ws-gold to-ws-gold-light text-ws-navy rounded-full font-bold shadow-[0_2px_16px_-3px_hsl(40_65%_52%/0.35)]"
                >
                  <Link to="/contact">
                    <Phone className="h-4 w-4 me-2" />
                    احجز استشارتك
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
