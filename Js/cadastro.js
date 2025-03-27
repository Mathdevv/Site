const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const newPassword = document.getElementById('newpassword').value.trim();

    if (fullname === '' || email === '' || newPassword === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verificar se o email já está cadastrado
    const userDataList = JSON.parse(localStorage.getItem('userDataList')) || [];
    const existingUser = userDataList.find(user => user.email === email);
    if (existingUser) {
        alert('Este email já está cadastrado. Por favor, use outro.');
        return;
    }

    // Adicionar novo usuário à lista
    userDataList.push({ fullname, email, password: newPassword });

    // Armazenar lista atualizada de usuários localmente
    localStorage.setItem('userDataList', JSON.stringify(userDataList));

    // Simulação de cadastro bem-sucedido
    alert(`Cadastro realizado com sucesso!\nNome: ${fullname}\nEmail: ${email}`);

    // Limpar campos do formulário
    signupForm.reset();

    // Redirecionar para página de login
    window.location.href = '../Html/Login.html';
});
