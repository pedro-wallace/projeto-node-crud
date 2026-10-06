const Sequelize = require('sequelize');
const sequelize = new Sequelize('node_exemplo', 'root', '', {
    host: '',
    dialect: 'mysql',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
    },
    logging: false
})


//TESTANDO A CONEXÃO COM O BANCO -

/*sequelize.authenticate().then(function () {
    console.log('Conectado no banco com sucesso!');
}).catch(function (err) {
    console.log('Falha ao se conectar:' + err);
})*/

module.exports = { Sequelize, sequelize }