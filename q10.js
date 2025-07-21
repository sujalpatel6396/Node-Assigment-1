// Accessing global variables and objects in Node.js

// __dirname: directory of the current module
console.log('__dirname:', __dirname);

// __filename: full path of the current module file
console.log('__filename:', __filename);

// process: info about the current Node.js process
console.log('process.platform:', process.platform);
console.log('process.version:', process.version);
console.log('process.pid:', process.pid);

// global: the global object itself
console.log('global object:', global === globalThis); // true

// setTimeout and clearTimeout
const timeoutId = setTimeout(() => {
  console.log('This runs after 1 second');
}, 1000);

// clear the timeout before it runs (uncomment to test)
// clearTimeout(timeoutId);

// setInterval and clearInterval
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log('Interval running:', count);
  if (count === 3) {
    clearInterval(intervalId);
    console.log('Interval cleared after 3 runs');
  }
}, 500);

// Buffer: used to handle binary data
const buf = Buffer.from('Hello Node.js');
console.log('Buffer contents:', buf.toString());

// console: global console object for logging
console.log('This is a log message from console global');
