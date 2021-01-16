const { UUID, UUIDV4, STRING, INTEGER } = require("sequelize");
const db = require("../db");

const Company = db.define("company", {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  },
  name: STRING,
  val1: INTEGER,
  val2: INTEGER,
  val3: INTEGER,
});

module.exports = Company;
