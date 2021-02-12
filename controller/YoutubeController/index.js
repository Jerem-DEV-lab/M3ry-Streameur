const {DeleteManyQuery} = require("../../service/MongoDb");
const YoutubeSchema = require("../../model/YoutubeVideo")
const YoutubeCommentSchema = require("../../model/YoutubeComments")
const {requestCommentDb} = require("../../service/Youtube/YoutubeApi");
const {storeCommentApi} = require("../../service/Youtube/YoutubeApi");
const {isEmpty, dayDiff} = require("../../utils");
const {requestVideoDb} = require("../../service/Youtube/YoutubeApi");
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
                    await storeApiQuery()
                    const responseDb = await requestVideoDb();

                    console.log("appel stockage bdd + stockage trop vieux")
                    return res.status(200).json(responseDb)
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
module.exports.getCommentYoutube = async (req, res) => {
    try {
        const responseDbComments = await requestCommentDb();
        if (!isEmpty(responseDbComments)) {
            const day = Date.now()
            const DiffTimes = dayDiff(responseDbComments[0].storageDate, day)
            if (DiffTimes >= 1) {
                const deletedDocs = await DeleteManyQuery(YoutubeCommentSchema)
                if (deletedDocs.deletedCount >= 1) {
                    await storeCommentApi()
                    const responseDb = await requestCommentDb();
                    console.log("appel stockage bdd comment + stockage trop vieux")
                    return res.status(200).json(responseDb)
                }
            } else {
                const response = await requestCommentDb();
                console.log("appel stockage comment bdd")
                return res.status(200).json(response)
            }
        } else {
            const stored = await storeCommentApi()
            console.log("appel api comment + stockage bdd 0 data")
            return res.status(200).json(stored)
        }
    } catch (e) {
        console.log(e)
    }
}

/**
 * @Desc Permet de récupérer les données youtube en fonction de leur age
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
module.exports.getVideosAndCommentsYoutube = async (req, res) => {
    try {
        let state = {
            comments: [],
            items: [],
            dateStorage: ""
        };
        const dbVideos = await requestVideoDb();
        const dbComments = await requestCommentDb();
        if (isEmpty(dbVideos) && isEmpty(dbComments)) {
            const requestDbVideo = await storeApiQuery()
            const requestDbComment = await storeCommentApi()
            state = {
                ...state,
                comments: requestDbComment.items,
                items: requestDbVideo.items,
                dateStorage: requestDbVideo.storageDate
            }
            return res.status(200).json(state)
        }
        if (isEmpty(dbVideos)) {
            const newVideos = await storeApiQuery()
            state = {
                ...state,
                comments: [...dbComments[0].items],
                items: newVideos.items,
                dateStorage: newVideos.storageDate
            }
            return res.status(200).json(state)
        }
        if (isEmpty(dbComments)) {
            const newComment = await storeCommentApi();
            state = {
                ...state, comments: newComment.items,
                items: [...dbVideos[0].items]
            }
            return res.status(200).json(state)
        } else {
            state = {
                ...state,
                items: [...dbVideos[0].items],
                comments: [...dbComments[0].items],
                dateStorage: dbVideos[0].storageDate
            }
            if (dayDiff(Date.parse(state.dateStorage), Date.now()) >= 1) {
                const deletedDocs = await DeleteManyQuery(YoutubeSchema)
                const deleteComments = await DeleteManyQuery(YoutubeCommentSchema)
                if (deletedDocs.deletedCount >= 1 || deleteComments.deletedComments >= 1) {
                    const newVideos = await storeApiQuery();
                    const newComments = await storeCommentApi()
                    console.log("data trop vielle")
                    state = {
                        ...state,
                        items: [...newVideos.items],
                        comments: [...newComments.items],
                        dateStorage: "nouvelle data" + newVideos.storageDate
                    }
                    return res.status(200).json(state)
                }
            }
            return res.status(200).json(state)
        }
    } catch (e) {
        console.log(e)
    }
}