const {Schema, model} = require("mongoose");

const YoutubeVideoDirectory = new Schema({
    items: {
        type: Array,
        required: true
    },
    storageDate: {
        type: Date,
        default: Date.now(),
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('youtubeVideoDirectory', YoutubeVideoDirectory)