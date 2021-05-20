<?php

  require 'database.php';

  $message = '';

  if (!empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['nombre'])) {
    
    $sql = "INSERT INTO usuarios (nombre, email, contraseña) VALUES (:nombre, :email, :password)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $stmt->bindParam(':password', $password);

    if ($stmt->execute()) {
      $message = 'Usuario Creado Satisfactoriamente';
    } else {
      $message = 'No Se Ha Podido Crear Usuario : Comunicase Con El Administrador : IngeDarkLight42';
    }
  }
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>SignUp</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>

    <?php require 'partials/header.php' ?>

    <?php if(!empty($message)): ?>
      <p> <?= $message ?></p>
    <?php endif; ?>

    <h1>SignUp</h1>
    <span>or <a href="login.php">Login</a></span>

    <form action="signup.php" method="POST">
      <input name="nombre" type="text" placeholder="Ingrese El Nombre ">
      <input name="email" type="text" placeholder="Ingrese Su Email">
      <input name="password" type="password" placeholder="Ingrese Contraseña">
      <input name="confirm_password" type="password" placeholder="Confirme Contraseña">
      <input type="submit" value="Submit">
    </form>

  </body>
</html>
