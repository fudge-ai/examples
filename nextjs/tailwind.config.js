module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        112: '28rem',
        120: '30rem',
      }),
      minHeight: (theme) => ({
        80: '20rem',
      }),
      colors: {
        palette: {
          lighter: '#f1f5f9',
          light: '#94a3b8',
          primary: '#111827',
          dark: '#111111',
        },
      },
      fontFamily: {
        primary: ['"Josefin Sans"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
