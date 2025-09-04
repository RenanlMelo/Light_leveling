<?php
require __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

// Load environment variables
$dotenv = Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

// Allowed origins (comma-separated)
$allowedOrigins = array_map('trim', explode(',', $_ENV['ALLOWED_ORIGINS'] ?? ''));

// Check request origin
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header("Access-Control-Allow-Origin: *");
}

// CORS
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Handle OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if (in_array($origin, $allowedOrigins)) {
        header("Access-Control-Allow-Origin: $origin");
    } else {
        header("Access-Control-Allow-Origin: *");
    }
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    exit(0);
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
    exit;
}

// Get the data
$data = json_decode(file_get_contents("php://input"), true);

$name = trim($data['first'] ?? '');
$last = trim($data['last'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');
$source = trim($data['source'] ?? '');

// Validation
if (!$name || !$email || !$message || !$source) {
    http_response_code(400);
    echo json_encode(['message' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid email']);
    exit;
}

// PHPMailer
$mail = new PHPMailer(true);

try {
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['EMAIL_USERNAME'];
    $mail->Password = $_ENV['EMAIL_PASSWORD'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // SMTP DEBUG - log to file
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function ($str, $level) {
        file_put_contents(__DIR__ . '/debug_smtp.log', date('[Y-m-d H:i:s] ') . "$level: $str\n", FILE_APPEND);
    };

    $mail->setFrom($_ENV['EMAIL_USERNAME'], 'Website Form');
    $mail->addReplyTo($email, "$name $last");

    $mail->addAddress($_ENV['EMAIL_USERNAME']); 

    $mail->isHTML(true);
    $mail->Subject = "Contact form submitted - $name $last";
    $template = file_get_contents('email_template.html');

    $template = str_replace('{{name}}', htmlspecialchars("$name $last"), $template);
    $template = str_replace('{{email}}', htmlspecialchars($email), $template);
    $template = str_replace('{{source}}', htmlspecialchars($source), $template);
    $template = str_replace('{{message}}', nl2br(htmlspecialchars($message)), $template);

    $mail->Body = $template;

    if ($mail->send()) {
        file_put_contents(__DIR__ . '/email_log.txt', date('[Y-m-d H:i:s] ') . "Email sent to {$_ENV['EMAIL_USERNAME']}\n", FILE_APPEND);
        echo json_encode(['message' => 'Email successfully sent']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Failed to send email, no exception thrown.']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['message' => "Error sending email: {$mail->ErrorInfo}"]);
    // Extra log
    file_put_contents(__DIR__ . '/email_error.log', date('[Y-m-d H:i:s] ') . "Error: {$mail->ErrorInfo}\n", FILE_APPEND);
    exit;
}
