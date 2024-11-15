import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,css}"  
  ],
  theme: {
    fontSize: {
      'xxs': "0.625rem",
      'xs': '0.75rem',
      'sm': "0.875rem",
      'base': "1rem",
      'lg': "1.125rem",
      'xl': "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
    },
    colors: {
      // Configure your color palette here
      'white': '#FFFFFF',
      'black':"#000000",
      'midnight': '#323643',
      'midnight2': '#606470',
      'green': '#50D890',
      'sky': '#93DEFF',
      "ahel-red": '#F5004F',
      "darkBlue": '#4F98CA',
      pink: {
        300: '#ff90c1',
        500: '#ff61a6',
        700: '#e8488a',
      },
      orange:{
        500: '#f97316'
      },
      gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280', // This is gray-500
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      slate: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#121416',
        },
        'dodger-blue': {
          '50': '#F2FCFF', 
          '100': '#E6F9FF', 
          '200': '#BFEEFF', 
          '300': '#99E0FF', 
          '400': '#4DC1FF', 
          '500': '#0096FF', 
          '600': '#007EE6', 
          '700': '#0063BF', 
          '800': '#004799', 
          '900': '#003073', 
          '950': '#001C4A'
        }
    },
    extend: {
      screens: {
        'lg-half': '512px',
        '2xl': '1536px',
        '2xl-half': '768px',
        '3xl': '1920px',
        '3xl-half': '960px',
        '4xl': '2560px'
      },
      maxWidth: {
        'lg-half': '512px',
        '2xl': '1536px',
        '2xl-half': '768px',
        '3xl': '1920px',
        '3xl-half': '960px',
        '4xl': '2560px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 90%)",
      },
    },
  },
  plugins: [],
};

export default config;
