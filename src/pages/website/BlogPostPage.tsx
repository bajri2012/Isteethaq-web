import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import ReactMarkdown from "react-markdown";
import { CTASection } from "@/components/website/sections/CTASection";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug!)
        .eq("status", "published")
        .single();
      return data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-pulse space-y-4 max-w-2xl w-full px-4">
          <div className="h-8 bg-ws-gray rounded w-3/4" />
          <div className="h-4 bg-ws-gray rounded w-1/2" />
          <div className="h-64 bg-ws-gray rounded" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-ws-navy mb-2">المقال غير موجود</h1>
          <Link to="/blog" className="text-ws-gold hover:underline">العودة للمدونة</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.meta_title || post.title} | استيثاق</title>
        <meta name="description" content={post.meta_description || post.excerpt || ""} />
        <link rel="canonical" href={`https://isteethaq.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || ""} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "description": post.excerpt,
          "author": { "@type": "Person", "name": post.author_name },
          "datePublished": post.published_at,
        })}</script>
      </Helmet>

      {/* Cover */}
      {post.cover_image_url && (
        <div className="w-full aspect-[21/9] bg-ws-navy/5">
          <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-sm text-ws-gold mb-6 hover:underline">
            <ArrowRight className="h-4 w-4 me-1" />
            العودة للمدونة
          </Link>

          <span className="inline-block text-xs font-semibold text-ws-gold bg-ws-gold/10 px-2 py-0.5 rounded-full mb-4">
            {post.category}
          </span>

          <h1 className="text-2xl md:text-4xl font-bold text-ws-navy mb-4 leading-snug">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-ws-text-muted mb-8 pb-8 border-b border-ws-navy/5">
            {post.author_name && (
              <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" />{post.author_name}</span>
            )}
            {post.published_at && (
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{format(new Date(post.published_at), "d MMMM yyyy", { locale: ar })}</span>
            )}
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.reading_time} دقائق قراءة</span>
          </div>

          <div className="prose prose-lg max-w-none text-ws-text-muted leading-relaxed">
            <ReactMarkdown>{post.content || ""}</ReactMarkdown>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
};

export default BlogPostPage;
