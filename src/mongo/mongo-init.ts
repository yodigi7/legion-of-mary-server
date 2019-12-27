import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@bwlk74sflmfqzlc-mongodb.services.clever-cloud.com:27017/bwlk74sflmfqzlc`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
let db = mongoose.connection;
db.once("open", () => {});

export let mongoDb = db;
