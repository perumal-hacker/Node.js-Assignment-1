const repl = require('repl');
repl.start({
  prompt: 'Enter a number: ',
  eval: (cmd, context, filename, callback) => {
    const number = parseInt(cmd.trim(), 10);
    if (isNaN(number)) {
      callback(null, 'Please enter a valid number');
    } else {
      if (number % 2 === 0) {
        callback(null, ${number} is even);
      } else {
        callback(null, ${number} is odd);
      }
    }
  }
});