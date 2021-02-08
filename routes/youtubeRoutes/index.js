const router = require('express').Router();
const YoutubeController = require('../../controller/YoutubeController');

router.get('/', YoutubeController.getVideoYoutube)

module.exports = router;