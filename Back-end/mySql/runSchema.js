require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const fs = require('fs');
const path = require('path');
const db = require('../config/db'); // usa o pool já configurado



const schemaPath = path.join(__dirname, 'schema.sql'); // corrigido
const schemaSQL = fs.readFileSync(schemaPath, 'utf8');

db.query(schemaSQL, (err) => {
  if (err) {
    console.error('❌ Erro ao executar schema.sql:', err.message);
  } else {
    console.log('✅ Tabelas criadas com sucesso!');
  }
});
