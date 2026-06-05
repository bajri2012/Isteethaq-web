import psycopg2

DB_URL = "postgresql://postgres:Ma2358805766@db.owzipxwhlxxsauarzzab.supabase.co:5432/postgres"
conn = psycopg2.connect(DB_URL)
cur = conn.cursor()

cur.execute("SELECT tablename, rowsecurity FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename")
tables = cur.fetchall()
print("=== Tables ===")
for t in tables:
    print(t)

cur.execute("SELECT tablename, policyname FROM pg_policies WHERE schemaname = 'public' ORDER BY tablename")
policies = cur.fetchall()
print("\n=== Policies ===")
for p in policies:
    print(p)

cur.execute("SELECT id, name, public FROM storage.buckets ORDER BY name")
buckets = cur.fetchall()
print("\n=== Storage Buckets ===")
for b in buckets:
    print(b)

conn.close()
