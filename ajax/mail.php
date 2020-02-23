<?php
 $test = $_POST['name'];
 $phone = $_POST['phone'];

 $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";
 $headers = "Form: $email\r\n\Replay-to: $email\r\n\Content-type: text/html; charset=utf-8\r\n";
 
 $success = mail("servistransavto@list.ru", $subject, $masseage, $headers);
 echo $success;
?>