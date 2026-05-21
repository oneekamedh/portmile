const fs = require('fs');

let html = fs.readFileSync('/Users/nikketchandwani/Documents/Java/btpl/index.html', 'utf8');

const extractAndReplace = (htmlStr, id, filename) => {
    const regex = new RegExp(`<style id="${id}"\\s*>([\\s\\S]*?)<\\/style>`);
    const match = htmlStr.match(regex);
    if (match) {
        fs.writeFileSync(`/Users/nikketchandwani/Documents/Java/btpl/src/css/${filename}`, match[1].trim() + '\n');
        return htmlStr.replace(regex, `<link rel="stylesheet" href="src/css/${filename}" id="${id}">`);
    }
    return htmlStr;
};

html = extractAndReplace(html, 'light-css', 'light.css');
html = extractAndReplace(html, 'dark-css', 'dark.css');

const genericRegex = /<style>([\s\S]*?)<\/style>/;
const genericMatch = html.match(genericRegex);
if (genericMatch) {
    fs.writeFileSync('/Users/nikketchandwani/Documents/Java/btpl/src/css/styles.css', genericMatch[1].trim() + '\n');
    html = html.replace(genericRegex, `<link rel="stylesheet" href="src/css/styles.css">`);
}

fs.writeFileSync('/Users/nikketchandwani/Documents/Java/btpl/index.html', html);
console.log('Extraction complete.');
