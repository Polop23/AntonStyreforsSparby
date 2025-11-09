import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add your custom "Lively Tech" palette
      colors: {
        'base-100': '#F5F5FF', // Your light base
        'base-200': '#FAFAFA',
        'primary-start': '#4FACFE', // Gradient start
        'primary-end': '#00F2FE',   // Gradient end
        'secondary': '#F72585',    // Pink/Red secondary
        'highlight': '#A3FF12',    // Neon lime highlight
      },
      // Add your custom fonts
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      // Add a soft, tinted shadow as requested
      boxShadow: {
        'glow-md': '0 0 15px -3px rgb(79 172 254 / 0.25)',
        'glow-lg': '0 0 30px -5px rgb(79 172 254 / 0.4)',
      },
      animation: {
        'fluid-bg': 'fluid-bg 15s ease infinite',
      },
      keyframes: {
        'fluid-bg': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
export default config