// Write file system module with sample coding
const fs = require('fs');
fs.writeFile('sample.txt', 'Hello, Node.js!', (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File written successfully');
    fs.readFile('sample.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        console.log('File contents:', data);
      }
    });
  }
});