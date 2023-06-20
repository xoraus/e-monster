const axios = require('axios');
const cheerio = require('cheerio');

function scrapeEmails(url) {
  return axios.get(url)
    .then((response) => {
      const emails = extractEmails(response.data);
      return emails;
    });
}

function extractEmails(html) {
  const $ = cheerio.load(html);
  const emails = [];

  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

  $('body').each((index, element) => {
    const text = $(element).text();
    const matches = text.match(emailRegex);
    if (matches) {
      emails.push(...matches);
    }
  });

  return emails;
}

module.exports = {
  scrapeEmails
};
