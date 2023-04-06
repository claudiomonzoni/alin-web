<?php

// Fetching Values from URL.
$nombre = $_POST['nombre1'];
$apellido = $_POST['apellido1'];
$email = $_POST['email1'];
$tel = $_POST['tel1'];
$curso = $_POST['curso1'];
$edo = $_POST['edo1'];
$ciudad = $_POST['ciudad1'];
$desde = "esau@bezirk.mx ";

$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
// After sanitization Validation is performed
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

$subject = "Contacto desde Landing page";
// To send HTML mail, the Content-type header must be set.
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .=  'Content-Type: text/html; charset=utf-8' . "\r\n";
//$headers .= 'Content-Type: text/HTML; charset=ISO-8859-1' . "\r\n";
$headers .= 'From:' . $email. "\r\n"; // Sender's Email
$headers .= 'Cc:' . "octabio@gmail.com". "\r\n"; // Carbon copy to Sender
$template = '<div style="padding:50px; color:#000000;">
Datos del sitio.<br/>'
. 'Nombre: ' . $nombre . '<br/>'
. 'Apellido: ' . $apellido . '<br/>'
. 'Email: ' . $email . '<br/>'
. 'Teléfono: ' . $tel . '<br/>'
. 'Curso de interes: ' . $curso. '<br/>'
. 'Estado: ' . $edo . '<br/>'
. 'Ciudad: ' . $ciudad . '<br/>'
. '<br/>'
. 'Datos de contacto desde Bezirk (Landing page)  .</div>';
$sendmessage = "<div style=\"background-color:#ffffff; color:white;\">" . $template . "</div>";
// Message lines should not exceed 70 characters (PHP rule), so wrap it.
$sendmessage = wordwrap($sendmessage, 70);
// Send mail by PHP Mail Function. esau@bezirk.mx 
mail("esau@bezirk.mx", $subject, $sendmessage, $headers);
echo "Gracias " . $nombre . ", pronto un asesor se pondra en contacto contigo 😎";

} else {
echo "<span>* Email invalido *</span> / <span>* Invalid Email *</span>";
}
?>
