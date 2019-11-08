const fs = require("fs");
const search = require("./book-search");
const inquirer = require("./inquirer");


const start = async () => {
  let searchTerm = await inquirer.getSearch();
  if (searchTerm.search) {
    let answers = await search.bookSearch(searchTerm.search);
    let bookToSave = await inquirer.createList(answers);
    if (bookToSave) {
      if (fs.existsSync("./saved-books.txt")) {
        fs.appendFile("./saved-books.txt", bookToSave.results + "\n", err => {
          if (err) throw err;
          console.log(`The ${bookToSave.results} was added to your book list!`);
        });
      } else {
        fs.writeFile("./saved-books.txt", bookToSave.results, err => {
          if (err) throw new Error(err);
          console.log(
            `The ${bookToSave.results} was added to your new book list file!`
          )

        })
      }

    }
  } else console.log("Enter a search term to see a list of books")

  .catch(err=> console.log(err))

};

module.exports = start