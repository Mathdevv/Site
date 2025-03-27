<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard | GN</title>
</head>
<body>
    <h1>Bem-vindo, <?php echo $_SESSION['user']; ?>!</h1>
    <a href="logout.php">Sair</a>
</body>
</html>