const readline = require('readline');
const userData = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  console.log(`Received: ${input}`);
  if (input === 'b'){
    process.stdout.write('\x07'); 
  } else if (input >=1 && input <=9){
    setTimeout(() => {
      process.stdout.write('\x07'); 
    }, 1000*input);
  }
});

rl.on('SIGINT', () => {
  console.log("Adios!")
  rl.close()
});