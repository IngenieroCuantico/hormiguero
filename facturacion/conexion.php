<?php 
	
	$host = 'localhost';
	$user = 'DarkLight';
	$password = 'Juanito9119';
	$db = 'facturacion';

	$conection = @mysqli_connect($host,$user,$password,$db);

	
	if(!$conection){
		echo "Error en la conexión";
	}

?>