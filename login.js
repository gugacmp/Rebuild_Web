function saveData() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    // Verificar se os campos de usuário e senha não estão vazios
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();

    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos antes de salvar.');
        return;
    }

    // Armazenar dados no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Dados salvos!');
}

function saveData() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Armazenar dados no localStorage
    localStorage.setItem('username').value;

function saveData() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Armazenar dados no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

function saveData() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Armazenar dados no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

     alert('Dados salvos!');
        }

function loadData() {
    // Recuperar dados do localStorage
    var savedUsername = localStorage.getItem('username');
    var savedPassword = localStorage.getItem('password');

function saveData() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Armazenar dados no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

            alert('Dados salvos!');
        }


//function loadData() {
    // Recuperar dados do localStorage
//    var savedUsername = localStorage.getItem('username');
//    var savedPassword = localStorage.getItem('password');

//Exibir dados alert('Usuário: ' + savedUsername + '\nSenha: ' + savedPassword);0 