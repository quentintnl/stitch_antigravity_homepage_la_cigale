/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./index.html",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#B4975A",
                secondary: "#1A365D",
                background: {
                    light: "#FFFFFF",
                    dark: "#0F172A",
                },
                slate: {
                    600: "#475569",
                    800: "#1E293B",
                    100: "#F1F5F9",
                },
            },
            fontFamily: {
                display: ["Cormorant Garamond", "serif"],
                body: ["Montserrat", "sans-serif"],
            },
            fontSize: {
                '7xl': ['4.5rem', { lineHeight: '1' }], // 72px
                '5xl': ['3rem', { lineHeight: '1' }],   // 48px
                '3xl': ['1.875rem', { lineHeight: '1.25' }], // 30px
            },
        },
    },
    plugins: [],
}
