const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const {PORT} = require("./config");
const app = express()
const twitchRoute = require("./routes/twitchRoutes")

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use("/twitch", twitchRoute)

app.listen(PORT || 5000, console.log(`Serveur démarrer sur le port ${PORT}`))