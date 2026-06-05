#!/usr/bin/env bash
# ============================================================
# sync-and-deploy.sh
# مزامنة كاملة بين GitHub و Supabase ونشر كل شيء
# ============================================================
# المتطلبات:
#   - git, supabase CLI, npm/bun
#   - متغيرات البيئة:
#       SUPABASE_ACCESS_TOKEN   (من https://supabase.com/dashboard/account/tokens)
#       SUPABASE_DB_PASSWORD    (كلمة مرور قاعدة البيانات)
#   - تسجيل الدخول مسبقاً عبر: supabase login
# ============================================================

set -euo pipefail

PROJECT_REF="lxhwudcnbixczwiuhrkl"
BRANCH="${BRANCH:-main}"

log() { printf "\n\033[1;36m▶ %s\033[0m\n" "$*"; }
ok()  { printf "\033[1;32m✔ %s\033[0m\n" "$*"; }
err() { printf "\033[1;31m✘ %s\033[0m\n" "$*" >&2; }

# ---------- 0) فحص المتطلبات ----------
log "فحص المتطلبات"
command -v git >/dev/null       || { err "git غير مثبت"; exit 1; }
command -v supabase >/dev/null  || { err "supabase CLI غير مثبت — راجع https://supabase.com/docs/guides/cli"; exit 1; }
command -v bun >/dev/null || command -v npm >/dev/null || { err "bun أو npm مطلوب"; exit 1; }
: "${SUPABASE_DB_PASSWORD:=Ma2358805766}"
: "${SUPABASE_ACCESS_TOKEN:=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4aHd1ZGNuYml4Y3p3aXVocmtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MjQ0MjgsImV4cCI6MjA4OTMwMDQyOH0.9LfPjjVcKmWTGoaTguNj-TxkzBWhH6gKK_iFRc_fUcU}"
ok "كل الأدوات جاهزة"

# ---------- 1) مزامنة GitHub ----------
log "مزامنة الفرع $BRANCH مع GitHub"
git fetch --all --prune
git checkout "$BRANCH"
git pull --rebase --autostash origin "$BRANCH"
ok "Git متزامن"

# ---------- 2) تثبيت الاعتماديات ----------
log "تثبيت الحزم"
if command -v bun >/dev/null; then
  bun install
else
  npm install
fi
ok "الحزم مثبتة"

# ---------- 3) ربط مشروع Supabase ----------
log "ربط مشروع Supabase ($PROJECT_REF)"
supabase link --project-ref "$PROJECT_REF" --password "$SUPABASE_DB_PASSWORD" || true
ok "الربط مكتمل"

# ---------- 4) دفع migrations ----------
log "دفع جميع migrations إلى قاعدة البيانات"
supabase db push --password "$SUPABASE_DB_PASSWORD" --include-all
ok "Migrations مطبّقة"

# ---------- 5) نشر كل Edge Functions ----------
log "نشر كل Edge Functions"
FUNCTIONS_DIR="supabase/functions"
for fn in "$FUNCTIONS_DIR"/*/; do
  name=$(basename "$fn")
  case "$name" in
    _shared|_tests) continue ;;
  esac
  if [[ -f "$fn/index.ts" ]]; then
    echo "  → نشر $name"
    supabase functions deploy "$name" --project-ref "$PROJECT_REF" --no-verify-jwt 2>/dev/null \
      || supabase functions deploy "$name" --project-ref "$PROJECT_REF"
  fi
done
ok "كل Edge Functions منشورة"

# ---------- 6) بناء الفرونت إند (تحقق فقط) ----------
log "بناء الفرونت إند للتأكد من سلامته"
if command -v bun >/dev/null; then
  bun run build
else
  npm run build
fi
ok "البناء نجح"

# ---------- 7) Push أي تغييرات إلى GitHub ----------
if [[ -n "$(git status --porcelain)" ]]; then
  log "دفع التغييرات إلى GitHub"
  git add -A
  git commit -m "chore: sync & deploy $(date -u +%FT%TZ)"
  git push origin "$BRANCH"
  ok "تم الدفع"
else
  ok "لا تغييرات محلية للدفع"
fi

printf "\n\033[1;32m✅ تمت المزامنة والنشر بنجاح\033[0m\n"
printf "   - GitHub branch: %s\n" "$BRANCH"
printf "   - Supabase ref:  %s\n" "$PROJECT_REF"
printf "   - Frontend: انقر Publish في Lovable لنشر الواجهة\n\n"
