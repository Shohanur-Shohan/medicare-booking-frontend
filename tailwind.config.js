// import daisyui from "daisyui";
// const themes = require("daisyui/src/theming/themes");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme:{
    extend: {
      colors: {
        buttonBgColor: "0067FF",
        yellowColor: "feb60d",
        purpleColor: "0067FF",
        irisBlueColor: "0067FF",
        headingColor: "0067FF",
        textColor: "0067FF",
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
