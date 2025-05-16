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
      mesaj: ''
    }
  },
  methods: {
    handleSubmit() {
      const f = this.form;

      if (!f.ad || !f.soyad || !f.email || !f.tel || !f.cinsiyet || !f.konu || !f.mesaj) {
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
        mesaj: ''
      };
    }
  }
});