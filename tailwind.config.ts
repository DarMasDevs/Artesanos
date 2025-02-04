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
        brown: "#5D4D34",
        "light-brown": "#AA8F66",
        amber: "#F5C18B",
        cream: "#FFEEDB",
        "dark-aqua": "#61C9A8",
        "dark-pink": "#BA3B46",
        gradient: "#000000b3",
        "b-green": "#3C826C",
        white: "#ffffff",
        red: "#EF4444",
        gray: "#9CA3AF",
      },
    },
  },
  plugins: [],
} satisfies Config;
