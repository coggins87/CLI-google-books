const fs = require("fs");

const manageBookListSave = async (bookToSave, filePath) => {
  let statement;
  try {
    if (fs.existsSync(filePath)) {
     fs.appendFile(filePath, bookToSave.results + "\n", err => {
        if (err) throw err;
       statement = `${bookToSave.results} was added to your book list!`;
        console.log(statement);

      });
    } else {
      fs.writeFile(filePath, bookToSave.results, err => {
        if (err) throw new Error(err);
       statement = `${bookToSave.results} was added to your new book list file!`;
        console.log(statement);
      });
    }
    return statement;
  } catch (error) {
    console.log(error);
  }

};

module.exports = manageBookListSave;
