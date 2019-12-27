const express = require("express");
import expressSession from "express-session";
import passport from "passport";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphqlDefs";

const app: any = new express();
const server = new ApolloServer({ typeDefs, resolvers });

app.use(
  expressSession({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
server.applyMiddleware({ app });

app.post("/login", (req: any, res: any) => {
  console.log(req.session.auth);
  req.session.auth = true;
  req.session.save();
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("App running at port 3000");
});
