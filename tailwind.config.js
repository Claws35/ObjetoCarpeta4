export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Agrega tu fuente personalizada
        neworder: ['"new-order"', "sans-serif"],
      },
    },
  },
  plugins: [
    // ...
  ],
};
