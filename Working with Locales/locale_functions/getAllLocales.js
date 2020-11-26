// Contentful Management API
const contentful = require("contentful-management");
require("dotenv").config({ path: __dirname + "/../.env" });

// Get all CMA login details
const cmaToken = process.env["CMA_TOKEN"];
const spaceID = process.env["SPACE_ID"];
const environmentID = process.env["ENVIRONMENT_ID"];

// Create connection with Contentful
const client = contentful.createClient({
  accessToken: cmaToken,
});

// Get all Locales
client
  .getSpace(spaceID)
  .then((space) => space.getEnvironment(environmentID))
  .then((environment) => environment.getLocales())
  .then((response) => console.log(response.items))
  .catch(console.error);
