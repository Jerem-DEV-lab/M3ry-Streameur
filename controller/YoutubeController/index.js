const {DeleteManyQuery} = require("../../service/MongoDb");
const YoutubeSchema = require("../../model/YoutubeVideo")
const {getLatestVideos} = require("../../service/Youtube/YoutubeApi");
const {isEmpty} = require("../../utils");
const {dayDiff} = require("../../utils");
const {requestVideoDb, requestApiYoutube} = require("../../service/Youtube/YoutubeApi");
const {storeApiQuery} = require("../../service/Youtube/YoutubeApi");


module.exports.getVideoYoutube = async (req, res) => {
    try {
        const responseDb = await requestVideoDb();
        if (!isEmpty(responseDb))
        {
            const day = Date.now()
            const DiffTimes = dayDiff(responseDb[0].storageDate, day)
            if (DiffTimes >= 1) {
                const deletedDocs = await DeleteManyQuery(YoutubeSchema)
                if (deletedDocs.deletedCount >= 1) {
                    const newCall = await storeApiQuery()
                    console.log("appel api youtube + stockage bdd trop vieux")
                    return res.status(200).json(newCall)
                }
            } else {
                const response = await requestVideoDb();
                console.log("appel stockage bdd")
                return res.status(200).json(response)
            }
        } else {
            const stored = await storeApiQuery()
            console.log("appel api + stockage bdd 0 data")
            return res.status(200).json(stored)
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports.getLatestVideo = async (req, res) => {
    const vid = await getLatestVideos()
    return res.status(200).json(vid)
}