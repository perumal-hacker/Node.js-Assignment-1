const fs = require('fs');
	try {
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
console.log('File read completed');
} catch (err) {
console.error(err);
}

console.log('This will be printed after the file is read');
