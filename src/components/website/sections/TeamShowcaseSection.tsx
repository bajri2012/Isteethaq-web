import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import lawyer1 from "@/assets/team/lawyer-1.jpg";
import lawyer2 from "@/assets/team/lawyer-2.jpg";
import lawyer3 from "@/assets/team/lawyer-3.jpg";

const fallbackImages: Record<string, string> = {
  "/assets/team/lawyer-1.jpg": lawyer1,
  "/assets/team/lawyer-2.jpg": lawyer2,
  "/assets/team/lawyer-3.jpg": lawyer3,
};

const resolveImage = (url: string | null, index: number) => {
  if (!url) return [lawyer1, lawyer2, lawyer3][index % 3];
  return fallbackImages[url] || url;
};

export const TeamShowcaseSection = () => {
  const { data: members = [], isLoading } = useQuery({
    queryKey: ["website-team-showcase"],
    queryFn: async () => {
      const { data } = await supabase
        .from("website_team_members")
        .select("id, full_name, job_title, specialization, bio, image_url")
        .eq("is_active", true)
        .order("sort_order")
        .limit(3);
      return data ?? [];
    },
  });

  return (
    <section className="py-20 md:py-28 bg-ws-gray relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--ws-navy)) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold text-ws-gold mb-4 border border-ws-gold/20 px-4 py-1.5 rounded-full">
            صُنّاع الفارق
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ws-navy mb-4">
            نخبة من العقول القانونية لتمثيل أعمالك
          </h2>
          <p className="text-ws-text-muted max-w-2xl mx-auto leading-relaxed">
            نؤمن في استيثاق أن قوة الشركة من قوة محاميها. يضم فريقنا نخبة من المحامين والمستشارين المرخصين ذوي السجل الحافل.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[1, 2, 3].map(i => <Skeleton key={i} className="h-[500px] rounded-2xl" />)}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {members.map((member: any, i: number) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden border border-ws-navy/5 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] transition-all duration-500">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={resolveImage(member.image_url, i)}
                      alt={member.full_name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ws-navy/50 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ws-gold/0 via-ws-gold to-ws-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-ws-navy mb-1">{member.full_name}</h3>
                    <p className="text-xs font-medium text-ws-gold mb-3">{member.job_title}</p>
                    <p className="text-sm text-ws-text-muted leading-relaxed mb-4 line-clamp-3">{member.bio || member.specialization}</p>
                    <Link
                      to="/team"
                      className="inline-flex items-center text-xs font-semibold text-ws-navy hover:text-ws-gold transition-colors group/link"
                    >
                      قراءة السيرة الذاتية
                      <ArrowLeft className="h-3 w-3 ms-1 group-hover/link:-translate-x-0.5 transition-transform rtl-flip" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
