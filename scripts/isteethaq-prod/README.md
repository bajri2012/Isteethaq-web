<div dir="rtl">

# دليل إعداد مشروع Supabase المستقل: isteethaq-prod

> فصل جداول موقع استيثاق التعريفي عن قاعدة بيانات منصة ربط المشتركة.

---

## الجداول المنقولة (9 جداول)

| الجدول | الاستخدام | سياسة anon |
|---|---|---|
| `website_content` | نصوص hero / about / cta | SELECT (الكل) |
| `blog_posts` | المقالات | SELECT (status = 'published') |
| `website_team_members` | فريق العمل | SELECT (is_active = true) |
| `testimonials` | شهادات العملاء | SELECT (is_active = true) |
| `strategic_partners` | الشركاء الاستراتيجيون | SELECT (is_active = true) |
| `certifications` | الاعتمادات والشهادات | SELECT (الكل) |
| `faqs` | الأسئلة الشائعة | SELECT (is_active = true) |
| `contact_requests` | نموذج "تواصل معنا" | INSERT فقط |
| `partner_requests` | نموذج "شراكة" | INSERT فقط |

---

## خطوات التنفيذ

### الخطوة 1: إنشاء مشروع Supabase الجديد

1. اذهب إلى [supabase.com](https://supabase.com) → **New Project**
2. اسم المشروع: `isteethaq-prod`
3. المنطقة: `Middle East (Bahrain)` أو الأقرب
4. انتظر حتى يكتمل الإعداد (~2 دقيقة)
5. احتفظ بـ:
   - `Project URL` (مثال: `https://XXXX.supabase.co`)
   - `anon public key`
   - `service_role key` (سري — للـ Dashboard فقط)
   - `Database Password`

---

### الخطوة 2: تنفيذ ملفات الـ Schema

افتح **SQL Editor** في مشروع `isteethaq-prod` ونفّذ بالترتيب:

```
01_schema.sql       ← إنشاء الجداول التسعة + RLS + Grants
02_rls_policies.sql ← سياسات القراءة العامة وإدراج النماذج
03_storage.sql      ← حاويات الصور الثلاث (blog-images, team-images, partner-logos)
```

---

### الخطوة 3: تصدير البيانات من مشروع ربط

**الطريقة السريعة (Dashboard CSV):**

1. افتح مشروع ربط (`lxhwudcnbixczwiuhrkl`)
2. لكل جدول: **Table Editor** → اختر الجدول → **Export to CSV**
3. في `isteethaq-prod`: **Table Editor** → اختر الجدول → **Import CSV**

**الطريقة الأقوى (pg_dump) — تتطلب psql محلياً:**

```bash
# من مشروع ربط (بيئة محلية)
pg_dump "postgresql://postgres.lxhwudcnbixczwiuhrkl:DB_PASSWORD@aws-0-me-south-1.pooler.supabase.com:5432/postgres" \
  --table=public.website_content \
  --table=public.blog_posts \
  --table=public.website_team_members \
  --table=public.testimonials \
  --table=public.strategic_partners \
  --table=public.certifications \
  --table=public.faqs \
  --data-only \
  --column-inserts \
  -f isteethaq_web_data.sql

# إلى مشروع isteethaq-prod
psql "postgresql://postgres.NEW_PROJECT_ID:NEW_DB_PASSWORD@aws-0-REGION.pooler.supabase.com:5432/postgres" \
  -f isteethaq_web_data.sql
```

استبدل `DB_PASSWORD` و`NEW_PROJECT_ID` و`NEW_DB_PASSWORD` من **Settings → Database** في كل مشروع.

**راجع `04_export_from_main.sql`** لاستعلامات COPY التفصيلية.

---

### الخطوة 4: التحقق النهائي

نفّذ `05_verify.sql` في مشروع `isteethaq-prod` وتحقق من:

| العنصر | المتوقع |
|---|---|
| Tables | 9 |
| RLS Policies | 9 |
| Storage Buckets | 3 |
| Storage Policies | 3 |
| blog_posts_rows | > 0 |
| website_content_rows | > 0 |

---

### الخطوة 5: تحديث isteethaq-web

في مشروع `Isteethaq-web` — حدّث `.env` (أو Vercel Environment Variables):

```
VITE_SUPABASE_URL=https://NEW_PROJECT_ID.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJ...anon_key_from_new_project
```

ثم redeploy. **لا تغيير في الكود** — فقط تبديل المتغيرات.

---

### الخطوة 6: مراقبة أسبوع ثم حذف من ربط

بعد التأكد من عمل الموقع على المشروع الجديد:

```sql
-- في مشروع ربط (lxhwudcnbixczwiuhrkl) — بعد أسبوع من التحقق
-- DROP TABLE public.website_content;
-- DROP TABLE public.blog_posts;
-- DROP TABLE public.website_team_members;
-- DROP TABLE public.testimonials;
-- DROP TABLE public.strategic_partners;
-- DROP TABLE public.certifications;
-- DROP TABLE public.faqs;
-- DROP TABLE public.contact_requests;  -- إذا لم تستخدمها منصة ربط
-- DROP TABLE public.partner_requests;  -- إذا لم تستخدمها منصة ربط
```

> ⚠️ **تحقق أولاً** من عدم استخدام هذه الجداول في كود منصة ربط قبل الحذف.

---

## هيكل الملفات

```
scripts/isteethaq-prod/
├── README.md                ← هذا الملف
├── 01_schema.sql            ← الجداول + RLS enable + Grants
├── 02_rls_policies.sql      ← سياسات RLS (9 سياسات)
├── 03_storage.sql           ← حاويات التخزين (3 حاويات)
├── 04_export_from_main.sql  ← استعلامات تصدير البيانات
└── 05_verify.sql            ← استعلامات التحقق النهائي
```

---

## ملاحظات أمان

- **anon key** آمن في الكود الأمامي — يقرأ فقط ما تسمح به RLS
- **service_role key** لا يُوضع في كود الموقع أبداً — للـ Dashboard فقط
- جميع الكتابة (إضافة مقالات، تحرير محتوى) تتم عبر Supabase Dashboard أو Edge Function مستقبلاً
- `contact_requests` و`partner_requests`: anon يُدرج فقط، لا يقرأ — القراءة عبر Dashboard

</div>
