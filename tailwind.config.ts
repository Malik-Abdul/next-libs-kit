import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sideBarGray: "var(--side-bar-background-gray)", // Map the CSS variable
        sideBarBackgroundBlack: "var(--side-bar-background-black)", // Map the CSS variable
        sideBarForegroundBlack: "var(--side-bar-foreground-black)", // Map the CSS variable
      },
    },
  },
  plugins: [],
} satisfies Config;
