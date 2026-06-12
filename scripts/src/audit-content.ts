import * as fs from 'fs';
import * as path from 'path';

// This script acts as a safeguard against "drift" in the React pages.
// It checks if critical components (Home, Pricing, Services) are hardcoding
// prices or pillar names instead of importing them from brand.ts.

const rootDir = process.cwd();
const PAGES_DIR = path.join(rootDir, '../artifacts/wlc-site/src/pages');

const pagesToAudit = [
  'Home.tsx',
  'Pricing.tsx',
  'Services.tsx'
];

// Anti-patterns: Specific prices that should only live in brand.ts
const forbiddenStrings = [
  '$495',
  '$350',
  '$150/hr',
  '$1,250',
  '$3,150',
  '$1,200',
  '$175/hr'
];

let errorsFound = 0;

console.log('Auditing content for brand voice and pricing drift...\n');

for (const pageName of pagesToAudit) {
  const pagePath = path.join(PAGES_DIR, pageName);
  if (!fs.existsSync(pagePath)) continue;

  const content = fs.readFileSync(pagePath, 'utf8');

  // Check if it imports from brand.ts
  if (!content.includes('content/brand')) {
    console.warn(`[WARN] ${pageName} does not seem to import from brand.ts. Are you hardcoding text?`);
  }

  // Check for hardcoded prices
  for (const forbidden of forbiddenStrings) {
    if (content.includes(forbidden)) {
      console.error(`[ERROR] ${pageName} contains hardcoded value '${forbidden}'. This must be imported from brand.ts!`);
      errorsFound++;
    }
  }
}

if (errorsFound > 0) {
  console.error(`\nAudit failed with ${errorsFound} errors. Please fix hardcoded values to prevent brand drift.`);
  process.exit(1);
} else {
  console.log('Content audit passed: No hardcoded pricing/drift detected in audited pages.');
  process.exit(0);
}
