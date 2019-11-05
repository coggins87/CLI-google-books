const inquirer = require("inquirer");

module.exports = {
  getSearch: () => {
    const question = [
      {
        name: "search",
        type: "input",
        message: "Search for a book"
        /*    validate: function (value){
        consoe.log(value)
        (value.length && typeof value === string) ? true : 'Please enter a search term!'
      } */
      }
    ];
    return inquirer.prompt(question);
  },
  createList: answers => {
    if (!answers) "You need to search for books first";
    else {
      let choice = [];
      if (answers) {
        answers.forEach(answer => choice.push(answer));
      }

      const options = [
        {
          name: "results",
          type: "list",
          choices: choice,
          message: "Choose a book to add to your list"
        }
      ];
      return inquirer.prompt(options);
    }
  }
};