/** @type {import('tailwindcss').Config} */
import themer from "tailwindcss-themer";

export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {},
  plugins: [
    themer({
      defaultTheme: {
        extend: {
          colors: {
            primary: "#f8958b",
            primaryContrast: "#3d344d",
            secondary: "#8c95f2",
            accent: "#38c172",
            light: "#f5f5f4",
            lightMild: "#e7e5e4",
            lightMedium: "#a8a29e",
            medium: "#78716c",
            darkMedium: "#44403c",
            darkMild: "#292524",
            dark: "#1c1917",
          },
          fontFamily: {
            lato: ["Lato", "sans-serif"],
            playfair: ["Playfair Display", "serif"],
            nunito: ["Nunito", "sans-serif"],
            nunitoSans: ["Nunito Sans", "sans-serif"],
          },
        },
      },
      themes: [
        {
          name: "darkTheme",
          selectors: [".dark-mode"],
          extend: {
            colors: {
              primary: "#f8958b",
              primaryContrast: "#3d344d",
              secondary: "#34cba5",
              accent: "#14b8a6",
              light: "#1c1917",
              lightMild: "#292524",
              lightMedium: "#44403c",
              medium: "#78716c",
              darkMedium: "#a8a29e",
              darkMild: "#e7e5e4",
              dark: "#f5f5f4",
            },
          },
        },
      ],
    }),
  ],
};
