/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            body: ["Montserrat", "sans-serif"],
            display: ["Libre Baskerville", "serif"],
        },
        screens: {
            medium: { max: 850 },
            smallMedium: { max: 600 },
            small: { max: 400 },
        },
        colors: {
            white: "rgb(255, 255, 255)",
            dark: "rgb(51, 51, 51)",
            light: "rgb(238, 238, 238)",
            purple: {
                lightest: "hsl(263.4, 77.2%, 93.2%)",
                light: "rgb(152, 99, 234)",
                DEFAULT: "rgb(142, 84, 233)",
                dark: "rgb(124, 77, 197)",
                darker: "rgb(97, 68, 142)",
            },
        },
    },
    plugins: [],
};
