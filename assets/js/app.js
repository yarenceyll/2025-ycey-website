document.addEventListener("DOMContentLoaded", function() {
    // Navbar aktif link ayarı
    const currentPath = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === currentPath);
    });

    // Slider tıklama özelliği (TÜM SAYFALARDA ÇALIŞIR)
    const setupSliderHighlights = () => {
        const carouselLinks = document.querySelectorAll('.carousel-item a[href^="#"]');
        
        carouselLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                
                // Önceki vurguları temizle
                document.querySelectorAll('.highlighted').forEach(el => {
                    el.classList.remove('highlighted');
                });
                
                // Yeni bölümü vurgula
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const heading = targetSection.querySelector('h2');
                    if (heading) {
                        heading.classList.add('highlighted');
                        
                        // Sayfayı kaydır
                        const navbarHeight = document.querySelector('.navbar').offsetHeight;
                        window.scrollTo({
                            top: targetSection.offsetTop - navbarHeight - 20,
                            behavior: 'smooth'
                        });
                        
                        // 2 saniye sonra vurguyu kaldır
                        setTimeout(() => {
                            heading.classList.remove('highlighted');
                        }, 2000);
                    }
                }
            });
        });
    };
    setupSliderHighlights();

    // URL'de hash varsa (sehrim.html için)
    if (window.location.pathname.includes('sehrim.html') && window.location.hash) {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
            const heading = targetSection.querySelector('h2');
            if (heading) {
                heading.classList.add('highlighted');
                setTimeout(() => {
                    heading.classList.remove('highlighted');
                }, 3000);
            }
        }
    }

    //Oyun API
  const apiKey = "f449c7ffd2a048fa96e4d4302e7c0839";
        const selectedGames = [
        "Final Fantasy VII",
        "Crisis Core: Final Fantasy VII - Reunion",
        "Final Fantasy XV",
        "Persona 5 Royal",
        "Persona 3 Reload",
        "Metal Gear Rising: Revengeance",
        "Metal Gear Solid 3: Snake Eater",
        "Devil May Cry 5",
        "Devil May Cry 4",
    ];

    const gamesDiv = document.getElementById("games");

    selectedGames.forEach(gameName => {
        fetch(`https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(gameName)}`)
            .then(res => res.json())
            .then(data => {
                const game = data.results[0]; // ilk sonuç en alakalı
                if (game) {
                    gamesDiv.innerHTML += `
                        <div class="col-md-4">
                            <div class="card bg-dark text-white h-100">
                                <img src="${game.background_image}" class="card-img-top" alt="${game.name}">
                                <div class="card-body">
                                    <h6 class="card-title">${game.name}</h6>
                                    <p class="card-text">Çıkış: ${game.released}</p>
                                    <p class="card-text">Puan: ${game.rating}</p>
                                </div>
                            </div>  
                        </div>
                    `;
                }
            })
    });
});