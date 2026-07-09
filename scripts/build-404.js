import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const outputDir = process.env.FEDERALIST_BUILD === 'true' ? '_site' : 'build';
const filePath = join(outputDir, '404.html');
const baseUrl = process.env.BASEURL || '';

console.log('Fixing 404.html paths...');
console.log(`Using BASEURL: "${baseUrl}"`);

try {
	let content = readFileSync(filePath, 'utf-8');

	// Replace absolute paths with BASEURL-prefixed paths in attributes
	content = content.replace(/href="\//g, `href="${baseUrl}/`);
	content = content.replace(/src="\//g, `src="${baseUrl}/`);

	// Replace absolute paths in JavaScript import() statements
	content = content.replace(/import\("\//g, `import("${baseUrl}/`);

	writeFileSync(filePath, content);
	console.log(`✓ Fixed paths in ${filePath}`);
} catch (error) {
	console.error(`✗ Error processing ${filePath}:`, error.message);
	process.exit(1);
}

