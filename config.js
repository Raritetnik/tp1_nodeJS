const dotenv = require("dotenv");

dotenv.config()
module.exports = {
    PORT: process.env.PORT,
    URL_GAMES: process.env.URL_GAMES,
    URL_PLATFORMS: process.env.URL_PLATFORMS,
    API_KEY: process.env.API_KEY
}

