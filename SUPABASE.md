# isteethaq-web — ربط Supabase والبيانات

> هذا الملف يوثّق كيف يتصل موقع **isteethaq-web** (المنقول إلى repo منفصل على GitHub) بقاعدة بيانات Supabase، وما الجداول المستخدمة، وماذا يحدث عند تعطّل القاعدة.

## 1. أين يتم الربط

داخل `isteethaq-web/`:

```
.env                       ← القيم الفعلية (لا تُرفع لـ Git)
.env.example               ← قالب للقيم
src/integrations/supabase/client.ts   ← إنشاء الـ client
```

`client.ts` يقرأ:

```ts
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
export const supabase = createClient(url, key);
```

## 2. الحالة الراهنة (يونيو 2026)

| العنصر | القيمة |
|---|---|
| مشروع Supabase | `lxhwudcnbixczwiuhrkl` (نفس مشروع منصة ربط) |
| نوع المفتاح | `anon` / publishable (آمن للواجهة) |
| RLS | مفعّل — قراءة عامة فقط للسجلات `published = true` / `is_active = true` |

⚠️ **حالياً isteethaq-web يشارك قاعدة منصة ربط.** الفصل إلى مشروع Supabase مستقل مخطط له (انظر §5).

## 3. تبديل مشروع Supabase (دون تعديل كود)

في deployment isteethaq-web (Vercel) أو `.env` محلي:

```
VITE_SUPABASE_URL=https://NEW_PROJECT.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJ...new_anon_key
```

ثم redeploy. لا حاجة لأي تغيير في الكود.

نفس المبدأ ينطبق على `rabt-sites-renderer` — يقبل `SUPABASE_URL`/`SUPABASE_ANON_KEY` أو الـ Vite aliases.

## 4. الجداول المستخدمة من isteethaq-web

| الجدول | الاستخدام | شرط RLS العام |
|---|---|---|
| `website_content` | نصوص hero/about/cta القابلة للتعديل | كل الصفوف public |
| `blog_posts` | المقالات | `status = 'published'` |
| `team_members` | فريق العمل | `is_active = true` |
| `testimonials` | شهادات العملاء | `is_active = true` |
| `strategic_partners` | الشركاء | `is_active = true` |
| `certifications` | الاعتمادات | `is_active = true` |
| `faqs` | الأسئلة الشائعة | `is_active = true` |
| `plans` | خطط التسعير | `is_active = true` |
| `services` | الخدمات | `is_active = true` |

كلها تُقرأ بمفتاح `anon` فقط — لا كتابة من الموقع.

## 5. ماذا يحدث لو تعطّلت قاعدة البيانات

| السيناريو | السلوك | التخفيف |
|---|---|---|
| Supabase down كلياً | الصفحات الديناميكية تظهر فارغة أو skeleton | عرض fallback ثابت من ملفات محلية للأقسام الحرجة (hero, contact) |
| بطء/timeouts | تأخر تحميل المحتوى | إضافة `loading` states + retry واحد |
| RLS misconfig | بعض الأقسام فارغة دون خطأ | لوج تنبيه في console + رسالة "محتوى غير متاح حالياً" |
| تجاوز حدّ 1000 صف | بعض السجلات لا تظهر | استخدام `.range()` و pagination |

**توصية:** إضافة Sentry على isteethaq-web لمراقبة فشل استعلامات Supabase.

## 6. خطة الفصل إلى مشروع Supabase مستقل

انظر `.lovable/plan.md` قسم "فصل بيانات isteethaq".

ملخص:
1. إنشاء مشروع Supabase جديد `isteethaq-prod`
2. تصدير الجداول الـ9 أعلاه عبر `pg_dump`
3. استيرادها في المشروع الجديد + تطبيق نفس RLS
4. تحديث `.env` في isteethaq-web فقط (تبديل URL + key)
5. التحقق من القراءة العامة لكل قسم
6. حذف الجداول الـ9 من مشروع ربط (بعد فترة مراقبة أسبوع)
