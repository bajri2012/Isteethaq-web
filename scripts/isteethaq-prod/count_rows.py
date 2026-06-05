import psycopg2

DB_URL = "postgresql://postgres:Ma2358805766@db.owzipxwhlxxsauarzzab.supabase.co:5432/postgres"
conn = psycopg2.connect(DB_URL)
cur = conn.cursor()

tables = ["website_content", "blog_posts", "website_team_members",
          "testimonials", "strategic_partners", "certifications",
          "faqs", "contact_requests", "partner_requests"]

print("=== Row counts ===")
for t in tables:
    cur.execute(f"SELECT COUNT(*) FROM public.{t}")
    count = cur.fetchone()[0]
    print(f"  {t}: {count}")

conn.close()
