document.getElementById('loginForm').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Sakarya Üniversitesi email format kontrolü
    if (!email.endsWith('@ogr.sakarya.edu.tr')) {
        alert('Lütfen geçerli bir Sakarya Üniversitesi email adresi giriniz!');
        e.preventDefault();
        return;
    }
    
    // Şifrenin emailin kullanıcı kısmıyla aynı olup olmadığını kontrol et
    const username = email.split('@')[0];
    if (password !== username) {
        alert('Şifreniz öğrenci numaranız olmalıdır!');
        e.preventDefault();
    }
});




    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get('error');
    
    if (error) {
        let mesaj = '';
        if (error === 'invalid_email') mesaj = 'Geçerli bir email adresi giriniz!';
        else if (error === 'invalid_sakarya_email') mesaj = 'Sadece Sakarya Üniversitesi mail adresi kabul edilir!';
        else if (error === 'wrong_password') mesaj = 'Şifre öğrenci numaranız olmalıdır!';
        
        if (mesaj) alert(mesaj);
    }
