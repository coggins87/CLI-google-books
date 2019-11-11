const expect = require("chai").expect;
const supertest = require("supertest");
const app = require("../bin/book-search");
const search = require("../bin/book-search.js");
const inquirer = require("inquirer");
const inquirerGen = require("../bin/inquirer");
const stdin = require("mock-stdin").stdin()
const config = require("../bin/config");
const manageBookListSave = require("../bin/start-cli");
const fs = require("fs");

describe("Book Search", function() {
  let options = config.OPTIONS;
  beforeEach(() => {
    options = config.OPTIONS;
  });
  afterEach(() => {
    options = config.OPTIONS;
  });
  it("takes a user query and returns five books when a query is given and answers are found", async () => {
    let effectiveSearchTerm = "test";
    options.qs.q = effectiveSearchTerm;
    let answer = await search.bookSearch(options);
    expect(answer).to.be.an("array");
    expect(answer).to.have.length(5);
  });

  it("if no search results, returns message", async () => {
    let ineffectiveSearchTerm =
      "search the one who got away banana lambda xys osnr iuhoiheoihgrfw";
    options.qs.q = ineffectiveSearchTerm;
    let answer = await search.bookSearch(options);
    expect(answer).to.be.a("string");
    expect(answer).to.eql("Could not find any results! Try another search");
  });
  it("responds with an error if the user does not enter a search term", async () => {
    let blankSearchTerm = "";
    options.qs.q = blankSearchTerm;
    let answer = await search.bookSearch(options);
    expect(answer).to.be.an("string");
    expect(answer).to.eql("Search term is required!");
  });
  it("responds with an error if fetch error", async () => {
    options = {
      uri: `https://www.badURI.com/books/v1/volumes`,
      qs: {
        key: "AIzaSyC7etpGfup0-A3HssAIzYe_mlljnOo4iPE",
        maxResults: 5,
        printType: "books",
        q: "test"
      }
    };
    let answer = await search.bookSearch(options);
    expect(answer).to.be.an("string");
    expect(answer).to.eql(
      "There was an error searching for books, try again later!"
    );
  });
});

describe("Inquirer", function() {
  let backup;
  it("prompts with search when user enters search command", async () => {
    let mockInquirer = inquirer.prompt([{name: 'test', message: 'Search for a book'}])
    let question = mockInquirer.ui.activePrompt.opt.message;
    expect(question).to.be.a("string");
    expect(question).to.eql("Search for a book")
  });
  afterEach(() => {
    mockInquirer = backup;
  });
});

describe("Save book", function() {
  it("when book string is given, successfully saves book to txt", async () => {
    let mockBook = "save this string";
    let response = await manageBookListSave(mockBook);
    console.log(response);
    expect(response).to.be.a("string");
    expect(response).to.eql(`${mockBook} was added to your book list!`);
  });
});
