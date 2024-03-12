/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./src/pages/**/*.{js,jsx,ts,tsx}",
  "./src/components/**/*.{js,jsx,ts,tsx}",
  "./index.html",
];
export const darkMode = "class";
export const theme = {
  container: {
    center: true,
    padding: "1rem",
  },
  colors: {
    current: "currentColor",
    transparent: "transparent",
    white: "#FFFFFF",
    whitesmoke: {
      100: "#f9f9f9",
      200: "#f6f6f6",
    },
    black: "#090E34",
    dark: "#1D2144",
    primary: "#4A6CF7",
    yellow: "#FBB040",
    "body-color": "#959CB1",
    "primary-red": "#d12b2f",
    mistyrose: "#fde2e2",
    "whites-plain": "#fff",
    snow: "#fef9f9",
    "others-white": "#fff",
    "greys-etherium": "#c2c7d6",
    "others-grey3": "#e6e8e6",
    "other-nub": "#F7F9FC",
    "other-blue": "#114FF5",
    text: "#333",
    "other-grey-5": "#F7F9FC",
    "primary-blue": "#3772ff",
    "others-grey": "#667499",
    "light-black": "#2B2A29",
    ghostwhite: "#f5f6fa",
    "others-light-blue": "#f0f4fe",
    royalblue: {
      100: "rgba(55, 114, 255, 0.2)",
      200: "rgba(55, 114, 255, 0.1)",
    },
    gold: {
      100: "rgba(253, 197, 0, 0.03)",
      200: "rgba(253, 197, 0, 0.2)",
    },
    crimson: {
      100: "rgba(209, 43, 47, 0.2)",
      200: "rgba(209, 43, 47, 0.03)",
    },
    "others-green": "#4c956c",
    "primary-yellow": "#fdc500",
    "boxdark-2": "#1A222C",
    bodydark: "#AEB7C0",
  },
  screens: {
    xs: "450px",
    // => @media (min-width: 450px) { ... }
    sm: "575px",
    // => @media (min-width: 576px) { ... }
    md: "768px",
    // => @media (min-width: 768px) { ... }
    lg: "992px",
    // => @media (min-width: 992px) { ... }
    xl: "1200px",
    // => @media (min-width: 1200px) { ... }
    "2xl": "1400px",
    // => @media (min-width: 1400px) { ... }
  },
  extend: {
    boxShadow: {
      signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
      one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
      sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
    },
    fontFamily: {
      "work-sans": "'Work Sans'",
      poppins: "Poppins",
      inter: "Inter",
      lexend: "Lexend_Deca",
    },
    borderRadius: {
      "3xs": "10px",
      "6xs": "7px",
      xl: "20px",
      "8xs": "5px",
      mini: "15px",
      "10xs-4": "2.4px",
      "105xl": "124px",
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      sm: "14px",
      "3xl": "22px",
      "19xl": "19px",
      "5xl": "24px",
      "23xl": "23px",
      "29xl": "48px",
      "21xl": "40px",
      "11xl": "30px",
      xl: "20px",
      "9xl": "28px",
      mini: "15px",
      lg: "18px",
      "15xl": "34px",
      "16xl": "35px",
      "17xl": "36px",
      "45xl": "64px",
      "13xl": "32px",
      "base-4": "15.4px",
      "26xl": "45px",
    },

    spacing: {
      72.5: "18.125rem",
    },
  },
};
export const plugins = [];
