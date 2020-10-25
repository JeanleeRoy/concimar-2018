<?php
$destino="jeanlee-barreto@hotmail.com";
$nombre=$_POST["Nombre"];
$correo=$_POST["Correo"];
$asunto=$_POST["Asunto"];
$telefono=$_POST["Telefono"];
$mensaje=$_POST["Mensaje"];
$contenido= "Nombre: ".$nombre."\nCorreo: ".$correo."\nTeléfono: ".$telefono."\nMensaje: ".$mensaje;

$headers =  'From:'.$_POST["Correo"]."\n".
            'Replay-To:'.$_POST["Correo"]."\n".

mail($destino,$asunto,utf8_decode($contenido));
header("Location:index.html")
?>