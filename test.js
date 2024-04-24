const sqlite3 = require('sqlite3').verbose();

// Crie uma conexão com o banco de dados
const db = new sqlite3.Database('barbearia.db');

// Dados de exemplo para inserção
const nome = 'João';
const email = 'joao@example.com';
const telefone = '123456789';
const senha = 'senha123';

// Inserir um novo barbeiro na tabela
db.run('INSERT INTO barbeiros (nome, email, telefone, senha) VALUES (?, ?, ?, ?)', [nome, email, telefone, senha], function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Novo barbeiro adicionado com ID ${this.lastID}`);
});

// Feche a conexão com o banco de dados após a inserção
db.close();
