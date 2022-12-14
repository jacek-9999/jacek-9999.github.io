let art = jQuery("#article");
function loadArticle(url) {
    jQuery.get( url, function( data ) {
        art.html(data);
    });
}

function onRouteChanged() {
    const hash = window.location.hash;
    const routerView = document.getElementById("article");

    if (!(routerView instanceof HTMLElement)) {
        throw new ReferenceError("No router view element available for rendering");
    }

    switch (hash) {
        case "#about":
            loadArticle("content/about.html")
            break;
        case "#case_studies":
            loadArticle("content/case_list.html")
            break;
        case "#glupie_wymowki":
            loadArticle("content/case/glupie_wymowki_aby_nie_zrozumiec_klienta.html")
            break;
        case "#czy_ddd_moze_sie_przydac":
            loadArticle("content/case/czy_ddd_moze_sie_przydac.html")
            break;
        case "#kiedy_orm_sie_sprawdza":
            loadArticle("content/case/kiedy_orm_sie_sprawdza.html")
            break;
        case "#testy_vs_stary_projekt":
            loadArticle("content/case/testy_vs_stary_projekt.html")
            break;
        case "#kasowanie_kodu":
            loadArticle("content/case/kasowanie_kodu.html")
            break;
        case "#pulapka_technikaliow":
            loadArticle("content/case/pulapka_technikaliow.html")
            break;
        case "#contact":
            loadArticle("content/contact.html")
            break;
        default:
            window.location.hash = "#about";
            break;
    }
}

window.addEventListener("hashchange", onRouteChanged);
window.addEventListener("load", onRouteChanged);