"""Execute SQL files against a PostgreSQL database using psycopg2."""
import sys
import psycopg2

DB_URL = "postgresql://postgres:Ma2358805766@db.owzipxwhlxxsauarzzab.supabase.co:5432/postgres"

def run(file_path):
    with open(file_path, encoding="utf-8") as f:
        sql = f.read()

    conn = psycopg2.connect(DB_URL)
    conn.autocommit = True
    cur = conn.cursor()
    cur.execute(sql)
    conn.close()
    print(f"OK: {file_path}")

if __name__ == "__main__":
    run(sys.argv[1])
