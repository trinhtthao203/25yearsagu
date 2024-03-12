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
            },
            colors: {
                elephant: "#243c5a",
                moonMist: "#D9D5C5",
                pelorous: "#32B4B9",
                hippieblue: "#6293B0",
                chathamsblue: "#143C7C",
                darkblue: "#1C242C",
            },
        },
    },
    plugins: [require("tailwindcss-animated")],
};
