# Isteethaq Website — موقع شركة استيثاق للمحاماة

موقع تعريفي مستقل لشركة **استيثاق للمحاماة والاستشارات القانونية**.
مفصول كلياً عن منصة **ربط** (SaaS لإدارة أعمال المحاماة).

> هذا المجلد جاهز للنسخ المباشر إلى Repo مستقل على GitHub. راجع `MIGRATION-TO-NEW-REPO.md` للخطوات الكاملة.

---

## ⚡ التشغيل السريع

```bash
# 1) ثبّت المكتبات
npm install

# 2) أنشئ ملف بيئة محلي
cp .env.example .env
# عدّل .env وأضف مفتاح Supabase anon key الفعلي

# 3) شغّل التطوير
npm run dev
# → http://localhost:8080 (يتغير المنفذ تلقائياً إن كان مشغولاً)

# 4) بناء للنشر
npm run build
# الملفات المجمعة في مجلد `dist/`

# 5) معاينة البناء محليًا
npm run preview
```

---

## 🗂️ هيكل المشروع

```
Isteethaq-web/
├── index.html                    # نقطة دخول HTML + SEO meta
├── package.json                  # مكتبات الموقع فقط (slim)
├── vite.config.ts                # إعدادات Vite
├── tailwind.config.ts            # نظام التصميم Deep Navy + Gold
├── postcss.config.js
├── tsconfig*.json
├── vercel.json                   # SPA rewrites + caching headers
├── .env.example                  # متغيرات البيئة المطلوبة
├── eslint.config.js
└── src/
    ├── main.tsx                  # bootstrap
    ├── App.tsx                   # Router (11 صفحة عامة فقط)
    ├── index.css                 # CSS variables + tailwind layers
    ├── assets/                   # صور (Hero, About, Team, Logo)
    ├── components/
    │   ├── ui/                   # shadcn primitives (slim subset)
    │   └── website/              # Navbar + Footer + Layout + sections
    ├── pages/website/            # 11 صفحة (Home, About, Services, ...)
    ├── hooks/
    │   ├── useWebsiteContent.ts  # جلب CMS من Supabase
    │   ├── use-mobile.tsx
    │   └── use-toast.ts
    ├── lib/                      # utils, sanitize-html, errors, routes
    └── integrations/supabase/    # client + types
```

---

## 🔌 المكتبات الأساسية

| الفئة | المكتبات |
|---|---|
| **Core** | react 18, react-dom, react-router-dom |
| **UI** | tailwindcss v3, shadcn/ui primitives (@radix-ui/*), lucide-react |
| **Animation** | framer-motion |
| **Data** | @supabase/supabase-js, @tanstack/react-query |
| **SEO** | react-helmet-async |
| **Notifications** | sonner |
| **Sanitize** | dompurify |
| **Hosting** | @vercel/speed-insights |

---

## 🗄️ قاعدة البيانات

الموقع يقرأ المحتوى من Supabase (نفس مشروع منصة ربط حالياً، يمكن فصله لاحقاً).

**الجداول المقروءة** (للقراءة العامة بدون مصادقة):
- `blog_posts` — المقالات (status = published)
- `faqs` — الأسئلة الشائعة
- `team_members` — الفريق القانوني
- `partners` / `strategic_partners` — الشركاء
- `testimonials` — شهادات العملاء
- `site_stats` — الإحصائيات
- `cms_services` — الخدمات

**الجداول المكتوبة** (نموذج تواصل):
- `contact_requests` — INSERT فقط
- `partner_requests` — INSERT فقط

> RLS مفعّل على كل الجداول مع سياسات SELECT عامة (لمحتوى منشور فقط).

---

## 🔗 الربط مع منصة ربط

لا يوجد تسجيل دخول داخل موقع استيثاق. كل أزرار الدخول تحوّل المستخدم إلى **منصة ربط**:

| الزر | الوجهة |
|---|---|
| تسجيل دخول | `${VITE_RABT_LOGIN_URL}` (مثال: https://rabt-law.com/auth/login) |
| تطبيق Android | `${VITE_APP_ANDROID_URL}` |
| تطبيق iOS | `${VITE_APP_IOS_URL}` |

**إدارة المحتوى** (المقالات، الفريق، الشركاء…) تتم من داخل منصة ربط عبر وحدة **Site Builder**، ثم يقرأ الموقع التحديثات تلقائياً.

---

## 🚀 النشر على Vercel

### الخطوات

1. **أنشئ repo على GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: isteethaq-web"
   git branch -M main
   git remote add origin https://github.com/[ORG]/isteethaq-website.git
   git push -u origin main
   ```

2. **ربط مع Vercel**:
   - اذهب إلى https://vercel.com/new
   - اختر GitHub repo: `isteethaq-website`
   - Vercel سيكتشف تلقائياً:
     - **Framework**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`

3. **أضف متغيرات البيئة**:
   في لوحة Vercel → **Settings → Environment Variables**:
   ```
   VITE_SUPABASE_URL = https://lxhwudcnbixczwiuhrkl.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY = [paste anon key]
   VITE_RABT_PLATFORM_URL = https://rabt-law.com
   VITE_RABT_LOGIN_URL = https://rabt-law.com/auth/login
   VITE_APP_ANDROID_URL = https://play.google.com/store/apps/details?id=com.isteethaq.app
   VITE_APP_IOS_URL = https://apps.apple.com/app/isteethaq/id000000000
   VITE_ORGANIZATION_SLUG = isteethaq
   ```

4. **ربط الدومين**:
   في **Settings → Domains**:
   - أضف `isteethaq.sa`
   - اتبع تعليمات DNS (غالباً CNAME إلى `cname.vercel-dns.com`)
   - SSL تلقائي بـ Let's Encrypt

5. **النشر التلقائي**:
   ```bash
   git push origin main
   # Vercel سيبني وينشر تلقائياً
   ```

**النشر اليدوي** (إذا أردت):
```bash
npm install -g vercel
vercel login
vercel deploy --prod
```

---

## 📄 ملفات مرجعية

- `MIGRATION-TO-NEW-REPO.md` — دليل النقل خطوة بخطوة
- `package.json.reference` — قائمة المكتبات في المشروع الأصلي (للمقارنة فقط)

---

تاريخ النسخة: 2026-06-04
