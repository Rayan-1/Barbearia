document.addEventListener("DOMContentLoaded", function () {
    // Dados de exemplo (substitua por uma implementação real)
    const usuarios = [
        { email: "barbeiro@example.com", senha: "senha123" },
        // Adicione mais usuários aqui
    ];

    // Elementos do formulário de registro
    const registerForm = document.getElementById("registerForm");
    const registerBtn = document.getElementById("registerBtn");

    // Elementos do formulário de login
    const loginForm = document.getElementById("loginForm");
    const loginBtn = document.getElementById("loginBtn");

    // Função para registrar um novo usuário
    function registerUser(email, senha) {
        // Implemente o código para registrar um novo usuário (por exemplo, enviar para um servidor)
        // Após o registro bem-sucedido, redirecione o usuário para a página de login
        window.location.href = "login.html";
    }

    // Função para autenticar um usuário
    function authenticateUser(email, senha) {
        // Implemente a lógica de autenticação (verificar no array de usuários neste exemplo)
        for (const usuario of usuarios) {
            if (usuario.email === email && usuario.senha === senha) {
                // Autenticação bem-sucedida, redirecione para a página principal do barbeiro
                window.location.href = "admin.html";
                return;
            }
        }

        // Se as credenciais estiverem incorretas, exiba uma mensagem de erro
        alert("Email ou senha incorretos. Tente novamente.");
    }

    // Evento de clique no botão "Registrar"
    registerBtn.addEventListener("click", function () {
        const email = registerForm.querySelector("#email").value;
        const senha = registerForm.querySelector("#password").value;
        registerUser(email, senha);
    });

    // Evento de clique no botão "Acessar"
    loginBtn.addEventListener("click", function () {
        const email = loginForm.querySelector("#email").value;
        const senha = loginForm.querySelector("#password").value;
        authenticateUser(email, senha);
    });
});
