<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // Email format kontrolü
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: login.html?error=invalid_email");
        exit();
    }
    
    // Sakarya Üniversitesi email kontrolü
    if (!email.includes('@ogr.sakarya.edu.tr')) {
        header("Location: login.html?error=invalid_sakarya_email");
        exit();
    }
    
    // Şifre kontrolü (emailin kullanıcı adı kısmı)
    $username = explode('@', $email)[0];
    if ($password !== $username) {
        header("Location: login.html?error=wrong_password");
        exit();
    }
    
    // Başarılı giriş
    echo "<!DOCTYPE html>
    <html lang='tr'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Hoşgeldiniz</title>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' rel='stylesheet'>
    </head>
    <body class='bg-dark text-white'>
        <div class='container mt-5'>
            <div class='row justify-content-center'>
                <div class='col-md-6 text-center'>
                    <h1>Hoşgeldiniz $username</h1>
                    <p class='mt-3'>Giriş işlemi başarılı!</p>
                    <a href='index.html' class='btn btn-success mt-3'>Ana Sayfaya Dön</a>
                </div>
            </div>
        </div>
    </body>
    </html>";
}
?>