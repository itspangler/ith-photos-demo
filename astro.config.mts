import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://itspangler.github.io',
	base: 'ith-photos-demo',
	vite: {
		plugins: [tailwindcss()],
	},
});
