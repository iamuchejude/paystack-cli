const { prompt } = require('inquirer');
const questions = require('./questions');
const service = require('./service');

console.log('\nWelcome to paystack CLI\n');

prompt(questions)
  .then(answers => {
    return service(answers);
  })
  .catch(error => console.log(error));
