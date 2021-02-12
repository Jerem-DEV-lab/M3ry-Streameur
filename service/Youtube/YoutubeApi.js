const axios = require("axios");
const YoutubeVideoSchema = require("../../model/YoutubeVideo");
const YoutubeCommentSchema = require("../../model/YoutubeComments");
const {API_KEY_YOUTUBE, CHANNEL_ID} = require("../../config");

/**
 * @Desc Fait un appel à l'api pour récupérer les dernières vidéo
 * @returns {Promise<Object>}
 */
async function requestApiYoutube() {
    try {
        const {data} = await axios({
            method: 'get',
            url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=30&order=date&key=${API_KEY_YOUTUBE}`,
            grant_type: 'client_credentials'
        })
        return data
    } catch (e) {
        console.log(e)
    }
}

/**
 * @description Fais un appel à l'api de youtube pour récupérer tout les commentaires de la chaînes youtube
 * @returns {Promise<*>}
 */
async function requestComments() {
    try {
        return await axios({
            method: "get",
            url: `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&allThreadsRelatedToChannelId=UCXLIubvjDYznTp7RctPRimA&maxResults=300&key=AIzaSyBtq1KHkX8-MVPRR7yulyFv0hyXdLG4ERY`,
            grant_type: 'client_credentials'
        }).then(res => {
            console.log(res.data)
            return res.data
        })
            .catch(err => {
                console.log(err)
            })
    } catch (e) {
        console.log(e)
    }
}

/**
 * @Desc Permet de récupérer les vidéos dans la base de données
 * @returns {Promise<Array<Document>>}
 */
async function requestVideoDb() {
    try {
        const videos = await YoutubeVideoSchema.find().exec();
        return videos
    } catch (err) {
        console.log(err)
    }
}

async function requestCommentDb() {
    try{
        return await YoutubeCommentSchema.find().exec()
            .then(res => res)
            .catch(err => err)
    }catch (e) {

    }
}

/**
 * Permet de créer un premier stockage de requête dans la bdd
 * @returns {Promise<Document>}
 */
async function storeApiQuery() {
    try {
        const videos = await requestApiYoutube();
        const preStore = new YoutubeVideoSchema({
            items: videos.items,
        })
        await preStore.save();
        console.log("appel api youtube videos + stockage")
        return preStore
    } catch (e) {
        console.log(e)
    }
}
async function storeCommentApi() {
    try{
        const commentsApi = await requestComments()
        const commentSchema = new YoutubeCommentSchema({
            items: commentsApi.items
        })
        await commentSchema.save();
        console.log("appel api youtube comments + stockage")
        return commentSchema
    }catch (e) {
        console.log(e)
    }
}
module.exports = {
    requestApiYoutube,
    requestVideoDb,
    storeApiQuery,
    requestComments,
    storeCommentApi,
    requestCommentDb
}