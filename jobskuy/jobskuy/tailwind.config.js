/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx", "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#312651",
        secondary: "#444262",
        tertiary: "#FF7754",
        gray: "#83829A",
        gray2: "#C1C0C8",
        white: "#F3F4F8",
        lightWhite: "#FAFAFC",
      },
      fontFamily: {
        regular: "DMSansRegular",
        medium: "DMSansMedium",
        bold: "DMSansBold",
      },
      fontSize: {
        xSmall: 10,
        small: 12,
        medium: 16,
        large: 20,
        xLarge: 24,
        xxLarge: 32,
      },
    },
  },
  plugins: [],
}