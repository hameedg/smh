import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      fontFamily: {
        helvetica: ['Helvetica', 'sans-serif'],
        'helvetica-bold': ['Helvetica Bold', 'sans-serif'],
        'helvetica-oblique': ['Helvetica Oblique', 'sans-serif'],
        'helvetica-light': ['Helvetica Light', 'sans-serif'],
        'helvetica-compressed': ['Helvetica Compressed', 'sans-serif'],
        'helvetica-rounded-bold': ['Helvetica Rounded Bold', 'sans-serif'],

        bitter: ['Bitter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
