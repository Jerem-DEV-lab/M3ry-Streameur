const axios = require("axios");
const YoutubeVideoSchema = require("../../model/YoutubeVideo");
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
        console.log(data)
        return data
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
        return preStore
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    requestApiYoutube,
    requestVideoDb,
    storeApiQuery
}