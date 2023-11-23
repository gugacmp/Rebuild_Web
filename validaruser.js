function validarCampos() {
    var userId = document.getElementById("userId").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var fullName = document.getElementById("fullName").value;

    if (!username || !password || !confirmPassword || !fullName) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (password !== confirmPassword) {
        alert("As senhas não coincidem. Por favor, digite novamente.");
        return;
    }

    // Outras verificações de validação podem ser adicionadas aqui

    // Se todas as verificações passarem, pode prosseguir para o cadastro ou edição
    cadastrarUsuario();
}

// Restante do código permanece o mesmo
