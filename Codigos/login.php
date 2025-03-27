<?php
session_start();
include_once('config.php');

if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $senha = $_POST['password'];

    // Consulta ao banco para verificar as credenciais
    $result = mysqli_query($conexao, "SELECT * FROM usuarios WHERE email = '$email' LIMIT 1");

    if (mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);

        // Verifica se a senha fornecida corresponde à senha armazenada
        if (password_verify($senha, $user['senha'])) {
            $_SESSION['user'] = $user['nome'];
            header("Location: ../Html/Site.html"); // Redireciona para uma página protegida
            exit;
        } else {
            // Se a senha estiver incorreta
            $errorMessage = "Senha incorreta";
        }
    } else {
        // Se o usuário não for encontrado
        $errorMessage = "Usuário não encontrado";
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Css/login.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="icon" type="image/x-icon" href="../imagens/icon.png">
    <script src="../js/olho.js" defer></script>

    <title>Login | TF</title>
</head>
<body>
<section>
    <form action="" method="POST">
        <h1>Login</h1>

        <div class="inputbox">
            <label for="email">Email:</label>
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" id="email" name="email" required placeholder="E-mail">
        </div>

        <div class="inputbox">
            <label for="password">Senha:</label>
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password" id="password" name="password" required placeholder="Senha">
            <img src="../imagens/eye-slash.svg" id="showPasswordBtn" onclick="togglePasswordVisibility()">
        </div>

        <!-- Mensagem de erro (visível quando houver erro) -->
        <div class="error-message <?php if(isset($errorMessage)) echo 'visible'; ?>">
                  <?php if(isset($errorMessage)) echo $errorMessage; ?> 
                  </div>
                
                <br>

        <div class="forget">
            <div class="remember">
                <input type="checkbox" id="lembreDeMim">
                <label for="lembreDeMim">Lembre de mim</label>
            </div>
            <a href="#">Esqueceu a senha</a>
        </div>
        <br>
        <input type="submit" name="login" id="login" value="Entrar">

        <br><br>

                <p><a href="formulario.php" id="naoTenhoConta">Não tem conta? Cadastre-se.</a></p>

        <p>&copy; 2024 Teen Finance. Todos os direitos reservados.</p>
    </form>
</section>
</body>
</html>
