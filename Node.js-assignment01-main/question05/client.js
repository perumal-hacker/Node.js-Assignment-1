const net = require('net');

const client = net.createConnection({ port: 8080 }, () => {
  console.log('Connected to server');
  client.write('Hello, server!');
});

client.on('data', (data) => {
  console.log('Server says:', data.toString());
  client.end();
});

client.on('end', () => {
  console.log('Disconnected from server');
});