#!/usr/bin/env node

const yargs = require("yargs");
const start = require("./start-cli");
const fs = require("fs");

options = yargs
  .usage("$0 <cmd> [args]")
  .help()
  .command("view", "Look at your book list", function() {
    if (fs.existsSync("./saved-books.txt")) {
      fs.readFile("./saved-books.txt", "UTF-8", (err, fd) => {
        if (err) console.log(err);
        else console.log(fd.toString());
      });
    } else console.error("Sorry, you do not have a book list yet.\nSearch books to add them to your list with book-search search");
  })
  .command("search", "Search for a book", function() {
    start();
  }).argv;
