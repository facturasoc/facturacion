<?php
$venta = $_POST['venta'];
$nombre = $_POST['social'];
$mail = $_POST['mail'];
$rfc = $_POST['clave'];
$domicilio = $_POST['domi'];
$pago = $_POST['metodo'];
$cfdi = $_POST['cfdi'];




$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";






echo $mensaje .= "Venta #:  " . $venta . "\r\n"."\n"."\n"."\n"."\n";
echo $mensaje .= "Razon Social:  " . $nombre . "\r\n"."\n"."\n"."\n"."\n";
echo $mensaje .= "RFC:  " . $rfc . " \r\n"."\n"."\n"."\n"."\n";
echo $mensaje .= "Domicilio Fiscal:  " . $domicilio . " \r\n"."\n"."\n"."\n"."\n";
echo $mensaje .= "Uso de CFDI:   "  . $cfdi . " \r\n"."\n"."\n"."\n"."\n";
echo $mensaje .= "Método de Pago:   "  . $pago . " \r\n"."\n"."\n"."\n"."\n";
echo $mensaje .= "Correo Eelectrónico:  " . $mail . " \r\n"."\n"."\n"."\n"."\n";
echo $mensaje .= "Enviado el  " . date('d/m/Y', time());
echo $para = 'alfredo@asis.com.mx';
echo $asunto = 'Solicitud de Factura OnlyConnect';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:gracias.html");
?>