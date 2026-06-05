import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { useBlogPosts } from "@/hooks/useWebsiteContent";
import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { cn } from "@/lib/utils";

const categories = ["الكل", "عمل", "تجاري", "عقاري", "أحوال شخصية"];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const { data: posts } = useBlogPosts(50);

  const filteredPosts = activeCategory === "الكل"
    ? posts
    : posts?.filter((p: any) => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>المدونة | استيثاق للمحاماة</title>
        <meta name="description" content="مقالات قانونية ونصائح من خبراء مكتب استيثاق للمحاماة" />
      </Helmet>

      <section className="bg-ws-navy py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-white mb-4">
            المدونة <span className="text-ws-gold">القانونية</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-ws-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat ? "bg-ws-navy text-white" : "bg-ws-gray text-ws-text-muted hover:bg-ws-navy/5"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredPosts && filteredPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post: any, i: number) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden border border-ws-navy/5 bg-ws-gray hover:shadow-lg transition-shadow group"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="aspect-[16/9] bg-ws-navy/5 flex items-center justify-center">
                      {post.cover_image_url ? (
                        <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-3xl">📝</span>
                      )}
                    </div>
                    <div className="p-5">
                      <span className="inline-block text-[10px] font-semibold text-ws-gold bg-ws-gold/10 px-2 py-0.5 rounded-full mb-3">
                        {post.category}
                      </span>
                      <h3 className="font-bold text-ws-navy mb-2 group-hover:text-ws-gold transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-ws-text-muted line-clamp-2 mb-3">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-ws-text-muted">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.published_at ? format(new Date(post.published_at), "d MMM yyyy", { locale: ar }) : ""}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.reading_time} د</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <p className="text-center text-ws-text-muted py-12">لا توجد مقالات حالياً. سيتم إضافتها من لوحة التحكم.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
