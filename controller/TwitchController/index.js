const axios = require("axios");
const {TOKEN_SECRET} = require("../../config");
const {CLIENT_ID} = require("../../config");
const options = {
    client_id: CLIENT_ID,
    client_secret: TOKEN_SECRET,
    grant_type: 'client_credentials',
}

async function getOAuthToken() {
    try {
        const {data} = await axios({
            method: 'post',
            url: "https://id.twitch.tv/oauth2/token",
            headers: {'Client-ID': CLIENT_ID},
            params: options
        })
        return data
    } catch (e) {
        return console.log("erreur")
    }
}

async function getInfoStream() {
    const tokenBe = await getOAuthToken();
    try {
        if (!tokenBe)
            return console.log("pas de token")
        const {data} = await axios({
            method: "get",
            url: "https://api.twitch.tv/helix/streams",
            headers: {
                Authorization: `Bearer ${tokenBe.access_token}`,
                "Client-Id": CLIENT_ID
            },
            params: {
                broadcaster_id: tokenBe.access_token
            }
        })
        return console.log(data)
    } catch (e) {
        console.log("erreur", e)
    }
}

async function refreshToken() {
    const token = await getOAuthToken()
    try {
        const {data} = await axios({
            method: "get",
            url: "https://api.twitch.tv/helix/streams?user_login=the_m3ry",
            headers: {
                Authorization: `Bearer ` + token.access_token,
                "Client-Id": CLIENT_ID,
                grant_type: "client_credentials"
            }
        })
        return data.data[0]
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getInfoStream,
    refreshToken
}