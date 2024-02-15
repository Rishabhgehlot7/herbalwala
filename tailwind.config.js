module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        red: {
          400: "#ea5a47",
          700: "#d22f27",
          800: "#d11e1e",
          "800_7f": "#d11e1e7f",
          A700: "#eb001b",
        },
        light_green: { A700: "#4af451" },
        deep_purple: { 400: "#8967aa" },
        blue: { A200: "#5b8af0", A200_01: "#3395ff" },
        green: {
          600: "#529054",
          700: "#3b823e",
          800: "#436e35",
          "700_19": "#3b823e19",
          "700_21": "#3b823e21",
        },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_8c": "#0000008c",
          "900_21": "#00000021",
          "900_72": "#00000072",
        },
        yellow: {
          500: "#fcea2b",
          800: "#f79e1b",
          900: "#f37a21",
          "800_01": "#f1b31c",
        },
        purple: { 900: "#3e005b" },
        blue_gray: {
          100: "#d9d9d9",
          800: "#3e4958",
          900: "#343434",
          "900_02": "#333333",
          "900_01": "#0c2651",
          "900_00": "#34343400",
          "900_cc": "#343434cc",
          "100_01": "#d3d3d3",
          "900_66": "#34343466",
          "900_7f": "#3434347f",
          "900_99": "#34343499",
        },
        gray: {
          100: "#f0f5f0",
          300: "#e2e4e5",
          400: "#c4c4c4",
          700: "#506b52",
          800: "#4c4c4c",
          900: "#01370c",
          "700_7f": "#506b527f",
          "700_01": "#666666",
          "700_21": "#506b5221",
        },
        white: { A700: "#ffffff" },
        indigo: { 800: "#28387d", 900: "#1a1f71" },
        amber: { A400: "#ffc700" },
        light_blue: { 800: "#006fcf" },
        teal: { 800: "#088c45" },
        orange: { A700: "#ff5f00" },
      },
      boxShadow: {
        bs2: "0px 8px  23px 0px #3b823e21",
        bs1: "0px 1px  8px 0px #00000021",
        bs3: "6px 7px  4px 0px #0000008c",
        bs: "0px 8px  23px 0px #506b5221",
      },
      fontFamily: {
        opensans: "Open Sans",
        playfairdisplay: "Playfair Display",
        montserrat: "Montserrat",
        unna: "Unna",
      },
      backgroundImage: {
        gradient: "linear-gradient(0deg ,#00000072,#34343400)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};