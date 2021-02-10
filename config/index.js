require('dotenv').config();
module.exports = {
    PORT: process.env.APP_PORT,
    DB: process.env.DB_URL,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    API_KEY_YOUTUBE: process.env.YOUTUBE_API_KEY,
    CHANNEL_ID: process.env.CHANNEL_ID,
}