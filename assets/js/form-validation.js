new Vue({
  el: '#app',
  data: {
    form: {
      ad: '',
      soyad: '',
      email: '',
      tel: '',
      cinsiyet: '',
      konu: '',
      mesaj: '',
      dosya: '',
      yas: '',
      tarih: '',
      renk: '',
      memnuniyet: '',
      facebook: false,
      twitter: false,
      instagram: false,
      linkedin: false,
      whatsapp: false,
      saat: ''
    }
  },
  methods: {
    handleSubmit() {
      const f = this.form;

      if (
          !f.ad || !f.soyad || !f.email || !f.tel || !f.cinsiyet || !f.konu || !f.mesaj ||
          !f.yas || !f.tarih || !f.saat || !f.renk || !f.memnuniyet
        ) {
          alert("Tüm alanları doldurmalısınız.");
          return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(f.email)) {
        alert("Geçerli bir e-posta adresi giriniz.");
        return;
      }

      if (!/^\d+$/.test(f.tel)) {
        alert("Telefon sadece rakam olmalıdır.");
        return;
      }

      // Her şey doğruysa formu gönder
      this.$el.querySelector("form").submit();
    },

    temizle() {
      this.form = {
        ad: '',
        soyad: '',
        email: '',
        tel: '',
        cinsiyet: '',
        konu: '',
        mesaj: '',
        dosya: '',
        yas: '',
        tarih: '',
        renk: '',
        memnuniyet: 0,
        facebook: false,
        twitter: false,
        instagram: false,
        linkedin: false,
        whatsapp: false,
        saat: ''
      };
    }
  }
});




function jsIleGonder() {
  const form = document.querySelector("form");

  const ad = form.ad.value.trim();
  const soyad = form.soyad.value.trim();
  const email = form.email.value.trim();
  const tel = form.tel.value.trim();
  const cinsiyet = form.cinsiyet.value;
  const konu = form.konu.value;
  const mesaj = form.mesaj.value.trim();
  const yas = form.yas.value.trim();
  const tarih = form.tarih.value;
  const saat = form.saat.value;
  const renk = form.renk.value;
  const memnuniyet = form.memnuniyet.value;

  // Boş alan kontrolü
  if (
    !ad || !soyad || !email || !tel || !cinsiyet || !konu || !mesaj ||
    !yas || !tarih || !saat || !renk || !memnuniyet
  ) {
    alert("Tüm alanları doldurmalısınız!");
    return;
  }

  // Email formatı
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Geçerli bir e-posta adresi giriniz.");
    return;
  }

  // Telefon sadece rakam
  if (!/^\d+$/.test(tel)) {
    alert("Telefon sadece rakamlardan oluşmalıdır.");
    return;
  }

  // Yaş pozitif sayı mı kontrolü
  if (isNaN(yas) || Number(yas) <= 0) {
    alert("Geçerli bir yaş giriniz.");
    return;
  }

  // Form geçerli, gönder
  form.submit();
}
