// tailwind.config.ts
import type { Config } from "tailwindcss";


const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    // tailwind.config.ts
    theme: {
        extend: {
            animation: {
                gradient: 'gradient 15s ease infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                },
            },
        },
    }
};

export default config;
