const fs = require('fs');

// Task 1: Create directory/folder named: “Students”
fs.mkdir('Students', (err) => {
    if (err) {
        console.log(err)
        return
    }

  console.log('Directory "Students" created successfully.');

// Task 2: In the Students directory, create a file named user.js
fs.writeFile('Students/user.js', '', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File "user.js" created in "Students" directory.');

// Task 3: Update the Students directory to “Names”
fs.rename('Students', 'Names', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Directory "Students" renamed to "Names".');

// Task 4: Add your name as content to the file user.js
const name = 'Michael Abilawon';
fs.appendFile('Names/user.js', name, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Name added to "user.js".');

// Task 5: Update the file and add your age, sex, nationality, phone number, and any other information about yourself
const userInfo = '\n Age: 23\n Sex: Male \n Nationality: Nigerian \n Phone Number: +2349078597124 \n Religion: Christainity';
fs.appendFile('Names/user.js', userInfo, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Additional information added to "user.js".');

// Task 6: Update the file user.js to {your_name}.js eg daniel_adesoji.js
const newName = 'michael_abilawon.js';
fs.rename('Names/user.js', `Names/${newName}`, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(`"user.js" renamed to "${newName}" successfully.`);

// Task 7: Read the contents from {your_name}.js using fs.readFile
fs.readFile(`Names/${newName}`, 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }        
    console.log(`Contents of "${newName}":\n${data}`);

// Task 8: Delete the file {your_name}.js
fs.unlink(`Names/${newName}`, (err) => {
    if (err) {
        console.log(err)
        return
    }        
    console.log(`File "${newName}" deleted successfully.`);

// Task 9: Delete the directory “Names”
fs.rmdir('Names', (err) => {
    if (err) {
        console.log(err)
        return
    }            
    console.log('Directory "Names" deleted successfully.');
                });
              });
            });
          });
        });
      });
    });
  });
});
