document.addEventListener("DOMContentLoaded", function () { // navbar'da aktif olan sayfayı vurgulamak için
    const currentPath = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });


/* API key için */
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
                                    <h5 class="card-title">${game.name}</h5>
                                    <p class="card-text">Çıkış: ${game.released}</p>
                                    <p class="card-text">Puan: ${game.rating}</p>
                                </div>
                            </div>
                        </div>
                    `;
                }
            });
    });
});
