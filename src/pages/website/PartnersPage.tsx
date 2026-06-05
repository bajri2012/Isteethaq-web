import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useStrategicPartners } from "@/hooks/useWebsiteContent";
import { CTASection } from "@/components/website/sections/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle, Loader2, Handshake } from "lucide-react";

const PartnersPage = () => {
  const { data: partners } = useStrategicPartners();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    if (!name || !email) {
      toast.error("يرجى تعبئة الحقول المطلوبة");
      return;
    }
    if (name.length > 100 || email.length > 255) {
      toast.error("تجاوزت الحد المسموح لطول الحقول");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("partner_requests").insert({
      full_name: name,
      email,
      message: formData.message.trim().slice(0, 2000) || null,
    });
    setSubmitting(false);
    if (error) {
      toast.error("حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى");
      return;
    }
    setSubmitted(true);
    toast.success("تم إرسال طلبك بنجاح، سنتواصل معك قريباً");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>شركاؤنا | استيثاق للمحاماة</title>
        <meta name="description" content="شركاء مكتب استيثاق الاستراتيجيون - انضم لشبكتنا" />
      </Helmet>

      <section className="bg-ws-navy py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-white mb-4">
            شركاؤنا <span className="text-ws-gold">الاستراتيجيون</span>
          </motion.h1>
          <p className="text-white/60 max-w-xl mx-auto">نؤمن بأن الشراكات القوية هي أساس النجاح المستدام</p>
        </div>
      </section>

      <section className="py-16 bg-ws-white">
        <div className="max-w-6xl mx-auto px-4">
          {partners && partners.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner: any) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl border border-ws-navy/5 bg-ws-gray text-center hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-ws-navy/5 flex items-center justify-center">
                    {partner.logo_url ? (
                      <img src={partner.logo_url} alt={partner.name} className="w-12 h-12 object-contain" loading="lazy" />
                    ) : (
                      <Handshake className="h-8 w-8 text-ws-gold/50" />
                    )}
                  </div>
                  <h3 className="font-bold text-ws-navy mb-2">{partner.name}</h3>
                  {partner.description && <p className="text-sm text-ws-text-muted leading-relaxed">{partner.description}</p>}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Handshake className="h-12 w-12 mx-auto mb-4 text-ws-gold/30" />
              <p className="text-ws-text-muted">سيتم إضافة الشركاء قريباً</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-ws-gray">
        <div className="max-w-lg mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] text-ws-gold uppercase mb-3 border border-ws-gold/20 px-4 py-1.5 rounded-full">
              شراكات جديدة
            </span>
            <h2 className="text-2xl font-bold text-ws-navy">انضم لشبكتنا</h2>
            <p className="text-sm text-ws-text-muted mt-2">نرحب بالشراكات مع المكاتب والمؤسسات ذات الرؤية المشتركة</p>
          </motion.div>

          {submitted ? (
            <div className="text-center py-12 px-6 bg-ws-white rounded-2xl border border-ws-navy/5">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(160,84%,30%)]/10 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-[hsl(160,84%,30%)]" />
              </div>
              <h3 className="text-lg font-bold text-ws-navy mb-2">تم إرسال طلبك بنجاح!</h3>
              <p className="text-sm text-ws-text-muted mb-4">سيتم مراجعة طلبك والتواصل معك قريباً.</p>
              <Button variant="outline" size="sm" onClick={() => setSubmitted(false)} className="rounded-full">
                إرسال طلب آخر
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-ws-white p-7 rounded-2xl border border-ws-navy/5 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)]">
              <Input placeholder="الاسم الكامل *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required maxLength={100} className="h-11 rounded-xl bg-ws-gray border-ws-navy/10" />
              <Input type="email" placeholder="البريد الإلكتروني *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required maxLength={255} className="h-11 rounded-xl bg-ws-gray border-ws-navy/10" />
              <Textarea placeholder="رسالتك — أخبرنا عن مجال عملك وكيف يمكننا التعاون" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} maxLength={2000} className="rounded-xl bg-ws-gray border-ws-navy/10" />
              <Button type="submit" disabled={submitting} className="w-full h-12 bg-ws-gold hover:bg-ws-gold-light text-ws-navy rounded-full font-bold shadow-[0_4px_20px_-4px_hsl(42_52%_54%/0.4)]">
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "إرسال طلب الشراكة"}
              </Button>
            </form>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default PartnersPage;
