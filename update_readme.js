const fs = require('fs');
const date = new Date();

fs.appendFileSync('README.md', `\nLast updated: ${date}`);
