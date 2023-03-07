const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{jsx,ts,tsx}': [buildEslintCommand, 'prettier --write'],
  '*.{json,md,html}': ['prettier --write'],
};
