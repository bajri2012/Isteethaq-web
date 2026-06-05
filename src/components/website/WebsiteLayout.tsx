import { Outlet, useLocation } from "react-router-dom";
import { WebsiteNavbar } from "./WebsiteNavbar";
import { WebsiteFooter } from "./WebsiteFooter";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const WebsiteLayout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change with smooth behavior
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <HelmetProvider>
      <div dir="rtl" className="min-h-screen flex flex-col bg-ws-white font-cairo">
        <WebsiteNavbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <WebsiteFooter />
      </div>
    </HelmetProvider>
  );
};
