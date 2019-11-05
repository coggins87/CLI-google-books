
const expect = require("chai").expect;
const supertest = require("supertest");
const app = require('../bin/book-search')
const search = require('../bin/book-search.js')

describe("Book Search", function () {
  it('takes a user query and returns five books', async ()=>{
    let searchTerm = 'test'
let answer = await search.bookSearch(searchTerm)
expect(answer).to.be.an('array')
expect(answer).to.have.length(5)
  })
})
