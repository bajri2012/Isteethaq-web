#!/usr/bin/env bash
# ============================================================
# repair-migrations.sh
# يصلح تباين إصدارات migrations بين GitHub و Supabase ثم يسحب آخر التغييرات
#
# الاستخدام:
#   export SUPABASE_DB_PASSWORD='...'        # كلمة مرور قاعدة البيانات
#   export SUPABASE_ACCESS_TOKEN='...'       # من Account → Tokens
#   bash scripts/repair-migrations.sh
# ============================================================
set -euo pipefail

PROJECT_REF="lxhwudcnbixczwiuhrkl"

log() { printf "\n\033[1;36m▶ %s\033[0m\n" "$*"; }
ok()  { printf "\033[1;32m✔ %s\033[0m\n" "$*"; }

command -v supabase >/dev/null || { echo "ثبّت supabase CLI: https://supabase.com/docs/guides/cli"; exit 1; }
: "${SUPABASE_DB_PASSWORD:?ضع SUPABASE_DB_PASSWORD}"

log "ربط المشروع"
supabase link --project-ref "$PROJECT_REF" --password "$SUPABASE_DB_PASSWORD" || true
ok "تم الربط"

log "قراءة قائمة migrations (محلية vs بعيدة)"
supabase migration list --password "$SUPABASE_DB_PASSWORD" || true

log "إصلاح تلقائي: تمييز كل ما هو على الريموت كـ reverted ثم applied من المحلي"
# نستخرج timestamps المحلية من أسماء الملفات
LOCAL_VERSIONS=$(ls supabase/migrations/*.sql 2>/dev/null | sed -E 's|.*/([0-9]+)_.*\.sql|\1|' | sort -u)

# نستخرج timestamps البعيدة
REMOTE_VERSIONS=$(supabase migration list --password "$SUPABASE_DB_PASSWORD" 2>/dev/null \
  | awk 'NR>2 && $1 ~ /^[0-9]+$/ {print $1}' | sort -u)

# remote-only → reverted
for v in $REMOTE_VERSIONS; do
  if ! echo "$LOCAL_VERSIONS" | grep -qx "$v"; then
    echo "  reverted: $v"
    supabase migration repair --status reverted "$v" --password "$SUPABASE_DB_PASSWORD" || true
  fi
done

# local-only → applied
for v in $LOCAL_VERSIONS; do
  if ! echo "$REMOTE_VERSIONS" | grep -qx "$v"; then
    echo "  applied: $v"
    supabase migration repair --status applied "$v" --password "$SUPABASE_DB_PASSWORD" || true
  fi
done

ok "إصلاح migrations انتهى"

log "سحب آخر تغييرات الـ schema من البعيد"
supabase db pull --password "$SUPABASE_DB_PASSWORD" || true
ok "تم السحب"

log "حالة Git"
git status --short || true

cat <<EOF

✅ الخطوات التالية:
   git add supabase/migrations/
   git commit -m "fix: sync migration history"
   git push origin main

ثم تحقق من القائمة:
   supabase migration list --password "\$SUPABASE_DB_PASSWORD"
EOF
