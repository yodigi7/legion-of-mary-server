import mongoose from "mongoose";
mongoose.connect("mongodb://localhost/credo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
let db = mongoose.connection;
db.once("open", () => {});

export let mongoDb = db;
