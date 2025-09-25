const db = require('./config/db');

const criarTabelas = () => {
  const queries = [

    // Criação do banco
    `CREATE DATABASE IF NOT EXISTS rightprice`,
    `USE rightprice`,

    // Tabela de produtos
    `CREATE TABLE IF NOT EXISTS produtos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      codigo_barra VARCHAR(50) UNIQUE NOT NULL,
      nome VARCHAR(100) NOT NULL,
      preco DECIMAL(10,2) NOT NULL
    )`,

    // Tabela de compras
    `CREATE TABLE IF NOT EXISTS compras (
      id INT AUTO_INCREMENT PRIMARY KEY,
      data_compra DATETIME DEFAULT CURRENT_TIMESTAMP
    )`,

    // Tabela de itens da compra
    `CREATE TABLE IF NOT EXISTS itens_compra (
      id INT AUTO_INCREMENT PRIMARY KEY,
      compra_id INT NOT NULL,
      produto_id INT NOT NULL,
      quantidade INT DEFAULT 1,
      FOREIGN KEY (compra_id) REFERENCES compras(id) ON DELETE CASCADE,
      FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE
    )`,

    // Tabela de usuários
    `CREATE TABLE IF NOT EXISTS usuarios (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100),
      email VARCHAR(100)
    )`,

    // Tabela de histórico
    `CREATE TABLE IF NOT EXISTS historico (
      id INT AUTO_INCREMENT PRIMARY KEY,
      usuario_id INT,
      compra_id INT,
      FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL,
      FOREIGN KEY (compra_id) REFERENCES compras(id) ON DELETE CASCADE
    )`
  ];

  queries.forEach((query, index) => {
    db.query(query, (err) => {
      if (err) {
        console.error(`❌ Erro na query ${index + 1}:`, err.message);
      } else {
        console.log(`✅ Query ${index + 1} executada com sucesso`);
      }
    });
  });
};

criarTabelas();
