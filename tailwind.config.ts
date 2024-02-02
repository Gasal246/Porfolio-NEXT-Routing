import type { Config } from 'tailwindcss'
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
      },
      backgroundImage:{
        circularLight: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);',
        circularDark: 'repeating-radial-gradient(rgba(255, 255, 255, 0.4) 2px, #1b1b1b 5px, #1b1b1b 100px);',
      }
    },
  },
  plugins: [],
}
export default config
