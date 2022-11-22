import express from "express";
const app = express();
const PORT = 8080;
import mongoose from "mongoose";
import * as dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to mongo database"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})
