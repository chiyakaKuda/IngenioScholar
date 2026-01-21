/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          ingenio: {
            midnight: '#0F172A',
            indigo: '#1E3A8A',
            emerald: '#10B981',
            amber: '#F59E0B',
            crimson: '#EF4444',
            bgLight: '#F8FAFC',
            border: '#E5E7EB',
            textDark: '#111827',
            textMuted: '#6B7280',
          },
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          display: ['Manrope', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
      },
    },
    plugins: [],
  }