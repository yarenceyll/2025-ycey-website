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

    <div class="card bg-dark text-white p-4 rounded">
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
    $yas = temizle($_POST["yas"] ?? "");
    $tarih = temizle($_POST["tarih"] ?? "");
    $saat = temizle($_POST["saat"] ?? "");
    $renk = temizle($_POST["renk"] ?? "");
    $memnuniyet = temizle($_POST["memnuniyet"] ?? "");

    $facebook = isset($_POST['facebook']) ? 'Evet' : 'Hayır';
    $twitter = isset($_POST['twitter']) ? 'Evet' : 'Hayır';
    $instagram = isset($_POST['instagram']) ? 'Evet' : 'Hayır';
    $linkedin = isset($_POST['linkedin']) ? 'Evet' : 'Hayır';
    $whatsapp = isset($_POST['whatsapp']) ? 'Evet' : 'Hayır';

    $dosyaAdi = "";
    if (isset($_FILES['dosya']) && $_FILES['dosya']['error'] == 0) {
      $dosyaTmp = $_FILES['dosya']['tmp_name'];
      $dosyaAdi = basename($_FILES['dosya']['name']);
      $uploadDir = "uploads/";

      if (!is_dir($uploadDir)) {
          mkdir($uploadDir, 0755, true);
      }

      $uploadFile = $uploadDir . $dosyaAdi;

      if (!move_uploaded_file($dosyaTmp, $uploadFile)) {
          $dosyaAdi = "Dosya yüklenemedi.";
      }
    }
    ?>

    <ul class="list-group list-group-flush">
      <li class="list-group-item bg-dark text-white"><strong>Ad:</strong> <?php echo $ad; ?></li>
      <li class="list-group-item bg-dark text-white"><strong>Soyad:</strong> <?php echo $soyad; ?></li>
      <li class="list-group-item bg-dark text-white"><strong>E-posta:</strong> <?php echo $email; ?></li>
      <li class="list-group-item bg-dark text-white"><strong>Telefon:</strong> <?php echo $tel; ?></li>
      <li class="list-group-item bg-dark text-white"><strong>Cinsiyet:</strong> <?php echo $cinsiyet; ?></li>
      <li class="list-group-item bg-dark text-white"><strong>Konu:</strong> <?php echo $konu; ?></li>
      <li class="list-group-item bg-dark text-white"><strong>Mesaj:</strong><br /> <?php echo nl2br($mesaj); ?></li>

      <li class="list-group-item bg-dark text-white"><strong>Yaş:</strong> <?php echo $yas; ?></li>
      <li class="list-group-item bg-dark text-white"><strong>Doğum Tarihi:</strong> <?php echo $tarih; ?></li>
      <li class="list-group-item bg-dark text-white"><strong>Randevu Saati:</strong> <?php echo $saat; ?></li>
      <li class="list-group-item bg-dark text-white"><strong>Seçilen Renk:</strong> <span style="background-color: <?php echo $renk; ?>; padding: 0 15px;">&nbsp;</span> <?php echo $renk; ?></li>
      <li class="list-group-item bg-dark text-white"><strong>Memnuniyetiniz:</strong> <?php echo $memnuniyet; ?></li>

      <li class="list-group-item bg-dark text-white"><strong>Facebook:</strong> <?php echo $facebook; ?></li>
      <li class="list-group-item bg-dark text-white"><strong>Twitter:</strong> <?php echo $twitter; ?></li>
      <li class="list-group-item bg-dark text-white"><strong>Instagram:</strong> <?php echo $instagram; ?></li>
      <li class="list-group-item bg-dark text-white"><strong>LinkedIn:</strong> <?php echo $linkedin; ?></li>
      <li class="list-group-item bg-dark text-white"><strong>WhatsApp:</strong> <?php echo $whatsapp; ?></li>

        <?php if($dosyaAdi): ?>
          <li class="list-group-item bg-dark text-white"><strong>Yüklenen Dosya:</strong> <?php echo htmlspecialchars($dosyaAdi); ?></li>
        <?php endif; ?>
      </ul>

    <div class="mt-4 text-center">
      <a href="iletisim.html" class="btn btn-light">Geri Dön</a>
    </div>
  </div>
</div>
