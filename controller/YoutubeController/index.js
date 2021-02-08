const {requestApiYoutube} = require("../../service/YoutubeApi");

module.exports.getVideoYoutube = async (req, res) => {
    try {
        const callApi = await requestApiYoutube()
        return res.status(200).json(callApi)
    } catch (e) {
        console.log(e)
    }
}