import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'ITH',
	favicon: 'favicon.ico',
	owner: 'Ian Thompson-Heinz',
	profileImage: 'profile.webp',
	socialLinks: [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/ith_photos/',
			icon: Instagram,
		} as SocialLink,
	],
};
