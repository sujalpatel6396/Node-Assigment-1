const fs = require('fs');
const unzipper = require('unzipper');

const zipFilePath = 'myfolder.zip';   
const outputFolder = 'extracted_files'; 

fs.createReadStream(zipFilePath)
  .pipe(unzipper.Extract({ path: outputFolder }))
  .on('close', () => {
    console.log(` Extraction complete! Files are in: ${outputFolder}`);
  })
  .on('error', (err) => {
    console.error(' Error during extraction:', err.message);
  });
