import { createClient } from "contentful";

const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "qc65m5q492o5",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "s_pauvPzquEUP3NUeDf3dusmVSdjmXrVzthn26uTFKw"
});



export default client;