const fs = require('fs');
const path = require('path');

const sentences = [
 "La perfection pixel par pixel, une div à la fois.",
  "Quand je ne code pas, je cherche le bouton 'inspecter' dans la vraie vie.",
  "Ma vie est une animation constante entre les rêves et le DOM.",
];

const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
const formattedDate = new Date().toDateString();

let readmeContent = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8');

const insertBetweenTags = (content, startTag, endTag, newValue) => {
  const regExp = new RegExp(`(${startTag})([\\s\\S]*?)(${endTag})`, 'gm');
  return content.replace(regExp, `$1\n${newValue}\n$3`);
};

readmeContent = insertBetweenTags(readmeContent, '<!--START SENTENCE-->', '<!--END SENTENCE-->', randomSentence);
readmeContent = insertBetweenTags(readmeContent, '<!--START DATE-->', '<!--END DATE-->', `Last updated on: ${formattedDate}`);

fs.writeFileSync(path.join(__dirname, 'README.md'), readmeContent, 'utf8');
