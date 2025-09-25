require('dotenv').config()
const { err} = require('console')
const mysql = require('mysql2')

 

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  multipleStatements: true  // importante para criar varias execução ao mesmo tempo
})


db.getConnection((err) => {
  if (err) {
    console.error('❌ Erro ao conectar ao MySQL:', err.message);
  } else {
    console.log('✅ Conexão com MySQL bem-sucedida!');
  }

});



module.exports =db