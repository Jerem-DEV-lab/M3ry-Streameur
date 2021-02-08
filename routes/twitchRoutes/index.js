const router = require("express").Router();
const TwitchController = require("../../controller/TwitchController");

router.get('/', TwitchController.getInfoStream)

module.exports = router;