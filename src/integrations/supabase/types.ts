export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      ai_chat_messages: {
        Row: {
          attachment_mime: string | null
          attachment_name: string | null
          attachment_path: string | null
          attachment_size: number | null
          content: string
          conversation_id: string
          created_at: string
          id: string
          organization_id: string
          role: string
          sources: Json | null
        }
        Insert: {
          attachment_mime?: string | null
          attachment_name?: string | null
          attachment_path?: string | null
          attachment_size?: number | null
          content: string
          conversation_id: string
          created_at?: string
          id?: string
          organization_id?: string
          role: string
          sources?: Json | null
        }
        Update: {
          attachment_mime?: string | null
          attachment_name?: string | null
          attachment_path?: string | null
          attachment_size?: number | null
          content?: string
          conversation_id?: string
          created_at?: string
          id?: string
          organization_id?: string
          role?: string
          sources?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_chat_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "ai_conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_chat_messages_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_chat_messages_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ai_chat_messages_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      ai_conversations: {
        Row: {
          created_at: string
          id: string
          organization_id: string
          service_id: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          organization_id?: string
          service_id?: string | null
          title?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          organization_id?: string
          service_id?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_conversations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_conversations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ai_conversations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ai_conversations_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_data_assistant_conversations: {
        Row: {
          created_at: string
          id: string
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          title?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      ai_data_assistant_messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          id: string
          result_data: Json | null
          role: string
          tool_calls: Json | null
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string
          id?: string
          result_data?: Json | null
          role: string
          tool_calls?: Json | null
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          id?: string
          result_data?: Json | null
          role?: string
          tool_calls?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_data_assistant_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "ai_data_assistant_conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_data_conversations: {
        Row: {
          answer: string | null
          context_summary: Json | null
          created_at: string
          error: string | null
          id: string
          latency_ms: number | null
          question: string
          status: string
          user_id: string
        }
        Insert: {
          answer?: string | null
          context_summary?: Json | null
          created_at?: string
          error?: string | null
          id?: string
          latency_ms?: number | null
          question: string
          status?: string
          user_id: string
        }
        Update: {
          answer?: string | null
          context_summary?: Json | null
          created_at?: string
          error?: string | null
          id?: string
          latency_ms?: number | null
          question?: string
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      ai_logs: {
        Row: {
          action_type: string | null
          completion_tokens: number | null
          cost_estimate: number | null
          created_at: string
          error_message: string | null
          id: string
          latency_ms: number | null
          model: string | null
          organization_id: string
          prompt_summary: string | null
          prompt_tokens: number | null
          response_summary: string | null
          service_id: string | null
          status: string | null
          tokens_used: number | null
          user_id: string | null
        }
        Insert: {
          action_type?: string | null
          completion_tokens?: number | null
          cost_estimate?: number | null
          created_at?: string
          error_message?: string | null
          id?: string
          latency_ms?: number | null
          model?: string | null
          organization_id?: string
          prompt_summary?: string | null
          prompt_tokens?: number | null
          response_summary?: string | null
          service_id?: string | null
          status?: string | null
          tokens_used?: number | null
          user_id?: string | null
        }
        Update: {
          action_type?: string | null
          completion_tokens?: number | null
          cost_estimate?: number | null
          created_at?: string
          error_message?: string | null
          id?: string
          latency_ms?: number | null
          model?: string | null
          organization_id?: string
          prompt_summary?: string | null
          prompt_tokens?: number | null
          response_summary?: string | null
          service_id?: string | null
          status?: string | null
          tokens_used?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_logs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_logs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ai_logs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ai_logs_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_response_cache: {
        Row: {
          action_type: string
          created_at: string
          expires_at: string
          hit_count: number
          id: string
          organization_id: string
          question_embedding: string | null
          question_hash: string
          question_text: string
          response_text: string
          service_id: string
        }
        Insert: {
          action_type?: string
          created_at?: string
          expires_at?: string
          hit_count?: number
          id?: string
          organization_id?: string
          question_embedding?: string | null
          question_hash: string
          question_text: string
          response_text: string
          service_id: string
        }
        Update: {
          action_type?: string
          created_at?: string
          expires_at?: string
          hit_count?: number
          id?: string
          organization_id?: string
          question_embedding?: string | null
          question_hash?: string
          question_text?: string
          response_text?: string
          service_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_response_cache_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_response_cache_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ai_response_cache_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ai_response_cache_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_saved_responses: {
        Row: {
          content: string
          conversation_id: string | null
          created_at: string
          id: string
          organization_id: string
          service_id: string | null
          sources: Json | null
          title: string | null
          user_id: string
        }
        Insert: {
          content: string
          conversation_id?: string | null
          created_at?: string
          id?: string
          organization_id?: string
          service_id?: string | null
          sources?: Json | null
          title?: string | null
          user_id: string
        }
        Update: {
          content?: string
          conversation_id?: string | null
          created_at?: string
          id?: string
          organization_id?: string
          service_id?: string | null
          sources?: Json | null
          title?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_saved_responses_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "ai_conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_saved_responses_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_saved_responses_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ai_saved_responses_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ai_saved_responses_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action: Database["public"]["Enums"]["audit_action"]
          created_at: string
          id: string
          ip_address: string | null
          metadata: Json | null
          new_data: Json | null
          old_data: Json | null
          organization_id: string | null
          record_id: string | null
          severity: Database["public"]["Enums"]["audit_severity"]
          table_name: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: Database["public"]["Enums"]["audit_action"]
          created_at?: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          new_data?: Json | null
          old_data?: Json | null
          organization_id?: string | null
          record_id?: string | null
          severity?: Database["public"]["Enums"]["audit_severity"]
          table_name: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: Database["public"]["Enums"]["audit_action"]
          created_at?: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          new_data?: Json | null
          old_data?: Json | null
          organization_id?: string | null
          record_id?: string | null
          severity?: Database["public"]["Enums"]["audit_severity"]
          table_name?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_logs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_logs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "audit_logs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          author_id: string | null
          author_name: string | null
          category: string | null
          content: string | null
          cover_image_url: string | null
          created_at: string | null
          excerpt: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          published_at: string | null
          reading_time: number | null
          slug: string
          status: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author_id?: string | null
          author_name?: string | null
          category?: string | null
          content?: string | null
          cover_image_url?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          reading_time?: number | null
          slug: string
          status?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author_id?: string | null
          author_name?: string | null
          category?: string | null
          content?: string | null
          cover_image_url?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          reading_time?: number | null
          slug?: string
          status?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      case_studies: {
        Row: {
          burden_of_proof: string | null
          case_objective: string | null
          case_pillars: string | null
          case_subject_detail: string | null
          case_type_text: string | null
          client_role: string | null
          completion_percentage: number
          core_question: string | null
          created_at: string
          created_by: string | null
          expected_defenses: string | null
          final_requests: string | null
          formal_defenses: string | null
          id: string
          opponent_gaps: string | null
          organization_id: string
          preliminary_defenses: Json
          proof_elements: string | null
          risk_mitigation_plan: string | null
          riskiest_point: string | null
          service_id: string
          status: string
          strongest_point: string | null
          substantive_defenses: string | null
          updated_at: string
          weaknesses: string | null
        }
        Insert: {
          burden_of_proof?: string | null
          case_objective?: string | null
          case_pillars?: string | null
          case_subject_detail?: string | null
          case_type_text?: string | null
          client_role?: string | null
          completion_percentage?: number
          core_question?: string | null
          created_at?: string
          created_by?: string | null
          expected_defenses?: string | null
          final_requests?: string | null
          formal_defenses?: string | null
          id?: string
          opponent_gaps?: string | null
          organization_id?: string
          preliminary_defenses?: Json
          proof_elements?: string | null
          risk_mitigation_plan?: string | null
          riskiest_point?: string | null
          service_id: string
          status?: string
          strongest_point?: string | null
          substantive_defenses?: string | null
          updated_at?: string
          weaknesses?: string | null
        }
        Update: {
          burden_of_proof?: string | null
          case_objective?: string | null
          case_pillars?: string | null
          case_subject_detail?: string | null
          case_type_text?: string | null
          client_role?: string | null
          completion_percentage?: number
          core_question?: string | null
          created_at?: string
          created_by?: string | null
          expected_defenses?: string | null
          final_requests?: string | null
          formal_defenses?: string | null
          id?: string
          opponent_gaps?: string | null
          organization_id?: string
          preliminary_defenses?: Json
          proof_elements?: string | null
          risk_mitigation_plan?: string | null
          riskiest_point?: string | null
          service_id?: string
          status?: string
          strongest_point?: string | null
          substantive_defenses?: string | null
          updated_at?: string
          weaknesses?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "case_studies_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "case_studies_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "case_studies_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "case_studies_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: true
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      case_study_core_questions: {
        Row: {
          answer: string | null
          case_study_id: string
          created_at: string
          id: string
          organization_id: string
          question: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          answer?: string | null
          case_study_id: string
          created_at?: string
          id?: string
          organization_id?: string
          question: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          answer?: string | null
          case_study_id?: string
          created_at?: string
          id?: string
          organization_id?: string
          question?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "case_study_core_questions_case_study_id_fkey"
            columns: ["case_study_id"]
            isOneToOne: false
            referencedRelation: "case_studies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "case_study_core_questions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "case_study_core_questions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "case_study_core_questions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      case_study_evidences: {
        Row: {
          case_study_id: string
          created_at: string
          evidence_date: string | null
          evidence_description: string
          file_name: string | null
          file_path: string | null
          id: string
          legal_impact: string | null
          organization_id: string
          sort_order: number
          strength: string | null
        }
        Insert: {
          case_study_id: string
          created_at?: string
          evidence_date?: string | null
          evidence_description: string
          file_name?: string | null
          file_path?: string | null
          id?: string
          legal_impact?: string | null
          organization_id?: string
          sort_order?: number
          strength?: string | null
        }
        Update: {
          case_study_id?: string
          created_at?: string
          evidence_date?: string | null
          evidence_description?: string
          file_name?: string | null
          file_path?: string | null
          id?: string
          legal_impact?: string | null
          organization_id?: string
          sort_order?: number
          strength?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "case_study_evidences_case_study_id_fkey"
            columns: ["case_study_id"]
            isOneToOne: false
            referencedRelation: "case_studies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "case_study_evidences_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "case_study_evidences_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "case_study_evidences_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      case_study_memo_plans: {
        Row: {
          assigned_to: string | null
          audience: string | null
          case_study_id: string
          created_at: string
          due_date: string | null
          id: string
          memo_objective: string | null
          organization_id: string
          phase: string
          required_attachments: string | null
          sort_order: number
          status: string
        }
        Insert: {
          assigned_to?: string | null
          audience?: string | null
          case_study_id: string
          created_at?: string
          due_date?: string | null
          id?: string
          memo_objective?: string | null
          organization_id?: string
          phase: string
          required_attachments?: string | null
          sort_order?: number
          status?: string
        }
        Update: {
          assigned_to?: string | null
          audience?: string | null
          case_study_id?: string
          created_at?: string
          due_date?: string | null
          id?: string
          memo_objective?: string | null
          organization_id?: string
          phase?: string
          required_attachments?: string | null
          sort_order?: number
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "case_study_memo_plans_case_study_id_fkey"
            columns: ["case_study_id"]
            isOneToOne: false
            referencedRelation: "case_studies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "case_study_memo_plans_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "case_study_memo_plans_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "case_study_memo_plans_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      case_study_session_reviews: {
        Row: {
          case_direction_changed: boolean
          case_study_id: string
          created_at: string
          event_id: string | null
          id: string
          judge_notes: string | null
          opponent_focus: string | null
          organization_id: string
          session_date: string | null
          strategy_needs_update: boolean
          strategy_update_notes: string | null
        }
        Insert: {
          case_direction_changed?: boolean
          case_study_id: string
          created_at?: string
          event_id?: string | null
          id?: string
          judge_notes?: string | null
          opponent_focus?: string | null
          organization_id?: string
          session_date?: string | null
          strategy_needs_update?: boolean
          strategy_update_notes?: string | null
        }
        Update: {
          case_direction_changed?: boolean
          case_study_id?: string
          created_at?: string
          event_id?: string | null
          id?: string
          judge_notes?: string | null
          opponent_focus?: string | null
          organization_id?: string
          session_date?: string | null
          strategy_needs_update?: boolean
          strategy_update_notes?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "case_study_session_reviews_case_study_id_fkey"
            columns: ["case_study_id"]
            isOneToOne: false
            referencedRelation: "case_studies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "case_study_session_reviews_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "service_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "case_study_session_reviews_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "case_study_session_reviews_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "case_study_session_reviews_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      case_timeline_events: {
        Row: {
          actor_id: string | null
          classified_by: string | null
          created_at: string | null
          custom_description: string | null
          display_order: number | null
          embedding: string | null
          embedding_text: string | null
          event_date: string
          event_type: string
          id: string
          is_hidden: boolean
          last_classified_at: string | null
          metadata: Json | null
          organization_id: string
          parent_event_id: string | null
          service_id: string
          significance: string
          significance_confidence: number | null
          significance_source: string | null
          source_id: string
          source_table: string
          summary_ar: string | null
          title_ar: string
          updated_at: string | null
        }
        Insert: {
          actor_id?: string | null
          classified_by?: string | null
          created_at?: string | null
          custom_description?: string | null
          display_order?: number | null
          embedding?: string | null
          embedding_text?: string | null
          event_date: string
          event_type: string
          id?: string
          is_hidden?: boolean
          last_classified_at?: string | null
          metadata?: Json | null
          organization_id?: string
          parent_event_id?: string | null
          service_id: string
          significance?: string
          significance_confidence?: number | null
          significance_source?: string | null
          source_id: string
          source_table: string
          summary_ar?: string | null
          title_ar: string
          updated_at?: string | null
        }
        Update: {
          actor_id?: string | null
          classified_by?: string | null
          created_at?: string | null
          custom_description?: string | null
          display_order?: number | null
          embedding?: string | null
          embedding_text?: string | null
          event_date?: string
          event_type?: string
          id?: string
          is_hidden?: boolean
          last_classified_at?: string | null
          metadata?: Json | null
          organization_id?: string
          parent_event_id?: string | null
          service_id?: string
          significance?: string
          significance_confidence?: number | null
          significance_source?: string | null
          source_id?: string
          source_table?: string
          summary_ar?: string | null
          title_ar?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "case_timeline_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "case_timeline_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "case_timeline_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "case_timeline_events_parent_event_id_fkey"
            columns: ["parent_event_id"]
            isOneToOne: false
            referencedRelation: "case_timeline_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "case_timeline_events_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      case_timeline_events_audit: {
        Row: {
          action: string
          changed_at: string | null
          changed_by: string | null
          event_id: string
          id: string
          new_significance: string | null
          old_significance: string | null
          organization_id: string
          reason: string | null
        }
        Insert: {
          action: string
          changed_at?: string | null
          changed_by?: string | null
          event_id: string
          id?: string
          new_significance?: string | null
          old_significance?: string | null
          organization_id?: string
          reason?: string | null
        }
        Update: {
          action?: string
          changed_at?: string | null
          changed_by?: string | null
          event_id?: string
          id?: string
          new_significance?: string | null
          old_significance?: string | null
          organization_id?: string
          reason?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "case_timeline_events_audit_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "case_timeline_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "case_timeline_events_audit_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "case_timeline_events_audit_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "case_timeline_events_audit_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      certifications: {
        Row: {
          created_at: string | null
          id: string
          issuer: string | null
          logo_url: string | null
          name: string
          sort_order: number | null
          year: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          issuer?: string | null
          logo_url?: string | null
          name: string
          sort_order?: number | null
          year?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          issuer?: string | null
          logo_url?: string | null
          name?: string
          sort_order?: number | null
          year?: number | null
        }
        Relationships: []
      }
      churn_risk_scores: {
        Row: {
          computed_at: string
          factors: Json
          organization_id: string
          score: number
          top_reason: string | null
        }
        Insert: {
          computed_at?: string
          factors?: Json
          organization_id: string
          score: number
          top_reason?: string | null
        }
        Update: {
          computed_at?: string
          factors?: Json
          organization_id?: string
          score?: number
          top_reason?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "churn_risk_scores_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "churn_risk_scores_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "churn_risk_scores_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      client_appointment_requests: {
        Row: {
          client_id: string
          created_at: string
          decision_note: string | null
          description: string | null
          id: string
          organization_id: string
          preferred_channel: string
          preferred_date_1: string | null
          preferred_date_2: string | null
          requested_by: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          scheduled_event_id: string | null
          service_id: string | null
          status: string
          subject: string
          updated_at: string
          urgency: string
        }
        Insert: {
          client_id: string
          created_at?: string
          decision_note?: string | null
          description?: string | null
          id?: string
          organization_id?: string
          preferred_channel?: string
          preferred_date_1?: string | null
          preferred_date_2?: string | null
          requested_by?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          scheduled_event_id?: string | null
          service_id?: string | null
          status?: string
          subject: string
          updated_at?: string
          urgency?: string
        }
        Update: {
          client_id?: string
          created_at?: string
          decision_note?: string | null
          description?: string | null
          id?: string
          organization_id?: string
          preferred_channel?: string
          preferred_date_1?: string | null
          preferred_date_2?: string | null
          requested_by?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          scheduled_event_id?: string | null
          service_id?: string | null
          status?: string
          subject?: string
          updated_at?: string
          urgency?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_appointment_requests_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_appointment_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_appointment_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "client_appointment_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "client_appointment_requests_scheduled_event_id_fkey"
            columns: ["scheduled_event_id"]
            isOneToOne: false
            referencedRelation: "service_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_appointment_requests_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          address: string | null
          client_type: Database["public"]["Enums"]["client_type"]
          commercial_register: string | null
          company_name: string | null
          created_at: string
          created_by: string | null
          deleted_at: string | null
          email: string | null
          full_name: string
          id: string
          legal_representative: string | null
          national_id: string | null
          notes: string | null
          organization_id: string
          phone: string | null
          secondary_phone: string | null
          tax_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          address?: string | null
          client_type?: Database["public"]["Enums"]["client_type"]
          commercial_register?: string | null
          company_name?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          email?: string | null
          full_name: string
          id?: string
          legal_representative?: string | null
          national_id?: string | null
          notes?: string | null
          organization_id?: string
          phone?: string | null
          secondary_phone?: string | null
          tax_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          address?: string | null
          client_type?: Database["public"]["Enums"]["client_type"]
          commercial_register?: string | null
          company_name?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          email?: string | null
          full_name?: string
          id?: string
          legal_representative?: string | null
          national_id?: string | null
          notes?: string | null
          organization_id?: string
          phone?: string | null
          secondary_phone?: string | null
          tax_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clients_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "clients_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      contact_requests: {
        Row: {
          case_type: string | null
          created_at: string
          description: string | null
          email: string | null
          full_name: string
          id: string
          phone: string
          preferred_contact: string | null
          status: string | null
        }
        Insert: {
          case_type?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          full_name: string
          id?: string
          phone: string
          preferred_contact?: string | null
          status?: string | null
        }
        Update: {
          case_type?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          full_name?: string
          id?: string
          phone?: string
          preferred_contact?: string | null
          status?: string | null
        }
        Relationships: []
      }
      contracts: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          content: string | null
          created_at: string
          created_by: string | null
          id: string
          organization_id: string
          service_id: string
          status: Database["public"]["Enums"]["contract_status"]
          template_name: string | null
          title: string
          updated_at: string
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          content?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id?: string
          service_id: string
          status?: Database["public"]["Enums"]["contract_status"]
          template_name?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          content?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id?: string
          service_id?: string
          status?: Database["public"]["Enums"]["contract_status"]
          template_name?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contracts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "contracts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "contracts_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      csat_responses: {
        Row: {
          comment: string | null
          created_at: string
          id: string
          organization_id: string
          score: number
          source: string
          submitted_by: string | null
          ticket_id: string
        }
        Insert: {
          comment?: string | null
          created_at?: string
          id?: string
          organization_id: string
          score: number
          source?: string
          submitted_by?: string | null
          ticket_id: string
        }
        Update: {
          comment?: string | null
          created_at?: string
          id?: string
          organization_id?: string
          score?: number
          source?: string
          submitted_by?: string | null
          ticket_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "csat_responses_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: true
            referencedRelation: "support_tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      document_chunks: {
        Row: {
          chunk_index: number
          content: string
          content_tsv: unknown
          created_at: string
          document_id: string
          embedding: string | null
          id: string
          metadata: Json | null
          organization_id: string
          token_count: number | null
        }
        Insert: {
          chunk_index?: number
          content: string
          content_tsv?: unknown
          created_at?: string
          document_id: string
          embedding?: string | null
          id?: string
          metadata?: Json | null
          organization_id?: string
          token_count?: number | null
        }
        Update: {
          chunk_index?: number
          content?: string
          content_tsv?: unknown
          created_at?: string
          document_id?: string
          embedding?: string | null
          id?: string
          metadata?: Json | null
          organization_id?: string
          token_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "document_chunks_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "service_documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_chunks_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_chunks_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "document_chunks_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      email_send_log: {
        Row: {
          created_at: string
          error_message: string | null
          id: string
          message_id: string | null
          metadata: Json | null
          organization_id: string | null
          recipient_email: string
          status: string
          template_name: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          organization_id?: string | null
          recipient_email: string
          status?: string
          template_name: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          organization_id?: string | null
          recipient_email?: string
          status?: string
          template_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_send_log_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_send_log_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "email_send_log_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      email_send_state: {
        Row: {
          auth_email_ttl_minutes: number
          batch_size: number
          id: number
          retry_after_until: string | null
          send_delay_ms: number
          transactional_email_ttl_minutes: number
          updated_at: string
        }
        Insert: {
          auth_email_ttl_minutes?: number
          batch_size?: number
          id?: number
          retry_after_until?: string | null
          send_delay_ms?: number
          transactional_email_ttl_minutes?: number
          updated_at?: string
        }
        Update: {
          auth_email_ttl_minutes?: number
          batch_size?: number
          id?: number
          retry_after_until?: string | null
          send_delay_ms?: number
          transactional_email_ttl_minutes?: number
          updated_at?: string
        }
        Relationships: []
      }
      email_unsubscribe_tokens: {
        Row: {
          created_at: string
          email: string
          id: string
          token: string
          used_at: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          token: string
          used_at?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          token?: string
          used_at?: string | null
        }
        Relationships: []
      }
      event_attachments: {
        Row: {
          category: Database["public"]["Enums"]["event_attachment_category"]
          created_at: string
          description: string | null
          event_id: string
          file_name: string
          file_path: string
          file_size: number | null
          id: string
          mime_type: string | null
          organization_id: string
          uploaded_by: string | null
        }
        Insert: {
          category?: Database["public"]["Enums"]["event_attachment_category"]
          created_at?: string
          description?: string | null
          event_id: string
          file_name: string
          file_path: string
          file_size?: number | null
          id?: string
          mime_type?: string | null
          organization_id?: string
          uploaded_by?: string | null
        }
        Update: {
          category?: Database["public"]["Enums"]["event_attachment_category"]
          created_at?: string
          description?: string | null
          event_id?: string
          file_name?: string
          file_path?: string
          file_size?: number | null
          id?: string
          mime_type?: string | null
          organization_id?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_attachments_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "service_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_attachments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_attachments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "event_attachments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      event_comments: {
        Row: {
          content: string
          created_at: string
          created_by: string | null
          event_id: string
          id: string
          organization_id: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          created_by?: string | null
          event_id: string
          id?: string
          organization_id?: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          created_by?: string | null
          event_id?: string
          id?: string
          organization_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_comments_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "service_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_comments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_comments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "event_comments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      faqs: {
        Row: {
          answer: string
          category: string | null
          created_at: string | null
          id: string
          is_active: boolean | null
          question: string
          sort_order: number | null
        }
        Insert: {
          answer: string
          category?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          question: string
          sort_order?: number | null
        }
        Update: {
          answer?: string
          category?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          question?: string
          sort_order?: number | null
        }
        Relationships: []
      }
      gdrive_sync_jobs: {
        Row: {
          cancel_requested: boolean
          created_at: string
          current_document_id: string | null
          current_file_name: string | null
          drive_orphans: number
          error_samples: Json
          failed: number
          finished_at: string | null
          id: string
          last_error: string | null
          organization_id: string
          pause_requested: boolean
          pending_doc_ids: string[]
          processed_files: number
          requested_by: string | null
          skipped: number
          started_at: string
          status: string
          storage_orphans: number
          succeeded: number
          total_files: number
          updated_at: string
        }
        Insert: {
          cancel_requested?: boolean
          created_at?: string
          current_document_id?: string | null
          current_file_name?: string | null
          drive_orphans?: number
          error_samples?: Json
          failed?: number
          finished_at?: string | null
          id?: string
          last_error?: string | null
          organization_id?: string
          pause_requested?: boolean
          pending_doc_ids?: string[]
          processed_files?: number
          requested_by?: string | null
          skipped?: number
          started_at?: string
          status?: string
          storage_orphans?: number
          succeeded?: number
          total_files?: number
          updated_at?: string
        }
        Update: {
          cancel_requested?: boolean
          created_at?: string
          current_document_id?: string | null
          current_file_name?: string | null
          drive_orphans?: number
          error_samples?: Json
          failed?: number
          finished_at?: string | null
          id?: string
          last_error?: string | null
          organization_id?: string
          pause_requested?: boolean
          pending_doc_ids?: string[]
          processed_files?: number
          requested_by?: string | null
          skipped?: number
          started_at?: string
          status?: string
          storage_orphans?: number
          succeeded?: number
          total_files?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "gdrive_sync_jobs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gdrive_sync_jobs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "gdrive_sync_jobs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      gdrive_sync_log: {
        Row: {
          action: string
          created_at: string
          document_id: string | null
          error_message: string | null
          file_name: string | null
          gdrive_file_id: string | null
          http_status: number | null
          id: string
          latency_ms: number | null
          organization_id: string
          performed_by: string | null
          service_id: string | null
          status: string
        }
        Insert: {
          action: string
          created_at?: string
          document_id?: string | null
          error_message?: string | null
          file_name?: string | null
          gdrive_file_id?: string | null
          http_status?: number | null
          id?: string
          latency_ms?: number | null
          organization_id?: string
          performed_by?: string | null
          service_id?: string | null
          status: string
        }
        Update: {
          action?: string
          created_at?: string
          document_id?: string | null
          error_message?: string | null
          file_name?: string | null
          gdrive_file_id?: string | null
          http_status?: number | null
          id?: string
          latency_ms?: number | null
          organization_id?: string
          performed_by?: string | null
          service_id?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "gdrive_sync_log_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "service_documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gdrive_sync_log_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gdrive_sync_log_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "gdrive_sync_log_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "gdrive_sync_log_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      google_oauth_tokens: {
        Row: {
          access_token: string
          calendar_id: string | null
          created_at: string
          expires_at: string
          granted_scopes: string[] | null
          id: string
          refresh_token: string
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token: string
          calendar_id?: string | null
          created_at?: string
          expires_at: string
          granted_scopes?: string[] | null
          id?: string
          refresh_token: string
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string
          calendar_id?: string | null
          created_at?: string
          expires_at?: string
          granted_scopes?: string[] | null
          id?: string
          refresh_token?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      hearings_and_meetings: {
        Row: {
          all_day: boolean
          created_at: string
          created_by: string | null
          description: string | null
          end_time: string | null
          gcal_event_id: string | null
          id: string
          location: string | null
          organization_id: string
          service_event_id: string | null
          service_id: string | null
          start_time: string
          title: string
          updated_at: string
        }
        Insert: {
          all_day?: boolean
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_time?: string | null
          gcal_event_id?: string | null
          id?: string
          location?: string | null
          organization_id?: string
          service_event_id?: string | null
          service_id?: string | null
          start_time: string
          title: string
          updated_at?: string
        }
        Update: {
          all_day?: boolean
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_time?: string | null
          gcal_event_id?: string | null
          id?: string
          location?: string | null
          organization_id?: string
          service_event_id?: string | null
          service_id?: string | null
          start_time?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "hearings_and_meetings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hearings_and_meetings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "hearings_and_meetings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "hearings_and_meetings_service_event_id_fkey"
            columns: ["service_event_id"]
            isOneToOne: false
            referencedRelation: "service_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hearings_and_meetings_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      indexing_jobs: {
        Row: {
          batch_size: number
          created_at: string
          created_by: string | null
          cursor: Json | null
          fail: number
          finished_at: string | null
          id: string
          last_error: string | null
          ok: number
          organization_id: string
          processed: number
          started_at: string | null
          status: string
          target: string
          total: number
          updated_at: string
        }
        Insert: {
          batch_size?: number
          created_at?: string
          created_by?: string | null
          cursor?: Json | null
          fail?: number
          finished_at?: string | null
          id?: string
          last_error?: string | null
          ok?: number
          organization_id?: string
          processed?: number
          started_at?: string | null
          status?: string
          target: string
          total?: number
          updated_at?: string
        }
        Update: {
          batch_size?: number
          created_at?: string
          created_by?: string | null
          cursor?: Json | null
          fail?: number
          finished_at?: string | null
          id?: string
          last_error?: string | null
          ok?: number
          organization_id?: string
          processed?: number
          started_at?: string | null
          status?: string
          target?: string
          total?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "indexing_jobs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indexing_jobs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "indexing_jobs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      invoice_installments: {
        Row: {
          amount: number
          created_at: string
          created_by: string | null
          id: string
          invoice_id: string
          notes: string | null
          organization_id: string
          payment_date: string
          payment_method: Database["public"]["Enums"]["payment_method"]
          received_by: string | null
          reference_number: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          created_by?: string | null
          id?: string
          invoice_id: string
          notes?: string | null
          organization_id?: string
          payment_date?: string
          payment_method?: Database["public"]["Enums"]["payment_method"]
          received_by?: string | null
          reference_number?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          created_by?: string | null
          id?: string
          invoice_id?: string
          notes?: string | null
          organization_id?: string
          payment_date?: string
          payment_method?: Database["public"]["Enums"]["payment_method"]
          received_by?: string | null
          reference_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoice_installments_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_installments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_installments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "invoice_installments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      invoices: {
        Row: {
          client_id: string
          created_at: string
          created_by: string | null
          due_date: string | null
          id: string
          invoice_number: string | null
          issue_date: string
          notes: string | null
          organization_id: string
          paid_amount: number
          remaining_amount: number
          service_id: string
          status: Database["public"]["Enums"]["invoice_status"]
          total_amount: number
          updated_at: string
        }
        Insert: {
          client_id: string
          created_at?: string
          created_by?: string | null
          due_date?: string | null
          id?: string
          invoice_number?: string | null
          issue_date?: string
          notes?: string | null
          organization_id?: string
          paid_amount?: number
          remaining_amount?: number
          service_id: string
          status?: Database["public"]["Enums"]["invoice_status"]
          total_amount?: number
          updated_at?: string
        }
        Update: {
          client_id?: string
          created_at?: string
          created_by?: string | null
          due_date?: string | null
          id?: string
          invoice_number?: string | null
          issue_date?: string
          notes?: string | null
          organization_id?: string
          paid_amount?: number
          remaining_amount?: number
          service_id?: string
          status?: Database["public"]["Enums"]["invoice_status"]
          total_amount?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoices_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "invoices_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "invoices_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      message_read_state: {
        Row: {
          channel: Database["public"]["Enums"]["message_channel"]
          last_read_at: string
          organization_id: string
          service_id: string
          user_id: string
        }
        Insert: {
          channel: Database["public"]["Enums"]["message_channel"]
          last_read_at?: string
          organization_id?: string
          service_id: string
          user_id: string
        }
        Update: {
          channel?: Database["public"]["Enums"]["message_channel"]
          last_read_at?: string
          organization_id?: string
          service_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "message_read_state_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          channel: Database["public"]["Enums"]["message_channel"]
          content: string
          created_at: string
          id: string
          metadata: Json | null
          organization_id: string
          sender_id: string | null
          service_id: string
        }
        Insert: {
          channel?: Database["public"]["Enums"]["message_channel"]
          content: string
          created_at?: string
          id?: string
          metadata?: Json | null
          organization_id?: string
          sender_id?: string | null
          service_id: string
        }
        Update: {
          channel?: Database["public"]["Enums"]["message_channel"]
          content?: string
          created_at?: string
          id?: string
          metadata?: Json | null
          organization_id?: string
          sender_id?: string | null
          service_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "messages_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "messages_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          body: string | null
          created_at: string
          id: string
          is_read: boolean
          link: string | null
          metadata: Json | null
          organization_id: string
          title: string
          type: Database["public"]["Enums"]["notification_type"]
          user_id: string
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: string
          is_read?: boolean
          link?: string | null
          metadata?: Json | null
          organization_id?: string
          title: string
          type?: Database["public"]["Enums"]["notification_type"]
          user_id: string
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: string
          is_read?: boolean
          link?: string | null
          metadata?: Json | null
          organization_id?: string
          title?: string
          type?: Database["public"]["Enums"]["notification_type"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "notifications_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      org_invitations: {
        Row: {
          accepted_at: string | null
          accepted_by: string | null
          app_role: Database["public"]["Enums"]["app_role"]
          created_at: string
          email: string
          expires_at: string
          id: string
          invited_by: string | null
          org_role: Database["public"]["Enums"]["org_role"]
          organization_id: string
          token: string
        }
        Insert: {
          accepted_at?: string | null
          accepted_by?: string | null
          app_role?: Database["public"]["Enums"]["app_role"]
          created_at?: string
          email: string
          expires_at?: string
          id?: string
          invited_by?: string | null
          org_role?: Database["public"]["Enums"]["org_role"]
          organization_id: string
          token?: string
        }
        Update: {
          accepted_at?: string | null
          accepted_by?: string | null
          app_role?: Database["public"]["Enums"]["app_role"]
          created_at?: string
          email?: string
          expires_at?: string
          id?: string
          invited_by?: string | null
          org_role?: Database["public"]["Enums"]["org_role"]
          organization_id?: string
          token?: string
        }
        Relationships: [
          {
            foreignKeyName: "org_invitations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_invitations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "org_invitations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      org_join_requests: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          message: string | null
          organization_id: string
          requested_app_role: Database["public"]["Enums"]["app_role"] | null
          reviewed_at: string | null
          reviewed_by: string | null
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          message?: string | null
          organization_id: string
          requested_app_role?: Database["public"]["Enums"]["app_role"] | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          message?: string | null
          organization_id?: string
          requested_app_role?: Database["public"]["Enums"]["app_role"] | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "org_join_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_join_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "org_join_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      org_letterhead_templates: {
        Row: {
          asset_path: string
          asset_type: string
          created_at: string
          created_by: string | null
          font_family: string
          font_size_pt: number
          id: string
          is_default: boolean
          line_height: number
          margins_mm: Json
          name: string
          organization_id: string
          orientation: string
          page_size: string
          updated_at: string
        }
        Insert: {
          asset_path: string
          asset_type: string
          created_at?: string
          created_by?: string | null
          font_family?: string
          font_size_pt?: number
          id?: string
          is_default?: boolean
          line_height?: number
          margins_mm?: Json
          name: string
          organization_id?: string
          orientation?: string
          page_size?: string
          updated_at?: string
        }
        Update: {
          asset_path?: string
          asset_type?: string
          created_at?: string
          created_by?: string | null
          font_family?: string
          font_size_pt?: number
          id?: string
          is_default?: boolean
          line_height?: number
          margins_mm?: Json
          name?: string
          organization_id?: string
          orientation?: string
          page_size?: string
          updated_at?: string
        }
        Relationships: []
      }
      organization_integration_events: {
        Row: {
          account_email: string | null
          actor_id: string | null
          created_at: string
          event_type: string
          id: string
          metadata: Json
          organization_id: string
          provider: string
        }
        Insert: {
          account_email?: string | null
          actor_id?: string | null
          created_at?: string
          event_type: string
          id?: string
          metadata?: Json
          organization_id?: string
          provider: string
        }
        Update: {
          account_email?: string | null
          actor_id?: string | null
          created_at?: string
          event_type?: string
          id?: string
          metadata?: Json
          organization_id?: string
          provider?: string
        }
        Relationships: []
      }
      organization_integrations: {
        Row: {
          account_email: string | null
          auto_sync_enabled: boolean
          calendar_id: string | null
          connected_at: string | null
          connected_by: string | null
          consecutive_error_count: number
          created_at: string
          encrypted_access_token: string | null
          encrypted_refresh_token: string | null
          expires_at: string | null
          id: string
          last_error: string | null
          last_full_sync_at: string | null
          last_health_check_at: string | null
          metadata: Json
          organization_id: string
          provider: string
          root_folder_id: string | null
          scopes: string[] | null
          status: string
          sync_categories: string[] | null
          updated_at: string
        }
        Insert: {
          account_email?: string | null
          auto_sync_enabled?: boolean
          calendar_id?: string | null
          connected_at?: string | null
          connected_by?: string | null
          consecutive_error_count?: number
          created_at?: string
          encrypted_access_token?: string | null
          encrypted_refresh_token?: string | null
          expires_at?: string | null
          id?: string
          last_error?: string | null
          last_full_sync_at?: string | null
          last_health_check_at?: string | null
          metadata?: Json
          organization_id: string
          provider: string
          root_folder_id?: string | null
          scopes?: string[] | null
          status?: string
          sync_categories?: string[] | null
          updated_at?: string
        }
        Update: {
          account_email?: string | null
          auto_sync_enabled?: boolean
          calendar_id?: string | null
          connected_at?: string | null
          connected_by?: string | null
          consecutive_error_count?: number
          created_at?: string
          encrypted_access_token?: string | null
          encrypted_refresh_token?: string | null
          expires_at?: string | null
          id?: string
          last_error?: string | null
          last_full_sync_at?: string | null
          last_health_check_at?: string | null
          metadata?: Json
          organization_id?: string
          provider?: string
          root_folder_id?: string | null
          scopes?: string[] | null
          status?: string
          sync_categories?: string[] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_integrations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organization_integrations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "organization_integrations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      organization_members: {
        Row: {
          created_at: string
          id: string
          invited_by: string | null
          joined_at: string
          org_role: Database["public"]["Enums"]["org_role"]
          organization_id: string
          status: Database["public"]["Enums"]["org_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          invited_by?: string | null
          joined_at?: string
          org_role?: Database["public"]["Enums"]["org_role"]
          organization_id: string
          status?: Database["public"]["Enums"]["org_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          invited_by?: string | null
          joined_at?: string
          org_role?: Database["public"]["Enums"]["org_role"]
          organization_id?: string
          status?: Database["public"]["Enums"]["org_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_members_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organization_members_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "organization_members_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      organization_settings: {
        Row: {
          ai_settings: Json
          brand: Json
          created_at: string
          hijri_enabled: boolean
          locale: string
          notifications: Json
          organization_id: string
          timezone: string
          updated_at: string
        }
        Insert: {
          ai_settings?: Json
          brand?: Json
          created_at?: string
          hijri_enabled?: boolean
          locale?: string
          notifications?: Json
          organization_id: string
          timezone?: string
          updated_at?: string
        }
        Update: {
          ai_settings?: Json
          brand?: Json
          created_at?: string
          hijri_enabled?: boolean
          locale?: string
          notifications?: Json
          organization_id?: string
          timezone?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organization_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "organization_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      organization_signup_settings: {
        Row: {
          allow_client_self_signup: boolean
          allow_lawyer_join_requests: boolean
          allowed_email_domains: string[]
          auto_approve: boolean
          branding_color: string | null
          branding_logo_url: string | null
          created_at: string
          organization_id: string
          signup_code: string | null
          signup_code_expires_at: string | null
          updated_at: string
        }
        Insert: {
          allow_client_self_signup?: boolean
          allow_lawyer_join_requests?: boolean
          allowed_email_domains?: string[]
          auto_approve?: boolean
          branding_color?: string | null
          branding_logo_url?: string | null
          created_at?: string
          organization_id: string
          signup_code?: string | null
          signup_code_expires_at?: string | null
          updated_at?: string
        }
        Update: {
          allow_client_self_signup?: boolean
          allow_lawyer_join_requests?: boolean
          allowed_email_domains?: string[]
          auto_approve?: boolean
          branding_color?: string | null
          branding_logo_url?: string | null
          created_at?: string
          organization_id?: string
          signup_code?: string | null
          signup_code_expires_at?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_signup_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organization_signup_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "organization_signup_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      organizations: {
        Row: {
          contact_email: string | null
          contact_phone: string | null
          created_at: string
          id: string
          legal_name: string | null
          logo_url: string | null
          name: string
          owner_user_id: string | null
          primary_color: string | null
          slug: string
          status: Database["public"]["Enums"]["org_status"]
          updated_at: string
          website_url: string | null
        }
        Insert: {
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          id?: string
          legal_name?: string | null
          logo_url?: string | null
          name: string
          owner_user_id?: string | null
          primary_color?: string | null
          slug: string
          status?: Database["public"]["Enums"]["org_status"]
          updated_at?: string
          website_url?: string | null
        }
        Update: {
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          id?: string
          legal_name?: string | null
          logo_url?: string | null
          name?: string
          owner_user_id?: string | null
          primary_color?: string | null
          slug?: string
          status?: Database["public"]["Enums"]["org_status"]
          updated_at?: string
          website_url?: string | null
        }
        Relationships: []
      }
      partner_requests: {
        Row: {
          created_at: string
          email: string
          full_name: string
          id: string
          message: string | null
          status: string | null
        }
        Insert: {
          created_at?: string
          email: string
          full_name: string
          id?: string
          message?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          message?: string | null
          status?: string | null
        }
        Relationships: []
      }
      plans: {
        Row: {
          created_at: string
          description_ar: string | null
          features_ar: Json
          id: string
          is_active: boolean
          is_featured: boolean
          monthly_price_sar: number
          name_ar: string
          name_en: string
          quota_ai_calls: number
          quota_documents: number
          quota_services: number
          quota_storage_mb: number
          quota_users: number
          slug: string
          sort_order: number
          tagline_ar: string | null
          trial_days: number
          updated_at: string
          yearly_price_sar: number
        }
        Insert: {
          created_at?: string
          description_ar?: string | null
          features_ar?: Json
          id?: string
          is_active?: boolean
          is_featured?: boolean
          monthly_price_sar?: number
          name_ar: string
          name_en: string
          quota_ai_calls?: number
          quota_documents?: number
          quota_services?: number
          quota_storage_mb?: number
          quota_users?: number
          slug: string
          sort_order?: number
          tagline_ar?: string | null
          trial_days?: number
          updated_at?: string
          yearly_price_sar?: number
        }
        Update: {
          created_at?: string
          description_ar?: string | null
          features_ar?: Json
          id?: string
          is_active?: boolean
          is_featured?: boolean
          monthly_price_sar?: number
          name_ar?: string
          name_en?: string
          quota_ai_calls?: number
          quota_documents?: number
          quota_services?: number
          quota_storage_mb?: number
          quota_users?: number
          slug?: string
          sort_order?: number
          tagline_ar?: string | null
          trial_days?: number
          updated_at?: string
          yearly_price_sar?: number
        }
        Relationships: []
      }
      platform_admins: {
        Row: {
          created_at: string
          granted_by: string | null
          role: Database["public"]["Enums"]["platform_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          granted_by?: string | null
          role?: Database["public"]["Enums"]["platform_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          granted_by?: string | null
          role?: Database["public"]["Enums"]["platform_role"]
          user_id?: string
        }
        Relationships: []
      }
      platform_cac_inputs: {
        Row: {
          marketing_spend_sar: number
          month: string
          new_customers: number
          note: string | null
          sales_spend_sar: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          marketing_spend_sar?: number
          month: string
          new_customers?: number
          note?: string | null
          sales_spend_sar?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          marketing_spend_sar?: number
          month?: string
          new_customers?: number
          note?: string | null
          sales_spend_sar?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      platform_change_log: {
        Row: {
          action: string
          created_at: string
          entity_type: string
          id: string
          new_value: Json | null
          old_value: Json | null
          organization_id: string | null
          performed_by: string | null
          reason: string | null
          subscription_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          entity_type: string
          id?: string
          new_value?: Json | null
          old_value?: Json | null
          organization_id?: string | null
          performed_by?: string | null
          reason?: string | null
          subscription_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          entity_type?: string
          id?: string
          new_value?: Json | null
          old_value?: Json | null
          organization_id?: string | null
          performed_by?: string | null
          reason?: string | null
          subscription_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "platform_change_log_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "platform_change_log_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "platform_change_log_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "platform_change_log_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_costs: {
        Row: {
          amount_sar: number
          category: string
          created_at: string
          created_by: string | null
          id: string
          month: string
          note: string | null
          updated_at: string
        }
        Insert: {
          amount_sar?: number
          category: string
          created_at?: string
          created_by?: string | null
          id?: string
          month: string
          note?: string | null
          updated_at?: string
        }
        Update: {
          amount_sar?: number
          category?: string
          created_at?: string
          created_by?: string | null
          id?: string
          month?: string
          note?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      platform_scheduled_reports: {
        Row: {
          created_at: string
          created_by: string | null
          format: string
          frequency: string
          id: string
          is_active: boolean
          last_run_at: string | null
          last_status: string | null
          name: string
          next_run_at: string
          recipient_emails: string[]
          sections: string[]
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          format?: string
          frequency: string
          id?: string
          is_active?: boolean
          last_run_at?: string | null
          last_status?: string | null
          name: string
          next_run_at?: string
          recipient_emails: string[]
          sections?: string[]
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          format?: string
          frequency?: string
          id?: string
          is_active?: boolean
          last_run_at?: string | null
          last_status?: string | null
          name?: string
          next_run_at?: string
          recipient_emails?: string[]
          sections?: string[]
          updated_at?: string
        }
        Relationships: []
      }
      platform_settings: {
        Row: {
          description: string | null
          key: string
          updated_at: string
          updated_by: string | null
          value: Json
        }
        Insert: {
          description?: string | null
          key: string
          updated_at?: string
          updated_by?: string | null
          value: Json
        }
        Update: {
          description?: string | null
          key?: string
          updated_at?: string
          updated_by?: string | null
          value?: Json
        }
        Relationships: []
      }
      platform_staff_invites: {
        Row: {
          accepted_at: string | null
          accepted_by: string | null
          created_at: string
          email: string
          email_error: string | null
          email_sent: boolean
          email_sent_at: string | null
          expires_at: string
          id: string
          invited_by: string | null
          role: Database["public"]["Enums"]["platform_role"]
          token: string
        }
        Insert: {
          accepted_at?: string | null
          accepted_by?: string | null
          created_at?: string
          email: string
          email_error?: string | null
          email_sent?: boolean
          email_sent_at?: string | null
          expires_at?: string
          id?: string
          invited_by?: string | null
          role: Database["public"]["Enums"]["platform_role"]
          token?: string
        }
        Update: {
          accepted_at?: string | null
          accepted_by?: string | null
          created_at?: string
          email?: string
          email_error?: string | null
          email_sent?: boolean
          email_sent_at?: string | null
          expires_at?: string
          id?: string
          invited_by?: string | null
          role?: Database["public"]["Enums"]["platform_role"]
          token?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          dashboard_prefs: Json | null
          email: string | null
          full_name: string
          hourly_rate: number | null
          id: string
          job_title: string | null
          license_number: string | null
          phone: string | null
          specialization: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          dashboard_prefs?: Json | null
          email?: string | null
          full_name?: string
          hourly_rate?: number | null
          id: string
          job_title?: string | null
          license_number?: string | null
          phone?: string | null
          specialization?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          dashboard_prefs?: Json | null
          email?: string | null
          full_name?: string
          hourly_rate?: number | null
          id?: string
          job_title?: string | null
          license_number?: string | null
          phone?: string | null
          specialization?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      qa_custom_test_cases: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          is_active: boolean
          section: string
          test_case_id: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          description?: string | null
          id?: string
          is_active?: boolean
          section: string
          test_case_id: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          is_active?: boolean
          section?: string
          test_case_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "qa_custom_test_cases_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      qa_linear_settings: {
        Row: {
          auto_create_on_failure: boolean
          created_at: string
          default_labels: string[]
          default_project_id: string | null
          default_project_name: string | null
          default_team_id: string | null
          default_team_key: string | null
          default_team_name: string | null
          enable_polling_sync: boolean
          id: string
          updated_at: string
          updated_by: string | null
          webhook_secret: string | null
        }
        Insert: {
          auto_create_on_failure?: boolean
          created_at?: string
          default_labels?: string[]
          default_project_id?: string | null
          default_project_name?: string | null
          default_team_id?: string | null
          default_team_key?: string | null
          default_team_name?: string | null
          enable_polling_sync?: boolean
          id?: string
          updated_at?: string
          updated_by?: string | null
          webhook_secret?: string | null
        }
        Update: {
          auto_create_on_failure?: boolean
          created_at?: string
          default_labels?: string[]
          default_project_id?: string | null
          default_project_name?: string | null
          default_team_id?: string | null
          default_team_key?: string | null
          default_team_name?: string | null
          enable_polling_sync?: boolean
          id?: string
          updated_at?: string
          updated_by?: string | null
          webhook_secret?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "qa_linear_settings_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      qa_linear_sync_log: {
        Row: {
          action: string
          created_at: string
          error_message: string | null
          execution_id: string | null
          id: string
          linear_issue_id: string | null
          payload: Json | null
          status: string
        }
        Insert: {
          action: string
          created_at?: string
          error_message?: string | null
          execution_id?: string | null
          id?: string
          linear_issue_id?: string | null
          payload?: Json | null
          status: string
        }
        Update: {
          action?: string
          created_at?: string
          error_message?: string | null
          execution_id?: string | null
          id?: string
          linear_issue_id?: string | null
          payload?: Json | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "qa_linear_sync_log_execution_id_fkey"
            columns: ["execution_id"]
            isOneToOne: false
            referencedRelation: "qa_test_executions"
            referencedColumns: ["id"]
          },
        ]
      }
      qa_test_evidence: {
        Row: {
          created_at: string
          description: string | null
          evidence_type: string
          execution_id: string
          file_name: string | null
          file_path: string | null
          file_size: number | null
          id: string
          mime_type: string | null
          uploaded_by: string
          url: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          evidence_type: string
          execution_id: string
          file_name?: string | null
          file_path?: string | null
          file_size?: number | null
          id?: string
          mime_type?: string | null
          uploaded_by: string
          url?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          evidence_type?: string
          execution_id?: string
          file_name?: string | null
          file_path?: string | null
          file_size?: number | null
          id?: string
          mime_type?: string | null
          uploaded_by?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "qa_test_evidence_execution_id_fkey"
            columns: ["execution_id"]
            isOneToOne: false
            referencedRelation: "qa_test_executions"
            referencedColumns: ["id"]
          },
        ]
      }
      qa_test_executions: {
        Row: {
          created_at: string
          environment: string | null
          executed_at: string
          executed_by: string
          id: string
          linear_issue_id: string | null
          linear_issue_identifier: string | null
          linear_issue_state: string | null
          linear_issue_url: string | null
          linear_synced_at: string | null
          notes: string | null
          result: string
          section: string
          severity: string | null
          test_case_id: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          environment?: string | null
          executed_at?: string
          executed_by: string
          id?: string
          linear_issue_id?: string | null
          linear_issue_identifier?: string | null
          linear_issue_state?: string | null
          linear_issue_url?: string | null
          linear_synced_at?: string | null
          notes?: string | null
          result: string
          section: string
          severity?: string | null
          test_case_id: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          environment?: string | null
          executed_at?: string
          executed_by?: string
          id?: string
          linear_issue_id?: string | null
          linear_issue_identifier?: string | null
          linear_issue_state?: string | null
          linear_issue_url?: string | null
          linear_synced_at?: string | null
          notes?: string | null
          result?: string
          section?: string
          severity?: string | null
          test_case_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      reminder_templates: {
        Row: {
          available_vars: string[]
          bcc: string[] | null
          body_html: string
          body_text: string | null
          category: string | null
          cc: string[] | null
          channel: string
          created_at: string
          default_body_html: string | null
          default_subject: string | null
          description: string | null
          from_address: string | null
          id: string
          is_active: boolean
          key: string
          name: string
          organization_id: string
          quiet_hours_end: number | null
          quiet_hours_start: number | null
          reply_to: string | null
          send_email: boolean
          send_in_app: boolean
          subject: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          available_vars?: string[]
          bcc?: string[] | null
          body_html: string
          body_text?: string | null
          category?: string | null
          cc?: string[] | null
          channel?: string
          created_at?: string
          default_body_html?: string | null
          default_subject?: string | null
          description?: string | null
          from_address?: string | null
          id?: string
          is_active?: boolean
          key: string
          name: string
          organization_id?: string
          quiet_hours_end?: number | null
          quiet_hours_start?: number | null
          reply_to?: string | null
          send_email?: boolean
          send_in_app?: boolean
          subject: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          available_vars?: string[]
          bcc?: string[] | null
          body_html?: string
          body_text?: string | null
          category?: string | null
          cc?: string[] | null
          channel?: string
          created_at?: string
          default_body_html?: string | null
          default_subject?: string | null
          description?: string | null
          from_address?: string | null
          id?: string
          is_active?: boolean
          key?: string
          name?: string
          organization_id?: string
          quiet_hours_end?: number | null
          quiet_hours_start?: number | null
          reply_to?: string | null
          send_email?: boolean
          send_in_app?: boolean
          subject?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reminder_templates_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reminder_templates_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "reminder_templates_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      sales_activities: {
        Row: {
          activity_type: string
          created_at: string
          duration_minutes: number | null
          id: string
          notes: string | null
          occurred_at: string
          outcome: string | null
          rep_id: string
          target_company_id: string
        }
        Insert: {
          activity_type: string
          created_at?: string
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          occurred_at?: string
          outcome?: string | null
          rep_id?: string
          target_company_id: string
        }
        Update: {
          activity_type?: string
          created_at?: string
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          occurred_at?: string
          outcome?: string | null
          rep_id?: string
          target_company_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sales_activities_target_company_id_fkey"
            columns: ["target_company_id"]
            isOneToOne: false
            referencedRelation: "target_companies"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_commissions: {
        Row: {
          amount_sar: number
          approved_at: string | null
          approved_by: string | null
          created_at: string
          deal_id: string
          id: string
          notes: string | null
          paid_at: string | null
          payment_reference: string | null
          period_month: string
          rate_applied: number
          rep_id: string
          status: string
          updated_at: string
        }
        Insert: {
          amount_sar: number
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string
          deal_id: string
          id?: string
          notes?: string | null
          paid_at?: string | null
          payment_reference?: string | null
          period_month: string
          rate_applied: number
          rep_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          amount_sar?: number
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string
          deal_id?: string
          id?: string
          notes?: string | null
          paid_at?: string | null
          payment_reference?: string | null
          period_month?: string
          rate_applied?: number
          rep_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sales_commissions_deal_id_fkey"
            columns: ["deal_id"]
            isOneToOne: true
            referencedRelation: "sales_deals"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_deals: {
        Row: {
          billing_cycle: string | null
          closed_at: string | null
          commission_rate: number | null
          created_at: string
          deal_value_sar: number
          id: string
          metadata: Json
          notes: string | null
          organization_id: string | null
          rep_id: string
          status: string
          subscription_id: string | null
          target_company_id: string | null
          updated_at: string
        }
        Insert: {
          billing_cycle?: string | null
          closed_at?: string | null
          commission_rate?: number | null
          created_at?: string
          deal_value_sar?: number
          id?: string
          metadata?: Json
          notes?: string | null
          organization_id?: string | null
          rep_id: string
          status?: string
          subscription_id?: string | null
          target_company_id?: string | null
          updated_at?: string
        }
        Update: {
          billing_cycle?: string | null
          closed_at?: string | null
          commission_rate?: number | null
          created_at?: string
          deal_value_sar?: number
          id?: string
          metadata?: Json
          notes?: string | null
          organization_id?: string | null
          rep_id?: string
          status?: string
          subscription_id?: string | null
          target_company_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sales_deals_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_deals_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "sales_deals_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "sales_deals_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_deals_target_company_id_fkey"
            columns: ["target_company_id"]
            isOneToOne: false
            referencedRelation: "target_companies"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_discount_requests: {
        Row: {
          applied_at: string | null
          approved_at: string | null
          approved_by: string | null
          created_at: string
          decision_note: string | null
          discount_pct: number
          id: string
          organization_id: string
          reason: string
          requested_by: string
          status: Database["public"]["Enums"]["discount_request_status"]
          subscription_id: string | null
          updated_at: string
        }
        Insert: {
          applied_at?: string | null
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string
          decision_note?: string | null
          discount_pct: number
          id?: string
          organization_id: string
          reason: string
          requested_by: string
          status?: Database["public"]["Enums"]["discount_request_status"]
          subscription_id?: string | null
          updated_at?: string
        }
        Update: {
          applied_at?: string | null
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string
          decision_note?: string | null
          discount_pct?: number
          id?: string
          organization_id?: string
          reason?: string
          requested_by?: string
          status?: Database["public"]["Enums"]["discount_request_status"]
          subscription_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sales_discount_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_discount_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "sales_discount_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "sales_discount_requests_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_rep_profiles: {
        Row: {
          commission_rate: number
          created_at: string
          hire_date: string | null
          manager_user_id: string | null
          monthly_target_sar: number
          notes: string | null
          status: string
          team_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          commission_rate?: number
          created_at?: string
          hire_date?: string | null
          manager_user_id?: string | null
          monthly_target_sar?: number
          notes?: string | null
          status?: string
          team_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          commission_rate?: number
          created_at?: string
          hire_date?: string | null
          manager_user_id?: string | null
          monthly_target_sar?: number
          notes?: string | null
          status?: string
          team_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sales_rep_profiles_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "sales_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_teams: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          manager_user_id: string
          monthly_target_sar: number | null
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          manager_user_id: string
          monthly_target_sar?: number | null
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          manager_user_id?: string
          monthly_target_sar?: number | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      seasonal_calendar: {
        Row: {
          created_at: string
          date_from: string
          date_to: string
          exclude_from_churn: boolean
          id: string
          label: string
          note: string | null
        }
        Insert: {
          created_at?: string
          date_from: string
          date_to: string
          exclude_from_churn?: boolean
          id?: string
          label: string
          note?: string | null
        }
        Update: {
          created_at?: string
          date_from?: string
          date_to?: string
          exclude_from_churn?: boolean
          id?: string
          label?: string
          note?: string | null
        }
        Relationships: []
      }
      sent_reminders: {
        Row: {
          channel: string
          created_at: string
          id: string
          organization_id: string
          reminder_key: string
          reminder_type: string
          source_id: string
          user_id: string
        }
        Insert: {
          channel?: string
          created_at?: string
          id?: string
          organization_id?: string
          reminder_key: string
          reminder_type: string
          source_id: string
          user_id: string
        }
        Update: {
          channel?: string
          created_at?: string
          id?: string
          organization_id?: string
          reminder_key?: string
          reminder_type?: string
          source_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sent_reminders_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sent_reminders_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "sent_reminders_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      service_documents: {
        Row: {
          category: Database["public"]["Enums"]["document_category"]
          client_id: string | null
          created_at: string
          deleted_at: string | null
          description: string | null
          editor_content: Json | null
          file_name: string
          file_path: string
          file_size: number | null
          gdrive_file_id: string | null
          has_text_extracted: boolean
          id: string
          index_error: string | null
          index_status: string
          is_public: boolean
          last_indexed_at: string | null
          letterhead_template_id: string | null
          mime_type: string | null
          organization_id: string
          service_id: string | null
          skip_indexing: boolean
          sync_status: string | null
          updated_at: string
          uploaded_by: string | null
        }
        Insert: {
          category?: Database["public"]["Enums"]["document_category"]
          client_id?: string | null
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          editor_content?: Json | null
          file_name: string
          file_path: string
          file_size?: number | null
          gdrive_file_id?: string | null
          has_text_extracted?: boolean
          id?: string
          index_error?: string | null
          index_status?: string
          is_public?: boolean
          last_indexed_at?: string | null
          letterhead_template_id?: string | null
          mime_type?: string | null
          organization_id?: string
          service_id?: string | null
          skip_indexing?: boolean
          sync_status?: string | null
          updated_at?: string
          uploaded_by?: string | null
        }
        Update: {
          category?: Database["public"]["Enums"]["document_category"]
          client_id?: string | null
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          editor_content?: Json | null
          file_name?: string
          file_path?: string
          file_size?: number | null
          gdrive_file_id?: string | null
          has_text_extracted?: boolean
          id?: string
          index_error?: string | null
          index_status?: string
          is_public?: boolean
          last_indexed_at?: string | null
          letterhead_template_id?: string | null
          mime_type?: string | null
          organization_id?: string
          service_id?: string | null
          skip_indexing?: boolean
          sync_status?: string | null
          updated_at?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "service_documents_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_documents_letterhead_template_id_fkey"
            columns: ["letterhead_template_id"]
            isOneToOne: false
            referencedRelation: "org_letterhead_templates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_documents_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_documents_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "service_documents_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "service_documents_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      service_events: {
        Row: {
          ai_summary: string | null
          approved_at: string | null
          approved_by: string | null
          assigned_to: string | null
          created_at: string
          created_by: string | null
          description: string | null
          event_date: string | null
          event_type: Database["public"]["Enums"]["event_type"]
          hijri_event_date: string | null
          id: string
          location: string | null
          manual_summary: string | null
          next_action: string | null
          next_session_event_id: string | null
          next_session_title: string | null
          organization_id: string
          sent_to_client: boolean
          service_id: string
          session_record_path: string | null
          status: Database["public"]["Enums"]["event_status"]
          title: string
          updated_at: string
        }
        Insert: {
          ai_summary?: string | null
          approved_at?: string | null
          approved_by?: string | null
          assigned_to?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          event_date?: string | null
          event_type?: Database["public"]["Enums"]["event_type"]
          hijri_event_date?: string | null
          id?: string
          location?: string | null
          manual_summary?: string | null
          next_action?: string | null
          next_session_event_id?: string | null
          next_session_title?: string | null
          organization_id?: string
          sent_to_client?: boolean
          service_id: string
          session_record_path?: string | null
          status?: Database["public"]["Enums"]["event_status"]
          title: string
          updated_at?: string
        }
        Update: {
          ai_summary?: string | null
          approved_at?: string | null
          approved_by?: string | null
          assigned_to?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          event_date?: string | null
          event_type?: Database["public"]["Enums"]["event_type"]
          hijri_event_date?: string | null
          id?: string
          location?: string | null
          manual_summary?: string | null
          next_action?: string | null
          next_session_event_id?: string | null
          next_session_title?: string | null
          organization_id?: string
          sent_to_client?: boolean
          service_id?: string
          session_record_path?: string | null
          status?: Database["public"]["Enums"]["event_status"]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_events_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_events_next_session_event_id_fkey"
            columns: ["next_session_event_id"]
            isOneToOne: false
            referencedRelation: "service_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "service_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "service_events_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      service_team_members: {
        Row: {
          assigned_at: string
          assigned_by: string | null
          id: string
          organization_id: string
          role_in_case: string | null
          service_id: string
          user_id: string
        }
        Insert: {
          assigned_at?: string
          assigned_by?: string | null
          id?: string
          organization_id?: string
          role_in_case?: string | null
          service_id: string
          user_id: string
        }
        Update: {
          assigned_at?: string
          assigned_by?: string | null
          id?: string
          organization_id?: string
          role_in_case?: string | null
          service_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_team_members_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_team_members_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "service_team_members_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "service_team_members_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          advance_payment: number | null
          assigned_lawyer: string | null
          case_number: string | null
          client_id: string
          client_role: string | null
          contract_amount: number | null
          court_name: string | null
          created_at: string
          created_by: string | null
          deleted_at: string | null
          description: string | null
          id: string
          opposing_party: string | null
          organization_id: string
          payment_due_date: string | null
          remaining_payment: number | null
          service_type: string | null
          status: Database["public"]["Enums"]["service_status"]
          title: string
          updated_at: string
        }
        Insert: {
          advance_payment?: number | null
          assigned_lawyer?: string | null
          case_number?: string | null
          client_id: string
          client_role?: string | null
          contract_amount?: number | null
          court_name?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string
          opposing_party?: string | null
          organization_id?: string
          payment_due_date?: string | null
          remaining_payment?: number | null
          service_type?: string | null
          status?: Database["public"]["Enums"]["service_status"]
          title: string
          updated_at?: string
        }
        Update: {
          advance_payment?: number | null
          assigned_lawyer?: string | null
          case_number?: string | null
          client_id?: string
          client_role?: string | null
          contract_amount?: number | null
          court_name?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string
          opposing_party?: string | null
          organization_id?: string
          payment_due_date?: string | null
          remaining_payment?: number | null
          service_type?: string | null
          status?: Database["public"]["Enums"]["service_status"]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "services_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "services_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "services_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "services_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      session_reminders: {
        Row: {
          created_at: string
          event_id: string
          id: string
          organization_id: string
          remind_at: string
          reminder_type: string
          status: string
        }
        Insert: {
          created_at?: string
          event_id: string
          id?: string
          organization_id?: string
          remind_at: string
          reminder_type: string
          status?: string
        }
        Update: {
          created_at?: string
          event_id?: string
          id?: string
          organization_id?: string
          remind_at?: string
          reminder_type?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_reminders_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "service_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_reminders_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_reminders_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "session_reminders_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      session_summaries: {
        Row: {
          ai_model: string | null
          created_at: string
          event_id: string | null
          generated_by: string | null
          id: string
          organization_id: string
          service_id: string
          summary_text: string
          updated_at: string
        }
        Insert: {
          ai_model?: string | null
          created_at?: string
          event_id?: string | null
          generated_by?: string | null
          id?: string
          organization_id?: string
          service_id: string
          summary_text: string
          updated_at?: string
        }
        Update: {
          ai_model?: string | null
          created_at?: string
          event_id?: string | null
          generated_by?: string | null
          id?: string
          organization_id?: string
          service_id?: string
          summary_text?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_summaries_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "service_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_summaries_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_summaries_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "session_summaries_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "session_summaries_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      strategic_partners: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          logo_url: string | null
          name: string
          sort_order: number | null
          website_url: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          logo_url?: string | null
          name: string
          sort_order?: number | null
          website_url?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          logo_url?: string | null
          name?: string
          sort_order?: number | null
          website_url?: string | null
        }
        Relationships: []
      }
      subscription_ai_insights: {
        Row: {
          created_at: string
          expires_at: string | null
          id: string
          insight_type: string
          model: string | null
          period_end: string | null
          period_start: string | null
          raw_response: Json | null
          recommendations: Json
          risk_score: number | null
          severity: string | null
          summary: string
          target_id: string | null
          target_kind: string | null
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          id?: string
          insight_type: string
          model?: string | null
          period_end?: string | null
          period_start?: string | null
          raw_response?: Json | null
          recommendations?: Json
          risk_score?: number | null
          severity?: string | null
          summary: string
          target_id?: string | null
          target_kind?: string | null
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          id?: string
          insight_type?: string
          model?: string | null
          period_end?: string | null
          period_start?: string | null
          raw_response?: Json | null
          recommendations?: Json
          risk_score?: number | null
          severity?: string | null
          summary?: string
          target_id?: string | null
          target_kind?: string | null
        }
        Relationships: []
      }
      subscription_events: {
        Row: {
          ai_analysis: Json | null
          ai_analyzed_at: string | null
          amount_sar: number | null
          cancellation_category: string | null
          cancellation_reason_text: string | null
          competitor_name: string | null
          created_at: string
          customer_feedback: string | null
          customer_sentiment: string | null
          event_type: string
          failure_reason_raw: string | null
          feedback_collected_at: string | null
          feedback_collected_by: string | null
          id: string
          metadata: Json
          new_status: string | null
          nps_score: number | null
          organization_id: string
          payment_method: string | null
          previous_status: string | null
          subscription_id: string | null
          trial_outcome: string | null
          would_return: boolean | null
        }
        Insert: {
          ai_analysis?: Json | null
          ai_analyzed_at?: string | null
          amount_sar?: number | null
          cancellation_category?: string | null
          cancellation_reason_text?: string | null
          competitor_name?: string | null
          created_at?: string
          customer_feedback?: string | null
          customer_sentiment?: string | null
          event_type: string
          failure_reason_raw?: string | null
          feedback_collected_at?: string | null
          feedback_collected_by?: string | null
          id?: string
          metadata?: Json
          new_status?: string | null
          nps_score?: number | null
          organization_id: string
          payment_method?: string | null
          previous_status?: string | null
          subscription_id?: string | null
          trial_outcome?: string | null
          would_return?: boolean | null
        }
        Update: {
          ai_analysis?: Json | null
          ai_analyzed_at?: string | null
          amount_sar?: number | null
          cancellation_category?: string | null
          cancellation_reason_text?: string | null
          competitor_name?: string | null
          created_at?: string
          customer_feedback?: string | null
          customer_sentiment?: string | null
          event_type?: string
          failure_reason_raw?: string | null
          feedback_collected_at?: string | null
          feedback_collected_by?: string | null
          id?: string
          metadata?: Json
          new_status?: string | null
          nps_score?: number | null
          organization_id?: string
          payment_method?: string | null
          previous_status?: string | null
          subscription_id?: string | null
          trial_outcome?: string | null
          would_return?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "subscription_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "subscription_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "subscription_events_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_payments: {
        Row: {
          amount_sar: number
          created_at: string
          currency: string
          id: string
          metadata: Json
          notes: string | null
          organization_id: string
          paid_for_period_end: string | null
          paid_for_period_start: string | null
          payment_method: string | null
          recorded_by: string | null
          reference_number: string | null
          status: string
          subscription_id: string | null
          updated_at: string
        }
        Insert: {
          amount_sar: number
          created_at?: string
          currency?: string
          id?: string
          metadata?: Json
          notes?: string | null
          organization_id: string
          paid_for_period_end?: string | null
          paid_for_period_start?: string | null
          payment_method?: string | null
          recorded_by?: string | null
          reference_number?: string | null
          status?: string
          subscription_id?: string | null
          updated_at?: string
        }
        Update: {
          amount_sar?: number
          created_at?: string
          currency?: string
          id?: string
          metadata?: Json
          notes?: string | null
          organization_id?: string
          paid_for_period_end?: string | null
          paid_for_period_start?: string | null
          payment_method?: string | null
          recorded_by?: string | null
          reference_number?: string | null
          status?: string
          subscription_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscription_payments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_payments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "subscription_payments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "subscription_payments_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          ai_calls_limit_override: number | null
          ai_enabled: boolean
          ai_quota_updated_at: string | null
          ai_quota_updated_by: string | null
          billing_cycle: string
          cancel_at_period_end: boolean
          canceled_at: string | null
          created_at: string
          current_period_end: string
          current_period_start: string
          discount_pct: number
          id: string
          metadata: Json
          organization_id: string
          plan_id: string
          status: Database["public"]["Enums"]["subscription_status"]
          trial_ends_at: string | null
          trial_starts_at: string | null
          updated_at: string
        }
        Insert: {
          ai_calls_limit_override?: number | null
          ai_enabled?: boolean
          ai_quota_updated_at?: string | null
          ai_quota_updated_by?: string | null
          billing_cycle?: string
          cancel_at_period_end?: boolean
          canceled_at?: string | null
          created_at?: string
          current_period_end?: string
          current_period_start?: string
          discount_pct?: number
          id?: string
          metadata?: Json
          organization_id: string
          plan_id: string
          status?: Database["public"]["Enums"]["subscription_status"]
          trial_ends_at?: string | null
          trial_starts_at?: string | null
          updated_at?: string
        }
        Update: {
          ai_calls_limit_override?: number | null
          ai_enabled?: boolean
          ai_quota_updated_at?: string | null
          ai_quota_updated_by?: string | null
          billing_cycle?: string
          cancel_at_period_end?: boolean
          canceled_at?: string | null
          created_at?: string
          current_period_end?: string
          current_period_start?: string
          discount_pct?: number
          id?: string
          metadata?: Json
          organization_id?: string
          plan_id?: string
          status?: Database["public"]["Enums"]["subscription_status"]
          trial_ends_at?: string | null
          trial_starts_at?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "subscriptions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
        ]
      }
      support_ticket_messages: {
        Row: {
          attachments: Json
          author_id: string
          body: string
          created_at: string
          id: string
          is_internal: boolean
          organization_id: string
          ticket_id: string
        }
        Insert: {
          attachments?: Json
          author_id: string
          body: string
          created_at?: string
          id?: string
          is_internal?: boolean
          organization_id: string
          ticket_id: string
        }
        Update: {
          attachments?: Json
          author_id?: string
          body?: string
          created_at?: string
          id?: string
          is_internal?: boolean
          organization_id?: string
          ticket_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "support_ticket_messages_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "support_tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      support_tickets: {
        Row: {
          assigned_to: string | null
          category: Database["public"]["Enums"]["ticket_category"]
          created_at: string
          created_by: string
          description: string
          id: string
          organization_id: string
          priority: Database["public"]["Enums"]["ticket_priority"]
          resolution_note: string | null
          resolved_at: string | null
          status: Database["public"]["Enums"]["ticket_status"]
          subject: string
          ticket_number: string | null
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          category?: Database["public"]["Enums"]["ticket_category"]
          created_at?: string
          created_by: string
          description: string
          id?: string
          organization_id: string
          priority?: Database["public"]["Enums"]["ticket_priority"]
          resolution_note?: string | null
          resolved_at?: string | null
          status?: Database["public"]["Enums"]["ticket_status"]
          subject: string
          ticket_number?: string | null
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          category?: Database["public"]["Enums"]["ticket_category"]
          created_at?: string
          created_by?: string
          description?: string
          id?: string
          organization_id?: string
          priority?: Database["public"]["Enums"]["ticket_priority"]
          resolution_note?: string | null
          resolved_at?: string | null
          status?: Database["public"]["Enums"]["ticket_status"]
          subject?: string
          ticket_number?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "support_tickets_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "support_tickets_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "support_tickets_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      suppressed_emails: {
        Row: {
          created_at: string
          email: string
          id: string
          metadata: Json | null
          reason: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          metadata?: Json | null
          reason?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          metadata?: Json | null
          reason?: string
          updated_at?: string
        }
        Relationships: []
      }
      target_companies: {
        Row: {
          assigned_rep_id: string | null
          city: string | null
          company_size: string | null
          contact_email: string | null
          contact_name: string | null
          contact_phone: string | null
          converted_at: string | null
          converted_organization_id: string | null
          country: string | null
          created_at: string
          created_by: string
          estimated_value_sar: number | null
          id: string
          industry: string | null
          last_contact_at: string | null
          lost_reason: string | null
          name: string
          next_followup_at: string | null
          notes: string | null
          priority: string
          source: string | null
          status: string
          updated_at: string
          website: string | null
        }
        Insert: {
          assigned_rep_id?: string | null
          city?: string | null
          company_size?: string | null
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          converted_at?: string | null
          converted_organization_id?: string | null
          country?: string | null
          created_at?: string
          created_by?: string
          estimated_value_sar?: number | null
          id?: string
          industry?: string | null
          last_contact_at?: string | null
          lost_reason?: string | null
          name: string
          next_followup_at?: string | null
          notes?: string | null
          priority?: string
          source?: string | null
          status?: string
          updated_at?: string
          website?: string | null
        }
        Update: {
          assigned_rep_id?: string | null
          city?: string | null
          company_size?: string | null
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          converted_at?: string | null
          converted_organization_id?: string | null
          country?: string | null
          created_at?: string
          created_by?: string
          estimated_value_sar?: number | null
          id?: string
          industry?: string | null
          last_contact_at?: string | null
          lost_reason?: string | null
          name?: string
          next_followup_at?: string | null
          notes?: string | null
          priority?: string
          source?: string | null
          status?: string
          updated_at?: string
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "target_companies_converted_organization_id_fkey"
            columns: ["converted_organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "target_companies_converted_organization_id_fkey"
            columns: ["converted_organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "target_companies_converted_organization_id_fkey"
            columns: ["converted_organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      task_attachments: {
        Row: {
          created_at: string
          file_name: string
          file_path: string
          file_size: number | null
          id: string
          mime_type: string | null
          organization_id: string
          task_id: string
          uploaded_by: string | null
        }
        Insert: {
          created_at?: string
          file_name: string
          file_path: string
          file_size?: number | null
          id?: string
          mime_type?: string | null
          organization_id?: string
          task_id: string
          uploaded_by?: string | null
        }
        Update: {
          created_at?: string
          file_name?: string
          file_path?: string
          file_size?: number | null
          id?: string
          mime_type?: string | null
          organization_id?: string
          task_id?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "task_attachments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_attachments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "task_attachments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "task_attachments_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      task_collaborators: {
        Row: {
          created_at: string
          id: string
          organization_id: string
          task_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          organization_id?: string
          task_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          organization_id?: string
          task_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_collaborators_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_collaborators_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "task_collaborators_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "task_collaborators_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      task_comments: {
        Row: {
          content: string
          created_at: string
          created_by: string | null
          id: string
          organization_id: string
          task_id: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id?: string
          task_id: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id?: string
          task_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_comments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_comments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "task_comments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "task_comments_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      task_reminder_log: {
        Row: {
          id: string
          organization_id: string
          reminder_key: string
          sent_at: string
          task_id: string
          user_id: string | null
        }
        Insert: {
          id?: string
          organization_id?: string
          reminder_key: string
          sent_at?: string
          task_id: string
          user_id?: string | null
        }
        Update: {
          id?: string
          organization_id?: string
          reminder_key?: string
          sent_at?: string
          task_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "task_reminder_log_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_reminder_log_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "task_reminder_log_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      task_subtasks: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          is_completed: boolean
          organization_id: string
          sort_order: number
          task_id: string
          title: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          is_completed?: boolean
          organization_id?: string
          sort_order?: number
          task_id: string
          title: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          is_completed?: boolean
          organization_id?: string
          sort_order?: number
          task_id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_subtasks_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_subtasks_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "task_subtasks_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "task_subtasks_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      task_templates: {
        Row: {
          color: string | null
          created_at: string
          created_by: string | null
          default_assignee: string | null
          default_due_days: number | null
          default_estimated_hours: number | null
          default_priority: string
          default_status: string
          default_task_type: string
          description: string | null
          description_template: string | null
          icon: string | null
          id: string
          is_archived: boolean
          name: string
          organization_id: string
          reminders_enabled: boolean
          show_in_timeline: boolean
          subtasks: Json
          suggested_attachments: Json
          title_template: string
          updated_at: string
          usage_count: number
        }
        Insert: {
          color?: string | null
          created_at?: string
          created_by?: string | null
          default_assignee?: string | null
          default_due_days?: number | null
          default_estimated_hours?: number | null
          default_priority?: string
          default_status?: string
          default_task_type?: string
          description?: string | null
          description_template?: string | null
          icon?: string | null
          id?: string
          is_archived?: boolean
          name: string
          organization_id?: string
          reminders_enabled?: boolean
          show_in_timeline?: boolean
          subtasks?: Json
          suggested_attachments?: Json
          title_template: string
          updated_at?: string
          usage_count?: number
        }
        Update: {
          color?: string | null
          created_at?: string
          created_by?: string | null
          default_assignee?: string | null
          default_due_days?: number | null
          default_estimated_hours?: number | null
          default_priority?: string
          default_status?: string
          default_task_type?: string
          description?: string | null
          description_template?: string | null
          icon?: string | null
          id?: string
          is_archived?: boolean
          name?: string
          organization_id?: string
          reminders_enabled?: boolean
          show_in_timeline?: boolean
          subtasks?: Json
          suggested_attachments?: Json
          title_template?: string
          updated_at?: string
          usage_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "task_templates_default_assignee_fkey"
            columns: ["default_assignee"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          actual_hours: number | null
          approved_at: string | null
          approved_by: string | null
          assigned_by: string | null
          assigned_to: string | null
          case_arrangements: string | null
          case_classification: string | null
          case_summary: string | null
          client_name: string | null
          client_visible: boolean
          completed_at: string | null
          created_at: string
          created_by: string | null
          defendant_name: string | null
          deleted_at: string | null
          description: string | null
          due_date: string | null
          embedding: string | null
          embedding_text: string | null
          estimated_hours: number | null
          id: string
          memo_category: string | null
          memo_file_description: string | null
          memo_group_id: string | null
          memo_promoted_at: string | null
          memo_text: string | null
          memo_title: string | null
          organization_id: string
          priority: Database["public"]["Enums"]["task_priority"]
          reminders_enabled: boolean
          service_id: string | null
          show_in_timeline: boolean
          start_due_date: string | null
          status: Database["public"]["Enums"]["task_status"]
          task_type: string
          title: string
          updated_at: string
        }
        Insert: {
          actual_hours?: number | null
          approved_at?: string | null
          approved_by?: string | null
          assigned_by?: string | null
          assigned_to?: string | null
          case_arrangements?: string | null
          case_classification?: string | null
          case_summary?: string | null
          client_name?: string | null
          client_visible?: boolean
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          defendant_name?: string | null
          deleted_at?: string | null
          description?: string | null
          due_date?: string | null
          embedding?: string | null
          embedding_text?: string | null
          estimated_hours?: number | null
          id?: string
          memo_category?: string | null
          memo_file_description?: string | null
          memo_group_id?: string | null
          memo_promoted_at?: string | null
          memo_text?: string | null
          memo_title?: string | null
          organization_id?: string
          priority?: Database["public"]["Enums"]["task_priority"]
          reminders_enabled?: boolean
          service_id?: string | null
          show_in_timeline?: boolean
          start_due_date?: string | null
          status?: Database["public"]["Enums"]["task_status"]
          task_type?: string
          title: string
          updated_at?: string
        }
        Update: {
          actual_hours?: number | null
          approved_at?: string | null
          approved_by?: string | null
          assigned_by?: string | null
          assigned_to?: string | null
          case_arrangements?: string | null
          case_classification?: string | null
          case_summary?: string | null
          client_name?: string | null
          client_visible?: boolean
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          defendant_name?: string | null
          deleted_at?: string | null
          description?: string | null
          due_date?: string | null
          embedding?: string | null
          embedding_text?: string | null
          estimated_hours?: number | null
          id?: string
          memo_category?: string | null
          memo_file_description?: string | null
          memo_group_id?: string | null
          memo_promoted_at?: string | null
          memo_text?: string | null
          memo_title?: string | null
          organization_id?: string
          priority?: Database["public"]["Enums"]["task_priority"]
          reminders_enabled?: boolean
          service_id?: string | null
          show_in_timeline?: boolean
          start_due_date?: string | null
          status?: Database["public"]["Enums"]["task_status"]
          task_type?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "tasks_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "tasks_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      testimonials: {
        Row: {
          client_name: string
          client_title: string | null
          content: string
          created_at: string | null
          id: string
          is_active: boolean | null
          rating: number | null
        }
        Insert: {
          client_name: string
          client_title?: string | null
          content: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          rating?: number | null
        }
        Update: {
          client_name?: string
          client_title?: string | null
          content?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          rating?: number | null
        }
        Relationships: []
      }
      time_entries: {
        Row: {
          activity_type: Database["public"]["Enums"]["activity_type"]
          billable_amount: number | null
          created_at: string
          duration_minutes: number | null
          end_time: string | null
          id: string
          locked_hourly_rate: number | null
          notes: string | null
          organization_id: string
          service_id: string | null
          start_time: string
          task_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          activity_type?: Database["public"]["Enums"]["activity_type"]
          billable_amount?: number | null
          created_at?: string
          duration_minutes?: number | null
          end_time?: string | null
          id?: string
          locked_hourly_rate?: number | null
          notes?: string | null
          organization_id?: string
          service_id?: string | null
          start_time?: string
          task_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          activity_type?: Database["public"]["Enums"]["activity_type"]
          billable_amount?: number | null
          created_at?: string
          duration_minutes?: number | null
          end_time?: string | null
          id?: string
          locked_hourly_rate?: number | null
          notes?: string | null
          organization_id?: string
          service_id?: string | null
          start_time?: string
          task_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "time_entries_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "time_entries_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "time_entries_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "time_entries_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "time_entries_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      upsell_opportunities: {
        Row: {
          current_plan_id: string | null
          detected_at: string
          estimated_mrr_uplift_sar: number | null
          id: string
          last_offer_sent_at: string | null
          organization_id: string
          resource: string
          suggested_plan_id: string | null
          utilization_pct: number
        }
        Insert: {
          current_plan_id?: string | null
          detected_at?: string
          estimated_mrr_uplift_sar?: number | null
          id?: string
          last_offer_sent_at?: string | null
          organization_id: string
          resource: string
          suggested_plan_id?: string | null
          utilization_pct: number
        }
        Update: {
          current_plan_id?: string | null
          detected_at?: string
          estimated_mrr_uplift_sar?: number | null
          id?: string
          last_offer_sent_at?: string | null
          organization_id?: string
          resource?: string
          suggested_plan_id?: string | null
          utilization_pct?: number
        }
        Relationships: [
          {
            foreignKeyName: "upsell_opportunities_current_plan_id_fkey"
            columns: ["current_plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "upsell_opportunities_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "upsell_opportunities_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "upsell_opportunities_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "upsell_opportunities_suggested_plan_id_fkey"
            columns: ["suggested_plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
        ]
      }
      usage_counters: {
        Row: {
          ai_calls_count: number
          created_at: string
          documents_count: number
          id: string
          last_recomputed_at: string
          organization_id: string
          period_end: string
          period_start: string
          services_count: number
          storage_used_mb: number
          updated_at: string
          users_count: number
        }
        Insert: {
          ai_calls_count?: number
          created_at?: string
          documents_count?: number
          id?: string
          last_recomputed_at?: string
          organization_id: string
          period_end?: string
          period_start?: string
          services_count?: number
          storage_used_mb?: number
          updated_at?: string
          users_count?: number
        }
        Update: {
          ai_calls_count?: number
          created_at?: string
          documents_count?: number
          id?: string
          last_recomputed_at?: string
          organization_id?: string
          period_end?: string
          period_start?: string
          services_count?: number
          storage_used_mb?: number
          updated_at?: string
          users_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "usage_counters_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "usage_counters_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "usage_counters_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      user_calendar_sync_selections: {
        Row: {
          created_at: string
          error: string | null
          gcal_event_id: string | null
          id: string
          last_synced_at: string | null
          source_id: string
          source_table: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          error?: string | null
          gcal_event_id?: string | null
          id?: string
          last_synced_at?: string | null
          source_id: string
          source_table: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          error?: string | null
          gcal_event_id?: string | null
          id?: string
          last_synced_at?: string | null
          source_id?: string
          source_table?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_permissions: {
        Row: {
          created_at: string
          expires_at: string | null
          granted_by: string | null
          id: string
          permission: string
          user_id: string
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          granted_by?: string | null
          id?: string
          permission: string
          user_id: string
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          granted_by?: string | null
          id?: string
          permission?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_status: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          created_at: string
          id: string
          status: Database["public"]["Enums"]["account_status"]
          suspended_reason: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string
          id?: string
          status?: Database["public"]["Enums"]["account_status"]
          suspended_reason?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string
          id?: string
          status?: Database["public"]["Enums"]["account_status"]
          suspended_reason?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      website_content: {
        Row: {
          content_json: Json | null
          id: string
          section_key: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          content_json?: Json | null
          id?: string
          section_key: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          content_json?: Json | null
          id?: string
          section_key?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      website_team_members: {
        Row: {
          bio: string | null
          created_at: string | null
          degrees: string | null
          full_name: string
          id: string
          image_url: string | null
          is_active: boolean | null
          job_title: string | null
          notable_cases: string | null
          sort_order: number | null
          specialization: string | null
          updated_at: string | null
          years_experience: number | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          degrees?: string | null
          full_name: string
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          job_title?: string | null
          notable_cases?: string | null
          sort_order?: number | null
          specialization?: string | null
          updated_at?: string | null
          years_experience?: number | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          degrees?: string | null
          full_name?: string
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          job_title?: string | null
          notable_cases?: string | null
          sort_order?: number | null
          specialization?: string | null
          updated_at?: string | null
          years_experience?: number | null
        }
        Relationships: []
      }
      workspace_settings: {
        Row: {
          created_at: string
          description: string | null
          id: string
          key: string
          organization_id: string
          updated_at: string
          updated_by: string | null
          value: Json
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          key: string
          organization_id?: string
          updated_at?: string
          updated_by?: string | null
          value?: Json
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          key?: string
          organization_id?: string
          updated_at?: string
          updated_by?: string | null
          value?: Json
        }
        Relationships: [
          {
            foreignKeyName: "workspace_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workspace_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_churn_risk_signals"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workspace_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_org_health"
            referencedColumns: ["organization_id"]
          },
        ]
      }
    }
    Views: {
      platform_subscription_metrics: {
        Row: {
          active_subs: number | null
          arpa: number | null
          arr: number | null
          canceled_subs: number | null
          mrr: number | null
          past_due_subs: number | null
          trialing_subs: number | null
        }
        Relationships: []
      }
      v_churn_risk_signals: {
        Row: {
          ai_usage_pct: number | null
          documents_count: number | null
          last_doc_at: string | null
          last_task_at: string | null
          mrr_sar: number | null
          org_name: string | null
          organization_id: string | null
          overdue_invoices_90d: number | null
          payments_90d: number | null
          plan_name: string | null
          seat_usage_pct: number | null
          storage_pct: number | null
          tenure_months: number | null
          tickets_30d: number | null
          users_count: number | null
        }
        Relationships: []
      }
      v_csat_monthly: {
        Row: {
          avg_score: number | null
          month: string | null
          responses: number | null
          satisfaction_pct: number | null
        }
        Relationships: []
      }
      v_org_health: {
        Row: {
          ai_calls_count: number | null
          ai_limit: number | null
          ai_usage_pct: number | null
          billing_cycle: string | null
          current_period_end: string | null
          documents_count: number | null
          mrr_sar: number | null
          org_name: string | null
          org_status: Database["public"]["Enums"]["org_status"] | null
          organization_id: string | null
          payments_90d: number | null
          plan_id: string | null
          plan_name: string | null
          seat_usage_pct: number | null
          services_count: number | null
          storage_pct: number | null
          storage_used_mb: number | null
          sub_status: Database["public"]["Enums"]["subscription_status"] | null
          tenure_months: number | null
          tickets_30d: number | null
          users_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
        ]
      }
      v_platform_finance_monthly: {
        Row: {
          burn_sar: number | null
          costs_sar: number | null
          month: string | null
          revenue_sar: number | null
        }
        Relationships: []
      }
      v_platform_mrr_daily: {
        Row: {
          day: string | null
          mrr_sar: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      _assert_platform_observer: { Args: never; Returns: undefined }
      _org_master_key: { Args: never; Returns: string }
      approve_join_request: {
        Args: {
          _app_role: Database["public"]["Enums"]["app_role"]
          _org_role?: Database["public"]["Enums"]["org_role"]
          _request_id: string
        }
        Returns: undefined
      }
      auto_revert_stale_tasks: {
        Args: never
        Returns: {
          assignee: string
          task_id: string
          title: string
        }[]
      }
      can_access_org: {
        Args: { _org_id: string; _user_id: string }
        Returns: boolean
      }
      check_org_quota: {
        Args: { _org_id: string; _resource: string }
        Returns: Json
      }
      current_org_id: { Args: never; Returns: string }
      current_platform_role: {
        Args: never
        Returns: Database["public"]["Enums"]["platform_role"]
      }
      current_subscription: {
        Args: { _org_id: string }
        Returns: {
          ai_calls_limit_override: number
          ai_enabled: boolean
          ai_quota_updated_at: string
          billing_cycle: string
          cancel_at_period_end: boolean
          current_period_end: string
          effective_ai_calls_quota: number
          organization_id: string
          plan_id: string
          plan_name: string
          plan_slug: string
          quota_ai_calls: number
          quota_documents: number
          quota_services: number
          quota_storage_mb: number
          quota_users: number
          status: Database["public"]["Enums"]["subscription_status"]
          subscription_id: string
          trial_ends_at: string
        }[]
      }
      default_org_id: { Args: never; Returns: string }
      get_conversation_read_states: {
        Args: {
          _channel: Database["public"]["Enums"]["message_channel"]
          _service_id: string
        }
        Returns: {
          last_read_at: string
          user_id: string
        }[]
      }
      get_invite_by_token: {
        Args: { _token: string }
        Returns: {
          accepted_at: string
          app_role: Database["public"]["Enums"]["app_role"]
          email: string
          expires_at: string
          id: string
          org_role: Database["public"]["Enums"]["org_role"]
          organization_id: string
          organization_name: string
        }[]
      }
      get_org_google_tokens: {
        Args: { _org_id: string }
        Returns: {
          access_token: string
          calendar_id: string
          expires_at: string
          refresh_token: string
          root_folder_id: string
          scopes: string[]
          status: string
        }[]
      }
      get_org_google_tokens_admin: {
        Args: { _org_id: string }
        Returns: {
          access_token: string
          calendar_id: string
          expires_at: string
          refresh_token: string
          root_folder_id: string
          scopes: string[]
          status: string
        }[]
      }
      get_platform_activity: {
        Args: { _limit?: number }
        Returns: {
          kind: string
          link: string
          occurred_at: string
          org_id: string
          org_name: string
          severity: string
          subtitle: string
          title: string
        }[]
      }
      get_platform_ai_usage_breakdown: {
        Args: {
          _group_by?: string
          _limit?: number
          _org_id?: string
          _window_days?: number
        }
        Returns: {
          avg_latency_ms: number
          calls: number
          completion_tokens: number
          cost_estimate: number
          error_count: number
          error_rate: number
          group_key: string
          group_label: string
          prompt_tokens: number
          tokens_total: number
        }[]
      }
      get_platform_audit_activity: {
        Args: { _window_days?: number }
        Returns: {
          action: string
          count: number
          severity: string
          table_name: string
        }[]
      }
      get_platform_db_health: { Args: never; Returns: Json }
      get_platform_invite_by_token: {
        Args: { _token: string }
        Returns: {
          accepted_at: string
          email: string
          expires_at: string
          id: string
          role: Database["public"]["Enums"]["platform_role"]
        }[]
      }
      get_platform_kpis: { Args: { _window_days?: number }; Returns: Json }
      get_platform_mrr_timeseries: {
        Args: { _months?: number }
        Returns: {
          churned_mrr: number
          net_mrr: number
          new_mrr: number
          paying_orgs: number
          period: string
        }[]
      }
      get_platform_plan_distribution: {
        Args: never
        Returns: {
          active_count: number
          mrr: number
          plan_id: string
          plan_name: string
          plan_slug: string
          trialing_count: number
        }[]
      }
      get_platform_resource_kpis: {
        Args: { _window_days?: number }
        Returns: Json
      }
      get_platform_resource_org_details: {
        Args: { _limit?: number; _window_days?: number }
        Returns: {
          ai_calls: number
          avg_latency_ms: number
          cost_estimate: number
          counter_ai_calls: number
          documents_count: number
          error_count: number
          error_rate: number
          last_recomputed_at: string
          organization_id: string
          organization_name: string
          organization_status: string
          p95_latency_ms: number
          services_count: number
          storage_mb: number
          tokens: number
          users_count: number
        }[]
      }
      get_platform_setting: { Args: { _key: string }; Returns: Json }
      get_platform_top_consumers: {
        Args: { _limit?: number; _window_days?: number }
        Returns: {
          ai_calls: number
          cost_estimate: number
          documents_count: number
          organization_id: string
          organization_name: string
          storage_mb: number
          tokens: number
          users_count: number
        }[]
      }
      get_platform_usage_timeseries: {
        Args: { _days?: number; _org_id?: string }
        Returns: {
          avg_latency_ms: number
          bucket: string
          calls: number
          cost: number
          errors: number
          tokens: number
        }[]
      }
      get_service_tab_counts: { Args: { p_service_id: string }; Returns: Json }
      get_unread_conversations: {
        Args: never
        Returns: {
          channel: Database["public"]["Enums"]["message_channel"]
          client_id: string
          client_name: string
          last_message_at: string
          last_message_preview: string
          last_sender_id: string
          last_sender_name: string
          service_id: string
          service_title: string
          service_type: string
          total_count: number
          unread_count: number
        }[]
      }
      has_any_platform_role: {
        Args: {
          _roles: Database["public"]["Enums"]["platform_role"][]
          _user_id: string
        }
        Returns: boolean
      }
      has_event_access: {
        Args: { _event_id: string; _user_id: string }
        Returns: boolean
      }
      has_org_role: {
        Args: {
          _org_id: string
          _role: Database["public"]["Enums"]["org_role"]
          _user_id: string
        }
        Returns: boolean
      }
      has_permission: {
        Args: { _permission: string; _user_id: string }
        Returns: boolean
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      has_task_access: {
        Args: { _task_id: string; _user_id: string }
        Returns: boolean
      }
      is_active_user: { Args: { _user_id: string }; Returns: boolean }
      is_admin: { Args: { _user_id: string }; Returns: boolean }
      is_org_member: {
        Args: { _org_id: string; _user_id: string }
        Returns: boolean
      }
      is_platform_admin: { Args: { _user_id: string }; Returns: boolean }
      is_platform_admin_or_super: { Args: { _uid: string }; Returns: boolean }
      is_platform_email: { Args: { _email: string }; Returns: boolean }
      is_platform_role: {
        Args: {
          _role: Database["public"]["Enums"]["platform_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_platform_staff: { Args: { _user_id: string }; Returns: boolean }
      is_sales_manager_of: {
        Args: { _manager_id: string; _rep_id: string }
        Returns: boolean
      }
      is_sales_rep: { Args: { _user_id: string }; Returns: boolean }
      is_service_client: {
        Args: { _service_id: string; _user_id: string }
        Returns: boolean
      }
      is_service_member: {
        Args: { _service_id: string; _user_id: string }
        Returns: boolean
      }
      mark_all_conversations_read: { Args: never; Returns: number }
      mark_conversation_read: {
        Args: {
          _channel: Database["public"]["Enums"]["message_channel"]
          _service_id: string
        }
        Returns: undefined
      }
      match_cached_response: {
        Args: {
          p_action_type?: string
          p_service_id: string
          query_embedding: string
          similarity_threshold?: number
        }
        Returns: {
          hit_count: number
          id: string
          question_text: string
          response_text: string
          similarity: number
        }[]
      }
      match_documents: {
        Args: {
          match_count?: number
          match_threshold?: number
          p_service_id?: string
          query_embedding: string
        }
        Returns: {
          chunk_index: number
          content: string
          document_id: string
          id: string
          metadata: Json
          similarity: number
        }[]
      }
      match_documents_hybrid: {
        Args: {
          match_count?: number
          p_service_id?: string
          query_embedding: string
          query_text: string
          vec_weight?: number
        }
        Returns: {
          chunk_index: number
          content: string
          document_id: string
          fts_rank: number
          id: string
          metadata: Json
          score: number
          vec_sim: number
        }[]
      }
      match_tasks: {
        Args: {
          match_count?: number
          match_threshold?: number
          p_service_id?: string
          query_embedding: string
        }
        Returns: {
          description: string
          due_date: string
          id: string
          priority: string
          similarity: number
          status: string
          title: string
        }[]
      }
      match_timeline: {
        Args: {
          match_count?: number
          match_threshold?: number
          p_service_id?: string
          query_embedding: string
        }
        Returns: {
          event_date: string
          event_type: string
          id: string
          significance: string
          similarity: number
          summary_ar: string
          title_ar: string
        }[]
      }
      notify_ai_quota_thresholds: { Args: never; Returns: number }
      org_slug_lookup: {
        Args: { _slug: string }
        Returns: {
          id: string
          name: string
          slug: string
        }[]
      }
      platform_get_org_members: {
        Args: { _org_id: string }
        Returns: {
          app_roles: Database["public"]["Enums"]["app_role"][]
          email: string
          full_name: string
          joined_at: string
          org_role: Database["public"]["Enums"]["org_role"]
          status: Database["public"]["Enums"]["org_status"]
          user_id: string
        }[]
      }
      platform_set_org_ai_quota: {
        Args: { _enabled: boolean; _limit_override: number; _org_id: string }
        Returns: undefined
      }
      platform_set_user_app_roles: {
        Args: {
          _organization_id: string
          _reason?: string
          _roles: Database["public"]["Enums"]["app_role"][]
          _target_user_id: string
        }
        Returns: undefined
      }
      public_org_search: {
        Args: { _q: string }
        Returns: {
          id: string
          logo_url: string
          name: string
          slug: string
        }[]
      }
      public_signup_info: {
        Args: { _slug: string }
        Returns: {
          allow_client_self_signup: boolean
          allow_lawyer_join_requests: boolean
          auto_approve: boolean
          branding_color: string
          logo_url: string
          name: string
          organization_id: string
          slug: string
          status: string
        }[]
      }
      recompute_usage_counters: {
        Args: { _org_id: string }
        Returns: undefined
      }
      redeem_signup_code: {
        Args: { _code: string }
        Returns: {
          name: string
          organization_id: string
          slug: string
        }[]
      }
      set_org_google_tokens: {
        Args: {
          _access_token: string
          _calendar_id?: string
          _expires_at: string
          _org_id: string
          _refresh_token: string
          _root_folder_id?: string
          _scopes?: string[]
        }
        Returns: undefined
      }
      set_org_google_tokens_admin: {
        Args: {
          _access_token: string
          _calendar_id?: string
          _connected_by?: string
          _expires_at: string
          _org_id: string
          _refresh_token: string
          _root_folder_id?: string
          _scopes?: string[]
        }
        Returns: undefined
      }
      storage_ai_chat_att_org_id: {
        Args: { object_name: string }
        Returns: string
      }
      storage_client_id_from_path: {
        Args: { object_name: string }
        Returns: string
      }
      storage_event_att_org_id: {
        Args: { object_name: string }
        Returns: string
      }
      storage_event_id_from_path: {
        Args: { object_name: string }
        Returns: string
      }
      storage_legal_doc_org_id: {
        Args: { object_name: string }
        Returns: string
      }
      storage_msg_att_org_id: { Args: { object_name: string }; Returns: string }
      storage_org_id_from_path: {
        Args: { object_name: string }
        Returns: string
      }
      storage_qa_evidence_org_id: {
        Args: { object_name: string }
        Returns: string
      }
      storage_service_id_from_path: {
        Args: { object_name: string }
        Returns: string
      }
      storage_task_att_org_id: {
        Args: { object_name: string }
        Returns: string
      }
      storage_task_id_from_path: {
        Args: { object_name: string }
        Returns: string
      }
      subscription_monthly_revenue: {
        Args: { _sub_id: string }
        Returns: number
      }
      transfer_org_ownership: {
        Args: {
          _new_owner_user_id: string
          _organization_id: string
          _reason?: string
        }
        Returns: undefined
      }
    }
    Enums: {
      account_status: "pending" | "active" | "suspended"
      activity_type:
        | "consultation"
        | "litigation"
        | "drafting"
        | "review"
        | "research"
        | "meeting"
        | "correspondence"
        | "other"
      app_role:
        | "admin"
        | "partner"
        | "senior_lawyer"
        | "junior_lawyer"
        | "secretary"
        | "client"
      audit_action: "INSERT" | "UPDATE" | "DELETE" | "LOGIN" | "LOGOUT"
      audit_severity: "info" | "warning" | "critical"
      client_type: "individual" | "company"
      contract_status: "draft" | "review" | "approved" | "signed" | "cancelled"
      discount_request_status: "pending" | "approved" | "rejected" | "applied"
      document_category:
        | "personal_documents"
        | "case_files"
        | "contracts"
        | "correspondence"
        | "evidence"
        | "court_documents"
        | "financial"
        | "other"
        | "plaintiff_memo"
        | "defendant_memo"
        | "session_record"
      event_attachment_category: "general" | "hearing_minutes"
      event_status: "pending" | "approved" | "rejected" | "completed"
      event_type:
        | "hearing"
        | "meeting"
        | "deadline"
        | "note"
        | "filing"
        | "other"
      invoice_status:
        | "draft"
        | "sent"
        | "paid"
        | "partially_paid"
        | "overdue"
        | "cancelled"
      message_channel: "team" | "client"
      notification_type:
        | "info"
        | "warning"
        | "success"
        | "error"
        | "task"
        | "event"
        | "approval"
      org_role:
        | "org_owner"
        | "org_admin"
        | "billing_manager"
        | "member"
        | "viewer"
      org_status: "pending" | "active" | "suspended" | "archived"
      payment_method: "cash" | "bank_transfer" | "check" | "online" | "other"
      plan_status: "trial" | "active" | "past_due" | "cancelled"
      platform_role:
        | "platform_admin"
        | "platform_support"
        | "platform_super_admin"
        | "platform_sales"
        | "platform_it"
        | "platform_finance"
      service_status: "draft" | "active" | "on_hold" | "closed" | "archived"
      subscription_status:
        | "trialing"
        | "active"
        | "past_due"
        | "canceled"
        | "expired"
        | "suspended"
      task_priority: "low" | "medium" | "high" | "urgent"
      task_status: "todo" | "in_progress" | "review" | "done" | "cancelled"
      ticket_category:
        | "bug"
        | "feature_request"
        | "integration"
        | "billing"
        | "access"
        | "other"
      ticket_priority: "low" | "medium" | "high" | "urgent"
      ticket_status:
        | "open"
        | "in_progress"
        | "waiting_customer"
        | "resolved"
        | "closed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      account_status: ["pending", "active", "suspended"],
      activity_type: [
        "consultation",
        "litigation",
        "drafting",
        "review",
        "research",
        "meeting",
        "correspondence",
        "other",
      ],
      app_role: [
        "admin",
        "partner",
        "senior_lawyer",
        "junior_lawyer",
        "secretary",
        "client",
      ],
      audit_action: ["INSERT", "UPDATE", "DELETE", "LOGIN", "LOGOUT"],
      audit_severity: ["info", "warning", "critical"],
      client_type: ["individual", "company"],
      contract_status: ["draft", "review", "approved", "signed", "cancelled"],
      discount_request_status: ["pending", "approved", "rejected", "applied"],
      document_category: [
        "personal_documents",
        "case_files",
        "contracts",
        "correspondence",
        "evidence",
        "court_documents",
        "financial",
        "other",
        "plaintiff_memo",
        "defendant_memo",
        "session_record",
      ],
      event_attachment_category: ["general", "hearing_minutes"],
      event_status: ["pending", "approved", "rejected", "completed"],
      event_type: ["hearing", "meeting", "deadline", "note", "filing", "other"],
      invoice_status: [
        "draft",
        "sent",
        "paid",
        "partially_paid",
        "overdue",
        "cancelled",
      ],
      message_channel: ["team", "client"],
      notification_type: [
        "info",
        "warning",
        "success",
        "error",
        "task",
        "event",
        "approval",
      ],
      org_role: [
        "org_owner",
        "org_admin",
        "billing_manager",
        "member",
        "viewer",
      ],
      org_status: ["pending", "active", "suspended", "archived"],
      payment_method: ["cash", "bank_transfer", "check", "online", "other"],
      plan_status: ["trial", "active", "past_due", "cancelled"],
      platform_role: [
        "platform_admin",
        "platform_support",
        "platform_super_admin",
        "platform_sales",
        "platform_it",
        "platform_finance",
      ],
      service_status: ["draft", "active", "on_hold", "closed", "archived"],
      subscription_status: [
        "trialing",
        "active",
        "past_due",
        "canceled",
        "expired",
        "suspended",
      ],
      task_priority: ["low", "medium", "high", "urgent"],
      task_status: ["todo", "in_progress", "review", "done", "cancelled"],
      ticket_category: [
        "bug",
        "feature_request",
        "integration",
        "billing",
        "access",
        "other",
      ],
      ticket_priority: ["low", "medium", "high", "urgent"],
      ticket_status: [
        "open",
        "in_progress",
        "waiting_customer",
        "resolved",
        "closed",
      ],
    },
  },
} as const
