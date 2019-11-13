
# Google Book Search in the CLI

Not familiar with what 'CLI' is? Check out [this link](https://www.vikingcodeschool.com/web-development-basics/a-command-line-crash-course) for some info about what the command line interface (CLI) is, and how to use it.

## This project uses

* Node.js
  *You will need Node.js installed to run this app! Visit [the official Node.js site to learn more and install](https://nodejs.org/en/)
* request-promise for API call to Google Books
* inquirer.js for prompts
* yargs for commands

To run this app, type `run npm install -g` in the command line to install.
 
 You will then be able to utilize the `book-search` commands.

### To search for a book

1)`book-search search`
2)follow prompts

### To save a book

1)after entering search, select the book from the list using your up and down arrow keys and hit `enter`
2)you may also select the 'CANCEL' option if you do not want to save a book.

### To look at saved books

Type `book-search view` into your command line and hit `enter`.

### To view commands

Type `book-search help` into your command line and hit `enter`

### To run tests

This program uses Mocha for testing. Run `npm test` to run the tests.
