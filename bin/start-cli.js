const fs = require("fs");
const search = require("./book-search");
const inquirer = require("./inquirer");
const config = require('./config')
const manageBookListSave = require('./book-save')

const start = async () => {
  try {
    let options = config.OPTIONS
    let searchTerm = await inquirer.getSearch();
    if (searchTerm.search) {
      options.qs.q = searchTerm.search
      let answers = await search.bookSearch(options);
      let bookToSave = await inquirer.createList(answers);
      if(!bookToSave) return;
      if (bookToSave.results !== "CANCEL/DO NOT SAVE A BOOK") {
        manageBookListSave(bookToSave);
      } else console.log("You chose to not save a book, search again!");
    } else console.log("Enter a search term to see a list of books");
  } catch (error) {
    console.log(error);
  }
};



module.exports = start;
