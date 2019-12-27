import { Schema, model } from "mongoose";
import { IPerson } from "./mongoInterfaces";

let PhoneSchema = new Schema({
  number: String,
  type: String
});

let EmailSchema = new Schema({
  email: String,
  type: String
});

let PersonSchema = new Schema({
  prefix: String,
  firstName: String,
  preferredName: String,
  middleName: String,
  lastName: String,
  suffix: String,
  street: String,
  city: String,
  state: String,
  zipcode: String,
  phones: [PhoneSchema],
  emails: [EmailSchema],
  membershipLevel: String
});

export let Person = model<IPerson>("Person", PersonSchema);
