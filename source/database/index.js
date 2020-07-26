const { sequelize } = require('./models');
const { environment } = require('../../configuration/database')

sequelize
    .authenticate()
    .then(() => {
        console.log(`SQLite conectado no ambiente de ${environment}.`)
    })
    .catch(() => {
        console.log(`SQLite com problema de conexão no ambiente de ${environment}.\nErro: ${error}`)
    })
