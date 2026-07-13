import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isFederalistBuild = process.env.FEDERALIST_BUILD === 'true';
const baseUrl = process.env.BASEURL || '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		paths: {
      base: isFederalistBuild && baseUrl ? baseUrl : '',
    },
		adapter: adapter({
			pages: isFederalistBuild ? '_site' : 'build',
			assets: isFederalistBuild ? '_site' : 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
