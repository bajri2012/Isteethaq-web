# قائمة التحقق من جاهزية الرفع على Vercel

## ✅ التحضيرات المكتملة

- [x] إصلاح `vite.config.ts` (إزالة `lovable-tagger`)
- [x] إنشاء `tsconfig.node.json`
- [x] إضافة الحزم الناقصة (`date-fns`, `next-themes`, `react-markdown`)
- [x] إنشاء ملف `.env` محلي
- [x] بناء المشروع بنجاح (`npm run build`)
- [x] تشغيل السيرفر المحلي بنجاح
- [x] إصلاح TypeScript errors (vitest/globals)
- [x] تحديث README مع تعليمات النشر

---

## ⏳ ما قبل الرفع (المطلوب الآن)

### 1️⃣ الحصول على مفتاح Supabase

**المطلوب:**
```
VITE_SUPABASE_PUBLISHABLE_KEY = ???
```

**أين تجده:**
1. اذهب إلى https://app.supabase.com
2. اختر مشروع: `lxhwudcnbixczwiuhrkl`
3. **Settings → API**
4. انسخ **Anon / Public Key** (يبدأ بـ `eyJ...`)

### 2️⃣ تحديث `.env` المحلي

ملء الفراغ:
```env
VITE_SUPABASE_PUBLISHABLE_KEY=<انسخ المفتاح هنا>
```

ثم اختبر محليًا:
```bash
npm run dev
# افتح http://localhost:8080
# تحقق أن البيانات تحمّل (Blog, Team, FAQ)
```

### 3️⃣ اختبار الموقع المحلي

[ ] الصفحة الرئيسية تحمّل بسرعة
[ ] الصور تظهر بشكل صحيح
[ ] قسم "الفريق" يعرض البيانات من Supabase
[ ] قسم "المدونة" يعرض المقالات
[ ] قسم "الأسئلة الشائعة" يعرض البيانات
[ ] نموذج "التواصل" يظهر بدون أخطاء
[ ] لا توجد أخطاء في Console (F12)

---

## 🚀 خطوات الرفع على Vercel

### 1️⃣ إنشاء GitHub Repository

```bash
git init
git add .
git commit -m "Initial: isteethaq-web ready for Vercel"
git branch -M main
git remote add origin https://github.com/[YOUR_ORG]/isteethaq-website.git
git push -u origin main
```

[ ] تم إنشاء repo على GitHub

### 2️⃣ ربط Vercel

1. اذهب إلى https://vercel.com/new
2. اختر **Import Git Repository**
3. ربط حسابك على GitHub
4. اختر repo: `isteethaq-website`
5. Vercel سيكتشف الإعدادات تلقائياً

[ ] تم الربط مع Vercel

### 3️⃣ تعيين متغيرات البيئة

في لوحة Vercel:
**Deployments → Settings → Environment Variables**

أضف 7 متغيرات:

```
VITE_SUPABASE_URL = https://lxhwudcnbixczwiuhrkl.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY = [paste anon key]
VITE_RABT_PLATFORM_URL = https://rabt-law.com
VITE_RABT_LOGIN_URL = https://rabt-law.com/auth/login
VITE_APP_ANDROID_URL = https://play.google.com/store/apps/details?id=com.isteethaq.app
VITE_APP_IOS_URL = https://apps.apple.com/app/isteethaq/id000000000
VITE_ORGANIZATION_SLUG = isteethaq
```

[ ] تم إضافة جميع المتغيرات

### 4️⃣ ربط الدومين

في Vercel:
**Settings → Domains**

1. أضف `isteethaq.sa`
2. اختر: **Using Nameservers** أو **CNAME**
3. اتبع التعليمات
4. SSL تلقائي

[ ] تم ربط الدومين

### 5️⃣ التحقق من البناء

بعد الدفع على GitHub:
```bash
git push origin main
```

تحقق من Vercel:
- [ ] البناء نجح ✅
- [ ] الموقع متاح على https://isteethaq-website.vercel.app
- [ ] لا توجد أخطاء في Logs

---

## ✨ بعد الرفع

### اختبار الموقع المرفوع

[ ] الموقع يحمّل بسرعة من الدومين
[ ] الصور محسّنة (responsive)
[ ] كل الصفحات تعمل (Home, About, Services, Team, Blog…)
[ ] نموذج التواصل يعمل
[ ] SEO صحيح (Open Graph meta tags)
[ ] Mobile responsive

### إضافة مراقبة

- [ ] تفعيل **Vercel Analytics** (موجود بالفعل)
- [ ] إضافة **Google Search Console** (تسجيل الموقع)
- [ ] إضافة **Google Analytics** (اختياري)

### الصيانة المستمرة

- [ ] مراجعة Logs الأسبوع الأول
- [ ] تحديث المحتوى من Supabase عند الحاجة
- [ ] النسخة الاحتياطية للبيانات

---

## 📞 في حالة المشاكل

| المشكلة | الحل |
|---|---|
| البناء فشل | تحقق من logs في Vercel → redeploy |
| متغيرات البيئة ناقصة | أضف المتغيرات وأعد البناء |
| Supabase غير متاح | تحقق من الاتصال والمفتاح |
| الدومين لا يعمل | تحقق من DNS وانتظر التحديث (حتى 48 ساعة) |

---

**آخر تحديث:** 2026-06-05
