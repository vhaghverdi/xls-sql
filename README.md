# xls-sql

This fullstack web application demonstrates a scenario in which a user uploads an Excel sheet (`.xlsx`) containing the latest information on a variety of companies. If any company in the Excel sheet is absent from the database, the user is presented with a tabular form in which they select whether to link each such company to an existing one in the database or to create a new record in the database.

## Sample sheets

The `/sample` folder contains two Excel sheets:

- `initial.xlsx` is used to seed the database upon starting the server
- `update.xlsx` is used to manually test whether the application is working as described

## Server

The server is written in the [Express.js](https://expressjs.com/) framework.

Install and start the server:

```
npm i && npm start
```
