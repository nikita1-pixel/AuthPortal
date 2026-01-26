// tailwind.config.ts
import type { Config } from "tailwindcss";


const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Optional: You can extend the motion specific theme here
            motionScale: {
                "200": "200%",
            },
            motionTimingFunction: {
                custom: "cubic-bezier(0.4, 0, 0.2, 1)",
            },
        },
    },
};

export default config;
