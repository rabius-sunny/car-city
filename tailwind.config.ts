import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: ['./components/**/*.{ts,tsx,}', './app/**/*.{ts,tsx}'],
  theme: {
    colors: {
      primary: colors.sky[500],
      secondary: colors.rose[500],
      white: colors.white,
      black: colors.slate[700],
      transparent: colors.transparent,
      green: colors.green,
      slate: colors.slate,
      rose: colors.rose,
      sky: colors.sky
    }
  },
  plugins: []
}
export default config
