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
