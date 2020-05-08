const axios = require('axios');
const { JSDOM } = require('jsdom');

(async function main() {
    const page = await axios.get('https://windupwatchshop.com/collections/watches');
    const { window } = new JSDOM(page.data);
    
    console.log(window.document.getElementsByClassName('collection__item__link')[0].href);

})();