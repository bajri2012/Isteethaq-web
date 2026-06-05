"""Migrate data from ربط project to isteethaq-prod."""
import psycopg2
import psycopg2.extras
import psycopg2.extensions

psycopg2.extensions.register_adapter(dict, psycopg2.extras.Json)
psycopg2.extensions.register_adapter(list, psycopg2.extras.Json)

SRC = "postgresql://postgres:Ma2358805766@db.lxhwudcnbixczwiuhrkl.supabase.co:5432/postgres"
DST = "postgresql://postgres:Ma2358805766@db.owzipxwhlxxsauarzzab.supabase.co:5432/postgres"

TABLES = [
    {
        "name": "website_content",
        "query": "SELECT id, section_key, content_json, updated_at, updated_by FROM public.website_content ORDER BY section_key",
        "insert": "INSERT INTO public.website_content (id, section_key, content_json, updated_at, updated_by) VALUES %s ON CONFLICT (id) DO NOTHING",
    },
    {
        "name": "blog_posts",
        "query": "SELECT id, title, slug, excerpt, content, cover_image_url, category, author_name, reading_time, meta_title, meta_description, status, published_at, created_at, updated_at FROM public.blog_posts WHERE status = 'published' ORDER BY published_at DESC",
        "insert": "INSERT INTO public.blog_posts (id, title, slug, excerpt, content, cover_image_url, category, author_name, reading_time, meta_title, meta_description, status, published_at, created_at, updated_at) VALUES %s ON CONFLICT (id) DO NOTHING",
    },
    {
        "name": "website_team_members",
        "query": "SELECT id, full_name, job_title, specialization, bio, years_experience, notable_cases, degrees, image_url, sort_order, is_active, created_at, updated_at FROM public.website_team_members WHERE is_active = true ORDER BY sort_order",
        "insert": "INSERT INTO public.website_team_members (id, full_name, job_title, specialization, bio, years_experience, notable_cases, degrees, image_url, sort_order, is_active, created_at, updated_at) VALUES %s ON CONFLICT (id) DO NOTHING",
    },
    {
        "name": "testimonials",
        "query": "SELECT id, client_name, client_title, content, rating, is_active, created_at FROM public.testimonials WHERE is_active = true ORDER BY created_at",
        "insert": "INSERT INTO public.testimonials (id, client_name, client_title, content, rating, is_active, created_at) VALUES %s ON CONFLICT (id) DO NOTHING",
    },
    {
        "name": "strategic_partners",
        "query": "SELECT id, name, logo_url, description, website_url, sort_order, is_active, created_at FROM public.strategic_partners WHERE is_active = true ORDER BY sort_order",
        "insert": "INSERT INTO public.strategic_partners (id, name, logo_url, description, website_url, sort_order, is_active, created_at) VALUES %s ON CONFLICT (id) DO NOTHING",
    },
    {
        "name": "certifications",
        "query": "SELECT id, name, logo_url, issuer, year, sort_order, created_at FROM public.certifications ORDER BY sort_order",
        "insert": "INSERT INTO public.certifications (id, name, logo_url, issuer, year, sort_order, created_at) VALUES %s ON CONFLICT (id) DO NOTHING",
    },
    {
        "name": "faqs",
        "query": "SELECT id, question, answer, category, sort_order, is_active, created_at FROM public.faqs WHERE is_active = true ORDER BY sort_order",
        "insert": "INSERT INTO public.faqs (id, question, answer, category, sort_order, is_active, created_at) VALUES %s ON CONFLICT (id) DO NOTHING",
    },
]

def migrate():
    src = psycopg2.connect(SRC)
    dst = psycopg2.connect(DST)
    dst.autocommit = True

    src_cur = src.cursor()
    dst_cur = dst.cursor()

    for table in TABLES:
        name = table["name"]
        print(f"Migrating {name}...", end=" ", flush=True)
        src_cur.execute(table["query"])
        rows = src_cur.fetchall()
        if rows:
            psycopg2.extras.execute_values(dst_cur, table["insert"], rows)
            print(f"{len(rows)} rows")
        else:
            print("0 rows (skipped)")

    src.close()
    dst.close()
    print("\nMigration complete.")

if __name__ == "__main__":
    migrate()
