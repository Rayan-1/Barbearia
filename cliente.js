document.addEventListener("DOMContentLoaded", function () {
    // Lógica JavaScript específica para a parte do cliente

    // Capturar elementos do formulário de agendamento
    const clienteForm = document.getElementById("clienteForm");
    const nomeInput = document.getElementById("nome");
    const telefoneInput = document.getElementById("telefone");
    const emailInput = document.getElementById("email");
    const barbeiroSelect = document.getElementById("barbeiro");
    const horarioSelect = document.getElementById("horario");
    const agendarCorteBtn = document.getElementById("agendarCorteBtn");
    const listaAgendamentos = document.getElementById("listaAgendamentos");

    // Array para armazenar agendamentos do cliente
    const agendamentos = [];

    // Evento de clique no botão "Agendar"
    agendarCorteBtn.addEventListener("click", function () {
        const barbeiro = barbeiroSelect.value;
        const horario = horarioSelect.value;
        const clienteNome = nomeInput.value;
        const clienteTelefone = telefoneInput.value;
        const clienteEmail = emailInput.value;

        // Verificar campos preenchidos
        if (barbeiro && horario && clienteNome && clienteTelefone && clienteEmail) {
            const agendamento = {
                barbeiro: barbeiro,
                horario: horario,
                clienteNome: clienteNome,
                clienteTelefone: clienteTelefone,
                clienteEmail: clienteEmail,
            };

            agendamentos.push(agendamento);
            nomeInput.value = "";
            telefoneInput.value = "";
            emailInput.value = "";

            exibirAgendamentos();
            enviarEmail(clienteEmail);

            alert("Agendamento realizado com sucesso!");
        } else {
            alert("Por favor, preencha todos os campos antes de agendar.");
        }
    });

    // Função para exibir agendamentos na página
    function exibirAgendamentos() {
        listaAgendamentos.innerHTML = "";
        for (const agendamento of agendamentos) {
            const listItem = document.createElement("li");
            listItem.textContent = `Barbeiro: ${agendamento.barbeiro}, Horário: ${agendamento.horario}, Cliente: ${agendamento.clienteNome}`;
            listaAgendamentos.appendChild(listItem);
        }
    }

    // Função para enviar um email de confirmação para o cliente
    function enviarEmail(email) {
        // Lógica de envio de email (pode ser implementada em seu servidor)
    }
});
