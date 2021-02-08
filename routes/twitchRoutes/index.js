const router = require("express").Router();
const TwitchController = require("../../controller/TwitchController")
const {CLIENT_ID} = require("../../config");


router.get('/', (req, res) => {
    TwitchController.refreshToken().then(r => res.status(200).json(r))
})

module.exports = router;