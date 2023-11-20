import keepPreset from "keep-react/src/keep-preset.js";
// const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [keepPreset],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["'Roboto', sans-serif"],
        Poppins: ["'Poppins', sans-serif"],
      },
    },
  },
  plugins: [],
};
