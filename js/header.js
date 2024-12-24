
window.addEventListener("load",init)

document.addEventListener('DOMContentLoaded', function () {
    var map = document.querySelector(".map-content")
    var paths = map.querySelectorAll("#map a");
    var links = map.querySelectorAll(".map-list a")

    var activeArea = function(id) {
        map.querySelectorAll('.is-active').forEach(function(item){
            item.classList.remove('is-active')
        })
        document.querySelector('#list-'+id).classList.add('is-active')
        document.querySelector('#region-'+id).classList.add('is-active')
    }

    paths.forEach(function (path) {
        path.addEventListener('mouseenter', function (e) {
            var id = this.id.replace('region-',"")
            activeArea(id)
        });
    });
    
    links.forEach(function (links) {
        links.addEventListener('mouseenter', function (e) {
            var id = this.id.replace('list-',"")
            activeArea(id)
        });
    });
});


var header;
var slideIndex = 1
var nav;

function init(){
    header = document.querySelector("header");
    header.innerHTML = `
    <link rel="stylesheet" href="styles/style.css">
    <div class="nav-mobile">
        <button id="show-nav"><img src="img/header/bars.png"></button>
        <div id="nav-btn">
            <a href="index.html">Accueil</a>
            <a href="actualite.html">Actualités</a>
            <a href="info-pratique.html">Infos Pratiques</a>
            <a href="contact.html">Nous Contacter</a>
            <a href="">Connexion</a>
        </div>
    </div>
    <a  href="index.html"><img class="logo" src="img/logo.png" alt="error logo"/></a>
    <div>
        <nav>
            <ul class="nav-bar">
                <li><a href="index.html">Accueil</a></li>
                <li><a href="actualite.html">Actualités</a></li>
                <li><a href="info-pratique.html">Infos Pratiques</a></li>
                <li><a href="contact.html">Nous Contacter</a></li>
            </ul>
        </nav>

    </div>
        <a class="connexion" href=""><button>Connexion</button></a> `;

    let footer = document.querySelector("footer");
    if (footer != null){
    footer.innerHTML = `
        <div class="container_box_footer">
            <div class="container_footer">
                <div class="footer_info">
                    <p class="h1">
                        Communauté d'Agglomération GRAND SUD CARAIBE
                    </p>
                    <p class="h2">
                    Rue Bébian - 97100 Basse Terre
                    </p>
                    <p class="h2">
                        Horaires d'ouverture : Du lundi au vendredi<br> 
                        de 7h30 à 13h00 et de 14h30 à 17h
                    </p>
                </div>

                <div class="footer_social">
                    <p class="h1">
                        Retrouvez-nous sur les réseaux
                    </p>
                    <div class="footer_social-img">
                        <a href=""><img src="img/accueil/instagram.png"></a>
                        <a href=""><img src="img/accueil/facebook.png"></a>
                        <a href=""><img src="img/accueil/twitter.png"></a>
                        <a href=""><img src="img/accueil/youtube.png"></a>
                        <a href=""><img src="img/accueil/linkedin.png"></a>
                        <a href=""><img src="img/accueil/tiktok.png"></a>

                    </div>
                </div>

                <div class="footer_link">
                    <p class="h1">
                        Autres liens
                    </p>
                    <p class="h2">
                        <a href="">Presse</a><br> 
                        <a href="">Marchés publics</a><br> 
                        <a href="">Vous êtes une mairie</a><br> 
                        <a href="">Conseil communautaire et actes pris par l'Agglo</a><br> 
                        <a href="">Ils soutiennent nos projets</a><br> 
                    </p>
                </div>
            </div>
        </div>
        <div class="copyright_box">
            <p class="h3">
                © Grand Sud Caraibe
            </p>
        </div>`
    }

    var url = window.location.href;
    var segments = url.split('/');
    var currentPage = segments[segments.length - 1];

    if (currentPage == "index.html"){showSlides(slideIndex);InitSlideInterval();}

    nav = document.getElementById("show-nav");
    nav.addEventListener("click",showNavBar)

}



function showNavBar() {
    let x = document.getElementById("nav-btn");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}



function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function InitSlideInterval(){
setInterval(function() {
    showSlides(slideIndex);
    slideIndex++;
}, 3000);
}