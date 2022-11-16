let art = jQuery("#article");
function loadArticle() {
    jQuery.get( "content/example_file.html", function( data ) {
        art.html(data);
    });
}
