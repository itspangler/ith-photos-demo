import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

console.log(process.env.NODE_ENV)

export default defineConfig({
	site: 'https://localhost:4321',
	base: '.',
	image: {
		service: {
			entrypoint: process.env.NODE_ENV === 'production'
				? 'astro/assets/services/sharp'
				: 'astro/assets/services/noop',
		},
	},
	vite: {
		plugins: [tailwindcss()],
		server: {
			watch: {
				ignored: ['**/src/gallery/**'],
			},
		},
	},
});