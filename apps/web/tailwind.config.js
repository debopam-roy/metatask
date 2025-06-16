/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4fa',
          100: '#dbe3f4',
          200: '#bccae6',
          300: '#93a7d3',
          400: '#6a7fbc',
          500: '#4e62a7',
          600: '#3e4d89',
          700: '#343f6f',
          800: '#1e2a4a', // Main primary color
          900: '#192440',
        },
        secondary: {
          50: '#fdf2f4',
          100: '#fce8eb',
          200: '#f9d0d7',
          300: '#f5aab7',
          400: '#ef7a8e',
          500: '#e64f69',
          600: '#d97c86', // Main secondary color
          700: '#c56c76',
          800: '#9c2a3c',
          900: '#881c2d',
        },
        dark: {
          100: '#d5d7e0',
          200: '#acaebf',
          300: '#8c8fa3',
          400: '#666980',
          500: '#4d4f66',
          600: '#34354a',
          700: '#292a3d', // Dark mode background
          800: '#141625',
          900: '#0c0d1a',
        },
        light: {
          100: '#ffffff',
          200: '#f9fafb',
          300: '#f3f4f6',
          400: '#e5e7eb',
          500: '#d1d5db',
          600: '#9ca3af',
          700: '#6b7280',
          800: '#4b5563',
          900: '#374151',
        }
      },
    },
  },
  plugins: [],
} 