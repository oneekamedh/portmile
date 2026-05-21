const fs = require('fs');
const html = fs.readFileSync('/Users/nikketchandwani/Documents/Java/btpl/index.html', 'utf8');
const startIndex = html.indexOf('<div id="dark-content"');
let openDivs = 1;
let pos = startIndex + 1; // Start searching after the initial <div

while (pos < html.length) {
  const nextOpen = html.indexOf('<div', pos);
  const nextClose = html.indexOf('</div', pos);
  
  if (nextClose === -1) break;
  
  if (nextOpen !== -1 && nextOpen < nextClose) {
    openDivs++;
    pos = nextOpen + 1;
  } else {
    openDivs--;
    pos = nextClose + 1;
    if (openDivs === 0) {
      console.log('dark-content closes at line:', html.substring(0, nextClose).split('\n').length);
      break;
    }
  }
}
