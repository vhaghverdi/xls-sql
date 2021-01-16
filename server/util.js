const XLSX = require("xlsx");

function xlsToJSON(filepath) {
  const workbook = XLSX.readFile(filepath);
  const firstSheetName = workbook.SheetNames[0];
  const firstSheet = workbook.Sheets[firstSheetName];
  return XLSX.utils.sheet_to_json(firstSheet);
}

module.exports = { xlsToJSON };
