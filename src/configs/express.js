import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';

const app = new express();

// cors middleware
app.use(cors());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// parse response body
app.use(express.json());
// to handle uploading files
app.use(fileUpload({ createParentPath: true }));

module.exports = { app };