const {DB} = require("../../config");
const {connect, connection} = require('mongoose');

/**
 * @Desc Permet la connexion à la base de données
 * @returns {Promise<Connection>}
 * @constructor
 */
function ConnectToDb() {
    connect(DB, {
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    return connection.on('connected', () => {
        console.log("Connection à la base donnée ok")
    });
}

async function QueryGetBdd(model, filter, callback) {
    await model.find(filter, callback).exec();
    return model;
}

/**
 * @Desc Requête pour supprimer l'intégralité des documents de la base Mongodb
 * @param model
 * @param callback
 * @returns {Promise<Document>}
 * @constructor
 */
async function DeleteManyQuery(model, callback) {
    return await model.deleteMany(callback)
}

module.exports = {
    ConnectToDb,
    DeleteManyQuery
}