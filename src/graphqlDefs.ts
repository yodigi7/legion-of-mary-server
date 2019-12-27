import { mongoDb } from "./mongo/mongo-init";
import { gql } from "apollo-server";
import { Person } from "./mongo/mongoSchemas";

mongoDb;

const typeDefs = gql`
  type Person {
    _id: ID!
    prefix: String
    firstName: String
    preferredName: String
    middleName: String
    lastName: String
    suffix: String
    street: String
    city: String
    state: String
    zipcode: String
    phones: [Phone]
    emails: [Email]
    membershipLevel: String
  }

  type Phone {
    _id: ID!
    number: String
    type: String
  }

  type Email {
    _id: ID!
    email: String
    type: String
  }

  type Query {
    getPersons: [Person]
  }

  type Mutation {
    addPerson(
      prefix: String
      firstName: String
      preferredName: String
      middleName: String
      lastName: String
      suffix: String
      street: String
      city: String
      state: String
      zipcode: String
      phones: [PhoneInput]
      emails: [EmailInput]
      membershipLevel: String
    ): Person
  }

  input PhoneInput {
    number: String
    type: String
  }

  input EmailInput {
    number: String
    type: String
  }
`;

const resolvers = {
  Query: {
    getPersons: async () => {
      return await Person.find();
    }
  },
  Mutation: {
    addPerson: async (root: any, args: any, context: any, info: any) => {
      let person = await Person.create(args);
      person = await person.save();
      return person;
    }
  }
};

export { typeDefs, resolvers };
