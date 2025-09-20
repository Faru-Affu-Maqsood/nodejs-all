import express from 'express';
import 'dotenv/config'; // To use .env file
import connectDb from './db/connectDb.js';
import { updateManyRecords } from './models/Movies.js';
// import { updateById } from './models/Movies.js';

// import createDoc from './models/Movies.js';
// import insertManyDoc from './models/Movies.js';
// import allDocs from './models/Movies.js';
// import { singleDoc } from './models/Movies.js';
// import { docWithField } from './models/Movies.js';

// console.clear();
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/movies';

connectDb(DATABASE_URL);
// createDoc();
// insertManyDoc();
// allDocs();
// singleDoc();
// docWithField();
// updateById("68c261bdd0ec785fa38f96f7");
updateManyRecords();

app.listen(port, () => {
    console.log(`Server http://localhost:${port}/ is running...`);
});
