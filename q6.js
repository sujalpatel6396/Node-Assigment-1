const fs = require('fs');
const util = require('util');

// Promisify fs.unlink
const unlinkAsync = util.promisify(fs.unlink);

// Function to delete file using async/await
async function deleteFile(filePath) {
  try {
    await unlinkAsync(filePath);
    console.log(` File deleted: ${filePath}`);
  } catch (err) {
    console.error(` Error deleting file: ${err.message}`);
  }
}

// Example usage
deleteFile('delete-me.txt');
