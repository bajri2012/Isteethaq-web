import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CTASection } from "@/components/website/sections/CTASection";
import { Skeleton } from "@/components/ui/skeleton";
import lawyer1 from "@/assets/team/lawyer-1.jpg";
import lawyer2 from "@/assets/team/lawyer-2.jpg";
import lawyer3 from "@/assets/team/lawyer-3.jpg";
import lawyer4 from "@/assets/team/lawyer-4.jpg";

// Fallback images for DB records that use path-based URLs
const fallbackImages: Record<string, string> = {
  "/assets/team/lawyer-1.jpg": lawyer1,
  "/assets/team/lawyer-2.jpg": lawyer2,
  "/assets/team/lawyer-3.jpg": lawyer3,
  "/assets/team/lawyer-4.jpg": lawyer4,
};

const resolveImage = (url: string | null) => {
  if (!url) return lawyer1;
  return fallbackImages[url] || url;
};

interface TeamMember {
  id: string;
  full_name: string;
  job_title: string | null;
  specialization: string | null;
  bio: string | null;
  years_experience: number;
  notable_cases: string | null;
  degrees: string | null;
  image_url: string | null;
}

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const { data: members = [], isLoading } = useQuery({
    queryKey: ["website-team-members"],
    queryFn: async () => {
      const { data } = await supabase
        .from("website_team_members")
        .select("*")
        .eq("is_active", true)
        .order("sort_order");
      return (data ?? []) as TeamMember[];
    },
  });

  return (
    <>
      <Helmet>
        <title>فريقنا | استيثاق للمحاماة</title>
        <meta name="description" content="تعرف على فريق محامي مكتب استيثاق المتخصصين" />
      </Helmet>

      <section className="bg-ws-navy py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-white mb-4">
            فريقنا <span className="text-ws-gold">القانوني</span>
          </motion.h1>
          <p className="text-white/60 max-w-xl mx-auto">نخبة من المحامين والمستشارين المتخصصين ذوي السجل الحافل في أعقد القضايا</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ws-white">
        <div className="max-w-6xl mx-auto px-4">
          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-80 rounded-2xl" />)}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {members.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedMember(member)}
                  className="cursor-pointer group"
                >
                  <div className="rounded-2xl overflow-hidden border border-ws-navy/5 bg-ws-gray hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all duration-300">
                    <div className="aspect-[3/4] overflow-hidden relative">
                      <img
                        src={resolveImage(member.image_url)}
                        alt={member.full_name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ws-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ws-gold/0 via-ws-gold to-ws-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-ws-navy group-hover:text-ws-gold transition-colors">{member.full_name}</h3>
                      <p className="text-xs text-ws-gold mt-1 font-medium">{member.specialization}</p>
                      <p className="text-xs text-ws-text-muted mt-0.5">{member.job_title} · {member.years_experience} سنة</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-lg" dir="rtl">
          <DialogHeader>
            <DialogTitle className="text-ws-navy">{selectedMember?.full_name}</DialogTitle>
          </DialogHeader>
          {selectedMember && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img src={resolveImage(selectedMember.image_url)} alt={selectedMember.full_name} className="w-20 h-20 rounded-xl object-cover" />
                <div>
                  <span className="text-xs text-ws-gold font-semibold">{selectedMember.specialization}</span>
                  <p className="text-xs text-ws-text-muted">{selectedMember.job_title} · خبرة {selectedMember.years_experience} سنة</p>
                </div>
              </div>
              {selectedMember.bio && <p className="text-sm text-ws-text-muted leading-relaxed">{selectedMember.bio}</p>}
              {selectedMember.notable_cases && (
                <div>
                  <h4 className="text-sm font-semibold text-ws-navy mb-1">أبرز القضايا</h4>
                  <p className="text-sm text-ws-text-muted">{selectedMember.notable_cases}</p>
                </div>
              )}
              {selectedMember.degrees && (
                <div>
                  <h4 className="text-sm font-semibold text-ws-navy mb-1">المؤهلات</h4>
                  <p className="text-sm text-ws-text-muted">{selectedMember.degrees}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <CTASection />
    </>
  );
};

export default TeamPage;
