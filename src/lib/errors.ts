/**
 * humanizeError — Convert raw Supabase/PostgREST/Storage/Auth/network errors
 * into clear, friendly Arabic messages for end users.
 *
 * Usage:
 *   toast.error(humanizeError(err, "تعذّر حفظ البيانات"))
 *
 * The function never throws. If it can't infer anything specific, it returns
 * the provided fallback (or a generic message).
 *
 * Last updated: 2026-05-31
 */

type AnyErr =
  | null
  | undefined
  | string
  | Error
  | { message?: string; code?: string | number; status?: number; statusCode?: number | string; details?: string; hint?: string; error_description?: string; name?: string; __isStorageError?: boolean; namespace?: string };

const GENERIC = "حدث خطأ غير متوقع. حاول مرة أخرى.";


// --- Pattern → friendly Arabic message ---------------------------------
// Order matters: more specific patterns first.
const PATTERNS: Array<{ re: RegExp; msg: string }> = [
  // RLS / permissions
  { re: /row[- ]level security|violates row-level|rls/i,
    msg: "لا تملك الصلاحية لتنفيذ هذه العملية." },
  { re: /permission denied|insufficient[_ ]privilege|not authorized|unauthorized/i,
    msg: "صلاحياتك لا تسمح بهذا الإجراء." },
  { re: /jwt|invalid token|token.*expired|session.*(expired|missing)/i,
    msg: "انتهت الجلسة. يرجى تسجيل الدخول من جديد." },

  // Auth
  { re: /invalid login credentials|invalid email or password/i,
    msg: "البريد الإلكتروني أو كلمة المرور غير صحيحة." },
  { re: /email not confirmed/i,
    msg: "لم يتم تأكيد البريد الإلكتروني بعد." },
  { re: /user already registered|already exists|duplicate key/i,
    msg: "هذا السجل موجود مسبقاً." },
  { re: /password.*(short|weak|6 characters)/i,
    msg: "كلمة المرور ضعيفة جداً، استخدم 8 أحرف على الأقل." },
  { re: /rate limit|too many requests/i,
    msg: "محاولات كثيرة في وقت قصير. انتظر قليلاً ثم أعد المحاولة." },

  // Constraint violations
  { re: /foreign key|violates foreign key/i,
    msg: "لا يمكن إتمام العملية لارتباط هذا السجل بسجلات أخرى." },
  { re: /not[- ]null|null value in column/i,
    msg: "يوجد حقل مطلوب لم يتم تعبئته." },
  { re: /check constraint|violates check/i,
    msg: "إحدى القيم لا تتوافق مع قواعد التحقق." },
  { re: /value too long/i,
    msg: "إحدى القيم أطول من الحد المسموح." },
  { re: /invalid input syntax|invalid uuid/i,
    msg: "تنسيق إحدى القيم غير صحيح." },

  // Storage
  { re: /bucket not found|object not found|no such file/i,
    msg: "الملف المطلوب غير موجود." },
  { re: /payload too large|file too large|exceeds.*size/i,
    msg: "حجم الملف يتجاوز الحد المسموح." },
  { re: /mime|content[- ]type.*not allowed/i,
    msg: "نوع الملف غير مدعوم." },

  // Network
  { re: /failed to fetch|network ?error|networkrequestfailed|load failed/i,
    msg: "تعذّر الاتصال بالخادم. تحقّق من الإنترنت وحاول مجدداً." },
  { re: /timeout|timed out|etimedout/i,
    msg: "انتهت مهلة الطلب. حاول مرة أخرى." },
  { re: /aborted/i,
    msg: "تم إلغاء الطلب." },

  // Server
  { re: /500|internal server error/i,
    msg: "خطأ مؤقت في الخادم. حاول بعد قليل." },
  { re: /503|service unavailable/i,
    msg: "الخدمة غير متاحة حالياً." },
];

function extractRawMessage(err: AnyErr): string {
  if (!err) return "";
  if (typeof err === "string") return err;
  const e = err as any;
  return (
    e.error_description ??
    e.message ??
    e.details ??
    e.hint ??
    (typeof e.toString === "function" ? String(e) : "")
  );
}

export function humanizeError(err: AnyErr, fallback?: string): string {
  const raw = extractRawMessage(err);
  if (!raw && fallback) return fallback;
  if (!raw) return GENERIC;

  // Status-code based shortcuts
  const status = (err as any)?.status ?? (err as any)?.statusCode;
  const numStatus = typeof status === "string" ? parseInt(status, 10) : status;
  if (numStatus === 401) return "انتهت الجلسة. يرجى تسجيل الدخول من جديد.";
  if (numStatus === 403) return "لا تملك الصلاحية لتنفيذ هذه العملية.";
  if (numStatus === 404) return "العنصر المطلوب غير موجود.";
  if (numStatus === 409) return "تعارض في البيانات. ربما تم تعديل السجل من مكان آخر.";
  if (numStatus === 413) return "حجم الملف يتجاوز الحد المسموح.";
  if (numStatus === 429) return "محاولات كثيرة في وقت قصير. انتظر قليلاً ثم أعد المحاولة.";

  for (const p of PATTERNS) {
    if (p.re.test(raw)) return p.msg;
  }

  // If the raw message is already Arabic / short and meaningful, keep it.
  const isArabic = /[\u0600-\u06FF]/.test(raw);
  if (isArabic && raw.length < 160) return raw;

  return fallback ?? GENERIC;
}
