
<form id="form1" enctype="multipart/form-data" method="post" action="recepcion.php">
    <label>Imagen
        <input id="campofotografia" name="campofotografia" type="file" />
    </label>
    <input id="enviar" name="enviar" type="submit" value="Enviar" />
</form>

<?php
require_once 'funciones.php';

if(!empty($_POST)){
      if (subir_fichero('imagenes','campofotografia'))
         echo 'Archivo recibido correctamente';
}
?>