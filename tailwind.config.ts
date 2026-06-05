import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        sans: ["Inter", "Cairo", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        /* === Base Colors === */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        "surface-variant": "hsl(var(--surface-variant))",
        
        /* === Primary Colors === */
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          container: "hsl(var(--primary-container))",
          "container-foreground": "hsl(var(--primary-container-foreground))",
        },
        
        /* === Secondary Colors === */
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          container: "hsl(var(--secondary-container))",
          "container-foreground": "hsl(var(--secondary-container-foreground))",
        },
        
        /* === Destructive Colors === */
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        
        /* === Muted Colors === */
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        
        /* === Accent Colors === */
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          container: "hsl(var(--accent-container))",
          "container-foreground": "hsl(var(--accent-container-foreground))",
        },
        
        /* === Popover Colors === */
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        
        /* === Card Colors === */
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        
        /* === Gold Colors === */
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
        },

        /* === Brand Palette Tokens === */
        "midnight-slate": "hsl(var(--midnight-slate))",
        "steel-blue": "hsl(var(--steel-blue))",
        "antique-gold": "hsl(var(--antique-gold))",
        "warm-gold": "hsl(var(--warm-gold))",
        "stone-light": "hsl(var(--stone-light))",
        "pale-steel": "hsl(var(--pale-steel))",
        "gold-tint": "hsl(var(--gold-tint))",
        "off-white": "hsl(var(--off-white))",
        
        /* === Status Colors === */
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        
        /* === Outline Colors === */
        outline: "hsl(var(--outline))",
        "outline-variant": "hsl(var(--outline-variant))",
        
        /* === Workspace Colors === */
        ws: {
          navy: "hsl(var(--ws-navy))",
          "navy-light": "hsl(var(--ws-navy-light))",
          gold: "hsl(var(--ws-gold))",
          "gold-light": "hsl(var(--ws-gold-light))",
          white: "hsl(var(--ws-white))",
          gray: "hsl(var(--ws-gray))",
          text: "hsl(var(--ws-text))",
          "text-muted": "hsl(var(--ws-text-muted))",
        },
        
        /* === Sidebar Colors === */
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        elevated: "var(--shadow-elevated)",
        card: "var(--shadow-card)",
        glass: "var(--shadow-glass)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 hsl(var(--primary) / 0.4)" },
          "70%": { boxShadow: "0 0 0 10px hsl(var(--primary) / 0)" },
          "100%": { boxShadow: "0 0 0 0 hsl(var(--primary) / 0)" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-scale": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "count-up": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        /* Interaction keyframes */
        "bounce-in": {
          "0%":   { transform: "scale(0.3)",  opacity: "0" },
          "50%":  { transform: "scale(1.06)", opacity: "0.9" },
          "70%":  { transform: "scale(0.92)" },
          "100%": { transform: "scale(1)",    opacity: "1" },
        },
        "rubber-band": {
          "0%":   { transform: "scale(1)" },
          "30%":  { transform: "scaleX(1.25) scaleY(0.75)" },
          "40%":  { transform: "scaleX(0.75) scaleY(1.25)" },
          "60%":  { transform: "scaleX(1.15) scaleY(0.85)" },
          "80%":  { transform: "scaleX(0.95) scaleY(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        "slide-in-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-down": {
          from: { opacity: "0", transform: "translateY(-14px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "magic-in": {
          "0%":   { opacity: "0", transform: "scale(0.5) rotate(-8deg)" },
          "50%":  { transform: "scale(1.08) rotate(2deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
        },
        "task-complete": {
          "0%":   { transform: "scale(0.75)", opacity: "0.4" },
          "55%":  { transform: "scale(1.12)" },
          "75%":  { transform: "scale(0.96)" },
          "100%": { transform: "scale(1)",    opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "fade-in": "fade-in 0.3s ease-out forwards",
        "fade-in-scale": "fade-in-scale 0.3s ease-out forwards",
        "slide-up": "slide-up 0.4s ease-out forwards",
        "count-up": "count-up 0.5s ease-out forwards",
        /* Interaction animations */
        "bounce-in": "bounce-in 0.48s cubic-bezier(0.36,0.07,0.19,0.97) both",
        "rubber-band": "rubber-band 0.6s ease-out both",
        "slide-in-up": "slide-in-up 0.3s cubic-bezier(0.16,1,0.3,1) forwards",
        "slide-in-down": "slide-in-down 0.3s cubic-bezier(0.16,1,0.3,1) forwards",
        "magic-in": "magic-in 0.5s cubic-bezier(0.22,1,0.36,1) forwards",
        "task-complete": "task-complete 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
