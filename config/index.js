require('dotenv').config();
module.exports = {
    PORT: process.env.APP_PORT,
    CLIENT_ID: process.env.CLIENT_ID,
    TOKEN_SECRET: process.env.SECRET_KEY
}