<?php
session_start();

$conn = mysqli_connect(
  'localhost',
  'DarkLight',
  'Juanito9119',
  'php_mysql_crud'
) or die(mysqli_erro($mysqli));

?>
