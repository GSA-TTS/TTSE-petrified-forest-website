import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isFederalistBuild = process.env.FEDERALIST_BUILD === 'true';
const baseUrl = process.env.BASEURL || '';

const docsLayoutPath = join(__dirname, 'node_modules', '@gsa-tts', 'svelte-ui-uswds', 'src', 'lib', 'mdsvex', 'layouts', 'DocsLayout.svelte');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],

	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx'],
			layout: {
				docs: docsLayoutPath,
				_: docsLayoutPath,
			},
		}),
	],

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
