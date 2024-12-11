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
            lightMedium: "#d6d3d1",
            medium: "#78716c",
            darkMedium: "#44403c",
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
              lightMedium: "#44403c",
              medium: "#78716c",
              darkMedium: "#d6d3d1",
              dark: "#f5f5f4",
            },
          },
        },
      ],
    }),
  ],
};
