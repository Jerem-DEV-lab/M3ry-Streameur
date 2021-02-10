const axios = require("axios")
const {CLIENT_ID, CLIENT_SECRET} = require("../../config");

let TOKEN_PRIVATE = ""

async function getOauthToken() {
    try {
        const {data} = await axios({
            method: 'post',
            url: "https://id.twitch.tv/oauth2/token",
            headers: {'Client-ID': CLIENT_ID},
            params: {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                grant_type: 'client_credentials',
            },
        })
        TOKEN_PRIVATE = data.access_token
        console.log("appel new token")
        return TOKEN_PRIVATE
    } catch (err) {
        throw err
    }
}
async function callTwitchApi(axiosParams, retry = 1) {
    try {
        const {data} = await axios({
            ...axiosParams,
            headers: {Authorization: `Bearer ${TOKEN_PRIVATE}`, 'Client-ID': CLIENT_ID},
        })
        console.log("call api twitch")
        return data
    } catch (err) {
        if (retry > 0 && err && err.response && err.response.status === 401) {
            await getOauthToken()
            console.log("new call auth token")
            return callTwitchApi(axiosParams, retry - 1)
        }else{
            console.log(err)
            throw err
        }
    }
}
module.exports = {
    callTwitchApi
}