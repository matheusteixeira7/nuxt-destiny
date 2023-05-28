/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0071EB',
          dark: '#0071EB',
          400: '#4d9cf1',
          500: '#0071EB',
          600: '#004fa5',
        },
        success: {
          DEFAULT: '#57D9A1',
          dark: '#57D9A1',
          400: '#89e4bd',
          500: '#57D9A1',
          600: '#3d9871',
        },
        navbar: {
          DEFAULT: '#f3f4f6',
          dark: '#1f2937',
          darkbg: '#020617',
        },
        divider: {
          DEFAULT: '#e5e7eb',
          dark: '#374151',
        },
        body: {
          DEFAULT: '#ffffff',
          dark: '#0f172a',
        }
      },
      textColor: {
        navbar: {
          DEFAULT: '#374151',
          dark: '#9ca3af',
        },
        title: {
          DEFAULT: '#374151',
          dark: '#ffffff',
        },
        subtitle: {
          DEFAULT: '#6b7280',
          dark: '#d1d5db',
        },
        body: {
          DEFAULT: '#374151',
          dark: '#ffffff',
        },
      },
      backgroundImage: {
        'sign-pattern': "url('/img/signin-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
  darkMode: ['class'],
}
