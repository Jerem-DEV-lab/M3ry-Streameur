const axios = require("axios");
const {API_KEY_YOUTUBE, CHANNEL_ID} = require("../config");

async function requestApiYoutube() {
    try {
        const {data} = await axios({
            method: 'get',
            url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=2&order=date&key=${API_KEY_YOUTUBE}`,
            grant_type: 'client_credentials'
        })
        return data
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    requestApiYoutube
}