<?php
if (!$_POST) {
    header('Location:/');
} else {
    $mail_to = "tatjana.stelmahh@gmail.com";
    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $profession = $_POST['profession'];
    $message = $_POST['message'];

    if (isset($_POST['email'])) {
        $subject = "Email from thingsicando.eu";

        $msg = "Name: " . $name . "\r\n<br>"
            . "Email: " . $email . "\r\n<br>"
            . "Profession: " . $profession . "\r\n<br>"
            . "Message: " . $message . "\r\n<br>";

        $headers = 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/html; charset=UTF-8' . "\r\n";
        $headers .= "From: client@thingsicando.eu\r\n";
        $headers .= "Reply-To: client@thingsicando.eu\r\n";
        $headers .= "Return-Path: client@thingsicando.eu\r\n";
        $headers .= "CC: \r\n";
        $headers .= "BCC: \r\n";

        mail($mail_to, $subject, $msg, $headers);
        echo "success";
    }
}
