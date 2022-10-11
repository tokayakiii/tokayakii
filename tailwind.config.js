/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                black: "#0E0E1E",
                black2: "#313244",
                blue: "#89b4fa",
                yellow: "#eecda3",
                pink: "#ef629f"
            },
        },
    },
    plugins: [],
};
