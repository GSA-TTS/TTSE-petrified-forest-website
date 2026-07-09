import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const outputDir = process.env.FEDERALIST_BUILD === 'true' ? '_site' : 'build';
const filePath = join(outputDir, '404.html');

console.log('Fixing 404.html paths...');

try {
	let content = readFileSync(filePath, 'utf-8');

	// Replace absolute paths with relative paths in attributes
	content = content.replace(/href="\//g, 'href="./');
	content = content.replace(/src="\//g, 'src="./');

	// Replace absolute paths in JavaScript import() statements
	content = content.replace(/import\("\//g, 'import("./');

	writeFileSync(filePath, content);
	console.log(`✓ Fixed paths in ${filePath}`);
} catch (error) {
	console.error(`✗ Error processing ${filePath}:`, error.message);
	process.exit(1);
}

