import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";
import { supabase } from "@/integrations/supabase/client";

const ContactPage = () => {
  const { data: contactInfo } = useWebsiteContent("contact_info");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    case_type: "",
    description: "",
    preferred_contact: "phone",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const phone = form.phone.trim();
    if (!name || !phone) {
      toast.error("يرجى تعبئة الحقول المطلوبة");
      return;
    }
    if (name.length > 100 || phone.length > 20) {
      toast.error("تجاوزت الحد المسموح لطول الحقول");
      return;
    }
    setSubmitting(true);
    const requestId = crypto.randomUUID();
    const { error } = await supabase.from("contact_requests").insert({
      id: requestId,
      full_name: name,
      phone,
      email: form.email.trim() || null,
      case_type: form.case_type || null,
      description: form.description.trim().slice(0, 2000) || null,
      preferred_contact: form.preferred_contact,
    });
    if (error) {
      setSubmitting(false);
      toast.error("حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى");
      return;
    }

    const emailAddr = form.email.trim();
    const caseTypeLabel =
      {
        labor: "قانون العمل",
        commercial: "قانون تجاري",
        "real-estate": "عقاري",
        family: "أحوال شخصية",
        arbitration: "تحكيم",
        governance: "حوكمة شركات",
        other: "أخرى",
      }[form.case_type as keyof {
        labor: string;
        commercial: string;
        "real-estate": string;
        family: string;
        arbitration: string;
        governance: string;
        other: string;
      }] || "—";
    const preferredContactLabel =
      {
        phone: "اتصال هاتفي",
        whatsapp: "واتساب",
        email: "بريد إلكتروني",
      }[form.preferred_contact as "phone" | "whatsapp" | "email"] || form.preferred_contact;

    // Send confirmation email to the visitor (if email provided)
    if (emailAddr) {
      supabase.functions
        .invoke("send-email", {
          body: {
            to: emailAddr,
            from: "استيثاق <noreply@isteethaq.com>",
            subject: "شكراً لتواصلك مع استيثاق — تم استلام طلبك",
            html: `
              <div dir="rtl" style="font-family:'Cairo',Tahoma,Arial,sans-serif;max-width:580px;margin:0 auto;padding:24px 28px;background:#ffffff;color:#1f2937;">
                <div style="text-align:center;padding:20px 0;border-bottom:2px solid #1B2A4A;margin-bottom:24px;">
                  <h1 style="font-size:28px;font-weight:800;color:#1B2A4A;margin:0;">استيثاق</h1>
                </div>
                <h2 style="font-size:20px;font-weight:700;color:#1B2A4A;margin:0 0 16px;">شكراً لك، ${name}!</h2>
                <p style="font-size:15px;line-height:1.9;color:#444;margin:0 0 12px;">لقد تلقينا رسالتك بنجاح، وسيقوم أحد محامينا المتخصصين بالتواصل معك خلال 24 ساعة عمل.</p>
                <p style="font-size:15px;line-height:1.9;color:#444;margin:0 0 20px;">إذا كان استفسارك عاجلاً، يمكنك التواصل معنا مباشرة على الرقم <strong>+966557478188</strong>.</p>
                <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;padding:16px 18px;">
                  <p style="font-size:13px;color:#64748b;margin:0 0 8px;">ملخص الطلب</p>
                  <p style="font-size:14px;margin:0 0 6px;"><strong>الاسم:</strong> ${name}</p>
                  <p style="font-size:14px;margin:0 0 6px;"><strong>الجوال:</strong> ${phone}</p>
                  <p style="font-size:14px;margin:0 0 6px;"><strong>نوع القضية:</strong> ${caseTypeLabel}</p>
                  <p style="font-size:14px;margin:0;"><strong>طريقة التواصل المفضلة:</strong> ${preferredContactLabel}</p>
                </div>
                <p style="font-size:13px;line-height:1.8;color:#888;margin:24px 0 0;">مع أطيب التحيات،<br />فريق استيثاق للمحاماة والاستشارات القانونية</p>
              </div>
            `,
          },
        })
        .catch(() => {});
    }

    // Send notification email to the firm
    supabase.functions
      .invoke("send-email", {
        body: {
          to: "info@isteethaq.com",
          from: "استيثاق <noreply@isteethaq.com>",
          subject: `طلب تواصل جديد من ${name}`,
          html: `
            <div dir="rtl" style="font-family:'Cairo',Tahoma,Arial,sans-serif;max-width:580px;margin:0 auto;padding:24px 28px;background:#ffffff;color:#1f2937;">
              <div style="text-align:center;padding:20px 0;border-bottom:2px solid #1B2A4A;margin-bottom:24px;">
                <h1 style="font-size:28px;font-weight:800;color:#1B2A4A;margin:0;">استيثاق</h1>
                <p style="font-size:12px;line-height:24px;margin:8px 0 0;color:#ffffff;background:#C18A3A;padding:4px 14px;border-radius:20px;display:inline-block;">طلب تواصل جديد</p>
              </div>
              <h2 style="font-size:18px;font-weight:700;color:#1B2A4A;margin:0 0 16px;">تفاصيل الطلب</h2>
              <table style="width:100%;border-collapse:collapse;margin:0 0 20px;">
                <tr><td style="font-size:13px;color:#888;padding:8px 12px;border-bottom:1px solid #f0f0f0;width:35%;font-weight:600;">الاسم</td><td style="font-size:14px;color:#333;padding:8px 12px;border-bottom:1px solid #f0f0f0;">${name}</td></tr>
                <tr><td style="font-size:13px;color:#888;padding:8px 12px;border-bottom:1px solid #f0f0f0;width:35%;font-weight:600;">الجوال</td><td style="font-size:14px;color:#333;padding:8px 12px;border-bottom:1px solid #f0f0f0;">${phone}</td></tr>
                <tr><td style="font-size:13px;color:#888;padding:8px 12px;border-bottom:1px solid #f0f0f0;width:35%;font-weight:600;">البريد الإلكتروني</td><td style="font-size:14px;color:#333;padding:8px 12px;border-bottom:1px solid #f0f0f0;">${emailAddr || "—"}</td></tr>
                <tr><td style="font-size:13px;color:#888;padding:8px 12px;border-bottom:1px solid #f0f0f0;width:35%;font-weight:600;">نوع القضية</td><td style="font-size:14px;color:#333;padding:8px 12px;border-bottom:1px solid #f0f0f0;">${caseTypeLabel}</td></tr>
                <tr><td style="font-size:13px;color:#888;padding:8px 12px;border-bottom:1px solid #f0f0f0;width:35%;font-weight:600;">طريقة التواصل المفضلة</td><td style="font-size:14px;color:#333;padding:8px 12px;border-bottom:1px solid #f0f0f0;">${preferredContactLabel}</td></tr>
              </table>
              ${form.description.trim() ? `<p style="font-size:13px;line-height:24px;margin:0 0 4px;font-weight:600;color:#888;">وصف القضية:</p><p style="font-size:14px;line-height:1.8;margin:0;color:#333;background:#f9f9f9;padding:12px 16px;border-radius:8px;">${form.description.trim()}</p>` : ""}
            </div>
          `,
        },
      })
      .catch(() => {});

    setSubmitting(false);
    setSubmitted(true);
    toast.success("تم إرسال طلبك بنجاح! سنتواصل معك قريباً");
    setForm({ name: "", phone: "", email: "", case_type: "", description: "", preferred_contact: "phone" });
  };

  const info = (contactInfo as any) || {};

  return (
    <>
      <Helmet>
        <title>تواصل معنا | استيثاق للمحاماة</title>
        <meta name="description" content="تواصل مع مكتب استيثاق للمحاماة - احجز استشارة مجانية" />
      </Helmet>

      <section className="bg-ws-navy py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            تواصل <span className="text-ws-gold">معنا</span>
          </motion.h1>
          <p className="text-white/60">نحن هنا لمساعدتك. احجز استشارتك المجانية اليوم</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-ws-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold text-ws-navy mb-6">معلومات التواصل</h2>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "العنوان", value: info.address || "الرياض، المملكة العربية السعودية" },
                  { icon: Phone, label: "الهاتف", value: info.phone || "+966 55 747 8188", dir: "ltr" as const },
                  { icon: Mail, label: "البريد الإلكتروني", value: info.email || "info@isteethaq.com" },
                  { icon: Clock, label: "ساعات العمل", value: info.working_hours || "الأحد - الخميس: ٩ص - ٥م" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-ws-gray border border-ws-navy/5">
                    <div className="w-10 h-10 rounded-lg bg-ws-gold/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-ws-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ws-navy">{item.label}</p>
                      <p className="text-sm text-ws-text-muted" dir={item.dir}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-ws-gold/5 border border-ws-gold/15">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="h-4 w-4 text-ws-gold" />
                  <span className="text-sm font-bold text-ws-navy">واتساب</span>
                </div>
                <p className="text-sm text-ws-text-muted mb-3">تواصل معنا مباشرة عبر واتساب للرد السريع</p>
                <Button
                  asChild
                  size="sm"
                  className="bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white rounded-full text-xs"
                >
                  <a href="https://wa.me/966557478188" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-3.5 w-3.5 me-1.5" />
                    محادثة واتساب
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-xl font-bold text-ws-navy mb-6">أرسل استفسارك</h2>
              {submitted ? (
                <div className="text-center py-16 px-6 rounded-2xl bg-ws-gray border border-ws-navy/5">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(160,84%,30%)]/10 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-[hsl(160,84%,30%)]" />
                  </div>
                  <h3 className="text-lg font-bold text-ws-navy mb-2">تم إرسال طلبك بنجاح!</h3>
                  <p className="text-sm text-ws-text-muted mb-4">سيتواصل معك أحد محامينا خلال 24 ساعة عمل.</p>
                  <Button variant="outline" size="sm" onClick={() => setSubmitted(false)} className="rounded-full">
                    إرسال طلب آخر
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="الاسم الكامل *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    maxLength={100}
                    className="bg-ws-gray border-ws-navy/10 h-11 rounded-xl"
                  />
                  <Input
                    placeholder="رقم الجوال *"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    maxLength={20}
                    className="bg-ws-gray border-ws-navy/10 h-11 rounded-xl"
                  />
                  <Input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    className="bg-ws-gray border-ws-navy/10 h-11 rounded-xl"
                  />
                  <Select value={form.case_type} onValueChange={(v) => setForm({ ...form, case_type: v })}>
                    <SelectTrigger className="bg-ws-gray border-ws-navy/10 h-11 rounded-xl">
                      <SelectValue placeholder="نوع القضية" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="labor">قانون العمل</SelectItem>
                      <SelectItem value="commercial">قانون تجاري</SelectItem>
                      <SelectItem value="real-estate">عقاري</SelectItem>
                      <SelectItem value="family">أحوال شخصية</SelectItem>
                      <SelectItem value="arbitration">تحكيم</SelectItem>
                      <SelectItem value="governance">حوكمة شركات</SelectItem>
                      <SelectItem value="other">أخرى</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="وصف مختصر للقضية"
                    rows={4}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    maxLength={2000}
                    className="bg-ws-gray border-ws-navy/10 rounded-xl"
                  />
                  <Select
                    value={form.preferred_contact}
                    onValueChange={(v) => setForm({ ...form, preferred_contact: v })}
                  >
                    <SelectTrigger className="bg-ws-gray border-ws-navy/10 h-11 rounded-xl">
                      <SelectValue placeholder="طريقة التواصل المفضلة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone">اتصال هاتفي</SelectItem>
                      <SelectItem value="whatsapp">واتساب</SelectItem>
                      <SelectItem value="email">بريد إلكتروني</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-12 bg-ws-gold hover:bg-ws-gold-light text-ws-navy rounded-full text-sm font-bold shadow-[0_4px_20px_-4px_hsl(42_52%_54%/0.4)]"
                  >
                    {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "إرسال الطلب"}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
