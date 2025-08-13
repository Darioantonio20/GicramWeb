/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gicram: {
          primary: '#FF6B35',      // Red-orange (GI letters)
          secondary: '#8B2635',    // Maroon/deep reddish-brown (CRAM letters)
          tertiary: '#E8E8E8',    // Light gray/off-white (subtitle)
          dark: '#1A1A1A',        // Black background
          'primary-light': '#FF8A65', // Lighter version of primary
          'secondary-light': '#A05252', // Lighter version of secondary
          'tertiary-dark': '#B8B8B8',  // Darker version of tertiary
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}

