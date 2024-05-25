/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    screens: {
      "a-sm": "640px",
      // => @media (min-width: 640px) { ... }

      "a-md": "768px",
      // => @media (min-width: 768px) { ... }

      "a-lg": "1024px",
      // => @media (min-width: 1024px) { ... }

      "a-xl": "1280px",
      // => @media (min-width: 1280px) { ... }

      "a-2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "b-sm": { max: "639px" },
      // => @media (max-width: 639px) { ... }

      "b-md": { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "b-lg": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "b-xl": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "b-2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
    },
  },
  plugins: [],
};
