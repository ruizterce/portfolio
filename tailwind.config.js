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
            primary: "#3490dc",
            secondary: "#ffed4a",
            accent: "#38c172",
            light: "#f5f5f4",
            lightMild: "#e7e5e4",
            lightMedium: "#a8a29e",
            medium: "#78716c",
            darkMedium: "#44403c",
            darkMild: "#292524",
            dark: "#1c1917",
          },
        },
      },
      themes: [
        {
          name: "darkTheme",
          selectors: [".dark-mode"],
          extend: {
            colors: {
              primary: "red",
              secondary: "red",
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
