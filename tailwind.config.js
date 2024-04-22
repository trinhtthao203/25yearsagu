/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./pages/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                rounded: "M PLUS Rounded 1c",
                meri: "Merriweather",
                montserrat: "Montserrat",
                oswald: "Oswald",
            },
            colors: {
                elephant: "#243c5a",
                moonMist: "#D9D5C5",
                pelorous: "#32B4B9",
                hippieblue: "#6293B0",
                chathamsblue: "#143C7C",
                darkblue: "#1C242C",
                darkblack: "#131316",
                green01: "#2D5029",
                green02: "#769270",
                green03: "#778A7C",
                green04: "#E0EFE6",
                green05: "#57AE47",
            },
        },
    },
    plugins: [require("tailwindcss-animated")],
};
