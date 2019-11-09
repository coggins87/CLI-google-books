const config = require("./config");
const rp = require("request-promise");
module.exports = {
bookSearch : (query) => {
  if (!query) return "Search term is required!";

  let options = {
    uri: config.API_URL,
    qs: {
      key: config.API_KEY,
      maxResults: 5,
      printType: "books",
      q: query
    }
  };

  return rp(options)
    .then(response => {
      return JSON.parse(response);
    })
    .then(list => {
      if(list.totalItems === 0){
        console.log('Could not find any results! Try another search')
        return 'Could not find any results! Try another search';
      }
     else return organizeResults(list.items);
    })
    .catch(err => {
      console.log('There was an error searching for books, try again later!');
    });
},

}


function organizeResults(listOfBooks) {
  let output = listOfBooks.map(book => {
    return `${book.volumeInfo.title} by ${
      book.volumeInfo.authors === undefined
        ? "unknown"
        : book.volumeInfo.authors
    }, published by ${
      book.volumeInfo.publisher === undefined
        ? "unknown"
        : book.volumeInfo.publisher
    }`;
  });
  return output;
}