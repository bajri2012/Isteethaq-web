import { Helmet } from "react-helmet-async";
import { FileText, Scale, AlertTriangle, CreditCard, UserCheck, Ban, RefreshCw, Mail, Cloud } from "lucide-react";

const sections = [
  {
    icon: UserCheck,
    title: "قبول الشروط",
    items: [
      "باستخدامك لخدمات استيثاق أو زيارة موقعنا الإلكتروني، فإنك توافق على الالتزام بهذه الشروط والأحكام",
      "إذا كنت لا توافق على أي جزء من هذه الشروط، يُرجى عدم استخدام خدماتنا",
      "يحق لنا تعديل هذه الشروط في أي وقت، وسيتم إخطارك بالتعديلات الجوهرية",
      "استمرارك في استخدام الخدمة بعد التعديلات يُعدّ موافقة ضمنية على الشروط الجديدة",
    ],
  },
  {
    icon: Scale,
    title: "الخدمات القانونية المقدمة",
    items: [
      "نقدم خدمات المحاماة والاستشارات القانونية وفقاً للأنظمة المعمول بها في المملكة العربية السعودية",
      "تشمل خدماتنا التقاضي، الاستشارات، صياغة العقود، وحوكمة الشركات",
      "أي معلومات أو مشورة مقدمة عبر الموقع لا تُعدّ بديلاً عن استشارة قانونية رسمية",
      "العلاقة المهنية بين العميل والمكتب تنشأ فقط بعد توقيع اتفاقية أتعاب رسمية",
    ],
  },
  {
    icon: FileText,
    title: "التزامات المستخدم",
    items: [
      "تقديم معلومات صحيحة ودقيقة عند التسجيل واستخدام الخدمات",
      "الحفاظ على سرية بيانات حسابك وعدم مشاركتها مع أي طرف ثالث",
      "عدم استخدام المنصة لأي أغراض غير قانونية أو مخالفة للأنظمة",
      "احترام حقوق الملكية الفكرية للمكتب والأطراف الأخرى",
      "إخطارنا فوراً بأي استخدام غير مصرح به لحسابك",
    ],
  },
  {
    icon: CreditCard,
    title: "الأتعاب والمدفوعات",
    items: [
      "تُحدد الأتعاب وفقاً لاتفاقية مكتوبة قبل بدء تقديم الخدمة",
      "تُسدد المدفوعات بالعملة المحددة في الفاتورة وضمن المواعيد المتفق عليها",
      "تأخر السداد قد يؤدي إلى إيقاف الخدمات وفرض رسوم إضافية",
      "جميع الأتعاب غير قابلة للاسترداد إلا في الحالات المنصوص عليها في الاتفاقية",
      "الضرائب والرسوم الحكومية على عاتق العميل ما لم يُتفق على خلاف ذلك",
    ],
  },
  {
    icon: Ban,
    title: "حدود المسؤولية",
    items: [
      "نبذل العناية المهنية المطلوبة لكنا لا نضمن نتائج محددة في القضايا القانونية",
      "لا نتحمل المسؤولية عن أي أضرار غير مباشرة أو تبعية ناتجة عن استخدام خدماتنا",
      "تقتصر مسؤوليتنا الإجمالية على قيمة الأتعاب المدفوعة عن الخدمة محل النزاع",
      "لا نتحمل المسؤولية عن انقطاع الخدمة بسبب أعطال تقنية خارجة عن إرادتنا",
    ],
  },
  {
    icon: AlertTriangle,
    title: "الملكية الفكرية",
    items: [
      "جميع المحتويات المنشورة على الموقع (نصوص، صور، شعارات) ملك حصري لشركة استيثاق",
      "يُمنع نسخ أو إعادة نشر أي محتوى دون إذن كتابي مسبق",
      "المستندات والمذكرات المُعدّة للعميل تظل ضمن حقوق الملكية الفكرية للمكتب",
      "يحق للعميل استخدام المخرجات للأغراض المتفق عليها فقط",
    ],
  },
  {
    icon: RefreshCw,
    title: "إنهاء الخدمة",
    items: [
      "يحق لأي طرف إنهاء العلاقة وفقاً لما تنص عليه اتفاقية الأتعاب",
      "في حال الإنهاء، يلتزم العميل بسداد الأتعاب المستحقة عن الأعمال المنجزة",
      "نحتفظ بحق إيقاف أو إلغاء حسابك في حال مخالفة الشروط أو إساءة الاستخدام",
      "تبقى بنود السرية والملكية الفكرية سارية حتى بعد إنهاء العلاقة",
    ],
  },
  {
    icon: Scale,
    title: "القانون الواجب التطبيق وتسوية النزاعات",
    items: [
      "تخضع هذه الشروط لأنظمة المملكة العربية السعودية",
      "تختص المحاكم السعودية في الرياض بالنظر في أي نزاع ينشأ عن هذه الشروط",
      "نسعى أولاً لحل أي نزاع بالطرق الودية قبل اللجوء للقضاء",
      "تُفسر هذه الشروط باللغة العربية وهي اللغة المعتمدة عند الاختلاف",
    ],
  },
  {
    icon: Cloud,
    title: "التكامل مع خدمات Google (Drive و Calendar)",
    items: [
      "يوفّر التطبيق تكاملاً اختيارياً مع Google Drive و Google Calendar عبر OAuth 2.0، ويتطلب موافقة المستخدم الصريحة على النطاقات المطلوبة.",
      "نستخدم النطاقات: openid، userinfo.email/profile، drive.file، drive (قراءة ملفات قانونية موجودة)، calendar.events — حصراً لتقديم الوظائف المطلوبة.",
      "استخدامنا لبيانات Google يلتزم بـ Google API Services User Data Policy ومتطلبات Limited Use؛ راجع تفاصيل الاستخدام في سياسة الخصوصية.",
      "لا نبيع بيانات Google ولا نستخدمها للإعلانات أو لتدريب نماذج ذكاء اصطناعي.",
      "يحق للمستخدم فصل حساب Google في أي وقت من إعدادات التطبيق أو من myaccount.google.com/permissions، وعند الفصل تُحذف الرموز فوراً.",
    ],
  },
];

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>شروط الاستخدام | استيثاق للمحاماة</title>
        <meta name="description" content="شروط وأحكام استخدام خدمات شركة استيثاق للمحاماة والاستشارات القانونية - اطّلع على حقوقك والتزاماتك عند استخدام منصتنا." />
        <link rel="canonical" href="https://isteethaq.com/terms" />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-ws-navy py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ws-gold/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-ws-gold/10 border border-ws-gold/20 rounded-full px-4 py-1.5 mb-6">
            <FileText className="h-4 w-4 text-ws-gold" />
            <span className="text-xs font-semibold text-ws-gold">الشروط القانونية للاستخدام</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">شروط الاستخدام</h1>
          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            الشروط والأحكام التي تحكم العلاقة بينك وبين شركة استيثاق للمحاماة والاستشارات القانونية
          </p>
          <p className="text-sm text-white/30 mt-6">آخر تحديث: مايو ٢٠٢٦</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-ws-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Intro */}
          <div className="bg-ws-navy/[0.03] border border-ws-navy/10 rounded-2xl p-6 md:p-8">
            <p className="text-ws-navy/80 leading-relaxed text-sm md:text-base">
              تحدد هذه الشروط القواعد والأحكام التي تنظم استخدامك لخدمات شركة استيثاق للمحاماة والاستشارات القانونية، سواء عبر موقعنا الإلكتروني أو من خلال خدماتنا المهنية المباشرة. يُرجى قراءة هذه الشروط بعناية قبل استخدام أي من خدماتنا.
            </p>
          </div>

          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <div key={i} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-ws-gold/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-ws-gold" />
                  </div>
                  <h2 className="text-xl font-bold text-ws-navy">{section.title}</h2>
                </div>
                <ul className="space-y-3 pr-[52px]">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-ws-navy/70 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Contact */}
          <div className="bg-ws-navy rounded-2xl p-6 md:p-8 text-center space-y-4">
            <Mail className="h-8 w-8 text-ws-gold mx-auto" />
            <h2 className="text-xl font-bold text-white">استفسارات قانونية</h2>
            <p className="text-white/50 text-sm max-w-lg mx-auto">
              إذا كان لديك أي استفسار حول شروط الاستخدام أو ترغب في الحصول على توضيح بشأن أي بند، يُرجى التواصل معنا
            </p>
            <a href="mailto:legal@isteethaq.com" className="inline-block text-ws-gold hover:text-ws-gold/80 transition-colors font-semibold text-sm">
              legal@isteethaq.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
