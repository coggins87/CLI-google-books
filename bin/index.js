#!/usr/bin/env node

const inquirer = require("./inquirer");
const fs = require("fs");
const yargs = require("yargs");
const search = require("./book-search");

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
          if (err) throw err;
          console.log(
            `The ${bookToSave.results} was added to your new book list file!`
          );
        });
       
      }
    }
  } else console.log("Enter a search term to see a list of books");
};

options = yargs
  .usage("$0 <cmd> [args]")
  .help()
  .command("view", "Look at your book list", function() {
    fs.readFile("./saved-books.txt", "UTF-8", (err, fd) => {
      if (err) throw err;
      else console.log(fd.toString());
    });  })
  .command("search", "Search for a book", function() {
    start();
  }).argv;
