export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}"
];

export const darkMode = 'class';

export const theme = {
  extend: {
    colors: {
      // Brand Colors
      primary: {
        DEFAULT: '#FF6464',
        50: '#FFF0F0',
        100: '#FFE0E0',
        200: '#FFC1C1',
        300: '#FFA2A2',
        400: '#FF8383',
        500: '#FF6464',
        600: '#FF2E2E',
        700: '#F50000',
        800: '#C00000',
        900: '#800000',
        dark: '#FF8383' // Lighter variant for dark mode
      },
      secondary: {
        DEFAULT: '#00A8CC',
        50: '#E6F7FF',
        100: '#CCF0FA',
        200: '#99E0F5',
        300: '#66D1F0',
        400: '#33C1EB',
        500: '#00A8CC',
        600: '#0086A3',
        700: '#00657A',
        800: '#004352',
        900: '#002229',
        dark: '#33C1EB' // Lighter variant for dark mode
      },

      // Extended Color Palette
      accent: {
        DEFAULT: '#FF9F1C',
        dark: '#FFBF69'
      },
      success: {
        DEFAULT: '#2EC4B6',
        dark: '#7BEFD3'
      },
      warning: {
        DEFAULT: '#FFD166',
        dark: '#FFE194'
      },
      danger: {
        DEFAULT: '#E71D36',
        dark: '#FF4D6D'
      },

      // Grayscale
      gray: {
        DEFAULT: '#6B7280',
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },

      // Single color definitions for text-dark and text-light
      light: '#F9FAFB', // Light text color (matches gray-50)

      // Dark Mode Colors (renamed to avoid conflict)
      dark: {
        bg: '#0f172a',             // Background
        card: '#1e293b',           // Card & Section BG
        text: '#f1f5f9',           // Primary Text
        muted: '#94a3b8',          // Muted Text
        border: '#334155',         // Borders & separators
        highlight: '#7DD3FC'       // Accent in dark mode
      }
    },
    fontFamily: {
      sans: ['Heebo', 'sans-serif'],
      display: ['Calibre', 'Inter', 'sans-serif'], // For headings
      mono: ['Fira Code', 'monospace'] // For code snippets
    },
    boxShadow: {
      'primary-glow': '0 4px 14px 0 rgba(255, 100, 100, 0.4)',
      'secondary-glow': '0 4px 14px 0 rgba(0, 168, 204, 0.4)',
      'dark-glow': '0 4px 14px 0 rgba(125, 211, 252, 0.2)'
    }
  }
};

export const plugins = [
  require('@tailwindcss/typography'),
  require('@tailwindcss/forms')
];