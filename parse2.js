const fs = require('fs');
const html = fs.readFileSync('/Users/nikketchandwani/Documents/Java/btpl/index.html', 'utf8');
let openDivs = 0;
let pos = 0;
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
  }
}
console.log('Final openDivs count:', openDivs);
