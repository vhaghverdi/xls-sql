const express = require("express");
const router = express.Router();
const { xlsToJSON } = require("./util");

// return list of all companies in database
router.get("/", async (req, res, next) => {
  try {
    res.send(await Company.findAll());
  } catch (error) {
    next(error);
  }
});

// accept uploaded .xlsx file
// must be named 'sheet' in a FormData object
// currently returns JSON equivalent--logic to be updated
router.post("/upload", (req, res) => {
  // validate file extension
  const filename = req.files.sheet.name;
  const filenameSplit = filename.split(".");
  const fileExtension = filenameSplit[filenameSplit.length - 1];
  if (fileExtension !== "xlsx") {
    throw new Error("File extension must be .xlsx");
  }

  // save upload and return JSON equivalent
  const filepath = path.join(__dirname, "uploads", "sheet.xlsx");
  req.files.sheet.mv(filepath);
  res.send(xlsToJSON(filepath));
});

module.exports = router;
