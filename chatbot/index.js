// index.js

const readline = require('readline');
const chatbot = require('./chatbot');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'You: '
});

console.log("Welcome to Library Chatbot!");
console.log("Type your question. Type 'bye' to exit.\n");

rl.prompt();

rl.on('line', (line) => {
  const input = line.trim();
  const reply = chatbot.getResponse(input);
  console.log('Bot:', reply);

  if (input.toLowerCase().includes('bye')) {
    rl.close();
  } else {
    rl.prompt();
  }
});
