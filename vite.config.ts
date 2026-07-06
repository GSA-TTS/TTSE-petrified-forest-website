import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0',
		port: 5173,
		strictPort: true,
		watch: {
			usePolling: true
		}
	},
	resolve: {
		alias: {
			'@uswds/uswds/dist/css/uswds.min.css': '@uswds/uswds/dist/css/uswds.min.css'
		}
	},
	optimizeDeps: {
		include: ['@uswds/uswds']
	}
});
