const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

const darkCoverageRegex = /<!-- COVERAGE -->\s*<div class="section-full" id="dark-coverage"[\s\S]*?<\/svg>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>/;
const darkMatch = content.match(darkCoverageRegex);

if (darkMatch) {
  let lightCoverageContent = darkMatch[0]
    .replace('<div class="section-full" id="dark-coverage" style="background: var(--navy2);">\n      <section style="padding: 100px 0; max-width: 1300px; margin: 0 auto;">', '<section class="off-section" id="light-coverage">\n      <div class="inner">')
    .replace('</section>\n    </div>', '</div>\n    </section>')
    .replace(/section-label/g, 'sec-label')
    .replace('id="dark-coverage"', 'id="light-coverage"');

  const lightTargetRegex = /<!-- COVERAGE -->/;
  // Replace the first <!-- COVERAGE --> which is in the light mode
  const newContent = content.replace(lightTargetRegex, lightCoverageContent);
  fs.writeFileSync('index.html', newContent);
  console.log('Successfully synced Coverage to light mode.');
} else {
  console.log('Could not find dark coverage block.');
}
