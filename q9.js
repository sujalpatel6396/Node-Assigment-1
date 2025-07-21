const fs = require('fs');
const path = './example.txt';

// 1. Write data to a file
fs.writeFile(path, 'Hello, this is a test file!', (err) => {
  if (err) {
    return console.error('Error writing file:', err);
  }
  console.log('File written successfully.');

  // 2. Read the file content
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      return console.error('Error reading file:', err);
    }
    console.log('File content:', data);

    // 3. Get file stats
    fs.stat(path, (err, stats) => {
      if (err) {
        return console.error('Error getting file stats:', err);
      }
      console.log('File stats:', stats);

      // 4. Rename the file
      const newPath = './renamed_example.txt';
      fs.rename(path, newPath, (err) => {
        if (err) {
          return console.error('Error renaming file:', err);
        }
        console.log('File renamed successfully.');

        // 5. Delete the renamed file
        fs.unlink(newPath, (err) => {
          if (err) {
            return console.error('Error deleting file:', err);
          }
          console.log('File deleted successfully.');
        });
      });
    });
  });
});
