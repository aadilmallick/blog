/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        mainPage: "url('src/assets/background.jpg')",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      colors: {
        'brand-bg-primary': '#0a0a0a',
        'brand-bg-secondary': '#171717',
        'brand-bg-accent': '#c026d3',
        'brand-bg-contrast': '#22d3ee',
        'brand-text-primary': '#fafafa',
        'brand-text-muted': '#a1a1aa',
        'brand-border': '#27272a',
        'brand-button-primary': '#c026d3',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(10deg)' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
};
