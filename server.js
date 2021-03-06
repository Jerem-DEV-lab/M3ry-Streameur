const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const {PORT} = require("./config");
const app = express()
const twitchRoute = require("./routes/twitchRoutes")
const youtubeRoute = require("./routes/youtubeRoutes")
const {ConnectToDb} = require("./service/MongoDb");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use("/twitch", twitchRoute)
app.use('/youtube', youtubeRoute)
ConnectToDb()

app.listen(PORT || 3500, console.log(`Serveur démarrer sur le port ${PORT}`))