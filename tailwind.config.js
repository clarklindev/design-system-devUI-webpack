/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  // use theme to customize utility classes
  theme: {
    extend: {
      // CUSTOMIZE: reference css variables
      textColor:{
        //css: "text-swag"
        swag: {
          DEFAULT: 'var(--color-text-base)',
          // muted:
          // inverted:
        }
      },

      backgroundColor:{
        //css: "bg-swag"
        swag:{
          DEFAULT: 'var(--color-background)',
        }
      },

      borderColor:{
        //css: "border-swag"
        swag:{
          DEFAULT: 'var(--color-border)'
        }
      }

    },
  },
  plugins: [],
}