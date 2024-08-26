import daisyui from "daisyui";
const themes = require("daisyui/src/theming/themes");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme:{
    extend: {
      colors: {
        primaryColor: "#0067FF",
        yellowColor: "#feb60d",
        purpleColor: "#9711ff",
        irisBlueColor: "#01b5c5",
        blueColor: "#2767FF",
        headingColor: "#181a1e",
        textColor: "#4e545f",
      },
      boxShadow: {
        panelShadow: "rgba(17,12,46,0.15) 0px 48px 100px 0px;",
      }
    }
  },
  // daisyui: {
  //   themes: [
  //     {
  //       light: {
  //         ...themes["light"],
  //         primary: "#FFFFFF", //header-footer
  //         secondary: "#34373f", //content
  //         accent: "#e2e8f0", //page
  //         neutral: "#F9FAFB", //from
  //       },
  //     },
  //     {
  //       dark: {
  //         ...themes["dark"],
  //         primary: "#101b2f", //header-footer
  //         secondary: "#ffffff", //content
  //         accent: "#0b1121", //page
  //         neutral: "#111827", //from
  //       },
  //     },
  //   ],
  // },
  plugins: [daisyui],
};
