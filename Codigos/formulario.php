<?php
include_once('config.php');

$errorMessage = ""; // Inicializar a variável

if (isset($_POST['submit'])) {
    $nome = $_POST['nome'] ?? '';
    $email = $_POST['email'] ?? '';
    $senha = $_POST['password'] ?? null;


    // Verifica se a senha foi preenchida
    if (empty($senha)) {
        die("Erro: O campo senha é obrigatório.");
    }

    // Gerar hash da senha
    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

    // Verificar se o email já existe
    $stmt = $conexao->prepare("SELECT * FROM usuarios WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $errorMessage = "O email já está em uso. Tente outro.";
    } else {
        // Inserir no banco
        $stmt = $conexao->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $nome, $email, $senhaHash);

        if ($stmt->execute()) {
            header("Location: login.php");
            exit;
        } else {
            $errorMessage = "Erro ao cadastrar: " . $stmt->error;
        }
    }

    $stmt->close();
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
    <title>Cadastro | TF</title>
</head>
<body>
<section class="sessao" id="signup-container">
<form action="formulario.php" method="POST"> 
            <h1>Cadastro</h1>
                <div class="inputbox">
                    <label for="nome">Criar Nome:</label>
                    <input type="text" id="nome" name="nome" placeholder="Nome" required >
                </div>
                <div class="inputbox">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="E-mail" required >
                </div>
                <div class="inputbox">
                <label for="password">Senha:</label>
                
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" id="password" name="password" required placeholder="Senha">

                <img src="../imagens/eye-slash.svg" id="showPasswordBtn" onclick="togglePasswordVisibility()">
                </div>

                <?php if (!empty($errorMessage)) : ?>
    <div style="color: red; margin-bottom: 15px; margin-left: 30px;">
        <?php echo $errorMessage; ?>
    </div>
<?php endif; ?>


                <input type="submit" name="submit" id="submit" value="Enviar">
                <br><br>
                
                <p><a href="login.php" id="jaTenhoConta">Já tenho conta? Faça login.</a></p>

            <p>&copy; 2024 Teen Finance. Todos os direitos reservados.</p>
            </form>
        </section>
</body>
</html>
