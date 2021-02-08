const {callTwitchApi} = require("../../service/TwitchApi");

module.exports.getInfoStream = async (req, res) => {
    try{
        const callApi = await callTwitchApi({
            method: "get",
            url: "https://api.twitch.tv/helix/streams?user_login=the_m3ry",
        })
        return res.status(200).json(callApi.data[0])
    }catch (e) {
        console.log(e)
    }
}