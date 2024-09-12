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
        linkDefault: "var(--linkDefault)",
        linkHover: "var(--linkHover)",
      },
      backgroundImage: {
        uber: "url('/bguber.png')",
        city: "url('/bg-city.png')",
      },
    },
  },
  plugins: [],
};
export default config;
