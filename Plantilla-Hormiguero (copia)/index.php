<?php
  session_start();

  require 'database.php';

  if (isset($_SESSION['user_id'])) {
    $records = $conn->prepare('SELECT id, email, password FROM users WHERE id = :id');
    $records->bindParam(':id', $_SESSION['user_id']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    $user = null;

    if (count($results) > 0) {
      $user = $results;
    }
  }
?>
    
    
    <?php require 'include/header.php' ?>

    <?php if(!empty($user)): ?>
      <br> Bienvenido <?= $user['email']; ?>
      <br>Ha Iniciado Sesion Correctamente
      <a href="logout.php">
        Cerrar Sesion
      </a>
    <?php else: ?>
      <h1>Por favor ingresar o registrarse </h1>
      <a href="index1.php" >ir a principal</a>

      <a href="login.php">Ingresar</a> o
      <a href="signup.php">Inscribirse</a>
    <?php endif; ?>
 
    <?php require 'include/footer.php' ?>