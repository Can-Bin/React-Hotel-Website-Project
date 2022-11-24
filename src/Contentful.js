import { createClient } from "contentful";

const contentful = require("contentful");
const client = contentful.createClient({

  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});



export default client;