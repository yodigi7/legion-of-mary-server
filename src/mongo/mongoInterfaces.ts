import { Document } from "mongoose";

export interface IPerson extends Document {
  prefix: String;
  firstName: String;
  preferredName: String;
  middleName: String;
  lastName: String;
  suffix: String;
  street: String;
  city: String;
  state: String;
  zipcode: String;
  phones: [IPhone];
  emails: [IEmail];
  membershipLevel: String;
}

export interface IPhone extends Document {
  number: String;
  type: String;
}

export interface IEmail extends Document {
  email: String;
  type: String;
}
