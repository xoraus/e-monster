const fs = require('fs');

function writeEmailsToFile(emails) {
  return new Promise((resolve, reject) => {
    const formattedEmails = emails.join('\n');
    fs.writeFile('emails.txt', formattedEmails, (err) => {
      if (err) {
        reject(err);
      } else {
        console.log('Emails successfully saved to emails.txt');
        resolve();
      }
    });
  });
}

module.exports = {
  writeEmailsToFile
};
