let art = jQuery("#article");
function loadArticle(url) {
    jQuery.get( "content/example_file.html", function( data ) {
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
     case "#1":
         loadArticle("content/example_file.html")
        break;
     case "#2":
        routerView.innerHTML = "<h1>asdasd</h1>";
        break;
     case "#3":
        routerView.innerHTML = "<h1>zzxzx</h1>";
        break;
     default:
        routerView.innerHTML = "<h1>404 - Page Not Found</h1>";
        break;
    }
}

window.addEventListener("hashchange", onRouteChanged);
window.addEventListener("load", onRouteChanged);