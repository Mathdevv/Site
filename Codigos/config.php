<?php



$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';  // Altere conforme necessário
$dbName = 'formulario-yuri';

$conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if ($conexao->connect_errno) {
    echo "Erro";
}
//else
//{
    //echo "Conexão efetuada com sucesso";
//}
?>