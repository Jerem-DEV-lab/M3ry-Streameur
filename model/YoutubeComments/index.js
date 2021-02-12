const {Schema, model} = require("mongoose");

const YoutubeComments = new Schema({
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

module.exports = model('youtubeComments', YoutubeComments)