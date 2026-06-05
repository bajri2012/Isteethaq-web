import { Helmet } from "react-helmet-async";
import { Shield, Lock, Eye, FileText, Users, Globe, Mail, Cloud } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "المعلومات التي نجمعها",
    items: [
      "الاسم الكامل ومعلومات الاتصال (البريد الإلكتروني، رقم الهاتف، العنوان)",
      "رقم الهوية الوطنية أو السجل التجاري للأغراض القانونية",
      "تفاصيل القضايا والمستندات القانونية المقدمة",
      "بيانات الدفع والفواتير",
      "سجلات الاستخدام وملفات تعريف الارتباط عند زيارة موقعنا",
    ],
  },
  {
    icon: Eye,
    title: "كيف نستخدم معلوماتك",
    items: [
      "تقديم الخدمات القانونية والاستشارات المطلوبة",
      "التواصل معك بشأن قضاياك وتحديثاتها",
      "إصدار الفواتير ومعالجة المدفوعات",
      "تحسين خدماتنا وتجربة المستخدم",
      "الامتثال للمتطلبات القانونية والتنظيمية",
    ],
  },
  {
    icon: Lock,
    title: "حماية البيانات",
    items: [
      "تشفير جميع البيانات أثناء النقل والتخزين باستخدام بروتوكولات أمان متقدمة",
      "تقييد الوصول إلى البيانات للموظفين المصرح لهم فقط",
      "إجراء مراجعات أمنية دورية لأنظمتنا",
      "الاحتفاظ بنسخ احتياطية مشفرة لضمان استمرارية الخدمة",
      "الالتزام بمعايير حماية البيانات المعتمدة في المملكة العربية السعودية",
    ],
  },
  {
    icon: Users,
    title: "مشاركة البيانات مع أطراف ثالثة",
    items: [
      "لا نبيع أو نؤجر بياناتك الشخصية لأي طرف ثالث",
      "قد نشارك البيانات مع جهات قضائية بموجب أمر قضائي",
      "نستخدم مزودي خدمات موثوقين لمعالجة المدفوعات واستضافة البيانات",
      "جميع الأطراف الثالثة ملزمة باتفاقيات سرية صارمة",
    ],
  },
  {
    icon: Globe,
    title: "ملفات تعريف الارتباط (Cookies)",
    items: [
      "نستخدم ملفات تعريف الارتباط الضرورية لتشغيل الموقع",
      "ملفات تحليلية لفهم كيفية استخدام الزوار للموقع",
      "يمكنك التحكم في إعدادات ملفات تعريف الارتباط من متصفحك",
      "تعطيل بعض الملفات قد يؤثر على تجربة استخدامك للموقع",
    ],
  },
  {
    icon: Shield,
    title: "حقوقك",
    items: [
      "طلب الوصول إلى بياناتك الشخصية المحفوظة لدينا",
      "طلب تصحيح أو تحديث بياناتك",
      "طلب حذف بياناتك (مع مراعاة الالتزامات القانونية)",
      "الاعتراض على معالجة بياناتك لأغراض معينة",
      "سحب موافقتك على معالجة البيانات في أي وقت",
    ],
  },
];

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>سياسة الخصوصية | استيثاق للمحاماة</title>
        <meta name="description" content="سياسة الخصوصية لشركة استيثاق للمحاماة والاستشارات القانونية - نلتزم بحماية بياناتك الشخصية وفقاً لأعلى المعايير." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-ws-navy py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ws-gold/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-ws-gold/10 border border-ws-gold/20 rounded-full px-4 py-1.5 mb-6">
            <Shield className="h-4 w-4 text-ws-gold" />
            <span className="text-xs font-semibold text-ws-gold">حماية بياناتك أولويتنا</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">سياسة الخصوصية</h1>
          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            نلتزم في استيثاق بحماية خصوصيتك وبياناتك الشخصية وفقاً لنظام حماية البيانات الشخصية في المملكة العربية السعودية
          </p>
          <p className="text-sm text-white/30 mt-6">آخر تحديث: أبريل ٢٠٢٦</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-ws-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Intro */}
          <div className="bg-ws-navy/[0.03] border border-ws-navy/10 rounded-2xl p-6 md:p-8">
            <p className="text-ws-navy/80 leading-relaxed text-sm md:text-base">
              تصف هذه السياسة كيفية جمع واستخدام وحماية ومشاركة المعلومات الشخصية التي نحصل عليها عند استخدامك لخدماتنا القانونية أو زيارة موقعنا الإلكتروني. باستخدامك لخدماتنا، فإنك توافق على الممارسات الموضحة في هذه السياسة.
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

          {/* Google API Services User Data Policy Compliance */}
          <div className="space-y-4 border-t border-ws-navy/10 pt-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-ws-gold/10 flex items-center justify-center shrink-0">
                <Cloud className="h-5 w-5 text-ws-gold" />
              </div>
              <h2 className="text-xl font-bold text-ws-navy">استخدام بيانات Google (Google User Data)</h2>
            </div>
            <div className="pr-[52px] space-y-4 text-ws-navy/75 text-sm leading-relaxed">
              <p>
                يتكامل تطبيق <strong>استيثاق (Isteethaq)</strong> مع خدمات Google عبر OAuth 2.0 لتقديم وظائف Google Drive و Google Calendar داخل المنصة.
                استخدامنا لأي معلومات يتم تلقّيها من Google APIs يلتزم بـ
                {" "}
                <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-ws-gold hover:underline">
                  Google API Services User Data Policy
                </a>
                {" "}
                بما في ذلك متطلبات <strong>Limited Use</strong>.
              </p>

              <div>
                <h3 className="font-semibold text-ws-navy mb-2">النطاقات (Scopes) التي نطلبها ولماذا:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                    <span><code className="text-xs bg-ws-navy/5 px-1.5 py-0.5 rounded">openid / userinfo.email / userinfo.profile</code> — لتعريف الحساب المتصل وعرض اسم المستخدم وبريده في إعدادات التكامل.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                    <span><code className="text-xs bg-ws-navy/5 px-1.5 py-0.5 rounded">drive.file</code> — لإنشاء مجلدات القضايا داخل Drive المستخدم ورفع المستندات التي يُنشئها أو يفتحها عبر التطبيق فقط. لا يصل التطبيق إلى أي ملفات لم يُنشئها أو يفتحها المستخدم صراحةً من خلاله.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                    <span><code className="text-xs bg-ws-navy/5 px-1.5 py-0.5 rounded">calendar.events</code> — لإنشاء وتحديث مواعيد الجلسات والاجتماعات في تقويم Google الشخصي للمستخدم بحيث تتزامن مع هاتفه.</span>
                  </li>
                </ul>
                <p className="mt-3 text-xs text-ws-navy/60">
                  ملاحظة: لا نطلب النطاق المقيّد <code className="text-xs bg-ws-navy/5 px-1 py-0.5 rounded">https://www.googleapis.com/auth/drive</code>. نكتفي بـ <code className="text-xs bg-ws-navy/5 px-1 py-0.5 rounded">drive.file</code> الذي يقتصر الوصول على الملفات التي يُنشئها أو يفتحها المستخدم عبر التطبيق فقط.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-ws-navy mb-2">آليات حماية بيانات Google الحساسة:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                    <span><strong>التشفير أثناء النقل (In Transit):</strong> جميع الاتصالات مع Google APIs ومع خوادمنا تتم حصراً عبر HTTPS باستخدام TLS 1.2+.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                    <span><strong>التشفير أثناء التخزين (At Rest):</strong> رموز OAuth (refresh/access tokens) تُشفَّر باستخدام AES-256 عبر مفتاح تشفير على مستوى المنظومة (<code className="text-xs bg-ws-navy/5 px-1 py-0.5 rounded">_org_master_key()</code>) قبل حفظها في قاعدة البيانات (Supabase / PostgreSQL). لا تُخزَّن أي رموز بصيغة plaintext.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                    <span><strong>التحكم في الوصول (Access Control):</strong> فك تشفير الرموز يتم فقط داخل Edge Functions موثوقة تعمل بصلاحية <code className="text-xs bg-ws-navy/5 px-1 py-0.5 rounded">service_role</code>، ولا يمكن لأي مستخدم نهائي أو موظف الوصول إليها مباشرةً عبر API العميل. سياسات Row-Level Security (RLS) تمنع الوصول العابر بين المنظمات.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                    <span><strong>عزل بيانات المستأجرين (Multi-Tenant Isolation):</strong> كل بيانات Google تُربط بـ <code className="text-xs bg-ws-navy/5 px-1 py-0.5 rounded">organization_id</code> وتُحمى بسياسة <code className="text-xs bg-ws-navy/5 px-1 py-0.5 rounded">org_isolation</code> RESTRICTIVE تمنع أي تسرّب بين المنظومات.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                    <span><strong>المصادقة وحماية CSRF:</strong> تدفّق OAuth محمي بـ state nonce فريد لكل طلب، ويُتحقق من تطابق المنظومة والمستخدم قبل قبول أي token. كل الجلسات تستخدم JWT موقّعة من Supabase Auth.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                    <span><strong>الاحتفاظ والحذف (Retention & Deletion):</strong> عند فصل المستخدم لحساب Google، يُلغى refresh_token فوراً لدى Google، وتُمسح الرموز المشفّرة من قاعدة بياناتنا، وتتوقف أي مزامنة مستقبلية. لا نحتفظ بنسخ احتياطية تحتوي على بيانات Google بعد الحذف.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                    <span><strong>التدقيق والمراقبة (Audit & Monitoring):</strong> كل عمليات الربط/الفصل وأخطاء المزامنة تُسجَّل في <code className="text-xs bg-ws-navy/5 px-1 py-0.5 rounded">audit_logs</code> لرصد أي وصول غير عادي. الأسرار (Client Secret, Master Key) محفوظة كـ Supabase Secrets ولا تظهر في الكود المصدري.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                    <span><strong>أمان البنية التحتية:</strong> البيانات تُستضاف على Supabase (مبنية على AWS) في مراكز بيانات معتمدة SOC 2 Type II و ISO 27001، مع نسخ احتياطية مشفّرة ومراقبة 24/7.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                    <span><strong>الاستجابة للحوادث (Incident Response):</strong> في حال وقوع أي خرق أمني يمسّ بيانات Google، نلتزم بإبلاغ المستخدمين المتأثرين وفريق Google Trust & Safety خلال 72 ساعة، مع توضيح طبيعة الحادثة وخطوات المعالجة.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-ws-navy mb-2">التزام Limited Use:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                    <span>نستخدم بيانات Google <strong>فقط</strong> لتوفير الوظائف التي طلبها المستخدم صراحةً (مزامنة الملفات والتقويم).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                    <span><strong>لا نبيع</strong> بيانات Google ولا نستخدمها لعرض إعلانات أو لأي غرض تسويقي.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                    <span><strong>لا نسمح</strong> لأي بشر بقراءة بيانات Google الخاصة بالمستخدم، إلا بموافقته الصريحة، أو لأغراض الأمان والدعم الفني الضروري، أو للامتثال لمتطلبات قانونية.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                    <span>لا نُحوّل بيانات Google إلى نماذج ذكاء اصطناعي عامة، ولا نستخدمها لتدريب أي LLM.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ws-gold/60 mt-2 shrink-0" />
                    <span>رموز OAuth (refresh tokens) تُحفظ مشفّرة في قاعدة بياناتنا (Supabase) ولا تُشارك مع أي طرف ثالث.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-ws-navy mb-2">إلغاء الربط وحذف البيانات:</h3>
                <p>
                  يستطيع المستخدم في أي وقت فصل حساب Google من داخل التطبيق عبر <em>الإعدادات ← التكاملات ← Google</em>،
                  أو من خلال صفحة
                  {" "}
                  <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-ws-gold hover:underline">
                    Google Account Permissions
                  </a>.
                  عند الفصل، نحذف الـ refresh token فوراً ونوقف أي مزامنة لاحقة. يمكن أيضاً طلب حذف كامل البيانات بمراسلة <a href="mailto:privacy@isteethaq.com" className="text-ws-gold hover:underline">privacy@isteethaq.com</a>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-ws-navy rounded-2xl p-6 md:p-8 text-center space-y-4">
            <Mail className="h-8 w-8 text-ws-gold mx-auto" />
            <h2 className="text-xl font-bold text-white">تواصل معنا</h2>
            <p className="text-white/50 text-sm max-w-lg mx-auto">
              إذا كان لديك أي استفسار حول سياسة الخصوصية أو ترغب في ممارسة حقوقك المتعلقة ببياناتك الشخصية، يُرجى التواصل معنا
            </p>
            <a href="mailto:privacy@isteethaq.com" className="inline-block text-ws-gold hover:text-ws-gold/80 transition-colors font-semibold text-sm">
              privacy@isteethaq.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
