<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $secretKey = 'YOUR_SECRET_KEY';
    $token = $_POST['g-recaptcha-response'];
    $ip = $_SERVER['REMOTE_ADDR'];

    // Verify token with Google
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$token&remoteip=$ip");
    $responseKeys = json_decode($response, true);

    if ($responseKeys["success"] && $responseKeys["score"] >= 0.5) {
        // CAPTCHA valid, proceed with sending email
        // You can forward to FormSubmit or use PHP mail()
        
        $to = "info@beepbeep.com.ar";
        $subject = "Nuevo mensaje de contacto";
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        
        $body = "Nombre: $name\nEmail: $email\nMensaje:\n$message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            header("Location: thanks.html");
        } else {
            echo "Error al enviar el mensaje.";
        }
    } else {
        // CAPTCHA failed or bot detected
        echo "Error de verificación. Por favor intenta de nuevo.";
    }
}
?>
