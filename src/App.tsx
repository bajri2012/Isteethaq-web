import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { WebsiteLayout } from "@/components/website/WebsiteLayout";
import HomePage from "@/pages/website/HomePage";
import AboutPage from "@/pages/website/AboutPage";
import ServicesPage from "@/pages/website/ServicesPage";
import TeamPage from "@/pages/website/TeamPage";
import PartnersPage from "@/pages/website/PartnersPage";
import BlogPage from "@/pages/website/BlogPage";
import BlogPostPage from "@/pages/website/BlogPostPage";
import FaqPage from "@/pages/website/FaqPage";
import ContactPage from "@/pages/website/ContactPage";
import PrivacyPage from "@/pages/website/PrivacyPage";
import TermsPage from "@/pages/website/TermsPage";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 60 * 1000, retry: 1 } },
});

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <SpeedInsights />
        <BrowserRouter>
          <Routes>
            <Route element={<WebsiteLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/our-services" element={<ServicesPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
