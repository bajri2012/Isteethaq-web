import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useWebsiteContent = (sectionKey: string) => {
  return useQuery({
    queryKey: ["website-content", sectionKey],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("website_content")
        .select("content_json")
        .eq("section_key", sectionKey)
        .single();
      if (error) return null;
      return data?.content_json as Record<string, any> | null;
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useTestimonials = () => {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data } = await supabase
        .from("testimonials")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false })
        .limit(6);
      return data ?? [];
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useBlogPosts = (limit = 3) => {
  return useQuery({
    queryKey: ["blog-posts", limit],
    queryFn: async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false })
        .limit(limit);
      return data ?? [];
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useFaqs = (category?: string) => {
  return useQuery({
    queryKey: ["faqs", category],
    queryFn: async () => {
      let query = supabase
        .from("faqs")
        .select("*")
        .eq("is_active", true)
        .order("sort_order");
      if (category && category !== "all") {
        query = query.eq("category", category);
      }
      const { data } = await query;
      return data ?? [];
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useStrategicPartners = () => {
  return useQuery({
    queryKey: ["strategic-partners"],
    queryFn: async () => {
      const { data } = await supabase
        .from("strategic_partners")
        .select("*")
        .eq("is_active", true)
        .order("sort_order");
      return data ?? [];
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useCertifications = () => {
  return useQuery({
    queryKey: ["certifications"],
    queryFn: async () => {
      const { data } = await supabase
        .from("certifications")
        .select("*")
        .order("sort_order");
      return data ?? [];
    },
    staleTime: 5 * 60 * 1000,
  });
};
