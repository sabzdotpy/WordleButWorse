import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
	// 	VitePWA({
	// 		registerType: 'autoUpdate',
	// 		strategies: 'injectManifest',
	// 		includeAssets: [
	// 			"/src/Images/favicon-svg.svg",
	// 			"/src/Images/favicon.ico",
	// 			"robots.txt",
	// 			"/src/Images/apple-touch-icon.png",
	// 		],
	// 		manifest: {
	// 			name: "Wordle Clone",
	// 			short_name: "Wordle",
	// 			description: "A clone of the popular online game Wordle.",
	// 			theme_color: "#6fcd67",
	// 			icons: [
	// 				{
	// 					src: "/src/Images/android-chrome-192x192.png",
	// 					sizes: "192x192",
	// 					type: "image/png",
	// 				},
	// 				{
	// 					src: "/src/Images/android-chrome-512x512.png",
	// 					sizes: "512x512",
	// 					type: "image/png",
	// 				},
	// 				{
	// 					src: "/src/Images/android-chrome-512x512.png",
	// 					sizes: "512x512",
	// 					type: "image/png",
	// 					purpose: "any maskable",
	// 				},
	// 			],
	// 		},
	// 		workbox: {
	// 			sourcemap: true,
	// 		},
	// 	}),
	],
	server: {
		// https://vitejs.dev/config/#server-open
		host: true,
	},
});
