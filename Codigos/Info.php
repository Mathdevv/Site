<?php
session_start();
include_once('config.php');

// Verifica se o usuário está logado
if (isset($_SESSION['user'])) {
    $nome = $_SESSION['user']; // O nome do usuário logado
    $result = mysqli_query($conexao, "SELECT email, nome FROM usuarios WHERE nome = '$nome' LIMIT 1");

    if (mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);
        echo json_encode($user); // Retorna os dados em formato JSON
    } else {
        echo json_encode(["error" => "Usuário não encontrado"]);
    }
} else {
    echo json_encode(["error" => "Nenhum usuário logado"]);
}
?>