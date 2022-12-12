<?php 
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $visitor_email = $_POST['email'];
        $message = $_POST['message'];

        $email_subject = "Contact Form Submission";
        $email_body = "You have received a new message from $name.\n".
                        "Their email address is: $visitor_email.\n".
                        "This is the message:\n $message".

        $to = "maritdevries1@live.nl";

        mail($to,$email_subject,$email_body);
    }
?>