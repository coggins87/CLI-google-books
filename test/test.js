const expect = require("chai").expect;
const supertest = require("supertest");
const app = require("../bin/book-search");
const search = require("../bin/book-search.js");
const inquirer = require("inquirer");
const inquirerGen = require("../bin/inquirer");
const stdin = require('mock-stdin')

describe("Book Search", function() {
  it("takes a user query and returns five books when a query is given and answers are found", async () => {
    let effectiveSearchTerm = "test";
    let answer = await search.bookSearch(effectiveSearchTerm);
    expect(answer).to.be.an("array");
    expect(answer).to.have.length(5);
  });
  it("if no search results, returns message", async () => {
    let ineffectiveSearchTerm =
      "search the one who got away banana lambda xys osnr iuhoiheoihgrfw";
    let answer = await search.bookSearch(ineffectiveSearchTerm);
    expect(answer).to.be.a("string");
    expect(answer).to.eql("Could not find any results! Try another search");
  });
  it("responds with an error if the user does not enter a search term", async () => {
    let blankSearchTerm = "";
    let answer = await search.bookSearch(blankSearchTerm);
    expect(answer).to.be.an("string");
    expect(answer).to.eql("Search term is required!");
  });
  it('responds with an error if fetch error', ()=>{
    
    let answer = await search.bookSearch(effectiveSearchTerm)
  })
});

describe.only("Inquirer", function() {
  let backup;

  it("prompts with search when user puts search command", async () => {
     const mockInquirer = await inquirerGen.getSearch();
     let question = this.mockInquirer.ui.activePrompt.opt.message
     .done(()=>{
      expect(question).to.be.a("string");
      expect(question).to.eql("Search for a book");
     })

    /*  process.stdin = 'test'
    let answer =  mockInquirer.ui.activePrompt.answers.search
    mockInquirer.ui.activePrompt.status = 'done'
    mockInquirer.ui.activePrompt.done = () => true */
    expect(question).to.be.a("string");
    expect(question).to.eql("Search for a book");
   /*  stdin.send('response');
    stdin.end() */
  });
  after(() => {
    mockInquirer = backup
  })
});


describe('Start', function(){
  it("")
})