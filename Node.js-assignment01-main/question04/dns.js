const dns = require('dns');

dns.lookup('example.com', (err, address, family) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log(`IP Address: ${address}`);
    console.log(`IP Family: ${family}`);
  }
});
