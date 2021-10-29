const isDev = process.env.NODE_ENV !== "production";
module.exports = {
  purge: {
    enabled: !isDev,
    content: [
      "./pages/*.js",
      "./pages/**/*.js",
      "./components/*.js",
      "./components/**/*.js",
    ],
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        orange: "0px 20px 20px -15px rgba(245,56,56,0.81) ",
        "orange-md": "0px 20px 40px -15px rgba(245,56,56,0.81) ",
        none: "none",
      },
      colors: {
        transparent: "transparent",
        black: {
          500: "#4F5665",
          600: "#0B132A",
        },
        orange: {
          100: "#FFECEC",
          500: "#F53855",
        },
        green: {
          500: "#2FAB73",
        },
        white: {
          300: "#F8F8F8",
          500: "#fff",
        },
        gray: {
          100: "#EEEFF2",
          400: "#AFB5C0",
          500: "#DDDDDD",
        },
        notion: {
          deafult: "#37352F",
          gray: "#9B9A97",
          brown: "#64473A",
          orange: "#D9730D",
          yellow: "#DFAB01",
          green: "#0F7B6C",
          blue: "#0B6E99",
          purple: "#6940A5",
          pink: "#AD1A72",
          red: "#E03E3E",
          deafult_bg: "#FFFFFF",
          gray_bg: "#EBECED",
          brown_bg: "#E9E5E3",
          orange_bg: "#FAEBDD",
          yellow_bg: "#FBF3DB",
          green_bg: "#DDEDEA",
          blue_bg: "#DDEBF1",
          purple_bg: "#EAE4F2",
          pink_bg: "#F4DFEB",
          red_bg: "#FBE4E4",
        },
      },
      maxWidth: {
        notion: "var(--notion-max-width)",
      },
      minWidth: {
        16: "4rem",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
