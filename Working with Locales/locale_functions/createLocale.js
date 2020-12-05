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

// Create Locale
client
  .getSpace(spaceID)
  .then((space) => space.getEnvironment(environmentID))
  .then((environment) =>
    environment.createLocale({
      name: "Klingon",
      code: "KL",
      fallbackCode: "en-US",
      contentDeliveryApi: true,
      contentManagementApi: true,
      optional: true,
    })
  )
  .then((locale) => console.log(locale))
  .catch(console.error);
