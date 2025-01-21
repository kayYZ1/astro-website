import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./src/**/*.{astro,html,md,mdx,ts}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
				serif: ["Lora", ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};