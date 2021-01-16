const path = require("path");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const db = require("./db");
const Company = require("./models/Company");
const { xlsToJSON } = require("./util");

// setup server middleware
const app = express();
app.use(logger("tiny"));
app.use(cors());
app.use(fileUpload());

// routes
app.use("/", require("./routes"));

app.listen(process.env.PORT || 4000, async () => {
  try {
    // create and seed database
    await db.sync({ force: true });
    const filepath = path.join(__dirname, "..", "sample", "initial.xlsx");
    const sheet = xlsToJSON(filepath);
    await Company.bulkCreate(sheet);
    console.log("Created and seeded database.");
    console.log("Server listening for requests...");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
