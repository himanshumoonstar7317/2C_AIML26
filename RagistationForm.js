const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const formData = {};

console.log('--- REGISTRATION FORM ---');

// Step-by-step inputs
rl.question('Enter Name: ', (name) => {
  formData.name = name;

  rl.question('Enter Email: ', (email) => {
    formData.email = email;

    rl.question('Enter Password: ', (password) => {
      formData.password = password;

      console.log('\n--- REGISTRATION SUCCESSFUL ---');
      console.log('Submitted Data:', formData);

      rl.close(); 
    });
  });
});