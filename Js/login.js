// Função para alternar a visibilidade da senha
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const showPasswordBtn = document.getElementById('showPasswordBtn');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        showPasswordBtn.src = '../imagens/eye.svg'; // Ajuste o caminho da imagem conforme necessário
    } else {
        passwordField.type = 'password';
        showPasswordBtn.src = '../imagens/eye-slash.svg'; // Ajuste o caminho da imagem conforme necessário
    }
}

// Função de verificação de campos (pode ser expandida conforme necessário)
function verificarCampos() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
    return true;
}

// Formulário de login
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!verificarCampos()) {
        return; // Se a verificação falhar, não prossegue
    }

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Obter dados de usuários cadastrados armazenados localmente
    const userDataList = JSON.parse(localStorage.getItem('userDataList')) || [];
    
    // Verificar se há um usuário correspondente ao email fornecido
    const user = userDataList.find(user => user.email === email);
    if (!user) {
        alert('Usuário não encontrado. Por favor, verifique suas credenciais.');
        return;
    }

    // Verificar se a senha fornecida corresponde à senha do usuário encontrado
    if (password !== user.password) {
        alert('Senha incorreta. Por favor, verifique suas credenciais.');
        return;
    }

    // Salvar usuário logado localmente
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    // Simulação de login bem-sucedido
    alert(`Login realizado com sucesso!\nUsuário: ${user.fullname}`);
    
    // Redirecionar para página inicial apenas se o login for bem-sucedido
    window.location.href = '../Html/Site.html';
});

//.................................................................

// Recupera os dados do usuário logado do localStorage
const usuarioLogado = JSON.parse(localStorage.getItem('loggedInUser'));
const emailLogado = JSON.parse(localStorage.getItem('loggedInUser'));

// Verifica se existe um usuário logado
if (usuarioLogado && emailLogado) {
    // Exibe o nome do usuário no elemento com id 'nomeUsuario'
    document.getElementById('nomeUsuario').innerText = usuarioLogado.fullname;
    document.getElementById('emailUsuario').innerText = emailLogado.fullname;
} else {
    // Exibe mensagem padrão caso não haja um usuário logado
    document.getElementById('nomeUsuario').innerText = "Nenhum usuário logado";
}