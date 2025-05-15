<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Bilgileri</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <div class="container my-5">
    <h2 class="text-center text-light mb-4">Gönderdiğiniz Bilgiler</h2>

    <div class="card bg-dark text-white p-4">
      <?php
        function temizle($data) {
          return htmlspecialchars(stripslashes(trim($data)));
        }

        $ad = temizle($_POST["ad"] ?? "");
        $soyad = temizle($_POST["soyad"] ?? "");
        $email = temizle($_POST["email"] ?? "");
        $tel = temizle($_POST["tel"] ?? "");
        $cinsiyet = temizle($_POST["cinsiyet"] ?? "");
        $konu = temizle($_POST["konu"] ?? "");
        $mesaj = temizle($_POST["mesaj"] ?? "");
      ?>

      <ul class="list-group list-group-flush">
        <li class="list-group-item bg-dark text-white"><strong>Ad:</strong> <?php echo $ad; ?></li>
        <li class="list-group-item bg-dark text-white"><strong>Soyad:</strong> <?php echo $soyad; ?></li>
        <li class="list-group-item bg-dark text-white"><strong>E-posta:</strong> <?php echo $email; ?></li>
        <li class="list-group-item bg-dark text-white"><strong>Telefon:</strong> <?php echo $tel; ?></li>
        <li class="list-group-item bg-dark text-white"><strong>Cinsiyet:</strong> <?php echo $cinsiyet; ?></li>
        <li class="list-group-item bg-dark text-white"><strong>Konu:</strong> <?php echo $konu; ?></li>
        <li class="list-group-item bg-dark text-white"><strong>Mesaj:</strong><br> <?php echo nl2br($mesaj); ?></li>
      </ul>

      <div class="mt-4 text-center">
        <a href="iletisim.html" class="btn btn-secondary">Geri Dön</a>
      </div>
    </div>
  </div>
</body>
</html>
