
const expect = require("chai").expect;
const supertest = require("supertest");
const app = require('../bin/book-search')
const search = require('../bin/book-search.js')

describe("Book Search", function () {

  it('takes a user query and returns five books when a query is given and answers are found', async ()=>{
    let searchTerm = 'test'
let answer = await search.bookSearch(searchTerm)
expect(answer).to.be.an('array')
expect(answer).to.have.length(5)
  })
  it('if no search results, returns message', async ()=>{
    let searchTerm = 'test'
let answer = await search.bookSearch(searchTerm)
expect(answer).to.be.an('array')
expect(answer).to.have.length(5)
  })
  it('responds with an error if the user does not enter a search term', async ()=>{
    let searchTerm= ''
    let answer = await search.bookSearch(searchTerm)
    expect(answer).to.be.an('string')
    expect(answer).to.eql('Search term is required!')
  })
})
