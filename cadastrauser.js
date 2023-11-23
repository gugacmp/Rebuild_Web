var usuarios = [];

function cadastrarUsuario() {
    var userId = usuarios.length + 1;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var fullName = document.getElementById("fullName").value;

    usuarios.push({
        id: userId,
        username: username,
        password: password,
        fullName: fullName
    });

    limparFormulario();
    console.log("Usuário cadastrado:", usuarios);
    salvarDados();
}

function editarUsuario() {
    var userId = document.getElementById("userId").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var fullName = document.getElementById("fullName").value;

    // Procura o usuário pelo ID e atualiza os dados
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id == userId) {
            usuarios[i].username = username;
            usuarios[i].password = password;
            usuarios[i].fullName = fullName;
            break;
        }
    }

    limparFormulario();
    console.log("Usuário editado:", usuarios);
    salvarDados();
}

function limparFormulario() {
    document.getElementById("userId").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("fullName").value = "";
}

function salvarDados() {
    // Salvar em JSON
    salvarJSON(usuarios);

    // Salvar em TXT
    salvarTXT(usuarios);

    // Salvar em XML
    salvarXML(usuarios);

    // Salvar em XLS (formato Excel)
    salvarXLS(usuarios);
}

function salvarJSON(data) {
    var jsonBlob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    salvarArquivo(jsonBlob, "usuarios.json");
}

function salvarTXT(data) {
    var txtBlob = new Blob([JSON.stringify(data, null, 2)], { type: "text/plain" });
    salvarArquivo(txtBlob, "usuarios.txt");
}

function salvarXML(data) {
    var xmlString = '<usuarios>' +
                    data.map(usuario => `<usuario>
                                            <id>${usuario.id}</id>
                                            <username>${usuario.username}</username>
                                            <password>${usuario.password}</password>
                                            <fullName>${usuario.fullName}</fullName>
                                         </usuario>`).join('') +
                    '</usuarios>';
    
    var xmlBlob = new Blob([xmlString], { type: "application/xml" });
    salvarArquivo(xmlBlob, "usuarios.xml");
}

function salvarXLS(data) {
    var xlsContent = 'ID\tUsuário\tSenha\tNome\n' +
                     data.map(usuario => `${usuario.id}\t${usuario.username}\t${usuario.password}\t${usuario.fullName}`).join('\n');
    
    var xlsBlob = new Blob([xlsContent], { type: "application/vnd.ms-excel" });
    salvarArquivo(xlsBlob, "usuarios.xls");
}

function salvarArquivo(blob, filename) {
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}
