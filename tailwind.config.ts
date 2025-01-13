import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "2.25rem",
              fontWeight: "700",
              marginBottom: "1rem",
              color: "#000",
              backgroundColor: "#fff",
            },
            h2: {
              fontSize: "1.875rem",
              fontWeight: "700",
              marginBottom: "0.5rem",
              color: "#000",
              backgroundColor: "#fff",
            },
          },
        },
        dark: {
          css: {
            h1: {
              color: "#bdbdbda8",
              backgroundColor: "#000",
            },
            h2: {
              color: "#bdbdbda8",
              backgroundColor: "#000",
            },
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sideBarGray: "var(--side-bar-background-gray)", // Map the CSS variable
        sideBarBackgroundBlack: "var(--side-bar-background-black)", // Map the CSS variable
        sideBarForegroundBlack: "var(--side-bar-foreground-black)", // Map the CSS variable
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
