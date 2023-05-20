<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Set the recipient email address where you want to receive the messages
  $recipient = "alcorizamichael@gmail.com";

  // Set the email subject
  $email_subject = "New Message from $name";

  // Build the email content
  $email_content = "Name: $name\n";
  $email_content .= "Email: $email\n\n";
  $email_content .= "Subject: $subject\n";
  $email_content .= "Message:\n$message\n";

  // Build the email headers
  $email_headers = "From: $name <$email>\r\n";
  $email_headers .= "Reply-To: $email\r\n";

  // Attempt to send the email
  if (mail($recipient, $email_subject, $email_content, $email_headers)) {
    // Send auto-response to the user
    $auto_response_subject = "Thank you for your message";
    $auto_response_message = "Dear $name,\n\nThank you for contacting us. We have received your message and will get back to you as soon as possible.\n\nBest regards,\nThe Example Team";

    mail($email, $auto_response_subject, $auto_response_message, $email_headers);

    http_response_code(200);
    echo "Success";
  } else {
    http_response_code(500);
    echo "Error";
  }
} else {
  http_response_code(403);
  echo "Forbidden";
}
?>
