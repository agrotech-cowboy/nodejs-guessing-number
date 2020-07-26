const { sequelize } = require('./models');
const { environment } = require('../../configuration/database')

sequelize
    .authenticate()
    .then(() => {
        console.log(`Postgres conectado no ambiente de ${environment}.`)
    })
    .catch((error) => {
        console.log(`Postgres com problema de conexão no ambiente de ${environment}.\nErro: ${error}`)
    })
