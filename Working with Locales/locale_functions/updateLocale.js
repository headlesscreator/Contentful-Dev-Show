// Contentful Management API
const contentful = require("contentful-management");
require("dotenv").config({ path: __dirname + "/../.env" });

// Get all CMA login details
const cmaToken = process.env["CMA_TOKEN"];
const spaceID = process.env["SPACE_ID"];
const environmentID = process.env["ENVIRONMENT_ID"];
const localeID = process.argv[2];

// Create connection with Contentful
const client = contentful.createClient({
  accessToken: cmaToken,
});

// Update Locale Details
client
  .getSpace(spaceID)
  .then((space) => space.getEnvironment(environmentID))
  .then((environment) => environment.getLocale(localeID))
  .then((locale) => {
    locale.name = "Arabic (Jordan)";
    locale.code = "ar-JO";
    locale.fallbackCode = null;
    locale.contentDeliveryApi = false;
    locale.contentManagementApi = true;
    locale.optional = false;
    return locale.update();
  })
  .then((locale) => console.log(`Locale ${locale.sys.id} updated.`))
  .catch(console.error);
