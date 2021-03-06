const inquirer = require("inquirer");

module.exports = {
  getSearch: () => {
    const question = [
      {
        name: "search",
        type: "input",
        message: "Search for a book",
        validate: this.validateAnswer
      }
    ];
    return inquirer.prompt(question);
  },
  createList: answers => {
    if (!answers) "You need to search for books first";
    else if (typeof answers == 'string') return;
    else {
      let choice = [];
      if (answers) {
        answers.forEach(answer => choice.push(answer));
        choice.push('CANCEL/DO NOT SAVE A BOOK')
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
  },
  validateAnswer : async (value) => {
    console.log(inquirer.ui.activePrompt)

    (value.length > 0) && (typeof value == 'string')
      ? true
      : console.log("Please enter a search term!");
  }
};


