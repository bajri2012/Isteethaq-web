import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useBlogPosts } from "@/hooks/useWebsiteContent";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

export const BlogSection = () => {
  const { data: posts } = useBlogPosts(3);

  const displayPosts = posts && posts.length > 0 ? posts : [
    { id: "1", title: "أهم التعديلات في نظام العمل السعودي 2024", excerpt: "تعرف على أبرز التعديلات التي طرأت على نظام العمل وتأثيرها المباشر على قطاع الأعمال والشركات في المملكة.", category: "أنظمة عمل", published_at: new Date().toISOString(), slug: "#", reading_time: 5 },
    { id: "2", title: "حوكمة الشركات: لماذا تحتاجها شركتك الآن؟", excerpt: "دليل شامل حول أهمية تطبيق معايير الحوكمة وكيف تحمي شركتك من المخاطر القانونية والمالية.", category: "حوكمة", published_at: new Date().toISOString(), slug: "#", reading_time: 7 },
    { id: "3", title: "دليل المستثمر الأجنبي لدخول السوق السعودي", excerpt: "خطوات عملية ومتطلبات نظامية لتأسيس أعمالك في المملكة العربية السعودية كمستثمر أجنبي.", category: "استثمار", published_at: new Date().toISOString(), slug: "#", reading_time: 6 },
  ];

  return (
    <section className="py-20 md:py-28 bg-ws-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold text-ws-gold mb-4 border border-ws-gold/20 px-4 py-1.5 rounded-full">
              المدونة القانونية
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ws-navy">رؤى ومقالات قانونية</h2>
            <p className="text-ws-text-muted mt-2 max-w-lg">نشارك خبراتنا القانونية لمساعدتك على فهم حقوقك والتزاماتك</p>
          </motion.div>
          <Link to="/blog" className="hidden sm:inline-flex items-center text-sm font-semibold text-ws-gold hover:text-ws-gold-light transition-colors group">
            جميع المقالات
            <ArrowLeft className="h-4 w-4 ms-1 group-hover:-translate-x-0.5 transition-transform rtl-flip" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPosts.map((post: any, i: number) => (
            <Link key={post.id} to={post.slug && post.slug !== "#" ? `/blog/${post.slug}` : "/blog"}>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden border border-ws-navy/5 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 group cursor-pointer h-full"
            >
              <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-ws-navy/[0.06] via-ws-gold/[0.04] to-ws-navy/[0.02]">
                {post.cover_image_url ? (
                  <img
                    src={post.cover_image_url}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 opacity-[0.05]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-width='0.3'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                )}
                <div className="absolute bottom-3 right-3">
                  <span className="inline-block text-[10px] font-bold text-ws-gold bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-ws-navy mb-2.5 group-hover:text-ws-gold transition-colors line-clamp-2 text-base">
                  {post.title}
                </h3>
                <p className="text-sm text-ws-text-muted line-clamp-2 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-ws-text-muted">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.published_at
                      ? format(new Date(post.published_at), "d MMMM yyyy", { locale: ar })
                      : ""}
                  </div>
                  <span className="w-1 h-1 rounded-full bg-ws-text-muted/30" />
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.reading_time} دقائق قراءة
                  </div>
                </div>
              </div>
            </motion.article>
            </Link>
          ))}
        </div>

        <div className="sm:hidden text-center mt-8">
          <Link to="/blog" className="text-sm font-semibold text-ws-gold">
            جميع المقالات ←
          </Link>
        </div>
      </div>
    </section>
  );
};
