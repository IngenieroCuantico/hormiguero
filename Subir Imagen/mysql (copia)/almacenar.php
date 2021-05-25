<?php 
$link = mysql_connect('localhost', 'DarkLight', 'Juanito9119');
if (!$link)
   die('Error al conectarse con MySQL: ' . mysql_error().' <br>Número del error: '.mysql_errno());
if (! @mysql_select_db("Hormiguero",$link)){
   echo "No se pudo conectar correctamente con la Base de datos";
   exit();
}
?>
