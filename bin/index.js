#!/usr/bin/env node

const yargs = require("yargs");
const start = require("./start-cli")
const fs = require("fs");

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
