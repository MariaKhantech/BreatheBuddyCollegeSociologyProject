/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        jitter: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(1px, -1px)" },
          "50%": { transform: "translate(-1px, 1px)" },
          "75%": { transform: "translate(-1px, -1px)" },
        },
      },
      animation: {
        jitter: "jitter 0.3s infinite",
      },
    },
  },
  plugins: [],
};
