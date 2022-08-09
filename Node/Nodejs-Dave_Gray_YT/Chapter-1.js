// Node Js Different from Vanilla JS

// 1) Node runs on a server - not in a browser
// 2) The console is the terminal window
// 3) global object instead of window object
// 4) Has CommonJS modules instead of ES6 modules
// 5) Has common Core modules that we will explore
// 6) Missing some JS APIs like fetch

const os = require('os')
const path = require('path')
const math = require('./math_util_module')

console.log(os.type()) // OS name
console.log(os.platform()); // OS platform
console.log(os.arch());  // CPU Architecture
console.log(__dirname); // full dir path
console.log(path.dirname(__filename));
console.log(__filename); // name of current file with complete path
console.log(os.homedir()); // current user's home dir
console.log('-------')
console.log(path.basename(__filename)); // Last portion of a path
console.log(path.extname(__filename));
console.log(path.parse(__filename));//Returns an object from a path string

console.log('--Math---');

const { add } = require('./math_util_module')

console.log(math.add(2, 3));
console.log(add(2, 1));