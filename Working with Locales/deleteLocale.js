// Contentful Management API
const contentful = require("contentful-management");
require("dotenv").config({ path: __dirname + "/.env" });

// Get all CMA login details
const cmaToken = process.env["CMA_TOKEN"];
const spaceID = process.env["SPACE_ID"];
const environmentID = process.env["ENVIRONMENT_ID"];
const localeID = process.argv[2];

// Create connection with Contentful
const client = contentful.createClient({
  accessToken: cmaToken,
});

// Delete Locale
client
  .getSpace(spaceID)
  .then((space) => space.getEnvironment(environmentID))
  .then((environment) => environment.getLocale(localeID))
  .then((locale) => locale.delete())
  .then(() => console.log("Locale deleted."))
  .catch(console.error);
