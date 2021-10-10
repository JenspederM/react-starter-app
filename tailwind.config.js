module.exports = {
  purge: false,
  //    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "green-new": "#00ca8c",
        "gray-bg": "#f5f7f9",
        "gray-hover": "#00000003",
        "gray-50": "#f8f8f8",
      },
      boxShadow: {
        lg: "0px 0px 12px 1px rgba(87, 87, 87, 0.2)",
        active: "0px 0px 12px 1px rgba(0, 202, 140, 0.2)",
      },
      width: {
        "1/24": "4.166666%",
        "1/8": "12.5%",
      },
      spacing: {
        14: "3.5rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        128: "32rem",
      },
      minHeight: {
        64: "16rem",
      },
      maxHeight: {
        "1/2": "50%",
        "50vh": "50vh",
      },
    },
  },
  variants: {},
  plugins: [],
};
