const path = require('path');
const os = require('os');

// Task 1: Print out the current working directory
console.log('Current Working Directory:', process.cwd());

// Task 2: Print out the separator of a given file path
const filePath = 'C:\Users\MY PC\Desktop\Michabi\Altschool\NodeJS_assignement1\file1.js';
console.log('Separator of the File Path:', path.sep);

// Task 3: Print out the extension name of a file path
const fileExtension = path.extname(filePath);
console.log('Extension Name of the File Path:', fileExtension);

// Task 4: Print out the process id of the current running process
console.log('Process ID (PID):', process.pid);

// Task 5: Print out the user information of the os
const userInfo = os.userInfo();
console.log('User Information:');
console.log('Username:', userInfo.username);
console.log('Home Directory:', userInfo.homedir);

// Task 6: Print out the platform of an operating system
console.log('Operating System Platform:', os.platform());