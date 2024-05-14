import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            const newUtilities = {
                '.mask-top-to-bottom': {
                    mask: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0))'
                },
                '.bg-gold-hover': {
                    backgroundColor: '#FFD700'

                }
            };

            addUtilities(newUtilities);
        })
    ],
    corePlugins: {
        // preflight: false
    },
    important: '#app',
};
export default config;
