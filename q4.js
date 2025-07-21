const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

// Folder to zip
const folderToZip = 'myFolder';  // change this to your folder name
const outputZipPath = `${folderToZip}.zip`;

// Create a file to stream archive data to.
const output = fs.createWriteStream(outputZipPath);
const archive = archiver('zip', {
  zlib: { level: 9 } // Best compression
});

// Listen for all archive data to be written
output.on('close', () => {
  console.log(` Zip created: ${outputZipPath} (${archive.pointer()} total bytes)`);
});

// Catch warnings and errors
archive.on('warning', err => {
  if (err.code === 'ENOENT') {
    console.warn('Warning:', err.message);
  } else {
    throw err;
  }
});
archive.on('error', err => {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Append files from the folder
archive.directory(folderToZip, false);

// Finalize the archive
archive.finalize();
