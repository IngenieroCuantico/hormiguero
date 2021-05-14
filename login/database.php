<?php

$server = 'localhost';
$username = 'DarkLight';
$password = 'Juanito9119';
$database = 'Hormiguero';

try {
  $conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
} catch (PDOException $e) {
  die('Connection Failed: ' . $e->getMessage());
}

?>
