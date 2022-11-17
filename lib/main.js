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
        case "#1":
            loadArticle("content/example_file.html")
            break;
        case "#2":
            loadArticle("content/case_list.html")
            break;
        case "#3":
            loadArticle("content/post_list.html")
            break;
        case "#entry_1":
            loadArticle("content/posts/1.html")
            break;
        case "#entry_2":
            loadArticle("content/posts/2.html")
            break;
        case "#case_1":
            loadArticle("content/case/1.html")
            break;
        case "#case_2":
            loadArticle("content/case/2.html")
            break;
        default:
            routerView.innerHTML = "<h1>404 - Page Not Found</h1>";
            break;
    }
}

window.addEventListener("hashchange", onRouteChanged);
window.addEventListener("load", onRouteChanged);