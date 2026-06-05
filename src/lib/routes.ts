/**
 * مسارات التطبيق المركزية — استخدمها بدل النصوص المباشرة لضمان الاتساق.
 * 
 * الهيكل:
 *   /                    → الموقع التعريفي
 *   /auth/*              → المصادقة (دخول/تسجيل/استرجاع كلمة المرور)
 *   /onboarding/*        → التسجيل الأولي للمنظمات والانضمام إليها
 *   /firm/*              → تطبيق المكتب القانوني (العمل اليومي + الإدارة)
 *   /portal/*            → بوابة العميل
 *   /platform/*          → إدارة منصة SaaS (طاقم المنصة فقط)
 */

export const ROUTES = {
  // ────────── عام ──────────
  home: "/",
  about: "/about",
  ourServices: "/our-services",
  team: "/team",
  partners: "/partners",
  blog: "/blog",
  blogPost: (slug: string) => `/blog/${slug}`,
  faq: "/faq",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
  unsubscribe: "/unsubscribe",

  // ────────── المصادقة ──────────
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    registerOffice: "/auth/register/office",
    registerClient: "/auth/register/client",
    resetPassword: "/auth/reset-password",
    pending: "/auth/pending",
    googleCallback: "/auth/callback/google",
  },

  // ────────── Onboarding ──────────
  onboarding: {
    intro: "/onboarding/intro",
    signup: "/onboarding/signup",
    join: "/onboarding/join",
    createOrg: "/onboarding/create-org",
  },

  // ────────── المكتب القانوني ──────────
  firm: {
    root: "/firm",
    clients: "/firm/clients",
    services: "/firm/services",
    serviceDetail: (id: string) => `/firm/services/${id}`,
    tasks: "/firm/tasks",
    inbox: "/firm/inbox",
    calendar: "/firm/calendar",
    invoices: "/firm/invoices",
    aiAssistant: "/firm/ai-assistant",
    timeline: "/firm/timeline",
    members: "/firm/members",
    audit: "/firm/audit",
    settings: "/firm/settings",
    profile: "/firm/profile",
    support: "/firm/support",
    notifications: "/firm/notifications",
    reminderTemplates: "/firm/reminder-templates",
    websiteManager: "/firm/website-manager",
    subscription: "/firm/subscription",
  },

  // ────────── بوابة العميل ──────────
  portal: {
    root: "/portal",
  },

  // ────────── إدارة المنصة ──────────
  platform: {
    login: "/platform/login",
    acceptInvite: "/platform/accept-invite",
    root: "/platform",
    accounts: "/platform/accounts",
    accountDetail: (id: string) => `/platform/accounts/${id}`,
    billing: {
      plans: "/platform/billing/plans",
      subscriptions: "/platform/billing/subscriptions",
      payments: "/platform/billing/payments",
      discounts: "/platform/billing/discounts",
    },
    sales: {
      crm: "/platform/sales/crm",
      targets: "/platform/sales/targets",
      reps: "/platform/sales/reps",
      commissions: "/platform/sales/commissions",
      insights: "/platform/sales/insights",
      events: "/platform/sales/events",
      metrics: "/platform/sales/metrics",
    },
    support: {
      tickets: "/platform/support/tickets",
    },
    tech: {
      ai: "/platform/tech/ai",
      aiControl: "/platform/tech/ai-control",
      dataGateways: "/platform/tech/data-gateways",
      qa: "/platform/tech/qa",
      qaLinear: "/platform/tech/qa/linear",
      audit: "/platform/tech/audit",
      emailDiag: "/platform/tech/email-diag",
      resourceUsage: "/platform/tech/resource-usage",
    },
    finance: "/platform/finance",
    intel: {
      hub: "/platform/intel",
      churnRadar: "/platform/intel/churn-radar",
      upsell: "/platform/intel/upsell",
      assistant: "/platform/intel/assistant",
    },
    admin: {
      users: "/platform/admin/users",
      team: "/platform/admin/team",
      changelog: "/platform/admin/changelog",
    },
  },
} as const;

/**
 * خريطة المسارات القديمة → الجديدة (لإعادة التوجيه التلقائي).
 * تُحافظ على عمل الروابط المحفوظة، الإيميلات، والإشارات الخارجية.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  // المصادقة
  "/login": ROUTES.auth.login,
  "/register/office": ROUTES.auth.registerOffice,
  "/register/client": ROUTES.auth.registerClient,
  "/reset-password": ROUTES.auth.resetPassword,
  "/pending-approval": ROUTES.auth.pending,
  "/auth/google/callback": ROUTES.auth.googleCallback,

  // Onboarding
  "/signup-organization": ROUTES.onboarding.signup,
  "/platform-intro": ROUTES.onboarding.intro,
  "/join-organization": ROUTES.onboarding.join,

  // المكتب
  "/dashboard": ROUTES.firm.root,
  "/clients": ROUTES.firm.clients,
  "/services": ROUTES.firm.services,
  "/calendar": ROUTES.firm.calendar,
  "/tasks": ROUTES.firm.tasks,
  "/invoices": ROUTES.firm.invoices,
  "/ai-assistant": ROUTES.firm.aiAssistant,
  "/events-timeline": ROUTES.firm.timeline,
  "/access-control": ROUTES.firm.members,
  "/audit-logs": ROUTES.firm.audit,
  "/settings/workspace": ROUTES.firm.settings,
  "/settings/profile": ROUTES.firm.profile,
  "/settings/support": ROUTES.firm.support,
  "/settings/reminder-templates": ROUTES.firm.reminderTemplates,
  "/notifications": ROUTES.firm.notifications,
  "/website-manager": ROUTES.firm.websiteManager,

  // المنصة
  "/ai-dashboard": ROUTES.platform.tech.ai,
  "/qa-testing": ROUTES.platform.tech.qa,
  "/qa-testing/linear-settings": ROUTES.platform.tech.qaLinear,
  "/platform/organizations": ROUTES.platform.accounts,
  "/platform/plans": ROUTES.platform.billing.plans,
  "/platform/subscriptions": ROUTES.platform.billing.subscriptions,
  "/platform/payments": ROUTES.platform.billing.payments,
  "/platform/sales/discounts": ROUTES.platform.billing.discounts,
  "/platform/users": ROUTES.platform.admin.users,
  "/platform/team": ROUTES.platform.admin.team,
  "/platform/change-log": ROUTES.platform.admin.changelog,
  "/platform/ai-dashboard": ROUTES.platform.tech.ai,
  "/platform/qa-testing": ROUTES.platform.tech.qa,
  "/platform/qa-testing/linear-settings": ROUTES.platform.tech.qaLinear,
  "/platform/audit-logs": ROUTES.platform.tech.audit,
};
