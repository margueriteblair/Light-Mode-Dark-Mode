const mongoose = require("mongoose");

module.exports = (uri) => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  mongoose.connection.on("open", () => {
    console.log(`connected to Database`);
  });

  mongoose.connection.on("error", (err) => {
    console.error(`\nERROR Connecting To Database: ${err}\n`);
  });

  mongoose.connection.on("connected", (err) => {
    console.log(
        `\nConnecting To Database\n`
    );
  });

  mongoose.connection.on("disconnected", (err) => {

    if (err != undefined) {
      console.error(`\nThe application has been disconnected from the database;\n\nError With DB: ${err.message || err}\n`);
    }

  });
};
