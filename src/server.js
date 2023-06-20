const express = require('express');
const scraper = require('./scraper');
const fileWriter = require('./fileWriter');

const app = express();
const port = 3000;

app.get('/scrape-emails', (req, res) => {
  const url = req.query.url;

  scraper.scrapeEmails(url)
    .then((emails) => {
      fileWriter.writeEmailsToFile(emails);
      res.send('Emails scraped and saved!');
    })
    .catch((error) => {
      console.error('Error scraping emails:', error);
      res.status(500).send('Error scraping emails. Please check the URL and try again.');
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
