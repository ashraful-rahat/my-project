/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#6549cc",
        
"secondary": "#fcfcb0",
        
"accent": "#f7c58f",
        
"neutral": "#3D2442",
        
"base-100": "#FCFCFD",
        
"info": "#87CBF8",
        
"success": "#33E692",
        
"warning": "#F3A444",
        
"error": "#F4578C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

