const fs = require("fs");

const manageBookListSave = bookToSave => {
  try{
  if (fs.existsSync("./saved-books.txt")) {
    fs.appendFile("./saved-books.txt", bookToSave.results + "\n", err => {
      if (err) throw err;
      console.log(`${bookToSave.results} was added to your book list!`);
      return `${bookToSave.results} was added to your book list!`
    });
  } else {
    fs.writeFile("./saved-books.txt", bookToSave.results, err => {
      if (err) throw new Error(err);
      console.log(
        `${bookToSave.results} was added to your new book list file!`
      );
      return `${bookToSave.results} was added to your new book list file!`
    });
  } 
 
}
catch(error){
console.log(error)
}
};

module.exports = manageBookListSave