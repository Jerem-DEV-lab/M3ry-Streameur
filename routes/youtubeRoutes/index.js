const router = require('express').Router();
const YoutubeController = require('../../controller/YoutubeController');

router.get('/', YoutubeController.getVideoYoutube)
router.get('/lastest-video', YoutubeController.getLatestVideo)
module.exports = router;