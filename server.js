const express = require('express');
const app = express();
const port = 3000;

// Rota para registro de barbeiros
app.post('/registrar', (req, res) => {
    const { nome, email, telefone, senha } = req.body;

    // Validação dos dados
    if (!nome || !email || !telefone || !senha) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    // Verifique se o email já está em uso (opcional)
    db.get('SELECT email FROM barbeiros WHERE email = ?', [email], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao verificar email' });
        }
        if (row) {
            return res.status(400).json({ error: 'Este email já está em uso' });
        }

        // Inserção no banco de dados após a validação
        db.run(
            'INSERT INTO barbeiros (nome, email, telefone, senha) VALUES (?, ?, ?, ?)',
            [nome, email, telefone, senha],
            (err) => {
                if (err) {
                    return res.status(500).json({ error: 'Erro ao registrar barbeiro' });
                }
                res.json({ message: 'Barbeiro registrado com sucesso' });
            }
        );
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
